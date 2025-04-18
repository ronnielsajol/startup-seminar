"use client";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Introduction from "@/components/Introduction";
import Sponsors from "@/components/Sponsors";
import WhatToExpect from "@/components/WhatToExpect";

export default function Root() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Home />
      <Introduction />
      <WhatToExpect />
      <Sponsors />
      <Footer />
    </main>
  );
}

//DM Sans
//Horizons
