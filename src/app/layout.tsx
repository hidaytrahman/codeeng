import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./StyledRoot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codeeng",
  description:
    "Code environment basic and required setup for your project or new machine.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <AppRouterCacheProvider>
          <StyledRoot>
            <article className="min-h-screen">{children}</article>
          </StyledRoot>
        </AppRouterCacheProvider>

        <Footer />
      </body>
    </html>
  );
}
