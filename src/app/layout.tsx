import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Weather Watch",
  description: "Web application to see the weather in the coming days!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-default-background bg-cover bg-no-repeat">
        <main className="flex flex-col items-center justify-between p-24 h-svh w-svw">
          <div className="h-full w-full mt-1 bg-slate-800 bg-opacity-90 min-w-97 min-h-98 rounded-xl">
            <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
