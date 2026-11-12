"use client";

import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";

export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-40 bg-white shadow-xs">
      {/* Top Information & Emergency Support Bar */}
      <TopBar />

      {/* Main Brand & Desktop Navigation Bar */}
      <Navigation onOpenMobileNav={() => setMobileNavOpen(true)} />

      {/* Slide-out Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </header>
  );
}

export default Header;

