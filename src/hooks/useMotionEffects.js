import { useEffect } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion";

const REVEAL_SELECTOR = [
  ".homeHeroPanel",
  ".section .kicker",
  ".section .h2",
  ".section .lede",
  ".card",
  ".projectCard",
  ".homeProcessItem",
  ".homeChecklistItem",
  ".localSpotlight",
  ".homeFinal",
  ".badge",
].join(", ");

const STAGGER_GROUPS = [
  ".badges",
  ".homeChecklist",
  ".homeCards",
  ".homeProcessGrid",
  ".projectGrid",
  ".grid.cols-3",
  ".grid.cols-2",
];

export default function useMotionEffects(routeKey) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = document.querySelector("[data-page-shell]");

    if (!root) {
      return undefined;
    }

    const revealElements = Array.from(root.querySelectorAll(REVEAL_SELECTOR));
    const staggerChildren = [];
    const parallaxElements = Array.from(root.querySelectorAll("[data-parallax='hero']"));

    root.querySelectorAll(STAGGER_GROUPS.join(", ")).forEach((group) => {
      Array.from(group.children).forEach((child, index) => {
        child.style.setProperty("--stagger-delay", `${index * 80}ms`);
        staggerChildren.push(child);
      });
    });

    if (prefersReducedMotion) {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });
      parallaxElements.forEach((element) => {
        element.style.removeProperty("--parallax-x");
        element.style.removeProperty("--parallax-y");
        element.style.removeProperty("--parallax-rotate");
      });

      return () => {
        staggerChildren.forEach((child) => {
          child.style.removeProperty("--stagger-delay");
        });
      };
    }

    revealElements.forEach((element) => {
      element.classList.add("motion-reveal");
    });

    let parallaxFrame = 0;

    const applyParallax = (pointerX = 0, pointerY = 0) => {
      const scrollFactor = Math.min(window.scrollY / 600, 1);

      parallaxElements.forEach((element, index) => {
        const depth = index === 0 ? 1 : 0.65;
        const x = pointerX * 12 * depth;
        const y = (pointerY * 10 + scrollFactor * -14) * depth;
        const rotate = pointerX * 1.4 * depth;

        element.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
        element.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
        element.style.setProperty("--parallax-rotate", `${rotate.toFixed(2)}deg`);
      });
    };

    const scheduleParallax = (pointerX = 0, pointerY = 0) => {
      if (parallaxFrame) {
        window.cancelAnimationFrame(parallaxFrame);
      }

      parallaxFrame = window.requestAnimationFrame(() => {
        parallaxFrame = 0;
        applyParallax(pointerX, pointerY);
      });
    };

    const handlePointerMove = (event) => {
      const pointerX = (event.clientX / window.innerWidth - 0.5) * 2;
      const pointerY = (event.clientY / window.innerHeight - 0.5) * 2;
      scheduleParallax(pointerX, pointerY);
    };

    const handleScroll = () => {
      scheduleParallax();
    };

    applyParallax();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      if (parallaxFrame) {
        window.cancelAnimationFrame(parallaxFrame);
      }
      revealElements.forEach((element) => {
        element.classList.remove("motion-reveal");
        element.classList.remove("is-visible");
      });
      staggerChildren.forEach((child) => {
        child.style.removeProperty("--stagger-delay");
      });
      parallaxElements.forEach((element) => {
        element.style.removeProperty("--parallax-x");
        element.style.removeProperty("--parallax-y");
        element.style.removeProperty("--parallax-rotate");
      });
    };
  }, [prefersReducedMotion, routeKey]);
}
