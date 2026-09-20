import type { ScrollScrubScene, ScrollScrubTheme } from "@/components/scroll-scrub/scroll-scrub";
export const scrollScrubTheme: ScrollScrubTheme = { accent:"#E8C9C8", background:"#161313", ink:"#F7F4F1", muted:"#E8DAD7" };
export const scrollScrubScenes: ScrollScrubScene[] = [{
  body:"Massagens, estética facial e corporal com atendimento personalizado em Ibirarema.",
  clip:"/assets/world/talita-film.mp4", id:"cuidado", kicker:"Talita Vieira · Ibirarema SP", label:"Cuidado",
  mobileClip:"/assets/world/talita-film-mobile.mp4", mobilePoster:"/assets/world/talita-film-mobile-poster.png",
  poster:"/assets/world/talita-film-poster.png", tags:["Mais de 7 anos de experiência"],
  title:"Cuidado que começa pela escuta.", scroll:2.8, linger:0.24, objectPosition:"50% 50%", mobileObjectPosition:"50% 50%"
}];
