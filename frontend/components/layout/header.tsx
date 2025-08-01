"use client";

import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b bg-white border-dashed">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Image
            src="/croper.png"
            alt="Croper"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </div>
      </div>
    </header>
  );
}
