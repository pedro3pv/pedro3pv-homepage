// GitHub public profile — keyless & CORS-enabled (Access-Control-Allow-Origin: *),
// so it can be fetched live from the browser on a static GitHub Pages site.

export type GitHubUser = {
  login: string
  name: string
  bio: string
  avatar: string
  followers: number
  following: number
  public_repos: number
  url: string
}

const FALLBACK: GitHubUser = {
  login: "pedro3pv",
  name: "",
  bio: "",
  avatar: "",
  followers: 0,
  following: 0,
  public_repos: 0,
  url: "https://github.com/pedro3pv",
}

export async function getGitHubUser(login = "pedro3pv"): Promise<GitHubUser> {
  try {
    const res = await fetch(`https://api.github.com/users/${login}`, {
      headers: { Accept: "application/vnd.github+json" },
    })
    if (!res.ok) return FALLBACK
    const j = (await res.json()) as {
      login?: string
      name?: string
      bio?: string
      avatar_url?: string
      followers?: number
      following?: number
      public_repos?: number
      html_url?: string
    }
    return {
      login: j.login ?? login,
      name: j.name ?? "",
      bio: j.bio ?? "",
      avatar: j.avatar_url ?? "",
      followers: j.followers ?? 0,
      following: j.following ?? 0,
      public_repos: j.public_repos ?? 0,
      url: j.html_url ?? `https://github.com/${login}`,
    }
  } catch (e) {
    console.error("GitHub fetch failed:", e)
    return FALLBACK
  }
}
