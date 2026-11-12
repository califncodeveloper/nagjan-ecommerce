import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";

interface MachineryBreadcrumbProps {
  categoryTitle: string;
  categorySlug: string;
  model: string;
}

export function MachineryBreadcrumb({
  categoryTitle,
  categorySlug,
  model,
}: MachineryBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/70 border-b border-slate-200/80 py-3">
      <Container>
        <ol className="flex items-center flex-wrap gap-2 text-xs text-slate-500 font-medium">
          <li className="flex items-center gap-1.5">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-slate-600 hover:text-[#013074] transition-colors"
            >
              <Home className="size-3.5" />
              <span>Home</span>
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="size-3.5" />
          </li>
          <li>
            <Link
              href="/products"
              className="text-slate-600 hover:text-[#013074] transition-colors"
            >
              Machinery
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="size-3.5" />
          </li>
          <li>
            <Link
              href={`/products?category=${categorySlug}`}
              className="text-slate-600 hover:text-[#013074] transition-colors max-w-[200px] sm:max-w-none truncate"
            >
              {categoryTitle}
            </Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">
            <ChevronRight className="size-3.5" />
          </li>
          <li className="text-slate-900 font-bold font-mono" aria-current="page">
            {model}
          </li>
        </ol>
      </Container>
    </nav>
  );
}
