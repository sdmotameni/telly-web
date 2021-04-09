const config = {
  cashapp: {
    title: "Cash App",
    url: "https://cash.app/$",
    image: "/icons/cashapp.png",
  },
  instagram: {
    title: "Instagram",
    url: "https://instagram.com/",
    image: "/icons/instagram.png",
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://linkedin.com/in/",
    image: "/icons/linkedin.png",
  },
  snapchat: {
    title: "Snapchat",
    url: "https://snapchat.com/add/",
    image: "/icons/snapchat.png",
  },
  twitter: {
    title: "Twitter",
    url: "https://twitter.com/",
    image: "/icons/twitter.png",
  },
  venmo: {
    title: "Venmo",
    url: "https://venmo.com/",
    image: "/icons/venmo.png",
  },
  whatsapp: {
    title: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=",
    image: "/icons/whatsapp.png",
  },
  tiktok: {
    title: "TikTok",
    url: "https://www.tiktok.com/@",
    image: "/icons/tiktok.png",
  },
};

export default function getMetaDetails(platform, handle) {
  return {
    title: config[platform]["title"],
    url: config[platform]["url"] + handle,
    image: config[platform]["image"],
  };
}
