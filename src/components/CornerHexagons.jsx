const hexPoints = "50,10 84.64,30 84.64,70 50,90 15.36,70 15.36,30";

const CornerHexagons = () => (
  <>
    {/* Top Left Cluster */}
    <div className="fixed top-[50px] left-[-80px] z-0 pointer-events-none">
      {/* Large Hexagon */}
      <svg width="180" height="180" viewBox="0 0 100 100">
        <polygon points={hexPoints} fill="var(--color-darkBlue)" />
      </svg>
      {/* Small Hexagon */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute top-[30px] left-[120px]"
      >
        <polygon points={hexPoints} fill="var(--color-accent)" />
      </svg>
      {/* Medium Hexagon */}
      <svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        className="absolute top-[100px] left-[80px]"
      >
        <polygon points={hexPoints} fill="var(--color-secondary)" />
      </svg>
      {/* Lime Hexagon */}
      <svg
        width="90"
        height="90"
        viewBox="0 0 100 100"
        className="absolute top-[160px] left-[40px]"
      >
        <polygon points={hexPoints} fill="var(--color-teriary)" />
      </svg>
      {/* Extra Hexagon 2 */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        className="absolute top-[10px] left-[200px]"
      >
        <polygon points={hexPoints} fill="var(--color-beige)" />
      </svg>
    </div>

    {/* Top Right Cluster */}
    <div className="fixed top-[50px] right-[-80px] z-0 pointer-events-none">
      {/* Large Hexagon */}
      <svg width="180" height="180" viewBox="0 0 100 100">
        <polygon points={hexPoints} fill="var(--color-primary)" />
      </svg>
      {/* Medium Hexagon */}
      <svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        className="absolute top-[-10px] right-[80px]"
      >
        <polygon points={hexPoints} fill="var(--color-deepTeal)" />
      </svg>
      {/* Small Hexagon */}
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="absolute top-[90px] right-[120px]"
      >
        <polygon points={hexPoints} fill="var(--color-teriary)" />
      </svg>
      {/* Extra Hexagon 1 */}
      <svg
        width="90"
        height="90"
        viewBox="0 0 100 100"
        className="absolute top-[160px] right-[10px]"
      >
        <polygon points={hexPoints} fill="var(--color-beige)" />
      </svg>
      {/* Extra Hexagon 2 */}
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        className="absolute top-[10px] right-[200px]"
      >
        <polygon points={hexPoints} fill="var(--color-darkBlue)" />
      </svg>
    </div>
  </>
);

export default CornerHexagons;
