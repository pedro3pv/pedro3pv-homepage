import type { ReactNode } from "react"

/**
 * Terminal window chrome: macOS-style traffic lights + a draggable-looking
 * title bar. Everything inside renders as terminal content.
 */
export function TerminalWindow({
  title = "pedro3pv — zsh",
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="overflow-hidden rounded-xl border border-terminal-border bg-terminal-bg shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-terminal-border bg-terminal-chrome px-4 py-3">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex-1 truncate text-center font-mono text-xs tracking-wide text-terminal-dimmed">
            {title}
          </span>
          <span className="w-[52px]" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="px-5 py-6 sm:px-7 sm:py-8">{children}</div>
      </div>
    </div>
  )
}

/** A single terminal line you can compose to build prompts / output. */
export function TermLine({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`font-mono text-sm leading-relaxed sm:text-[15px] ${className}`}>
      {children}
    </div>
  )
}

/** A command prompt line: `pedro@pedro3pv ~ % command`. */
export function Prompt({
  text,
  dir = "~",
}: {
  text: string
  dir?: string
}) {
  return (
    <TermLine>
      <span className="text-terminal-green">pedro@pedro3pv</span>
      <span className="text-terminal-dimmed">:</span>
      <span className="text-terminal-cyan">{dir}</span>
      <span className="text-terminal-dimmed"> % </span>
      <span className="text-terminal-fg">{text}</span>
    </TermLine>
  )
}

/** Section header rendered like a shell command comment. */
export function SectionTitle({
  command,
  path,
}: {
  command: string
  path?: string
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <Prompt text={command} dir={path ?? "~"} />
      <div className="h-px flex-1 bg-terminal-border/60" />
    </div>
  )
}

/** Tiny inline "demo" pill — only shown when a widget is in fallback state. */
export function DemoPill() {
  return (
    <span className="inline-flex items-center rounded border border-terminal-amber/40 bg-terminal-amber/10 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-terminal-amber">
      demo
    </span>
  )
}
