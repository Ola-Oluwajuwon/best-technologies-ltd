"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { GalleryImage, AnimationState } from "@/types/gallery";
import { MOBILE_LAYOUTS, TABLET_LAYOUTS, DESKTOP_LAYOUTS } from "./GridLayouts";
import { GalleryNavigation } from "./GalleryNavigation";
import { useBreakpoint } from "@/hooks/useBreakpoint";

// Team images from the public/gallery directory
const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "1",
    src: "/gallery/team-gallery-01.jpg",
    alt: "Team photo 1",
  },
  {
    id: "2",
    src: "/gallery/team-gallery-02.jpg",
    alt: "Team photo 2",
  },
  {
    id: "3",
    src: "/gallery/team-gallery-03.jpg",
    alt: "Team photo 3",
  },
  {
    id: "4",
    src: "/gallery/team-gallery-04.jpg",
    alt: "Team photo 4",
  },
  {
    id: "5",
    src: "/gallery/team-gallery-05.jpg",
    alt: "Team photo 5",
  },
  {
    id: "6",
    src: "/gallery/team-gallery-06.jpg",
    alt: "Team photo 6",
  },
  {
    id: "7",
    src: "/gallery/team-gallery-07.jpg",
    alt: "Team photo 7",
  },
  {
    id: "8",
    src: "/gallery/team-gallery-08.jpg",
    alt: "Team photo 8",
  },
];

