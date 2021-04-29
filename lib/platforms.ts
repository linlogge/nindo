import { Instagram, TikTok, Twitch, Twitter, YouTube } from "@components/icon";
import { FC } from "react";

export type PlatformId = "youtube" | "instagram" | "tiktok" | "twitter" | "twitch";

interface Platform {
  id: PlatformId;
  name: string;
  colorScheme: string;
  icon: FC;
  toReadableName: (channel) => string;
  chartsOptions: [string, string][];
}

const youtube: Platform = {
  id: "youtube",
  name: "YouTube",
  colorScheme: "red",
  icon: YouTube,
  toReadableName: (channel) => channel.name,
  chartsOptions: [["Views", "rankViews"]],
};

const instagram: Platform = {
  id: "instagram",
  name: "Instagram",
  colorScheme: "purple",
  icon: Instagram,
  toReadableName: (channel) => `@${channel.channelID}`,
  chartsOptions: [["Likes", "rankLikes"]],
};

const tiktok: Platform = {
  id: "tiktok",
  name: "TikTok",
  colorScheme: "pink",
  icon: TikTok,
  toReadableName: (channel) => `@${channel.channelID}`,
  chartsOptions: [["Likes", "rankLikes"]],
};

const twitter: Platform = {
  id: "twitter",
  name: "Twitter",
  colorScheme: "blue",
  icon: Twitter,
  toReadableName: (channel) => `@${channel.channelID}`,
  chartsOptions: [["Likes", "rankLikes"]],
};

const twitch: Platform = {
  id: "twitch",
  name: "Twitch",
  colorScheme: "purple",
  icon: Twitch,
  toReadableName: (channel) => `${channel.channelID}`,
  chartsOptions: [["Zuschauer", "rankViewer"]],
};

export const platforms = [youtube, instagram, tiktok, twitter, twitch];

export function getPlatformById(id: PlatformId): Platform {
  return platforms.find((platform) => platform.id === id);
}
