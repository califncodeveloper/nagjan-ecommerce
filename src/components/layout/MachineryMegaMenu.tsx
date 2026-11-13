"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MACHINERY_NAV_DATA } from "@/data/navigation";

export interface MachineryMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MachineryMegaMenu({ isOpen, onClose }: MachineryMegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 4, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 3, scale: 0.98 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute top-full left-0 pt-2 z-50"
          role="menu"
          aria-label="Machinery Categories"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onClose();
            }
          }}
        >
          <div className="w-72 rounded-lg bg-white border border-slate-200/90 shadow-xl shadow-slate-900/10 p-1.5 ring-1 ring-black/5">
            <ul className="space-y-0.5">
              {MACHINERY_NAV_DATA.map((category) => (
                <li key={category.id} role="none">
                  <Link
                    href={`/products?category=${category.id}`}
                    onClick={onClose}
                    role="menuitem"
                    className="block px-3.5 py-2.5 text-sm font-medium text-slate-700 hover:text-[#013074] hover:bg-slate-50 rounded-md transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#013074]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MachineryMegaMenu;
