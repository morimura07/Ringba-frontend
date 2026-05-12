import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/constants/site";
import "@/styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full font-sans antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900">
        {children}
      </body>
    </html>
  );
}