export const AnimatedGallery = () => {
  const breakpoint = useBreakpoint();

  const [animationState, setAnimationState] = useState<AnimationState>({
    currentLayout: 1,
    isTransitioning: false,
    autoPlay: true,
  });

  const [imageMapping, setImageMapping] = useState<Map<string, GalleryImage>>(
    new Map()
  );
  const autoPlayTimer = useRef<NodeJS.Timeout | null>(null);
  const pauseTimer = useRef<NodeJS.Timeout | null>(null);

  // Get appropriate layouts based on screen size
  const getCurrentLayouts = () => {
    switch (breakpoint) {
      case "mobile":
        return MOBILE_LAYOUTS;
      case "tablet":
        return TABLET_LAYOUTS;
      default:
        return DESKTOP_LAYOUTS;
    }
  };

  const currentLayouts = getCurrentLayouts();

  // Get grid configuration based on breakpoint
  const getGridConfig = () => {
    switch (breakpoint) {
      case "mobile":
        return {
          columns: "repeat(2, 1fr)",
          rows: "repeat(2, 1fr)",
          height: "400px",
          gap: "0.5rem",
        };
      case "tablet":
        return {
          columns: "repeat(3, 1fr)",
          rows: "repeat(2, 1fr)",
          height: "500px",
          gap: "0.75rem",
        };
      default:
        return {
          columns: "repeat(5, 1fr)",
          rows:
            animationState.currentLayout === 5
              ? "repeat(3, 1fr)"
              : "repeat(2, 1fr)",
          height: "600px",
          gap: "1rem",
        };
    }
  };

  // Reset to first layout when breakpoint changes
  useEffect(() => {
    setAnimationState((prev) => ({ ...prev, currentLayout: 1 }));
  }, [breakpoint]);

  // Initialize image mapping for first layout
  useEffect(() => {
    const firstLayout = currentLayouts[0];
    const initialMapping = new Map<string, GalleryImage>();

    firstLayout.positions.forEach((pos, index) => {
      if (GALLERY_IMAGES[index]) {
        initialMapping.set(pos.id, GALLERY_IMAGES[index]);
      }
    });

    setImageMapping(initialMapping);
  }, [currentLayouts]);

  // Auto-play functionality
  useEffect(() => {
    if (!animationState.autoPlay || animationState.isTransitioning) return;

    autoPlayTimer.current = setTimeout(() => {
      handleLayoutChange(
        (animationState.currentLayout % currentLayouts.length) + 1
      );
    }, 4500);

    return () => {
      if (autoPlayTimer.current) {
        clearTimeout(autoPlayTimer.current);
        autoPlayTimer.current = null;
      }
    };
  }, [
    animationState.currentLayout,
    animationState.autoPlay,
    animationState.isTransitioning,
    currentLayouts,
  ]);

  const handleLayoutChange = useCallback((newLayoutId: number) => {
    if (
      animationState.isTransitioning ||
      newLayoutId === animationState.currentLayout
    )
      return;

    setAnimationState((prev) => ({ ...prev, isTransitioning: true }));

    const currentLayout = currentLayouts.find(
      (l) => l.id === animationState.currentLayout
    );
    const newLayout = currentLayouts.find((l) => l.id === newLayoutId);

    if (!currentLayout || !newLayout) return;

    // Create new mapping with intelligent image positioning
    const newMapping = new Map<string, GalleryImage>();
    const usedImages = new Set<string>();

    // First, try to maintain some images from current positions
    let imageIndex = 0;
    newLayout.positions.forEach((newPos, index) => {
      const currentImage = Array.from(imageMapping.values())[
        index % imageMapping.size
      ];
      if (currentImage && !usedImages.has(currentImage.id)) {
        newMapping.set(newPos.id, currentImage);
        usedImages.add(currentImage.id);
      } else {
        // Find next available image
        while (
          imageIndex < GALLERY_IMAGES.length &&
          usedImages.has(GALLERY_IMAGES[imageIndex].id)
        ) {
          imageIndex++;
        }
        if (imageIndex < GALLERY_IMAGES.length) {
          newMapping.set(newPos.id, GALLERY_IMAGES[imageIndex]);
          usedImages.add(GALLERY_IMAGES[imageIndex].id);
          imageIndex++;
        }
      }
    });

    // Apply new mapping with transition
    setTimeout(() => {
      setImageMapping(newMapping);
      setAnimationState((prev) => ({
        ...prev,
        currentLayout: newLayoutId,
        isTransitioning: false,
      }));
    }, 100);
  }, [animationState.isTransitioning, animationState.currentLayout, currentLayouts, imageMapping]);

  const handleAutoPlayToggle = () => {
    setAnimationState((prev) => ({ ...prev, autoPlay: !prev.autoPlay }));
  };

  const pauseAutoPlay = () => {
    setAnimationState((prev) => ({ ...prev, autoPlay: false }));

    // Clear existing pause timer
    if (pauseTimer.current) {
      clearTimeout(pauseTimer.current);
      pauseTimer.current = null;
    }

    // Resume auto-play after 3 seconds of inactivity
    pauseTimer.current = setTimeout(() => {
      setAnimationState((prev) => ({ ...prev, autoPlay: true }));
    }, 3000);
  };

  const currentLayout = currentLayouts.find(
    (l) => l.id === animationState.currentLayout
  );
  const gridConfig = getGridConfig();

  if (!currentLayout) return null;

  return (
    <div className="gallery-container py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Team Gallery</h2>
          <p className="text-xl text-gray-300">
            Get to know our amazing team through this interactive gallery
          </p>
        </div>

        <div
          className="relative w-full mx-auto mb-8 overflow-hidden rounded-2xl"
          onMouseEnter={pauseAutoPlay}
          style={{
            display: "grid",
            gridTemplateColumns: gridConfig.columns,
            gridTemplateRows: gridConfig.rows,
            gap: gridConfig.gap,
            height: gridConfig.height,
          }}
        >
          {currentLayout.positions.map((position) => {
            const image = imageMapping.get(position.id);

            if (!image) return null;

            return (
              <div
                key={`${position.id}-${animationState.currentLayout}`}
                className="gallery-grid-item"
                style={{
                  gridArea: position.gridArea,
                  animation: animationState.isTransitioning
                    ? "gallery-morph 800ms cubic-bezier(0.65, 0, 0.35, 1)"
                    : undefined,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  priority={true}
                  width={500}
                  height={500}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </div>

        <GalleryNavigation
          currentLayout={animationState.currentLayout}
          onLayoutChange={handleLayoutChange}
          isAutoPlay={animationState.autoPlay}
          onAutoPlayToggle={handleAutoPlayToggle}
          layouts={currentLayouts}
          breakpoint={breakpoint}
        />
      </div>
    </div>
  );
};
