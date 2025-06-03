const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";

const COLORS = {
  darkBlue: "var(--color-darkBlue)",
  deepTeal: "var(--color-deepTeal)",
  navy: "var(--color-primary)",
  lime: "var(--color-teriary)",
  teal: "var(--color-secondary)",
  gold: "var(--color-accent)",
  beige: "var(--color-beige)",
  kellyGreen: "#00B140",
};

const HEX_SIZE = 120;
const HEX_HORIZ_SPACING = HEX_SIZE * 0.8325;
const HEX_VERT_SPACING = HEX_SIZE * 0.7;

const HexagonOutline = ({ width, height, color, strokeWidth = 3, style }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className="absolute"
    style={style}
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

function renderHexGrid({ colCounts = [3, 3, 3, 3, 3], side = "right" }) {
  const hexes = [];

  for (let row = 0; row < colCounts.length; row++) {
    const cols = colCounts[row];
    for (let col = 0; col < cols; col++) {
      const offset = row % 2 === 0 ? 0 : HEX_HORIZ_SPACING / 2;
      const top = row * HEX_VERT_SPACING;
      const sidePos = col * HEX_HORIZ_SPACING + offset;

      const style =
        side === "right"
          ? {
              top: `${top}px`,
              right: `calc(-${HEX_SIZE / 2}px + ${sidePos}px)`,
            }
          : {
              top: `${top}px`,
              left: `calc(-${HEX_SIZE / 2}px + ${sidePos}px)`,
            };

      hexes.push(
        <HexagonOutline
          key={`${side}-outline-${row}-${col}`}
          width={HEX_SIZE}
          height={HEX_SIZE}
          color="beige"
          strokeWidth={2}
          style={style}
        />
      );
    }
  }

  return hexes;
}

function renderFixedFills(side) {
  const config = {
    left: [
      { top: 80, left: 10, size: 200, color: "teal", rotate: true },
      { top: 50, left: 130, size: 150, color: "lime", rotate: true },
      { top: 160, left: -120, size: 250, color: "gold", rotate: false },
      { top: 200, left: 100, size: 120, color: "beige", rotate: false },

      { top: 350, left: 20, size: 120, color: "kellyGreen", rotate: false },
    ],
    right: [
      { top: 180, right: 100, size: 90, color: "beige", rotate: false },
      { top: 270, right: 100, size: 140, color: "beige", rotate: false },

      { top: 70, right: -40, size: 170, color: "gold", rotate: true },
      { top: 60, right: 60, size: 160, color: "teal", rotate: true },
      { top: 190, right: 20, size: 120, color: "navy", rotate: false },
      { top: 260, right: -90, size: 230, color: "lime", rotate: true },
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
}

const CornerHexagons = () => (
  <>
    {/* Left side */}
    <div className="fixed top-0 left-0 z-0 pointer-events-none w-[700px] h-[1000px]">
      {renderHexGrid({
        colCounts: [4, 4, 3, 2, 2, 2, 2, 1], // Adjust columns per row here
        side: "left",
      })}
      {renderFixedFills("left")}
    </div>

    {/* Right side */}
    <div className="fixed top-0 right-0 z-0 pointer-events-none w-[700px] h-[1000px]">
      {renderHexGrid({
        colCounts: [4, 3, 3, 2, 3, 1, 2, 1], // Adjust columns per row here
        side: "right",
      })}
      {renderFixedFills("right")}
    </div>
  </>
);

export default CornerHexagons;
