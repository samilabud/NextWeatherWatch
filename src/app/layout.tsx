import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
          <div className="h-full w-full mt-1 bg-slate-800 opacity-70 min-w-full min-h-96 rounded-xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
