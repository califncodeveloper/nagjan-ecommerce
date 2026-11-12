"use client";

import React from "react";
import { Plus, Minus } from "lucide-react";

interface SparePartsQuantitySelectorProps {
  quantity: number;
  onChange: (qty: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export function SparePartsQuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 999,
  disabled = false,
}: SparePartsQuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) {
      onChange(min);
    } else {
      onChange(Math.max(min, Math.min(max, val)));
    }
  };

  return (
    <div className="flex items-center">
      <div className="inline-flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden shadow-2xs">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={disabled || quantity <= min}
          aria-label="Decrease quantity"
          className="size-9 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <Minus className="size-3.5" />
        </button>

        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          disabled={disabled}
          min={min}
          max={max}
          aria-label="Quantity"
          className="w-12 text-center text-sm font-bold font-mono text-slate-900 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <button
          type="button"
          onClick={handleIncrement}
          disabled={disabled || quantity >= max}
          aria-label="Increase quantity"
          className="size-9 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <Plus className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

