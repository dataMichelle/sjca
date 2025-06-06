import { useState, useEffect } from "react";
const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";

const COLORS = {
  darkBlue: "var(--color-darkBlue)",
  deepTeal: "var(--color-deepTeal)",
  navy: "var(--color-primary)",
  lime: "var(--color-tertiary)",
  teal: "var(--color-secondary)",
  gold: "var(--color-accent)",
  beige: "var(--color-beige)",
  kellyGreen: "#00B140",
};

const getHexSize = () => {
  if (typeof window === "undefined") return 120;
  if (window.innerWidth < 768) return 0; // hide on mobile
  if (window.innerWidth < 1500) return 70; // shrink for <1500px
  return 120; // default
};

const HexagonOutline = ({ width, height, color, strokeWidth = 3, style }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className="absolute"
    style={style}
    aria-hidden="true"
    focusable="false"
    role="presentation"
  >
    <polygon
      points={hexPoints}
      fill="none"
      stroke={COLORS[color] || color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

const Hexagon = ({
  width,
  height,
  color,
  className,
  style,
  rotate = false,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    aria-hidden="true"
    focusable="false"
    className={className}
    style={{
      ...style,
      transform: rotate ? "rotate(90deg)" : undefined,
      transformOrigin: "center",
    }}
  >
    <polygon points={hexPoints} fill={COLORS[color] || color} />
  </svg>
);

function renderHexGrid({
  colCounts = [3, 3, 3, 3, 3],
  side = "right",
  hexSize,
  horizSpacing,
  vertSpacing,
}) {
  const hexes = [];

  for (let row = 0; row < colCounts.length; row++) {
    const cols = colCounts[row];
    for (let col = 0; col < cols; col++) {
      const offset = row % 2 === 0 ? 0 : horizSpacing / 2;
      const top = row * vertSpacing;
      const sidePos = col * horizSpacing + offset;

      const style =
        side === "right"
          ? {
              top: `${top}px`,
              right: `calc(-${hexSize / 2}px + ${sidePos}px)`,
            }
          : {
              top: `${top}px`,
              left: `calc(-${hexSize / 2}px + ${sidePos}px)`,
            };

      hexes.push(
        <HexagonOutline
          key={`${side}-outline-${row}-${col}`}
          width={hexSize}
          height={hexSize}
          color="beige"
          strokeWidth={2}
          style={style}
        />
      );
    }
  }

  return hexes;
}

const renderFixedFills = (side, hexSize) => {
  const isSmall = typeof window !== "undefined" && window.innerWidth < 1500;
  const config = {
    left: [
      { top: 80, left: 10, size: hexSize * 1.7, color: "teal", rotate: true },
      { top: 50, left: 130, size: hexSize * 1.25, color: "lime", rotate: true },
      {
        top: 160,
        left: -120,
        size: hexSize * 2.1,
        color: "gold",
        rotate: false,
      },
      { top: 200, left: 100, size: hexSize, color: "beige", rotate: false },
      // Only show kellyGreen if not small
      ...(!isSmall
        ? [
            {
              top: 350,
              left: 20,
              size: hexSize,
              color: "kellyGreen",
              rotate: false,
            },
          ]
        : []),
    ],
    right: [
      {
        top: 180,
        right: 100,
        size: hexSize * 0.75,
        color: "beige",
        rotate: false,
      },
      // Only show this beige hex if not small
      ...(!isSmall
        ? [
            {
              top: 270,
              right: 100,
              size: hexSize * 1.15,
              color: "beige",
              rotate: false,
            },
          ]
        : []),
      { top: 70, right: -40, size: hexSize * 1.4, color: "gold", rotate: true },
      { top: 60, right: 60, size: hexSize * 1.3, color: "teal", rotate: true },
      { top: 190, right: 20, size: hexSize, color: "navy", rotate: false },
      {
        top: 260,
        right: -90,
        size: hexSize * 1.9,
        color: "lime",
        rotate: true,
      },
    ],
  };

  return config[side].map(
    ({ top, left, right, size, color, rotate = false }, idx) => {
      const style = {
        top: `${top}px`,
        ...(side === "left" ? { left: `${left}px` } : { right: `${right}px` }),
      };
      return (
        <Hexagon
          key={`fill-${side}-${idx}`}
          width={size}
          height={size}
          color={color}
          className="absolute"
          style={style}
          rotate={rotate}
        />
      );
    }
  );
};

const CornerHexagons = () => {
  const [hexSize, setHexSize] = useState(getHexSize());

  useEffect(() => {
    const handleResize = () => setHexSize(getHexSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (hexSize === 0) return null; // hide on mobile

  const HEX_HORIZ_SPACING = hexSize * 0.8325;
  const HEX_VERT_SPACING = hexSize * 0.7;

  return (
    <>
      {/* Left side */}
      <div
        className="
          fixed top-0 left-0 z-0 pointer-events-none w-[700px] h-[1000px]
          max-[1500px]:w-[400px] max-[1500px]:h-[600px]
          max-md:hidden
        "
        aria-hidden="true"
      >
        {renderHexGrid({
          colCounts: [4, 4, 3, 2, 2, 2, 2, 1],
          side: "left",
          hexSize,
          horizSpacing: HEX_HORIZ_SPACING,
          vertSpacing: HEX_VERT_SPACING,
        })}
        {renderFixedFills("left", hexSize)}
      </div>

      {/* Right side */}
      <div
        className="
          fixed top-0 right-0 z-0 pointer-events-none w-[700px] h-[1000px]
          max-[1500px]:w-[400px] max-[1500px]:h-[600px]
          max-md:hidden
        "
        aria-hidden="true"
      >
        {renderHexGrid({
          colCounts: [4, 3, 3, 2, 3, 1, 2, 1],
          side: "right",
          hexSize,
          horizSpacing: HEX_HORIZ_SPACING,
          vertSpacing: HEX_VERT_SPACING,
        })}
        {renderFixedFills("right", hexSize)}
      </div>
    </>
  );
};

export default CornerHexagons;
