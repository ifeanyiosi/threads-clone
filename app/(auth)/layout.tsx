import { ClerkProvider } from "@clerk/nextjs";
import { Figtree } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Ifeanyiosi",
  description:
    "A Next.js application that mirrors Threads and Twitter built by Ifeanyi Osi-Okeke",
};

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${figtree.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
