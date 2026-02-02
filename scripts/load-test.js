#!/usr/bin/env node

/**
 * Load Testing Script for TahaLearn API
 * Tests the newsletter API endpoint with rate limiting
 */

const baseUrl = process.env.TEST_URL || 'http://localhost:3000';

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(color, message) {
  console.log(`${color}${message}${colors.reset}`);
}

/**
 * Test the newsletter API endpoint
 */
async function testNewsletterEndpoint() {
  log(colors.cyan, '\n🧪 Testing Newsletter API with Rate Limiting\n');
  
  const results = {
    total: 0,
    success: 0,
    rateLimited: 0,
    errors: 0,
    responseTimes: [],
  };

  // Send 10 requests rapidly (should trigger rate limit after 3)
  for (let i = 1; i <= 10; i++) {
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${baseUrl}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: `test${i}@example.com`,
        }),
      });

      const data = await response.json();
      const responseTime = Date.now() - startTime;
      results.responseTimes.push(responseTime);
      results.total++;

      if (response.status === 429) {
        results.rateLimited++;
        log(colors.yellow, `  Request ${i}: ⚠️  Rate limited (429) - ${responseTime}ms`);
        log(colors.yellow, `    Message: ${data.error}`);
        if (data.retryAfter) {
          log(colors.yellow, `    Retry after: ${data.retryAfter}s`);
        }
      } else if (response.ok) {
        results.success++;
        log(colors.green, `  Request ${i}: ✅ Success (${response.status}) - ${responseTime}ms`);
      } else {
        results.errors++;
        log(colors.red, `  Request ${i}: ❌ Error (${response.status}) - ${responseTime}ms`);
        log(colors.red, `    Message: ${data.error || 'Unknown error'}`);
      }

      // Check rate limit headers
      const rateLimitHeaders = {
        limit: response.headers.get('X-RateLimit-Limit'),
        remaining: response.headers.get('X-RateLimit-Remaining'),
        reset: response.headers.get('X-RateLimit-Reset'),
        retryAfter: response.headers.get('Retry-After'),
      };

      if (rateLimitHeaders.limit) {
        console.log(`    Rate Limit: ${rateLimitHeaders.remaining}/${rateLimitHeaders.limit} remaining`);
      }

    } catch (error) {
      results.errors++;
      results.total++;
      log(colors.red, `  Request ${i}: ❌ Network Error - ${error.message}`);
    }

    // Small delay between requests
    await new Promise(resolve => setTimeout(resolve, 100));
  }

  // Calculate statistics
  const avgResponseTime = results.responseTimes.length > 0
    ? Math.round(results.responseTimes.reduce((a, b) => a + b, 0) / results.responseTimes.length)
    : 0;
  
  const minResponseTime = results.responseTimes.length > 0
    ? Math.min(...results.responseTimes)
    : 0;
  
  const maxResponseTime = results.responseTimes.length > 0
    ? Math.max(...results.responseTimes)
    : 0;

  // Print results
  log(colors.cyan, '\n📊 Load Test Results:\n');
  console.log(`  Total Requests:     ${results.total}`);
  log(colors.green, `  Successful:         ${results.success}`);
  log(colors.yellow, `  Rate Limited:       ${results.rateLimited}`);
  log(colors.red, `  Errors:             ${results.errors}`);
  console.log(`\n  Response Times:`);
  console.log(`    Average:          ${avgResponseTime}ms`);
  console.log(`    Min:              ${minResponseTime}ms`);
  console.log(`    Max:              ${maxResponseTime}ms`);

  // Verify rate limiting is working
  log(colors.cyan, '\n✅ Rate Limiting Status:\n');
  if (results.rateLimited >= 7) {
    log(colors.green, '  ✅ Rate limiting is working correctly!');
    log(colors.green, `  ✅ ${results.rateLimited} requests were rate limited (expected 7/10)`);
  } else if (results.rateLimited > 0) {
    log(colors.yellow, `  ⚠️  Rate limiting partially working (${results.rateLimited}/10 limited)`);
  } else {
    log(colors.red, '  ❌ Rate limiting is NOT working! All requests succeeded.');
  }

  return results;
}

