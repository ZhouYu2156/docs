interface SocialLink {
  icon: SocialLinkIcon;
  link: string;
  ariaLabel?: string;
}

type SocialLinkIcon =
  | "discord"
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "mastodon"
  | "npm"
  | "slack"
  | "twitter"
  | "x"
  | "youtube"
  | { svg: string };

export const socialLinks: SocialLink[] = [
  {
    icon: {
      svg: '<img style="width: 20px; border-radius: 20%;" src="/gitee.svg">',
    },
    link: "https://gitee.com/zhouyu2156",
  },
  {
    icon: {
      svg: '<img style="width: 20px; border-radius: 20%;" src="/github.svg">',
    },
    link: "https://github.com/ZhouYu2156",
  },
  {
    icon: {
      svg: '<img style="width: 20px; border-radius: 20%;" src="/fish.png">',
    },
    link: "https://www.zhouyu2156.cn/Programming/",
  },
  {
    icon: {
      svg: '<img style="width: 20px; border-radius: 20%;" src="/bilibili.svg">',
    },
    link: "https://space.bilibili.com/431828034",
  },
];
