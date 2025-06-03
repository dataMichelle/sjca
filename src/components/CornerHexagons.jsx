const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";

const Hexagon = ({ width, height, className, color, style }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className={className}
    style={style}
  >
    <polygon points={hexPoints} fill={COLORS[color] || color} />
  </svg>
);

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

const HEX_SIZE = 120;
const HEX_HORIZ_SPACING = HEX_SIZE * 0.8325;
const HEX_VERT_SPACING = HEX_SIZE * 0.7;

function renderHexGrid({
  startTop = 0,
  startSide = 0,
  rowCount = 10,
  colCount = 4,
  side = "right",
}) {
  const hexes = [];
  const totalHexes = rowCount * colCount;
  const colorKeys = Object.keys(COLORS).filter((c) => c !== "beige");

  // Shuffle available color keys and take a few
  const shuffledColors = [...colorKeys].sort(() => 0.5 - Math.random());
  const filledHexCount = Math.min(
    shuffledColors.length,
    Math.floor(totalHexes * 0.2)
  ); // Fill ~20%
  const fillMap = new Map();

  // Randomly choose distinct hex positions to fill
  const filledIndexes = new Set();
  while (filledIndexes.size < filledHexCount) {
    const rand = Math.floor(Math.random() * totalHexes);
    filledIndexes.add(rand);
  }

  let hexIndex = 0;
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      const offset = row % 2 === 0 ? 0 : HEX_HORIZ_SPACING / 2;
      const top = startTop + row * HEX_VERT_SPACING;
      const sidePos = startSide + col * HEX_HORIZ_SPACING + offset;

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

      if (filledIndexes.has(hexIndex)) {
        const color = shuffledColors.pop(); // guarantee no repeats
        hexes.push(
          <Hexagon
            key={`${side}-fill-${row}-${col}`}
            width={HEX_SIZE}
            height={HEX_SIZE}
            color={color}
            style={style}
            className="absolute"
          />
        );
      } else {
        hexes.push(
          <HexagonOutline
            key={`${side}-outline-${row}-${col}`}
            width={HEX_SIZE}
            height={HEX_SIZE}
            color="beige"
            strokeWidth={3}
            style={style}
          />
        );
      }

      hexIndex++;
    }
  }

  return hexes;
}

const CornerHexagons = () => (
  <>
    <div className="fixed top-0 left-0 z-0 pointer-events-none w-[700px] h-[1000px]">
      {renderHexGrid({
        rowCount: 5,
        colCount: 3,
        side: "left",
      })}
    </div>
    <div className="fixed top-0 right-0 z-0 pointer-events-none w-[700px] h-[1000px]">
      {renderHexGrid({
        rowCount: 5,
        colCount: 3,
        side: "right",
      })}
    </div>
  </>
);

export default CornerHexagons;
