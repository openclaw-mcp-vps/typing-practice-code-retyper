import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeRetyper – Practice Typing with Real Open Source Code",
  description: "Improve your typing speed and accuracy by retyping famous open source repositories. Syntax highlighting, WPM tracking, and accuracy stats."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1adbb61c-b361-462b-bbbd-c42428186702"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-mono antialiased">
        {children}
      </body>
    </html>
  );
}
