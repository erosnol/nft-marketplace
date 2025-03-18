import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "./styles/ThemeProvider";
import Layout from "./components/layout/Layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "KronoRift Finance | NFT Marketplace on Fraxtal",
  description: "A modern NFT marketplace built on Fraxtal blockchain for institutional-grade digital assets",
  keywords: ["NFT", "marketplace", "blockchain", "Fraxtal", "digital assets", "institutional"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`} suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
