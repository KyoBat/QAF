#!/usr/bin/env node

/**
 * TahaLearn — Facebook Daily Post Publisher
 *
 * Publishes one post per day to a Facebook Page from a pre-built bank.
 * Supports 3 languages (fr, ar, en) — configurable via FACEBOOK_POST_LANG.
 *
 * Usage:
 *   node scripts/facebook-daily-post.mjs              # publish next post
 *   node scripts/facebook-daily-post.mjs --preview     # preview without publishing
 *   node scripts/facebook-daily-post.mjs --lang ar     # publish in Arabic
 *   node scripts/facebook-daily-post.mjs --reset       # reset published state
 *
 * Environment variables (in .env.local):
 *   FACEBOOK_PAGE_ID        — Your Facebook Page ID
 *   FACEBOOK_PAGE_TOKEN     — Long-lived Page Access Token
 *   FACEBOOK_POST_LANG      — Default language: fr | ar | en (default: fr)
 *
 * Cron setup (daily at 20:00):
 *   0 20 * * * cd /path/to/rabbi-zidni-ilma && node scripts/facebook-daily-post.mjs >> logs/facebook-posts.log 2>&1
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_BANK_PATH = join(__dirname, 'posts-bank.json');
const STATE_PATH = join(__dirname, 'posts-state.json');

// ---------------------------------------------------------------------------
// Parse CLI args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const isPreview = args.includes('--preview');
const isReset = args.includes('--reset');
const langIndex = args.indexOf('--lang');
const cliLang = langIndex !== -1 ? args[langIndex + 1] : null;

// ---------------------------------------------------------------------------
// Load environment from .env.local (minimal parser, no dependencies)
// ---------------------------------------------------------------------------
function loadEnv() {
  const envPath = join(__dirname, '..', '.env.local');
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, 'utf-8').split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnv();

const PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const PAGE_TOKEN = process.env.FACEBOOK_PAGE_TOKEN;
const LANG = cliLang || process.env.FACEBOOK_POST_LANG || 'fr';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.tahalearn.com';
const GRAPH_API_VERSION = 'v21.0';

// ---------------------------------------------------------------------------
// State management
// ---------------------------------------------------------------------------
function loadState() {
  if (!existsSync(STATE_PATH)) {
    return { publishedIds: [], lastPublishedAt: null };
  }
  return JSON.parse(readFileSync(STATE_PATH, 'utf-8'));
}

function saveState(state) {
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), 'utf-8');
}

// ---------------------------------------------------------------------------
// Posts bank
// ---------------------------------------------------------------------------
function loadPosts() {
  return JSON.parse(readFileSync(POSTS_BANK_PATH, 'utf-8'));
}

function getNextPost(posts, state) {
  const unpublished = posts.filter((p) => !state.publishedIds.includes(p.id));
  if (unpublished.length === 0) {
    // All posts published — reset cycle
    console.log('♻️  All posts published. Starting new cycle.');
    state.publishedIds = [];
    return posts[0];
  }
  return unpublished[0];
}

// ---------------------------------------------------------------------------
// Facebook Graph API publisher
// ---------------------------------------------------------------------------
async function publishToFacebook(message) {
  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${encodeURIComponent(PAGE_ID)}/feed`;

  const body = new URLSearchParams();
  body.append('message', message);
  body.append('link', SITE_URL);
  body.append('access_token', PAGE_TOKEN);

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Facebook API error: ${JSON.stringify(data.error || data)}`);
  }

  return data;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
async function main() {
  // Reset state if requested
  if (isReset) {
    saveState({ publishedIds: [], lastPublishedAt: null });
    console.log('✅ State reset. All posts will be republished.');
    return;
  }

  const posts = loadPosts();
  const state = loadState();

  // Check if already published today
  if (state.lastPublishedAt) {
    const lastDate = new Date(state.lastPublishedAt).toDateString();
    const today = new Date().toDateString();
    if (lastDate === today && !isPreview) {
      console.log('⏭️  Already published today. Skipping.');
      return;
    }
  }

  const post = getNextPost(posts, state);
  if (!post) {
    console.log('❌ No posts available.');
    return;
  }

  const validLangs = ['fr', 'ar', 'en'];
  const lang = validLangs.includes(LANG) ? LANG : 'fr';
  const message = post[lang];

  if (!message) {
    console.error(`❌ Post "${post.id}" has no content for language "${lang}".`);
    process.exit(1);
  }

  console.log('─'.repeat(60));
  console.log(`📋 Post: ${post.id} (${post.theme})`);
  console.log(`🌐 Language: ${lang}`);
  console.log(`📅 Date: ${new Date().toISOString()}`);
  console.log('─'.repeat(60));
  console.log(message);
  console.log('─'.repeat(60));

  if (isPreview) {
    console.log('\n👁️  Mode aperçu — rien n\'a été publié.');
    console.log(`📊 Posts restants: ${posts.length - state.publishedIds.length - 1}/${posts.length}`);
    return;
  }

  // Validate config
  if (!PAGE_ID || !PAGE_TOKEN) {
    console.error('\n❌ Variables manquantes dans .env.local :');
    if (!PAGE_ID) console.error('   → FACEBOOK_PAGE_ID');
    if (!PAGE_TOKEN) console.error('   → FACEBOOK_PAGE_TOKEN');
    console.error('\n📖 Voir le guide : scripts/FACEBOOK-SETUP.md');
    process.exit(1);
  }

  try {
    const result = await publishToFacebook(message);
    console.log(`\n✅ Publié avec succès !`);
    console.log(`🔗 Post ID: ${result.id}`);

    // Update state
    state.publishedIds.push(post.id);
    state.lastPublishedAt = new Date().toISOString();
    saveState(state);

    console.log(`📊 Posts restants: ${posts.length - state.publishedIds.length}/${posts.length}`);
  } catch (error) {
    console.error(`\n❌ Erreur de publication: ${error.message}`);
    process.exit(1);
  }
}

main();
