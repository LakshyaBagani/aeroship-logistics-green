import { useEffect, useRef, useState } from "react";

export type InViewOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(
  options: InViewOptions = { root: null, rootMargin: "0px", threshold: 0.15, once: true }
) {
  const elementRef = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (options.once !== false) observer.unobserve(entry.target);
          } else if (options.once === false) {
            setIsInView(false);
          }
        });
      },
      {
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
        threshold: options.threshold ?? 0.15,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options.root, options.rootMargin, options.threshold, options.once]);

  return { ref: elementRef, isInView } as const;
}


