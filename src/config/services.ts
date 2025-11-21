// Service monitoring configuration
export interface Service {
  id: string;
  name: string;
  url: string;
  healthEndpoint: string;
  type: "worker" | "pages";
  description: string;
  uptimeRobotId: string; // UptimeRobot monitor ID
}

export const services: Service[] = [
  {
    id: "blog",
    name: "HaMan's Blog",
    url: "https://furprint.top",
    healthEndpoint: "https://furprint.top",
    type: "pages",
    description: "哈曼の博客主站",
    uptimeRobotId: "801845292",
  },
  {
    id: "哈曼の导航页",
    name: "哈曼の导航页",
    url: "https://haman.uk",
    healthEndpoint: "https://haman.uk",
    type: "pages",
    description: "哈曼の导航页",
    uptimeRobotId: "801845526",
  },
  {
    id: "Hitokoto - 一言",
    name: "Hitokoto - 一言",
    url: "https://Hitokoto.furprint.top",
    healthEndpoint: "https://Hitokoto.furprint.top",
    type: "worker",
    description: "Hitokoto - 一言",
    uptimeRobotId: "801845539",
  },
  {
    id: "libretv",
    name: "LibreTV",
    url: "https://libretv.furprint.top",
    healthEndpoint: "https://libretv.furprint.top",
    type: "worker",
    description: "LibreTV开源项目，可在线观影",
    uptimeRobotId: "801845444",
  },
  {
    id: "moemail",
    name: "MoeMail",
    url: "https://mail.furprint.top",
    healthEndpoint: "https://mail.furprint.top",
    type: "worker",
    description: "MoeMail开源项目，临时邮箱服务",
    uptimeRobotId: "801845457",
  },
];
