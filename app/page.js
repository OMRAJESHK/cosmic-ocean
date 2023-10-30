import React from "react";
import Home from "@/components/modules/home";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Home />
    </main>
  );
}
