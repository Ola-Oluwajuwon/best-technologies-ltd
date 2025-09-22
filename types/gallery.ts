export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio?: number;
}

export interface GridLayout {
  id: number;
  name: string;
  positions: GridPosition[];
}

export interface GridPosition {
  id: string;
  gridArea: string;
  aspectRatio: number;
}

export interface AnimationState {
  currentLayout: number;
  isTransitioning: boolean;
  autoPlay: boolean;
}
