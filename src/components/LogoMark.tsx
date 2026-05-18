export function LogoMark() {
  return (
    <svg
      className="logo-mark"
      viewBox="0 0 64 64"
      role="img"
      aria-label="Kenneth Rios logo"
    >
      <g className="logo-edges">
        <line x1="32" y1="32" x2="32" y2="8" />
        <line x1="32" y1="32" x2="32" y2="56" />
        <line x1="32" y1="32" x2="10" y2="20" />
        <line x1="32" y1="32" x2="54" y2="20" />
        <line x1="32" y1="32" x2="10" y2="44" />
        <line x1="32" y1="32" x2="54" y2="44" />
      </g>
      <circle className="logo-node logo-node-satellite" cx="32" cy="8" r="4" />
      <circle className="logo-node logo-node-satellite" cx="32" cy="56" r="4" />
      <circle className="logo-node logo-node-satellite" cx="10" cy="20" r="4" />
      <circle className="logo-node logo-node-satellite" cx="54" cy="20" r="4" />
      <circle className="logo-node logo-node-satellite" cx="10" cy="44" r="4" />
      <circle className="logo-node logo-node-satellite" cx="54" cy="44" r="4" />
      <circle className="logo-node logo-node-core" cx="32" cy="32" r="7" />
      <circle className="logo-node logo-node-core-inner" cx="32" cy="32" r="2.5" />
    </svg>
  );
}
