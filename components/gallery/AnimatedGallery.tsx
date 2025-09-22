"use client";

import { useState, useEffect, useRef } from "react";
import { GalleryImage, AnimationState } from "@/types/gallery";
import { GRID_LAYOUTS } from "./GridLayouts";
import { GalleryNavigation } from "./GalleryNavigation";

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

  // Initialize image mapping for first layout
  useEffect(() => {
    const firstLayout = GRID_LAYOUTS[0];
    const initialMapping = new Map<string, GalleryImage>();

    firstLayout.positions.forEach((pos, index) => {
      if (GALLERY_IMAGES[index]) {
        initialMapping.set(pos.id, GALLERY_IMAGES[index]);
      }
    });

    setImageMapping(initialMapping);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!animationState.autoPlay || animationState.isTransitioning) return;

    autoPlayTimer.current = setTimeout(() => {
      handleLayoutChange(
        (animationState.currentLayout % GRID_LAYOUTS.length) + 1
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
  ]);

  const handleLayoutChange = (newLayoutId: number) => {
    if (
      animationState.isTransitioning ||
      newLayoutId === animationState.currentLayout
    )
      return;

    setAnimationState((prev) => ({ ...prev, isTransitioning: true }));

    const currentLayout = GRID_LAYOUTS.find(
      (l) => l.id === animationState.currentLayout
    );
    const newLayout = GRID_LAYOUTS.find((l) => l.id === newLayoutId);

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
  };

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

  const currentLayout = GRID_LAYOUTS.find(
    (l) => l.id === animationState.currentLayout
  );

  if (!currentLayout) return null;

  return (
    <div className="gallery-container py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
            Team Gallery
          </h2>
          <p className="text-xl text-gray-300">
            Get to know our amazing team through this interactive gallery
          </p>
        </div>

        <div
          className="relative w-full h-[600px] mx-auto mb-8 overflow-hidden rounded-2xl"
          onMouseEnter={pauseAutoPlay}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridTemplateRows:
              animationState.currentLayout === 5
                ? "repeat(3, 1fr)"
                : "repeat(2, 1fr)",
            gap: "1rem",
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
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="eager"
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
        />
      </div>
    </div>
  );
};
