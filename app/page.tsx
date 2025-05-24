"use client";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Introduction from "@/components/Introduction";
import ScheduleSection from "@/components/ScheduleSection";
import Sponsors from "@/components/Sponsors";
import WhatToExpect from "@/components/WhatToExpect";

export default function Root() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <Home />
      <Introduction />
      <WhatToExpect />
      <ScheduleSection />
      <Sponsors />
      <Footer />
    </main>
  );
}
