"use client"

import { useLiveData } from "./live-fetch"
import { getGitHubUser, type GitHubUser } from "@/lib/github"
import { TermLine } from "./window"
import { TbBrandGithub, TbStar } from "react-icons/tb"

const INITIAL: GitHubUser = {
  login: "pedro3pv",
  name: "pedro3pv",
  bio: "Loading…",
  avatar: "",
  followers: 0,
  following: 0,
  public_repos: 0,
  url: "https://github.com/pedro3pv",
}

export function GitHubCard() {
  const { data } = useLiveData(() => getGitHubUser("pedro3pv"), INITIAL, 120000)

  return (
    <div className="mb-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
      <div className="relative shrink-0">
        <div className="absolute inset-0 -m-[3px] rounded-full border border-terminal-green/40" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.avatar || "https://github.com/pedro3pv.png"}
          alt="pedro3pv avatar"
          width={96}
          height={96}
          className="h-24 w-24 rounded-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <TermLine className="text-terminal-fg">
          <span className="text-terminal-green">{data.login}</span>
          {data.name && data.name !== data.login && (
            <span className="text-terminal-dimmed"> — {data.name}</span>
          )}
        </TermLine>
        {data.bio && <TermLine className="text-terminal-dimmed">{data.bio}</TermLine>}

        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
          <TermLine className="text-terminal-dimmed">
            <TbStar className="mr-1 inline text-terminal-cyan" aria-hidden="true" />
            <span className="text-terminal-fg">{data.public_repos}</span> repos
          </TermLine>
          <TermLine className="text-terminal-dimmed">
            <TbBrandGithub className="mr-1 inline text-terminal-cyan" aria-hidden="true" />
            <span className="text-terminal-fg">{data.followers}</span> followers
          </TermLine>
        </div>
      </div>
    </div>
  )
}
