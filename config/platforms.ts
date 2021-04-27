import { Instagram, TikTok, Twitch, Twitter, YouTube } from "@components/icon";
import { FC } from "react";

interface Platform {
  name: string;
  id: string;
  icon: FC;
  charts: Charts[];
}

interface Charts {
  name: string;
  id: string;
}

const platforms: Platform[] = [
  {
    name: "YouTube",
    id: "youtube",
    icon: YouTube,
    charts: [
      {
        name: "Views",
        id: "rankViews",
      },
      {
        name: "Likes",
        id: "rankLikes",
      },
      {
        name: "Neue Abos",
        id: "rankSubGain",
      },
      {
        name: "Abos",
        id: "subscribers",
      },
      {
        name: "YouTube-Rang",
        id: "rank",
      }
    ]
  },
  {
    name: "Instagram",
    id: "instagram",
    icon: Instagram,
    charts: [
      {
        name: "Likes",
        id: "rankLikes",
      },
      {
        name: "Neue Follower",
        id: "rankSubGain",
      },
      {
        name: "Follower",
        id: "subscribers",
      },
      {
        name: "Instagram-Rang",
        id: "rank",
      }
    ]
  },
  {
    name: "TikTok",
    id: "tiktok",
    icon: TikTok,
    charts: [
      {
        name: "Likes",
        id: "rankLikes",
      },
      {
        name: "Views",
        id: "rankViews",
      },
      {
        name: "Follower",
        id: "subscribers",
      },
      {
        name: "TikTok-Rang",
        id: "rank",
      }
    ]
  },
  {
    name: "Twitter",
    id: "twitter",
    icon: Twitter,
    charts: [
      {
        name: "Likes",
        id: "rankLikes",
      },
      {
        name: "Retweets",
        id: "rankRetweets",
      },
      {
        name: "Neue Follower",
        id: "rankSubGain",
      },
      {
        name: "Follower",
        id: "subscribers",
      },
      {
        name: "Twitter-Rang",
        id: "rank",
      }
    ]
  },
  {
    name: "Twitch",
    id: "twitch",
    icon: Twitch,
    charts: [
      {
        name: "Viewer",
        id: "rankViewer",
      },
      {
        name: "Peak Viewer",
        id: "rankPeakViewer",
      },
      {
        name: "Neue Follower",
        id: "rankSubGain",
      },
      {
        name: "Watchtime",
        id: "rankWatchtime",
      },
      {
        name: "Follower",
        id: "subscribers",
      },
      {
        name: "Twitch-Rang",
        id: "rank",
      }
    ]
  }
];

export default platforms;
