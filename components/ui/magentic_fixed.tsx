import React, { memo, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { cn, isDesktop } from "@/lib/utils";

interface MagenticProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  strength?: number;
  hoverUnderline?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  scrambleParams?:
    | {
        text: string;
        chars?: string;
        speed?: number;
      }
    | {
        text: string;
        chars?: string;
        speed?: number;
      }[];
  asDiv?: boolean; // Use a div instead of an anchor when true
}

const Magentic = ({
  children,
  className,
  href,
  onMouseEnter,
  onMouseLeave,
  onClick,
  scrambleParams,
  hoverUnderline = false,
  strength = 100,
  asDiv = false,
  ...rest
}: MagenticProps) => {
  const magnet = useRef<HTMLElement>(null);

  useEffect(() => {
    if (magnet.current === null) {
      return;
    }

    const magnetElement = magnet.current;
    const shapka = magnetElement.querySelector(".shapka");

    if (isDesktop()) {
      magnetElement.addEventListener("mousemove", handleMagnetMove);
      magnetElement.addEventListener("mouseout", handleMagnetOut);
    }
    function handleMagnetOut(event: MouseEvent) {
      gsap.to([magnetElement, shapka], {
        x: 0,
        y: 0,
        ease: "elastic.out(1,0.4)",
        duration: 1.5,
      });
    }

    function handleMagnetMove(event: MouseEvent) {
      const bounding = magnetElement.getBoundingClientRect();
      const magneticWidth =
        (event.clientX - bounding.left) / magnetElement.offsetWidth - 0.5;
      const magneticHeight =
        (event.clientY - bounding.top) / magnetElement.offsetHeight - 0.5;

      gsap.to(magnetElement, {
        x: magneticWidth * strength,
        y: magneticHeight * strength,
        ease: "power2.out",
        duration: 1,
      });

      if (shapka) {
        gsap.to(shapka, {
          x: magneticWidth * (strength / 2),
          y: magneticHeight * (strength / 2),
          ease: "power2.out",
          duration: 1,
        });
      }
    }

    return () => {
      magnetElement.removeEventListener("mousemove", handleMagnetMove);
      magnetElement.removeEventListener("mouseout", handleMagnetOut);
    };
  }, [strength]);

  function handleScramble(
    scrambleParams: {
      text: string;
      chars?: string;
      speed?: number;
    },
    scrambleEl: HTMLElement,
  ) {
    if (typeof window !== "undefined" && (window as any).ScrambleTextPlugin) {
      gsap.set(scrambleEl, {
        width: scrambleEl?.clientWidth,
      });
      gsap
        .to(scrambleEl, {
          scrambleText: scrambleParams,
          duration: 0.8,
          ease: "power3.out",
        })
        .progress(0.04);
    }
  }

  // Handle mouse enter and potential text scramble effects
  const handleMouseEnterEffect = () => {
    if (scrambleParams && magnet.current) {
      const magnetElement = magnet.current;
      if (typeof window !== "undefined" && (window as any).ScrambleTextPlugin) {
        gsap.registerPlugin((window as any).ScrambleTextPlugin);
      }

      const scrambleEl = magnetElement.querySelectorAll(".scrambleText");
      if (scrambleParams instanceof Array) {
        scrambleParams.forEach((param, i) => {
          handleScramble(
            { speed: 0.1, chars: "-x", ...param },
            scrambleEl[i] as HTMLElement,
          );
        });
      } else {
        handleScramble(
          { speed: 0.1, chars: "-x", ...scrambleParams },
          scrambleEl[0] as HTMLElement,
        );
      }
    }
    onMouseEnter?.();
  };

  // Shared styles and handlers for both div and anchor
  const sharedProps = {
    className: cn(
      "flex justify-center *:pointer-events-none",
      hoverUnderline
        ? "before:absolute before:bottom-0 before:h-0.5 before:w-0 before:origin-center before:bg-[#a3a3a3] before:transition-all before:duration-300 hover:before:w-full"
        : "",
      className
    ),
    onMouseEnter: handleMouseEnterEffect,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    ...rest
  };

  // Render as a div if asDiv is true
  if (asDiv) {
    return (
      <div 
        ref={magnet as React.RefObject<HTMLDivElement>} 
        {...sharedProps}
      >
        {children}
      </div>
    );
  }

  // If href exists, render as an anchor
  if (href) {
    if (href.startsWith("#") || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      // External link or hash link
      return (
        <a 
          href={href}
          ref={magnet as React.RefObject<HTMLAnchorElement>} 
          {...sharedProps}
        >
          {children}
        </a>
      );
    } else {
      // Internal link - use Next.js Link
      return (
        <Link 
          href={href}
          ref={magnet as React.RefObject<HTMLAnchorElement>} 
          {...sharedProps}
        >
          {children}
        </Link>
      );
    }
  }
  
  // Default to button if no href
  return (
    <button 
      ref={magnet as React.RefObject<HTMLButtonElement>} 
      type="button"
      {...sharedProps}
    >
      {children}
    </button>
  );
};

export default memo(Magentic);
