// Shared demo/fallback data used when a live source isn't configured yet.
// Every widget degrades to a styled, clearly-marked demo state so the
// homepage still looks complete before the env vars are added.

// ---- Discord (Lanyard) demo ----
export const discordDemo = {
  discord_status: "online" as const,
  listening_to_spotify: true,
  spotify: {
    song: "Virtual Insanity",
    artist: "Jamiroquai",
    album: "Travelling Without Moving",
    album_art_url:
      "https://i.scdn.co/image/ab67616d0000b27349c3520b4aa4d20a5553fea1",
    timestamps: { start: Date.now(), end: Date.now() + 3 * 60 * 1000 },
  },
  // First activity of type 4 = custom status
  activities: [
    {
      type: 4,
      name: "Custom Status",
      state: "building cool stuff",
      emoji: { name: "wrench" },
    },
  ],
}

// ---- Last.fm demo ----
export const lastfmDemo = {
  nowplaying: true,
  track: {
    name: "Resolution",
    artist: "Matt Berninger",
    album: "Serpentine Prison",
    image: [
      {
        size: "extralarge",
        "#text":
          "https://lastfm.freetls.fastly.net/i/u/300x300/2a9f0d3e9d8b4f4a9d0e7f6a9f0b4e5c.png",
      },
    ],
  },
  recent: [
    { name: "Resolution", artist: "Matt Berninger", album: "Serpentine Prison" },
    { name: "Ingenue", artist: "Atom And His Package", album: "Attention! Blah Blah Blah" },
    { name: "House of Cards", artist: "Bad Books", album: "Favorite Number" },
  ],
}

// (Spotify top-artists fallback was removed — that data needs OAuth, which
// can't be hidden on a static GitHub Pages site. The Spotify profile card and
// the live now-playing from Lanyard cover Spotify presence keylessly.)
