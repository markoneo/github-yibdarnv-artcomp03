function WindTurbine({ x, y, speed }: { x: string; y: string; speed: 1 | 2 | 3 }) {
  const animClass = speed === 1 ? "animate-turbine-1" : speed === 2 ? "animate-turbine-2" : "animate-turbine-3";
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {/* Tower */}
      <div className="absolute w-[2px] h-10 md:h-14 bg-[#7ab89a]/60 left-1/2 -translate-x-1/2 top-3 md:top-4" />
      {/* Blades */}
      <svg viewBox="0 0 48 48" className="relative w-10 h-10 md:w-14 md:h-14">
        <g className={animClass} style={{ transformOrigin: "24px 24px" }}>
          <line x1="24" y1="24" x2="24" y2="4" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="41" y2="34" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="7" y2="34" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="2.5" fill="#5ea87e" />
        </g>
      </svg>
    </div>
  );
}

function Leaf({ x, y, animClass, size = "md" }: { x: string; y: string; animClass: string; size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-7 h-7 md:w-8 md:h-8" : "w-5 h-5 md:w-6 md:h-6";
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`absolute ${dims} ${animClass}`} style={{ left: x, top: y }}>
      <path d="M12 3C7 3 3 7 3 12C7 12 12 7 12 3Z" fill="#4aba8a" opacity="0.7" />
      <path d="M12 3C17 3 21 7 21 12C17 12 12 7 12 3Z" fill="#3a9a6a" opacity="0.6" />
      <line x1="12" y1="3" x2="12" y2="14" stroke="#3a9a6a" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function Butterfly({ x, y, animClass }: { x: string; y: string; animClass: string }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" className={`absolute w-6 h-6 md:w-8 md:h-8 ${animClass}`} style={{ left: x, top: y }}>
      <path d="M15 15C11 10 5 8 5 12C5 16 11 17 15 15Z" fill="#e8943a" opacity="0.7" />
      <path d="M15 15C19 10 25 8 25 12C25 16 19 17 15 15Z" fill="#e8943a" opacity="0.7" />
      <path d="M15 15C13 19 11 23 13 23C15 23 15 19 15 15Z" fill="#d4832f" opacity="0.55" />
      <path d="M15 15C17 19 19 23 17 23C15 23 15 19 15 15Z" fill="#d4832f" opacity="0.55" />
      <circle cx="15" cy="13" r="1" fill="#c47020" opacity="0.6" />
    </svg>
  );
}

function Cloud({ x, y, animClass, size = "md" }: { x: string; y: string; animClass: string; size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-16 h-8" : size === "lg" ? "w-28 h-12 md:w-36 md:h-14" : "w-20 h-10 md:w-24 md:h-10";
  return (
    <svg viewBox="0 0 80 35" fill="none" className={`absolute ${dims} ${animClass}`} style={{ left: x, top: y }}>
      <ellipse cx="40" cy="22" rx="28" ry="12" fill="#a8cdb8" opacity="0.35" />
      <ellipse cx="28" cy="16" rx="18" ry="11" fill="#b5d6c3" opacity="0.3" />
      <ellipse cx="52" cy="18" rx="16" ry="10" fill="#b0d2be" opacity="0.32" />
    </svg>
  );
}

export default function HeroAnimations() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2]" aria-hidden="true">
      {/* Wind turbines */}
      <WindTurbine x="8%" y="55%" speed={1} />
      <WindTurbine x="15%" y="45%" speed={2} />
      <WindTurbine x="82%" y="48%" speed={3} />

      {/* Floating leaves scattered around */}
      <Leaf x="5%" y="35%" animClass="animate-leaf-1" size="lg" />
      <Leaf x="20%" y="22%" animClass="animate-leaf-2" size="md" />
      <Leaf x="75%" y="28%" animClass="animate-leaf-3" size="lg" />
      <Leaf x="88%" y="40%" animClass="animate-leaf-4" size="md" />
      <Leaf x="42%" y="18%" animClass="animate-leaf-1" size="sm" />
      <Leaf x="62%" y="60%" animClass="animate-leaf-2" size="md" />
      <Leaf x="30%" y="65%" animClass="animate-leaf-3" size="sm" />
      <Leaf x="92%" y="55%" animClass="animate-leaf-4" size="lg" />

      {/* Butterflies */}
      <Butterfly x="70%" y="25%" animClass="animate-butterfly-1" />
      <Butterfly x="25%" y="55%" animClass="animate-butterfly-2" />
      <Butterfly x="55%" y="68%" animClass="animate-butterfly-1" />

      {/* Clouds drifting across top */}
      <Cloud x="2%" y="8%" animClass="animate-cloud-1" size="lg" />
      <Cloud x="55%" y="5%" animClass="animate-cloud-2" size="md" />
      <Cloud x="30%" y="12%" animClass="animate-cloud-3" size="lg" />
      <Cloud x="78%" y="10%" animClass="animate-cloud-1" size="sm" />
    </div>
  );
}
