# NAGJAN Component Standards & Development Guidelines

**Project:** `nagjan-ecommerce`  
**Standard:** React 19 + TypeScript + Base UI / shadcn Nova Preset  
**Status:** Canonical Engineering Reference  

---

## 1. Component Architecture & Directory Organization

All components must be located within `src/components/` following a domain-driven structure:

| Directory | Responsibility | State Model | Typical Example |
| :--- | :--- | :--- | :--- |
| `src/components/layout/` | Global application shell, headers, footers, containers | Hybrid (Server shell with Client navigation) | `Header.tsx`, `Footer.tsx`, `Container.tsx` |
| `src/components/home/` | Homepage domain sections | Server-first with Client animations | `HeroSection.tsx`, `FlagshipShowcase.tsx` |
| `src/components/products/` | Product presentation, specifications tables, galleries | Presentation-heavy Server + Client filters | `MachineryCard.tsx`, `SpecsTable.tsx`, `SparePartCard.tsx` |
| `src/components/common/` | Reusable atomic and molecular UI building blocks | Pure Presentation / Stateless | `SectionHeading.tsx`, `PriceDisplay.tsx`, `StockBadge.tsx` |
| `src/components/cart/` | Shopping cart drawer, line items, order totals | Client State (`"use client"`) | `CartDrawer.tsx`, `CartItemRow.tsx` |
| `src/components/ui/` | Headless primitive wrappers based on Base UI Nova style | Pure Primitives | `button.tsx`, `dialog.tsx`, `select.tsx` |

---

## 2. Naming Conventions & TypeScript Rules

1. **File & Component Names:**
   - PascalCase for all component files and exports: `MachineryCard.tsx`, `SpecsTable.tsx`.
   - The default export or main named export must match the file basename.
2. **Interface Naming:**
   - Every component must declare its props using a dedicated TypeScript interface named `[ComponentName]Props`:
     ```typescript
     export interface MachineryCardProps {
       machine: MachineryProduct;
       priority?: boolean;
       className?: string;
     }
     ```
3. **Strict Typing Rules:**
   - **Zero `any`:** Never use `any`. Always use explicit domain types from `src/types/` (`MachineryProduct`, `SparePart`, `CartItem`).
   - Standard HTML attribute inheritance: When a component wraps a native HTML element, extend `React.HTMLAttributes<T>` or `React.ComponentPropsWithRef<T>`:
     ```typescript
     export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
       size?: "default" | "wide" | "narrow";
       as?: React.ElementType;
     }
     ```

---

## 3. Composition & Component Patterns

### 3.1 Server vs. Client Component Boundaries
- **Default to Server Components:** Keep data fetching, static rendering, and markup generation on the server.
- **Client Leaf Components (`"use client"`):** Isolate client interactivity to the smallest possible leaf components:
  - Form inputs and submit handlers (`QuoteFormModal.tsx`).
  - Search filter inputs and URL sync (`ProductFilters.tsx`).
  - Image gallery carousel and zoom modal (`ProductGallery.tsx`).
  - Cart drawer state and quantity mutations (`CartDrawer.tsx`).

### 3.2 Styling with `cn` Utility
- Always use the centralized `cn` helper (`src/lib/utils.ts`) to merge incoming `className` props with component default classes:
  ```typescript
  import { cn } from "@/lib/utils";

  export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
      <div className={cn("space-y-2 mb-8", className)}>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary font-heading">
          {title}
        </h2>
        {subtitle && <p className="text-muted-foreground text-sm sm:text-base">{subtitle}</p>}
      </div>
    );
  }
  ```

---

## 4. Accessibility (a11y) Requirements

All components must comply with WCAG 2.1 AA standards:

1. **Keyboard Accessibility:**
   - All interactive elements must be focusable via `Tab`.
   - Visible focus indicator: Every focusable element must display `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
2. **Accessible Labels & ARIA:**
   - Icon-only buttons (e.g. search toggle, cart button, mobile menu trigger) **must** include an `aria-label` or visually hidden `<span className="sr-only">Label</span>`:
     ```tsx
     <button aria-label="Open shopping cart" className="...">
       <ShoppingBag className="size-5" />
       <span className="sr-only">Shopping Cart, 3 items</span>
     </button>
     ```
3. **Form Controls:**
   - Inputs must be programmatically associated with labels using `id` and `htmlFor`.
   - Required fields must specify `aria-required="true"`.
   - Invalid fields must specify `aria-invalid="true"` with `aria-describedby="[error-id]"`.
4. **Touch Targets on Mobile:**
   - All mobile buttons, links, and form toggles must maintain a minimum touch target size of **44 × 44 px**.

---

## 5. Animation & Motion Guidelines (Framer Motion)

Framer Motion is installed (`framer-motion: ^14.12.0`) and should be utilized strictly for purposeful micro-interactions:

1. **Subtle Transitions Only:**
   - Entry duration: `0.2s` to `0.3s` maximum.
   - Easing: `easeOut` or `[0.16, 1, 0.3, 1]` (cubic-bezier for smooth deceleration).
   - Stagger children: `0.05s` delay between list items.
2. **Respect `prefers-reduced-motion`:**
   - Use CSS or Framer Motion's reduced motion hooks to disable layout movement for users with vestibular sensitivities:
     ```tsx
     import { motion, useReducedMotion } from "framer-motion";

     export function FadeIn({ children }: { children: React.ReactNode }) {
       const shouldReduceMotion = useReducedMotion();
       return (
         <motion.div
           initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.25 }}
         >
           {children}
         </motion.div>
       );
     }
     ```
3. **Strictly Prohibited:**
   - Continuous looping animations (e.g. bouncing icons, spinning badges, pulsing text).
   - Long page-transition delays that block user navigation.