/**
 * Test homepage loading
 */
async function testHomepage() {
  log(colors.cyan, '\n🏠 Testing Homepage Load Time\n');
  
  const startTime = Date.now();
  
  try {
    const response = await fetch(baseUrl);
    const loadTime = Date.now() - startTime;
    
    if (response.ok) {
      log(colors.green, `  ✅ Homepage loaded successfully in ${loadTime}ms`);
      
      if (loadTime < 1000) {
        log(colors.green, '  ⚡ Excellent performance!');
      } else if (loadTime < 3000) {
        log(colors.yellow, '  ⚠️  Acceptable performance');
      } else {
        log(colors.red, '  ❌ Slow performance - optimization needed');
      }
    } else {
      log(colors.red, `  ❌ Failed to load homepage (${response.status})`);
    }
    
    return loadTime;
  } catch (error) {
    log(colors.red, `  ❌ Network Error: ${error.message}`);
    return null;
  }
}

/**
 * Test courses page loading
 */
async function testCoursesPage() {
  log(colors.cyan, '\n📚 Testing Courses Page Load Time\n');
  
  const startTime = Date.now();
  
  try {
    const response = await fetch(`${baseUrl}/courses`);
    const loadTime = Date.now() - startTime;
    
    if (response.ok) {
      log(colors.green, `  ✅ Courses page loaded successfully in ${loadTime}ms`);
      
      if (loadTime < 1000) {
        log(colors.green, '  ⚡ Excellent performance!');
      } else if (loadTime < 3000) {
        log(colors.yellow, '  ⚠️  Acceptable performance');
      } else {
        log(colors.red, '  ❌ Slow performance - optimization needed');
      }
    } else {
      log(colors.red, `  ❌ Failed to load courses page (${response.status})`);
    }
    
    return loadTime;
  } catch (error) {
    log(colors.red, `  ❌ Network Error: ${error.message}`);
    return null;
  }
}

/**
 * Test exams page loading
 */
async function testExamsPage() {
  log(colors.cyan, '\n📝 Testing Exams Page Load Time\n');
  
  const startTime = Date.now();
  
  try {
    const response = await fetch(`${baseUrl}/exams`);
    const loadTime = Date.now() - startTime;
    
    if (response.ok) {
      log(colors.green, `  ✅ Exams page loaded successfully in ${loadTime}ms`);
      
      if (loadTime < 1000) {
        log(colors.green, '  ⚡ Excellent performance!');
      } else if (loadTime < 3000) {
        log(colors.yellow, '  ⚠️  Acceptable performance');
      } else {
        log(colors.red, '  ❌ Slow performance - optimization needed');
      }
    } else {
      log(colors.red, `  ❌ Failed to load exams page (${response.status})`);
    }
    
    return loadTime;
  } catch (error) {
    log(colors.red, `  ❌ Network Error: ${error.message}`);
    return null;
  }
}

/**
 * Main test runner
 */
async function runLoadTests() {
  log(colors.blue, '\n╔════════════════════════════════════════╗');
  log(colors.blue, '║   TahaLearn Load Testing Suite        ║');
  log(colors.blue, '╚════════════════════════════════════════╝');
  log(colors.cyan, `\nTarget: ${baseUrl}\n`);

  const startTime = Date.now();

  // Run tests
  await testHomepage();
  await testCoursesPage();
  await testExamsPage();
  await testNewsletterEndpoint();

  const totalTime = Date.now() - startTime;

  log(colors.blue, '\n╔════════════════════════════════════════╗');
  log(colors.blue, '║   Load Tests Completed                 ║');
  log(colors.blue, '╚════════════════════════════════════════╝');
  log(colors.cyan, `\nTotal test duration: ${totalTime}ms\n`);
}

// Run the tests
runLoadTests().catch(error => {
  log(colors.red, `\n❌ Fatal Error: ${error.message}`);
  process.exit(1);
});
