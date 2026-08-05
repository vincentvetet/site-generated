import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme:{extend:{colors:{background:"#0b0b12",surface:"#15151f",purple:"#8f65ff"},boxShadow:{glow:"0 16px 45px rgb(104 66 194 / .22)"}}}, plugins:[] } satisfies Config;
