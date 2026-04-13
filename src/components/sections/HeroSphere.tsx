const sphereNodes = [
  { top: "16%", left: "21%", delay: "0s" },
  { top: "22%", left: "63%", delay: "1.2s" },
  { top: "35%", left: "14%", delay: "2.1s" },
  { top: "38%", left: "76%", delay: "0.8s" },
  { top: "49%", left: "34%", delay: "1.7s" },
  { top: "56%", left: "68%", delay: "2.8s" },
  { top: "69%", left: "25%", delay: "0.4s" },
  { top: "76%", left: "57%", delay: "1.4s" },
];

const sphereConnections = [
  { width: "22%", top: "20%", left: "21%", rotate: "18deg" },
  { width: "30%", top: "33%", left: "14%", rotate: "10deg" },
  { width: "24%", top: "50%", left: "34%", rotate: "-14deg" },
  { width: "26%", top: "67%", left: "25%", rotate: "8deg" },
  { width: "18%", top: "28%", left: "48%", rotate: "-28deg" },
  { width: "20%", top: "44%", left: "56%", rotate: "22deg" },
  { width: "18%", top: "62%", left: "44%", rotate: "-20deg" },
];

interface HeroSphereProps {
  side?: "left" | "right";
}

const HeroSphere = ({ side = "right" }: HeroSphereProps) => {
  const wrapClass =
    side === "left"
      ? "hero-sphere-wrap hero-sphere-wrap-left absolute inset-y-[-12%] left-[-32%] w-[min(980px,86vw)]"
      : "hero-sphere-wrap hero-sphere-wrap-right absolute inset-y-[-12%] right-[-30%] w-[min(1120px,92vw)]";

  const sceneClass =
    side === "left"
      ? "hero-sphere-scene hero-sphere-scene-left relative aspect-square"
      : "hero-sphere-scene hero-sphere-scene-right relative aspect-square";

  return (
    <div className={`${wrapClass} pointer-events-none select-none`}>
      <div className={sceneClass}>
        <div className="hero-sphere-glow hero-sphere-glow-primary" />
        <div className="hero-sphere-glow hero-sphere-glow-accent" />

        <div className="hero-sphere-core">
          <div className="hero-sphere-shade" />
          <div className="hero-sphere-web hero-sphere-web-fine" />
          <div className="hero-sphere-web hero-sphere-web-bold" />
          <div className="hero-sphere-grid hero-sphere-grid-latitude" />
          <div className="hero-sphere-grid hero-sphere-grid-longitude" />
          <div className="hero-sphere-grid hero-sphere-grid-diagonal" />
          <div className="hero-sphere-highlight" />
          <div className="hero-sphere-shadow" />

          <div className="hero-sphere-points">
            {sphereNodes.map((node, index) => (
              <span
                key={`${node.top}-${node.left}-${index}`}
                className="hero-sphere-node"
                style={{ top: node.top, left: node.left, animationDelay: node.delay }}
              />
            ))}

            {sphereConnections.map((connection, index) => (
              <span
                key={`${connection.top}-${connection.left}-${index}`}
                className="hero-sphere-connection"
                style={{
                  width: connection.width,
                  top: connection.top,
                  left: connection.left,
                  transform: `rotate(${connection.rotate})`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="hero-sphere-ring hero-sphere-ring-outer" />
        <div className="hero-sphere-ring hero-sphere-ring-mid" />
        <div className="hero-sphere-ring hero-sphere-ring-inner" />
        <div className="hero-sphere-scanline" />
      </div>
    </div>
  );
};

export default HeroSphere;
