import {readFile,writeFile,rm} from "node:fs/promises";
import {render} from "../.prerender/prerender.js";
let html=await readFile("dist/index.html","utf8");
html=html.replace("<!--app-html-->",render());
const raw=process.env.SITE_URL||(process.env.VERCEL_PROJECT_PRODUCTION_URL?"https://"+process.env.VERCEL_PROJECT_PRODUCTION_URL:"");
if(raw){
 const site=new URL(raw);if(!["https:","http:"].includes(site.protocol))throw new Error("Invalid SITE_URL");
 const base=site.origin;
 html=html.replace("<!--canonical-->",'<link rel="canonical" href="'+base+'/"><meta property="og:url" content="'+base+'/">').replace('content="/assets/generated/cover-v2.webp"','content="'+base+'/assets/generated/cover-v2.webp"');
 await writeFile("dist/sitemap.xml",'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>'+base+'/</loc></url></urlset>');
 await writeFile("dist/robots.txt","User-agent: *\nAllow: /\nSitemap: "+base+"/sitemap.xml\n");
}
await writeFile("dist/index.html",html);
await rm(".prerender",{recursive:true,force:true});
console.log("Static HTML generated with full page content.");
