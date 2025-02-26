'use client';

import { ClerkProvider } from "@clerk/nextjs";
import "../app/globals.css";


export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>{children}</ClerkProvider>
  );
}
