import { GridLayout } from "@/types/gallery";

interface GalleryNavigationProps {
  currentLayout: number;
  onLayoutChange: (layoutId: number) => void;
  isAutoPlay: boolean;
  onAutoPlayToggle: () => void;
  layouts: GridLayout[];
  breakpoint: "mobile" | "tablet" | "desktop";
}

const LayoutPreview = ({
  layout,
  isActive,
  breakpoint,
}: {
  layout: GridLayout;
  isActive: boolean;
  breakpoint: "mobile" | "tablet" | "desktop";
}) => {
  const getPreviewGrid = () => {
    switch (breakpoint) {
      case "mobile":
        return {
          columns: "repeat(2, 1fr)",
          rows: "repeat(2, 1fr)",
          size: "w-8 h-6",
        };
      case "tablet":
        return {
          columns: "repeat(3, 1fr)",
          rows: "repeat(2, 1fr)",
          size: "w-10 h-7",
        };
      default:
        return {
          columns: "repeat(5, 1fr)",
          rows: layout.id === 5 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
          size: "w-12 h-8",
        };
    }
  };

  const config = getPreviewGrid();

  return (
    <div className={`${config.size} relative`}>
      <div
        className="w-full h-full grid gap-0.5 p-1"
        style={{
          gridTemplateColumns: config.columns,
          gridTemplateRows: config.rows,
        }}
      >
        {layout.positions.map((pos, index) => (
          <div
            key={pos.id}
            className={`bg-brand-primary rounded-sm transition-all duration-200 ${
              isActive ? "opacity-100" : "opacity-60"
            }`}
            style={{ gridArea: pos.gridArea }}
          />
        ))}
      </div>
    </div>
  );
};

export const GalleryNavigation = ({
  currentLayout,
  onLayoutChange,
  isAutoPlay,
  onAutoPlayToggle,
  layouts,
  breakpoint,
}: GalleryNavigationProps) => {
  const buttonSize = breakpoint === "mobile" ? "p-3" : "p-2";

  return (
    <div className="flex items-center justify-center gap-6 mt-8">
      <div className="flex gap-3 flex-wrap justify-center">
        {layouts.map((layout) => (
          <button
            key={layout.id}
            onClick={() => onLayoutChange(layout.id)}
            className={`gallery-nav-button ${buttonSize} ${
              currentLayout === layout.id ? "active" : ""
            }`}
            aria-label={`Switch to ${layout.name} layout`}
          >
            <LayoutPreview
              layout={layout}
              isActive={currentLayout === layout.id}
              breakpoint={breakpoint}
            />
          </button>
        ))}
      </div>

      <div className="w-px h-8 bg-gray-600" />

      <button
        onClick={onAutoPlayToggle}
        className={`gallery-nav-button p-3 ${isAutoPlay ? "active" : ""}`}
        aria-label={isAutoPlay ? "Pause auto-play" : "Start auto-play"}
      >
        <div className="w-4 h-4 flex items-center justify-center">
          {isAutoPlay ? (
            <div className="flex gap-0.5">
              <div className="w-1 h-3 bg-brand-primary rounded-sm" />
              <div className="w-1 h-3 bg-brand-primary rounded-sm" />
            </div>
          ) : (
            <div className="w-0 h-0 border-l-[6px] border-r-0 border-t-[4px] border-b-[4px] border-l-brand-primary border-t-transparent border-b-transparent" />
          )}
        </div>
      </button>
    </div>
  );
};
