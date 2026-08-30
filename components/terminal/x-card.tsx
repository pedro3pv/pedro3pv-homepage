import { SiX } from "react-icons/si"
import { TbExternalLink } from "react-icons/tb"

export function XProfileCard() {
  return (
    <div className="rounded-lg border border-terminal-border p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-terminal-dimmed">
          <SiX className="text-terminal-fg" aria-hidden="true" />
          x / twitter
        </span>
      </div>

      <a
        href="https://x.com/pedro3pv"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded border border-terminal-border bg-[#000]/20 text-terminal-fg">
          <SiX aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-mono text-sm text-terminal-fg transition-colors group-hover:text-terminal-green">
            @pedro3pv
          </span>
          <span className="block font-mono text-xs text-terminal-dimmed">
            x.com/pedro3pv
          </span>
        </span>
        <TbExternalLink
          className="ml-auto shrink-0 text-terminal-dimmed/50 transition-colors group-hover:text-terminal-green"
          aria-hidden="true"
        />
      </a>
    </div>
  )
}
