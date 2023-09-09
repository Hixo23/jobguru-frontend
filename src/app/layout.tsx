import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import {Providers} from "@/components/providers/Providers";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["400", "700", "600"],
});

export const metadata: Metadata = {
  title: "Jobguru",
  description: "Job list",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
