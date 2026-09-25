import { useEffect, useRef, useState } from "react";

function WindTurbine({ x, y, speed }: { x: string; y: string; speed: 1 | 2 | 3 | 4 | 5 }) {
  const animClass =
    speed === 1 ? "animate-turbine-1" :
    speed === 2 ? "animate-turbine-2" :
    speed === 3 ? "animate-turbine-3" :
    speed === 4 ? "animate-turbine-4" :
    "animate-turbine-5";
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      <div className="absolute w-[2px] h-10 md:h-14 bg-[#7ab89a]/60 left-1/2 -translate-x-1/2 top-3 md:top-4" />
      <svg viewBox="0 0 48 48" className="relative w-10 h-10 md:w-14 md:h-14">
        <g className={animClass} style={{ transformOrigin: "24px 24px", willChange: "transform" }}>
          <line x1="24" y1="24" x2="24" y2="4" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="41" y2="34" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="24" x2="7" y2="34" stroke="#5ea87e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="2.5" fill="#5ea87e" />
        </g>
      </svg>
    </div>
  );
}

function Cloud({ x, y, animClass, size = "md" }: { x: string; y: string; animClass: string; size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-20 h-8 md:w-24 md:h-10" : size === "lg" ? "w-32 h-12 md:w-44 md:h-14" : "w-24 h-10 md:w-32 md:h-12";
  return (
    <svg viewBox="0 0 100 40" fill="none" className={`absolute ${dims} ${animClass}`} style={{ left: x, top: y, willChange: "transform, opacity" }}>
      <ellipse cx="50" cy="25" rx="35" ry="13" fill="#a8cdb8" opacity="0.3" />
      <ellipse cx="35" cy="18" rx="22" ry="12" fill="#b5d6c3" opacity="0.25" />
      <ellipse cx="65" cy="20" rx="20" ry="11" fill="#b0d2be" opacity="0.27" />
      <ellipse cx="50" cy="15" rx="15" ry="9" fill="#c0dece" opacity="0.2" />
    </svg>
  );
}

function Butterfly({ x, y, animClass }: { x: string; y: string; animClass: string }) {
  return (
    <div className={`absolute ${animClass}`} style={{ left: x, top: y, willChange: "transform" }}>
      <svg viewBox="0 0 30 30" fill="none" className="w-5 h-5 md:w-7 md:h-7">
        <g className="animate-wing-flap" style={{ transformOrigin: "15px 15px" }}>
          <path d="M15 15C11 10 5 8 5 12C5 16 11 17 15 15Z" fill="#e8943a" opacity="0.7" />
        </g>
        <g className="animate-wing-flap-r" style={{ transformOrigin: "15px 15px" }}>
          <path d="M15 15C19 10 25 8 25 12C25 16 19 17 15 15Z" fill="#e8943a" opacity="0.7" />
        </g>
        <path d="M15 15C13 19 11 23 13 23C15 23 15 19 15 15Z" fill="#d4832f" opacity="0.55" />
        <path d="M15 15C17 19 19 23 17 23C15 23 15 19 15 15Z" fill="#d4832f" opacity="0.55" />
        <circle cx="15" cy="13" r="1" fill="#c47020" opacity="0.6" />
      </svg>
    </div>
  );
}

function Bird({ y, animClass, flipped = false }: { y: string; animClass: string; flipped?: boolean }) {
  return (
    <svg
      viewBox="0 0 40 20"
      fill="none"
      className={`absolute w-6 h-3 md:w-8 md:h-4 ${animClass}`}
      style={{ top: y, willChange: "transform, opacity", transform: flipped ? "scaleX(-1)" : undefined }}
    >
      <path d="M2 12 Q10 4 20 10 Q30 4 38 12" stroke="#5a7a6a" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
    </svg>
  );
}

function TreeSway({ x, y, animClass, variant = 1 }: { x: string; y: string; animClass: string; variant?: 1 | 2 | 3 }) {
  if (variant === 1) {
    return (
      <svg viewBox="0 0 40 60" fill="none" className={`absolute w-8 h-12 md:w-10 md:h-16 ${animClass}`} style={{ left: x, top: y, transformOrigin: "50% 100%", willChange: "transform" }}>
        <rect x="18" y="35" width="4" height="25" rx="2" fill="#6b8f6b" opacity="0.45" />
        <ellipse cx="20" cy="22" rx="14" ry="18" fill="#4e9e6d" opacity="0.4" />
        <ellipse cx="16" cy="18" rx="8" ry="12" fill="#5bb87a" opacity="0.3" />
        <ellipse cx="25" cy="20" rx="7" ry="10" fill="#4a9060" opacity="0.25" />
      </svg>
    );
  }
  if (variant === 2) {
    return (
      <svg viewBox="0 0 30 50" fill="none" className={`absolute w-6 h-10 md:w-8 md:h-12 ${animClass}`} style={{ left: x, top: y, transformOrigin: "50% 100%", willChange: "transform" }}>
        <rect x="13" y="30" width="4" height="20" rx="2" fill="#6b8f6b" opacity="0.4" />
        <ellipse cx="15" cy="18" rx="12" ry="16" fill="#3d8b56" opacity="0.35" />
        <ellipse cx="12" cy="14" rx="6" ry="9" fill="#4da66a" opacity="0.25" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 36" fill="none" className={`absolute w-5 h-8 md:w-6 md:h-10 ${animClass}`} style={{ left: x, top: y, transformOrigin: "50% 100%", willChange: "transform" }}>
      <rect x="10" y="22" width="4" height="14" rx="2" fill="#6b8f6b" opacity="0.4" />
      <ellipse cx="12" cy="14" rx="9" ry="12" fill="#5aa870" opacity="0.35" />
    </svg>
  );
}

function Bush({ x, y, animClass }: { x: string; y: string; animClass: string }) {
  return (
    <svg viewBox="0 0 40 24" fill="none" className={`absolute w-8 h-5 md:w-10 md:h-6 ${animClass}`} style={{ left: x, top: y, transformOrigin: "50% 100%", willChange: "transform" }}>
      <ellipse cx="20" cy="16" rx="18" ry="8" fill="#4e9e6d" opacity="0.4" />
      <ellipse cx="14" cy="12" rx="10" ry="7" fill="#5bb87a" opacity="0.3" />
      <ellipse cx="26" cy="13" rx="9" ry="6" fill="#4a9060" opacity="0.3" />
    </svg>
  );
}

function Flower({ x, y, animClass, color = "#e8943a" }: { x: string; y: string; animClass: string; color?: string }) {
  return (
    <svg viewBox="0 0 20 28" fill="none" className={`absolute w-3 h-5 md:w-4 md:h-6 ${animClass}`} style={{ left: x, top: y, transformOrigin: "50% 100%", willChange: "transform" }}>
      <line x1="10" y1="14" x2="10" y2="28" stroke="#5ea87e" strokeWidth="1.5" opacity="0.5" />
      <circle cx="10" cy="10" r="3.5" fill={color} opacity="0.6" />
      <circle cx="10" cy="10" r="1.5" fill="#f5d76e" opacity="0.7" />
      <ellipse cx="6" cy="15" rx="2.5" ry="1.5" fill="#4aba8a" opacity="0.4" />
      <ellipse cx="14" cy="15" rx="2.5" ry="1.5" fill="#4aba8a" opacity="0.4" />
    </svg>
  );
}

function FloatingLeaf({ x, y, animClass, size = "md" }: { x: string; y: string; animClass: string; size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-7 h-7 md:w-8 md:h-8" : "w-5 h-5 md:w-6 md:h-6";
  return (
    <svg viewBox="0 0 24 24" fill="none" className={`absolute ${dims} ${animClass}`} style={{ left: x, top: y, willChange: "transform" }}>
      <path d="M12 3C7 3 3 7 3 12C7 12 12 7 12 3Z" fill="#4aba8a" opacity="0.7" />
      <path d="M12 3C17 3 21 7 21 12C17 12 12 7 12 3Z" fill="#3a9a6a" opacity="0.6" />
      <line x1="12" y1="3" x2="12" y2="14" stroke="#3a9a6a" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function Car({ animClass }: { animClass: string }) {
  return (
    <svg viewBox="0 0 50 24" fill="none" className={`absolute w-8 h-4 md:w-10 md:h-5 ${animClass}`} style={{ willChange: "transform" }}>
      <rect x="5" y="8" width="40" height="12" rx="4" fill="#ffffff" opacity="0.85" />
      <rect x="10" y="4" width="24" height="10" rx="3" fill="#ffffff" opacity="0.75" />
      <rect x="12" y="5" width="8" height="6" rx="1" fill="#a8d8ea" opacity="0.6" />
      <rect x="24" y="5" width="8" height="6" rx="1" fill="#a8d8ea" opacity="0.6" />
      <circle cx="14" cy="20" r="3" fill="#555" opacity="0.5" />
      <circle cx="36" cy="20" r="3" fill="#555" opacity="0.5" />
    </svg>
  );
}

export default function HeroAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-[2]"
      aria-hidden="true"
      style={{ animationPlayState: isVisible ? "running" : "paused" }}
    >
      <div className={isVisible ? "" : "hero-paused"}>
        {/* Clouds - parallax depth with seamless wrap */}
        <Cloud x="-5%" y="4%" animClass="animate-cloud-drift-1" size="lg" />
        <Cloud x="20%" y="8%" animClass="animate-cloud-drift-2" size="md" />
        <Cloud x="50%" y="3%" animClass="animate-cloud-drift-3" size="lg" />
        <Cloud x="75%" y="10%" animClass="animate-cloud-drift-4" size="sm" />
        <Cloud x="35%" y="14%" animClass="animate-cloud-drift-5" size="md" />

        {/* Wind turbines - each at different speed */}
        <WindTurbine x="8%" y="55%" speed={1} />
        <WindTurbine x="15%" y="45%" speed={2} />
        <WindTurbine x="82%" y="48%" speed={3} />
        <WindTurbine x="88%" y="55%" speed={4} />
        <WindTurbine x="12%" y="52%" speed={5} />

        {/* Trees swaying */}
        <TreeSway x="3%" y="62%" animClass="animate-sway-1" variant={1} />
        <TreeSway x="18%" y="58%" animClass="animate-sway-2" variant={2} />
        <TreeSway x="90%" y="60%" animClass="animate-sway-3" variant={1} />
        <TreeSway x="78%" y="64%" animClass="animate-sway-1" variant={3} />
        <TreeSway x="65%" y="70%" animClass="animate-sway-2" variant={2} />

        {/* Bushes swaying */}
        <Bush x="10%" y="72%" animClass="animate-sway-3" />
        <Bush x="55%" y="75%" animClass="animate-sway-1" />
        <Bush x="85%" y="70%" animClass="animate-sway-2" />

        {/* Butterflies with wing flap and wandering path */}
        <Butterfly x="70%" y="25%" animClass="animate-wander-1" />
        <Butterfly x="25%" y="50%" animClass="animate-wander-2" />
        <Butterfly x="55%" y="62%" animClass="animate-wander-3" />
        <Butterfly x="40%" y="35%" animClass="animate-wander-4" />

        {/* Birds gliding across the sky */}
        <Bird y="12%" animClass="animate-bird-1" />
        <Bird y="18%" animClass="animate-bird-2" flipped />
        <Bird y="8%" animClass="animate-bird-3" />

        {/* Flowers bobbing */}
        <Flower x="22%" y="72%" animClass="animate-bob-1" color="#e8943a" />
        <Flower x="48%" y="76%" animClass="animate-bob-2" color="#d65c8a" />
        <Flower x="72%" y="73%" animClass="animate-bob-3" color="#e8943a" />
        <Flower x="35%" y="74%" animClass="animate-bob-1" color="#6eb5e8" />
        <Flower x="60%" y="78%" animClass="animate-bob-2" color="#d65c8a" />

        {/* Floating leaves */}
        <FloatingLeaf x="5%" y="35%" animClass="animate-leaf-1" size="lg" />
        <FloatingLeaf x="20%" y="22%" animClass="animate-leaf-2" size="md" />
        <FloatingLeaf x="75%" y="28%" animClass="animate-leaf-3" size="lg" />
        <FloatingLeaf x="88%" y="40%" animClass="animate-leaf-4" size="md" />
        <FloatingLeaf x="42%" y="18%" animClass="animate-leaf-1" size="sm" />
        <FloatingLeaf x="62%" y="60%" animClass="animate-leaf-2" size="md" />

        {/* Car driving along the road */}
        <Car animClass="animate-car-drive" />
      </div>
    </div>
  );
}
