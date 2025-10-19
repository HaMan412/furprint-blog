export interface Friend {
  name: string;
  avatar: string;
  description: string;
  url: string;
  bgImage: string;
}

export const friends: Friend[] = [
  {
    name: "Mo的记事簿",
    avatar: "https://blog.xiowo.net/img/avatar.png",
    description: "万年鸽王，哈哈OvO",
    url: "https://blog.xiowo.net/",
    bgImage: "https://bu.dusays.com/2025/06/17/685044d6bca69.png",
  },
  // 以后新的友链都添加在这里
  // {
  //   name: "朋友B",
  //   avatar: "...",
  //   description: "...",
  //   url: "...",
  //   bgImage: "...",
  // },
];
