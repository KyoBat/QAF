/**
 * TreeDiagram Component
 * Affiche une arborescence hiérarchique avec support RTL natif
 * Utilisé pour: types de contrats, catégories, classifications
 */

'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { ChevronDown, ChevronLeft } from 'lucide-react'

export interface TreeBranch {
  label: string
  description?: string
  icon?: React.ReactNode
  examples?: string[]
  children?: TreeBranch[]
  variant?: 'default' | 'success' | 'warning' | 'danger'
}

export interface TreeDiagramProps {
  title: string
  titleIcon?: React.ReactNode
  root?: string
  branches: TreeBranch[]
  className?: string
  dir?: 'rtl' | 'ltr'
  collapsible?: boolean
  defaultExpanded?: boolean
}

const variantStyles = {
  default: 'border-border bg-card',
  success: 'border-success/30 bg-success/5',
  warning: 'border-warning/30 bg-warning/5',
  danger: 'border-destructive/30 bg-destructive/5',
}

const variantDotStyles = {
  default: 'bg-primary',
  success: 'bg-success',
  warning: 'bg-warning',
  danger: 'bg-destructive',
}

function TreeNode({ 
  branch, 
  level = 0, 
  isLast = false,
  dir = 'ltr',
  collapsible = false,
  defaultExpanded = true 
}: { 
  branch: TreeBranch
  level?: number
  isLast?: boolean
  dir?: 'rtl' | 'ltr'
  collapsible?: boolean
  defaultExpanded?: boolean
}) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)
  const hasChildren = branch.children && branch.children.length > 0
  const isRtl = dir === 'rtl'

  return (
    <div className="relative">
      {/* Connector line */}
      {level > 0 && (
        <div 
          className={cn(
            "absolute top-0 w-px bg-border",
            isRtl ? "right-0" : "left-0",
            isLast ? "h-6" : "h-full"
          )}
          style={{ 
            [isRtl ? 'right' : 'left']: `${(level - 1) * 24 + 12}px` 
          }}
        />
      )}
      
      {/* Horizontal connector */}
      {level > 0 && (
        <div 
          className="absolute top-6 h-px bg-border w-4"
          style={{ 
            [isRtl ? 'right' : 'left']: `${(level - 1) * 24 + 12}px` 
          }}
        />
      )}

      {/* Node content */}
      <div 
        className={cn(
          "relative flex items-start gap-3 py-2",
          level > 0 && (isRtl ? "pr-6" : "pl-6")
        )}
        style={{ 
          [isRtl ? 'paddingRight' : 'paddingLeft']: `${level * 24}px` 
        }}
      >
        {/* Dot indicator */}
        <div className={cn(
          "w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ring-2 ring-background",
          variantDotStyles[branch.variant || 'default']
        )} />

        <div className="flex-1 min-w-0">
          {/* Branch header */}
          <div 
            className={cn(
              "flex items-center gap-2",
              collapsible && hasChildren && "cursor-pointer hover:text-primary transition-colors"
            )}
            onClick={() => collapsible && hasChildren && setExpanded(!expanded)}
          >
            {branch.icon}
            <span className="font-semibold text-foreground">{branch.label}</span>
            {collapsible && hasChildren && (
              <span className="text-muted-foreground">
                {expanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronLeft className={cn("w-4 h-4", isRtl && "rotate-180")} />
                )}
              </span>
            )}
          </div>

          {/* Description */}
          {branch.description && (
            <p className="text-sm text-muted-foreground mt-1">{branch.description}</p>
          )}

          {/* Examples */}
          {branch.examples && branch.examples.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {branch.examples.map((example, idx) => (
                <span 
                  key={idx}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                >
                  {example}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Children */}
      {hasChildren && (!collapsible || expanded) && (
        <div className="relative">
          {branch.children!.map((child, idx) => (
            <TreeNode 
              key={idx}
              branch={child}
              level={level + 1}
              isLast={idx === branch.children!.length - 1}
              dir={dir}
              collapsible={collapsible}
              defaultExpanded={defaultExpanded}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function TreeDiagram({
  title,
  titleIcon,
  root,
  branches,
  className,
  dir = 'ltr',
  collapsible = false,
  defaultExpanded = true,
}: TreeDiagramProps) {
  return (
    <div 
      className={cn(
        "rounded-xl border border-border bg-card p-4 sm:p-6",
        className
      )}
      dir={dir}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        {titleIcon || <span className="text-xl">🌳</span>}
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      </div>

      {/* Root node */}
      {root && (
        <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
          <div className="w-4 h-4 rounded-full bg-primary ring-2 ring-background" />
          <span className="font-bold text-primary text-lg">{root}</span>
        </div>
      )}

      {/* Branches */}
      <div className="space-y-1">
        {branches.map((branch, idx) => (
          <TreeNode 
            key={idx}
            branch={branch}
            level={root ? 1 : 0}
            isLast={idx === branches.length - 1}
            dir={dir}
            collapsible={collapsible}
            defaultExpanded={defaultExpanded}
          />
        ))}
      </div>
    </div>
  )
}
