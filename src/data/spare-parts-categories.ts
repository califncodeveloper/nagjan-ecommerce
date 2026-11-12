/**
 * NAGJAN Spare Parts Category Definitions
 * Sourced from verified active shop catalog (shop.nagjan.com) and technical audit.
 */

import { SparePartCategory } from "@/types/spare-parts";

export const SPARE_PARTS_CATEGORIES: SparePartCategory[] = [
  {
    id: "cat-thin-blades-knives",
    slug: "thin-blades-knives",
    name: "Thin Blades & Slitting Knives",
    description: "Tungsten carbide thin blades, rotary slotting female knives, and precision cutting tools for corrugators and printer-slotters.",
    itemCountNote: "Tungsten Alloy",
    badge: "High Demand",
    iconName: "Scissors",
  },
  {
    id: "cat-anvil-covers",
    slug: "anvil-covers",
    name: "Anvil Covers",
    description: "MaxDura knuckle type peach & heavy-duty polyurethane die-cutting blankets for rotary die-cutting anvils.",
    itemCountNote: "90+ Models in Stock",
    badge: "MaxDura",
    iconName: "Disc",
  },
  {
    id: "cat-feeder-wheels",
    slug: "feeder-wheels",
    name: "Feeder Wheels",
    description: "4-pillar split type feeder wheels, Sun Feeder friction rubber wheels, and vacuum feed table rollers.",
    itemCountNote: "Split & Solid Types",
    iconName: "CircleDot",
  },
  {
    id: "cat-no-crush-wheels",
    slug: "no-crush-wheels",
    name: "No-Crush Wheels",
    description: "Dual-durometer polyurethane non-marking wheels protecting corrugated flute profiles during transport.",
    itemCountNote: "Zero-Flute Damage",
    iconName: "Layers",
  },
  {
    id: "cat-grinding-wheels",
    slug: "grinding-wheels",
    name: "Grinding Wheels",
    description: "Diamond cup grinding wheels and sharpening stones for slitter scorer thin blades.",
    itemCountNote: "Cup & Stone Formats",
    iconName: "CircleDot",
  },
  {
    id: "cat-belts-transmission",
    slug: "belts-transmission",
    name: "Belts & Transmission",
    description: "High-torque synchronous timing belts (5200-8M) and PVC corrugated sheet conveying belts.",
    itemCountNote: "Timing & Conveyor",
    iconName: "Layers",
  },
  {
    id: "cat-bearings",
    slug: "bearings",
    name: "High-Temperature Bearings",
    description: "C&U precision bearings engineered for 200°C steam heat on corrugating and pressure rolls.",
    itemCountNote: "200°C Steam Rated",
    iconName: "Disc",
  },
  {
    id: "cat-electricals-automation",
    slug: "electricals-automation",
    name: "Electricals & Automation",
    description: "Contactors, control transformers, photoelectric sensors, inductive proximity switches, and solenoid valves.",
    itemCountNote: "Industrial Grade",
    iconName: "Cpu",
  },
  {
    id: "cat-stitching-machine-spares",
    slug: "stitching-machine-spares",
    name: "Stitching Machine Spares",
    description: "Stitching heads, wire feed rollers, cutter blocks, and inductive metal proximity sensors.",
    itemCountNote: "Heads & Wire Feeders",
    iconName: "Wrench",
  },
  {
    id: "cat-pneumatics-mechanical",
    slug: "pneumatics-mechanical",
    name: "Pneumatics & Mechanical",
    description: "MAL pneumatic cylinders, dual-manifold air joints, drive connecting pins, and tensioner spring ropes.",
    itemCountNote: "Cylinders & Hardware",
    iconName: "Boxes",
  },
];

