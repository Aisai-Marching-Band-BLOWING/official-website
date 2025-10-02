import IconFacebook from "@/components/IconFacebook.astro";
import IconInstagram from "@/components/IconInstagram.astro";
import IconX from "@/components/IconX.astro";
import IconYoutube from "@/components/IconYoutube.astro";

export type SNSPlatform = "Facebook" | "Instagram（Jr.）" | "Instagram（一般）" | "X" | "YouTube";

export function getSNSInfo(platform: SNSPlatform) {
  switch (platform) {
    case "Facebook":
      return {
        id: "aisaimb",
        href: "https://facebook.com/aisaimb",
        Icon: IconFacebook,
      };
    case "Instagram（Jr.）":
      return {
        id: "aisaimb",
        href: "https://instagram.com/aisaimb",
        Icon: IconInstagram,
      };
    case "Instagram（一般）":
      return {
        id: "aisaimb.2024",
        href: "https://instagram.com/aisaimb.2024",
        Icon: IconInstagram,
      };
    case "X":
      return {
        id: "aisai_mb",
        href: "https://x.com/aisai_mb",
        Icon: IconX,
      };
    case "YouTube":
      return {
        id: "aisaimb",
        href: "https://youtube.com/@aisaimb",
        Icon: IconYoutube,
      };
  }
}
