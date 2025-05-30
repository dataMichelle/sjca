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

const CornerHexagons = () => (
  <>
    {/* Top Left Cluster */}
    <div className="fixed top-[70px] left-[-80px] z-0 pointer-events-none">
      {/* Large Hexagon - lime */}
      <Hexagon width={180} height={180} color="lime" />

      {/* Small Hexagon - gold */}
      <Hexagon
        width={150}
        height={150}
        color="gold"
        className="absolute top-[10px] left-[110px]"
        rotate
      />
      {/* Beige small (mixed in) */}
      <Hexagon
        width={60}
        height={60}
        color="beige"
        className="absolute top-[100px] left-[160px]"
      />
      {/* Medium Hexagon - teal */}
      <Hexagon
        width={140}
        height={140}
        color="teal"
        className="absolute top-[110px] left-[90px]"
        rotate
      />
      {/* Beige medium (mixed in, a bit lower) */}
      <Hexagon
        width={90}
        height={90}
        color="beige"
        className="absolute top-[250px] left-[130px]"
      />
      {/* Small Hexagon - lime */}
      <Hexagon
        width={90}
        height={90}
        color="kellyGreen"
        className="absolute top-[230px] left-[40px]"
      />
      {/* Beige large (further down) */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[150px] left-[20px]"
      />
    </div>

    {/* Top Right Cluster */}
    <div className="fixed top-[30px] right-[-80px] z-0 pointer-events-none">
      {/* Large Hexagon - gold */}
      <Hexagon
        width={130}
        height={130}
        color="lime"
        className="absolute top-[130px] right-[50px]"
        rotate
      />
      {/* Medium Hexagon - deepTeal */}
      <Hexagon
        width={200}
        height={200}
        color="deepTeal"
        className="absolute top-[30px] right-[100px] "
        rotate
      />
      {/* Small Hexagon - Kelly Green */}
      <Hexagon
        width={150}
        height={150}
        color="kellyGreen"
        className="absolute top-[40px] right-[30px]"
      />
      {/* Medium Hexagon near navbar- beige */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[40px] right-[240px]"
      />
      {/* Beige large (further down) */}
      <Hexagon
        width={120}
        height={120}
        color="beige"
        className="absolute top-[150px] right-[120px]"
      />
      <Hexagon
        width={90}
        height={90}
        color="gold"
        className="absolute top-[220px] right-[40px]"
      />
      <Hexagon
        width={80}
        height={80}
        color="beige"
        className="absolute top-[300px] right-[80px]"
      />
    </div>
  </>
);

export default CornerHexagons;
