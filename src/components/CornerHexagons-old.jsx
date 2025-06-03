const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";

// Color mapping with descriptive color names
const COLORS = {
  darkBlue: "var(--color-darkBlue)", // #23446d
  deepTeal: "var(--color-deepTeal)", // #006f7f
  navy: "var(--color-primary)", // #004651
  lime: "var(--color-teriary)", // #a4e473
  teal: "var(--color-secondary)", // #00a181
  gold: "var(--color-accent)", // #d8b829
  beige: "var(--color-beige)", // #f2ece7
  kellyGreen: "#00B140", // Kelly Green (custom)
};

const Hexagon = ({ width, height, className, color, rotate }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className={className}
    style={rotate ? { transform: "rotate(90deg)" } : undefined}
  >
    <polygon points={hexPoints} fill={COLORS[color] || color} />
  </svg>
);

const HexagonOutline = ({
  width,
  height,
  className,
  color,
  strokeWidth = 2,
  rotate,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 100 100"
    className={className}
    style={rotate ? { transform: "rotate(90deg)" } : undefined}
  >
    <polygon
      points={hexPoints}
      fill="none"
      stroke={COLORS[color] || color}
      strokeWidth={strokeWidth}
    />
  </svg>
);

const CornerHexagons = () => (
  <>
    {/* Top Left Cluster */}
    <div className="fixed top-[60px] left-[-100px] z-0 pointer-events-none">
      {/* Large Hexagon - lime */}
      <Hexagon width={180} height={180} color="lime" />

      {/* Large Hexagon - gold */}
      <Hexagon
        width={250}
        height={250}
        color="gold"
        className="absolute top-[-40px] left-[110px]"
        rotate
      />

      {/* Medium Hexagon - teal */}
      <Hexagon
        width={250}
        height={250}
        color="teal"
        className="absolute top-[100px] left-[30px]"
        rotate
      />

      {/* Beige large (further down) */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[260px] left-[80px]"
      />
    </div>

    {/* Top Right Cluster */}
    <div className="fixed top-[10px] right-[-110px] z-0 pointer-events-none">
      {/* Large Hexagon - lime */}
      <Hexagon
        width={350}
        height={350}
        color="lime"
        className="absolute top-[30px] right-[20px]"
        rotate
      />
      {/* Medium Hexagon - deepTeal */}
      <Hexagon
        width={200}
        height={200}
        color="deepTeal"
        className="absolute top-[0px] right-[180px]"
        rotate
      />
      {/* Small Hexagon - Kelly Green */}
      <Hexagon
        width={150}
        height={150}
        color="kellyGreen"
        className="absolute top-[280px] right-[50px]"
      />
      {/* Medium Hexagon near navbar- beige */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[60px] right-[300px]"
      />
      {/* Beige large (further down) */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[250px] right-[170px]"
      />
      {/* Gold hexagon higher up */}
      <Hexagon
        width={90}
        height={90}
        color="gold"
        className="absolute top-[40px] right-[20px]"
      />
      {/* Beige small (scattered lower) */}
      <Hexagon
        width={80}
        height={80}
        color="beige"
        className="absolute top-[370px] right-[120px]"
      />
    </div>
  </>
);

export default CornerHexagons;
