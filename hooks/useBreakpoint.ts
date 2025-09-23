import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const BREAKPOINTS = {
  mobile: 640, // 0-639px
  tablet: 1024, // 640-1023px
  desktop: 1024, // 1024px+
};

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  useEffect(() => {
    const getBreakpoint = (): Breakpoint => {
      const width = window.innerWidth;
      if (width < BREAKPOINTS.mobile) return "mobile";
      if (width < BREAKPOINTS.tablet) return "tablet";
      return "desktop";
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    // Set initial breakpoint
    setBreakpoint(getBreakpoint());

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
