import { GridLayout } from "@/types/gallery";

export const GRID_LAYOUTS: GridLayout[] = [
  // Layout 1: Single full-width image (hero layout)
  {
    id: 1,
    name: "Hero",
    positions: [
      { id: "pos-1", gridArea: "1 / 1 / 3 / 6", aspectRatio: 16 / 9 },
    ],
  },

  // Layout 2: 2 large rectangles on top + 3 smaller rectangles on bottom
  {
    id: 2,
    name: "Classic",
    positions: [
      { id: "pos-1", gridArea: "1 / 1 / 2 / 3", aspectRatio: 16 / 9 },
      { id: "pos-2", gridArea: "1 / 3 / 2 / 6", aspectRatio: 16 / 9 },
      { id: "pos-3", gridArea: "2 / 1 / 3 / 2", aspectRatio: 4 / 3 },
      { id: "pos-4", gridArea: "2 / 2 / 3 / 4", aspectRatio: 4 / 3 },
      { id: "pos-5", gridArea: "2 / 4 / 3 / 6", aspectRatio: 4 / 3 },
    ],
  },

  // Layout 3: 2 large on top + 3 medium on bottom (all landscape)
  {
    id: 3,
    name: "Balanced",
    positions: [
      { id: "pos-1", gridArea: "1 / 1 / 2 / 3", aspectRatio: 16 / 9 },
      { id: "pos-2", gridArea: "1 / 3 / 2 / 6", aspectRatio: 16 / 9 },
      { id: "pos-3", gridArea: "2 / 1 / 3 / 3", aspectRatio: 16 / 9 },
      { id: "pos-4", gridArea: "2 / 3 / 3 / 5", aspectRatio: 16 / 9 },
      { id: "pos-5", gridArea: "2 / 5 / 3 / 6", aspectRatio: 4 / 3 },
    ],
  },

  // Layout 4: 2 equal large rectangles on top + 3 equal rectangles on bottom
  {
    id: 4,
    name: "Symmetrical",
    positions: [
      { id: "pos-1", gridArea: "1 / 1 / 2 / 4", aspectRatio: 16 / 9 },
      { id: "pos-2", gridArea: "1 / 4 / 2 / 6", aspectRatio: 16 / 9 },
      { id: "pos-3", gridArea: "2 / 1 / 3 / 3", aspectRatio: 4 / 3 },
      { id: "pos-4", gridArea: "2 / 3 / 3 / 4", aspectRatio: 4 / 3 },
      { id: "pos-5", gridArea: "2 / 4 / 3 / 6", aspectRatio: 4 / 3 },
    ],
  },

  // Layout 5: 1 large on left + 2 medium stacked on right + 3 small on bottom
  {
    id: 5,
    name: "Asymmetrical",
    positions: [
      { id: "pos-1", gridArea: "1 / 1 / 3 / 4", aspectRatio: 4 / 3 },
      { id: "pos-2", gridArea: "1 / 4 / 2 / 6", aspectRatio: 16 / 9 },
      { id: "pos-3", gridArea: "2 / 4 / 3 / 6", aspectRatio: 16 / 9 },
      { id: "pos-4", gridArea: "3 / 1 / 4 / 3", aspectRatio: 4 / 3 },
      { id: "pos-5", gridArea: "3 / 3 / 4 / 5", aspectRatio: 4 / 3 },
      { id: "pos-6", gridArea: "3 / 5 / 4 / 6", aspectRatio: 4 / 3 },
    ],
  },
];
