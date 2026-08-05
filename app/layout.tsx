import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"Site Generated",description:"Plateforme premium de gestion de boutiques et commandes"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr" suppressHydrationWarning><body><div className="ambient fixed -left-80 -top-80 -z-10 h-[700px] w-[700px] rounded-full blur-3xl"/>{children}</body></html>}
