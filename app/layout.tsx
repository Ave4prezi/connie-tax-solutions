import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata={title:"Connie | Tax Preparation & Business Solutions",description:"More Than Numbers. Real Solutions. Tax preparation and business services in Decatur, Alabama."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}