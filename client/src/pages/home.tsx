import { useEffect, useState, type CSSProperties, type FormEvent } from "react";

const CONTACT_EMAIL = "info@artcomp.net";

const fieldStyle: CSSProperties = {
  font: "inherit",
  fontSize: "16px",
  padding: "14px 16px",
  border: "1px solid #C4CAC7",
  borderRadius: "14px",
  background: "#FFFFFF",
  color: "#0B0F0E",
  boxSizing: "border-box",
  width: "100%",
};
const labelStyle: CSSProperties = { fontSize: "14px", fontWeight: 600 };
const groupStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: "8px" };

const TOPICS = [
  "A transfer",
  "RidePilot dispatch software",
  "Monetar Finance",
  "Range Pilot",
  "A partnership",
];

// The form opens the visitor's own email app with the message filled in.
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `${topic}${name ? " - " + name : ""}`;
    const body = [
      message,
      "",
      name ? `Name: ${name}` : "",
      email ? `Email: ${email}` : "",
    ]
      .filter((line, i) => i < 2 || line)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form
      onSubmit={onSubmit}
      data-testid="contact-form"
      style={{
        flex: "1.2 1 440px",
        minWidth: 0,
        background: "#FFFFFF",
        borderRadius: "32px",
        padding: "clamp(24px, 3.4vw, 44px)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))", gap: "20px" }}>
        <div style={groupStyle}>
          <label htmlFor="ac-name" style={labelStyle}>Name</label>
          <input id="ac-name" type="text" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} style={fieldStyle} />
        </div>
        <div style={groupStyle}>
          <label htmlFor="ac-email" style={labelStyle}>Email</label>
          <input id="ac-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} style={fieldStyle} />
        </div>
      </div>
      <div style={groupStyle}>
        <label htmlFor="ac-topic" style={labelStyle}>I'm interested in</label>
        <select id="ac-topic" value={topic} onChange={(e) => setTopic(e.target.value)} style={fieldStyle}>
          {TOPICS.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div style={groupStyle}>
        <label htmlFor="ac-msg" style={labelStyle}>Message</label>
        <textarea id="ac-msg" rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} style={{ ...fieldStyle, resize: "vertical" }} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 20px" }}>
        <button
          type="submit"
          style={{ font: "inherit", fontWeight: 600, fontSize: "18px", background: "#0E7C5A", color: "#FFFFFF", border: 0, padding: "18px 30px", borderRadius: "999px", cursor: "pointer" }}
        >
          Get in touch
        </button>
        <span style={{ fontSize: "14px", color: "#4A5350" }}>Opens your email app with the message ready to send.</span>
      </div>
    </form>
  );
}

export default function Home() {
  // Fade sections in as they scroll into view (skipped for reduced motion).
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".ac-page section > div"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    els.forEach((el) => el.classList.add("ac-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ac-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="ac-page">
<div style={{"background": "#0B0F0E", "color": "#0B0F0E", "fontFamily": "Inter, system-ui, sans-serif", "fontSize": "18px", "lineHeight": "1.5", "minHeight": "100vh"}}>

<header style={{"background": "#0B0F0E", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "boxSizing": "border-box"}}>
<nav aria-label={"Main"} style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "16px 32px", "padding": "26px 0"}}>
<a href={"#top"} style={{"display": "flex", "alignItems": "center", "gap": "12px", "color": "#FFFFFF", "textDecoration": "none"}}>
<svg aria-hidden={"true"} width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"}><rect width={"34"} height={"34"} rx={"10"} fill={"#0E7C5A"} /><path d={"M8 24c5 0 6-3 9-7s4-7 9-7"} stroke={"#FFFFFF"} strokeWidth={"2.6"} strokeLinecap={"round"} /><circle cx={"26"} cy={"10"} r={"2.6"} fill={"#7CF2C1"} /></svg>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "22px", "letterSpacing": "-0.02em"}}>Artcomp</span>
</a>
<div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "8px 30px", "fontSize": "16px", "fontWeight": "500"}}>
<a href={"#software"} style={{"color": "#C9D1CE", "textDecoration": "none", "padding": "12px 0"}}>Software</a>
<a href={"#green"} style={{"color": "#C9D1CE", "textDecoration": "none", "padding": "12px 0"}}>Greener transport</a>
<a href={"#transfers"} style={{"color": "#C9D1CE", "textDecoration": "none", "padding": "12px 0"}}>Transfers</a>
<a href={"#how"} style={{"color": "#C9D1CE", "textDecoration": "none", "padding": "12px 0"}}>How we work</a>
<a href={"#contact"} style={{"background": "#FFFFFF", "color": "#0B0F0E", "textDecoration": "none", "padding": "12px 22px", "borderRadius": "999px", "fontWeight": "600"}}>Get in touch</a>
</div>
</nav>
<div id={"top"} style={{"padding": "72px 0 96px", "display": "flex", "flexDirection": "column", "gap": "64px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>
<span style={{"width": "28px", "height": "2px", "background": "#7CF2C1", "display": "block"}}></span>
<span>Ljubljana · Koper · Trieste</span>
</div>
<h1 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(46px, 7.6vw, 112px)", "lineHeight": "0.96", "letterSpacing": "-0.045em", "textWrap": "balance"}}>We drive the road.{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em", "color": "#7CF2C1"}}>Then we build</span>{" "}the software for it.</h1>
</div>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "48px 64px", "alignItems": "stretch"}}>
<div style={{"flex": "1 1 340px", "minWidth": "0", "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "40px"}}>
<p style={{"margin": "0", "fontSize": "21px", "lineHeight": "1.5", "color": "#C9D1CE", "maxWidth": "460px"}}>Artcomp runs private transfers across northern Italy, Austria, Slovenia and Croatia, and builds software that helps transport companies drive fewer empty kilometres, use less fuel and save time.</p>
<div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px 28px"}}>
<a href={"#contact"} style={{"background": "#7CF2C1", "color": "#0B0F0E", "textDecoration": "none", "padding": "18px 30px", "borderRadius": "999px", "fontWeight": "600", "fontSize": "18px", "display": "inline-flex", "alignItems": "center", "gap": "10px"}}>Get in touch
<svg aria-hidden={"true"} width={"18"} height={"18"} viewBox={"0 0 18 18"} fill={"none"}><path d={"M3 9h12M10 4l5 5-5 5"} stroke={"#0B0F0E"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} /></svg>
</a>
<a href={"#software"} style={{"color": "#FFFFFF", "fontWeight": "500", "textDecoration": "underline", "textUnderlineOffset": "6px", "padding": "12px 0"}}>See what we make</a>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(130px, 100%), 1fr))", "gap": "20px", "borderTop": "1px solid #26302C", "paddingTop": "28px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "34px", "letterSpacing": "-0.03em"}}>3</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>software products</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "34px", "letterSpacing": "-0.03em"}}>3</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>offices</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "34px", "letterSpacing": "-0.03em"}}>AA+</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>rating 2024 &amp; 2025</span>
</div>
</div>
</div>
<div style={{"flex": "1.7 1 520px", "minWidth": "0", "background": "#111816", "border": "1px solid #26302C", "borderRadius": "32px", "padding": "28px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "center", "gap": "8px 20px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#9AA39F"}}>Where we drive</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>Northern Italy · Austria · Slovenia · Croatia</span>
</div>
<svg role={"img"} aria-label={"Map of the region we cover from our offices in Ljubljana, Koper and Trieste: northern Italy to Turin, Milan, Verona and Bologna; Austria to Innsbruck, Salzburg, Graz and Vienna; Slovenia with Ljubljana; Croatia to Zagreb, Rijeka and Split"} viewBox={"0 0 640 472"} style={{"width": "100%", "height": "auto", "display": "block"}}>
<defs>
<pattern id={"acDots"} width={"20"} height={"20"} patternUnits={"userSpaceOnUse"}><circle cx={"2"} cy={"2"} r={"1.1"} fill={"#22302B"} /></pattern>
</defs>
<rect x={"0"} y={"0"} width={"640"} height={"472"} fill={"url(#acDots)"} />
<text x={"60"} y={"345"} fill={"#3D4D47"} fontFamily={"Inter, sans-serif"} fontSize={"12"} letterSpacing={"4"}>NORTHERN ITALY</text>
<text x={"368"} y={"90"} fill={"#3D4D47"} fontFamily={"Inter, sans-serif"} fontSize={"12"} letterSpacing={"4"}>AUSTRIA</text>
<text x={"412"} y={"229"} fill={"#3D4D47"} fontFamily={"Inter, sans-serif"} fontSize={"11"} letterSpacing={"4"}>SLOVENIA</text>
<text x={"505"} y={"275"} fill={"#3D4D47"} fontFamily={"Inter, sans-serif"} fontSize={"12"} letterSpacing={"4"}>CROATIA</text>
<text x={"255"} y={"395"} fill={"#3D4D47"} fontFamily={"Inter, sans-serif"} fontSize={"12"} letterSpacing={"4"}>ADRIATIC SEA</text>
<path d={"M360 222 C 316 212, 260 224, 213 241"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M213 241 C 180 246, 150 244, 117 239"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M117 239 C 90 246, 62 258, 37 269"} stroke={"#4FAE8C"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M213 241 C 222 265, 228 290, 231 313"} stroke={"#4FAE8C"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M360 222 C 326 188, 270 140, 235 101"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M360 222 C 346 168, 335 110, 322 61"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M360 222 L 400 194"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M400 194 C 440 180, 455 150, 450 116"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M450 116 C 470 90, 488 58, 500 30"} stroke={"#4FAE8C"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M400 194 C 430 196, 455 204, 479 212"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M364 238 C 376 243, 388 246, 397 249"} stroke={"#7CF2C1"} strokeWidth={"2.4"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<path d={"M397 249 C 440 290, 480 340, 503 387"} stroke={"#4FAE8C"} strokeWidth={"2"} fill={"none"} strokeLinecap={"round"} className={"ac-route"} />
<circle cx={"360"} cy={"222"} r={"6.5"} fill={"#7CF2C1"} className={"ac-pulse"} />
<circle cx={"400"} cy={"194"} r={"6.5"} fill={"#7CF2C1"} className={"ac-pulse"} />
<circle cx={"360"} cy={"222"} r={"6.5"} fill={"#7CF2C1"} />
<circle cx={"364"} cy={"238"} r={"6.5"} fill={"#7CF2C1"} />
<circle cx={"400"} cy={"194"} r={"6.5"} fill={"#7CF2C1"} />
<circle cx={"117"} cy={"239"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"213"} cy={"241"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"235"} cy={"101"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"322"} cy={"61"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"500"} cy={"30"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"479"} cy={"212"} r={"5"} fill={"#FFFFFF"} />
<circle cx={"37"} cy={"269"} r={"4.5"} fill={"#9AA39F"} />
<circle cx={"231"} cy={"313"} r={"4.5"} fill={"#9AA39F"} />
<circle cx={"450"} cy={"116"} r={"4.5"} fill={"#9AA39F"} />
<circle cx={"397"} cy={"249"} r={"4.5"} fill={"#9AA39F"} />
<circle cx={"503"} cy={"387"} r={"4.5"} fill={"#9AA39F"} />
<text x={"349"} y={"218"} textAnchor={"end"} fill={"#7CF2C1"} fontSize={"15"} fontWeight={"600"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Trieste</text>
<text x={"353"} y={"256"} textAnchor={"end"} fill={"#7CF2C1"} fontSize={"15"} fontWeight={"600"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Koper</text>
<circle cx={"26"} cy={"450"} r={"5"} fill={"#7CF2C1"} />
<text x={"40"} y={"455"} fill={"#C9D1CE"} fontSize={"13"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Our offices</text>
<text x={"117"} y={"224"} textAnchor={"middle"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Milan</text>
<text x={"205"} y={"264"} textAnchor={"end"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Verona</text>
<text x={"226"} y={"98"} textAnchor={"end"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Innsbruck</text>
<text x={"333"} y={"58"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Salzburg</text>
<text x={"512"} y={"35"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Vienna</text>
<text x={"411"} y={"186"} fill={"#7CF2C1"} fontSize={"15"} fontWeight={"600"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Ljubljana</text>
<text x={"490"} y={"217"} fill={"#FFFFFF"} fontSize={"15"} fontWeight={"500"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Zagreb</text>
<text x={"30"} y={"292"} fill={"#C9D1CE"} fontSize={"14"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Turin</text>
<text x={"242"} y={"318"} fill={"#C9D1CE"} fontSize={"14"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Bologna</text>
<text x={"461"} y={"121"} fill={"#C9D1CE"} fontSize={"14"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Graz</text>
<text x={"408"} y={"264"} fill={"#C9D1CE"} fontSize={"14"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Rijeka</text>
<text x={"514"} y={"392"} fill={"#C9D1CE"} fontSize={"14"} fontFamily={"Inter, sans-serif"} stroke={"#111816"} strokeWidth={"5"} paintOrder={"stroke"} strokeLinejoin={"round"}>Split</text>
</svg>
</div>
</div>
</div>
</div>
</header>

<section style={{"background": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "128px 32px", "boxSizing": "border-box", "display": "flex", "flexWrap": "wrap", "gap": "32px 64px"}}>
<div style={{"flex": "0 1 220px", "fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A", "paddingTop": "14px"}}>Who we are</div>
<p style={{"flex": "999 1 560px", "minWidth": "0", "margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "clamp(28px, 3.4vw, 48px)", "lineHeight": "1.14", "letterSpacing": "-0.03em", "textWrap": "pretty"}}>A small Slovenian company with two sides. On the road, we take travellers where they need to be. At the desk, we build software that makes transport companies leaner:{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.01em", "color": "#0E7C5A"}}>less fuel, less waiting, better logistics.</span></p>
</div>
</section>

<section id={"software"} style={{"background": "#F3F4F2"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "56px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px 64px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px", "flex": "1 1 520px", "minWidth": "0"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>01 · Software</span>
<h2 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(38px, 4.8vw, 72px)", "lineHeight": "0.98", "letterSpacing": "-0.04em"}}>Three products,{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em"}}>each born from</span>{" "}a real problem.</h2>
</div>
<p style={{"margin": "0", "flex": "0 1 360px", "color": "#4A5350"}}>We use every one of them in our own business, every day.</p>
</div>

<article style={{"background": "#0B0F0E", "color": "#FFFFFF", "borderRadius": "32px", "padding": "clamp(28px, 4vw, 56px)", "boxSizing": "border-box", "display": "flex", "flexWrap": "wrap", "gap": "40px 56px", "alignItems": "center"}}>
<div style={{"flex": "1 1 340px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "22px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>Dispatch software</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(36px, 4vw, 56px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>RidePilot</h3>
<p style={{"margin": "0", "color": "#C9D1CE"}}>One place for transfer and taxi companies to manage bookings and drivers. We built it to run our own rides.</p>
<ul style={{"margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "16px", "color": "#C9D1CE"}}>
<li style={{"display": "flex", "gap": "12px", "alignItems": "baseline"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7CF2C1", "flex": "none", "display": "block"}}></span><span>Suggests the driver already nearby, so fewer cars drive out empty</span></li>
<li style={{"display": "flex", "gap": "12px", "alignItems": "baseline"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7CF2C1", "flex": "none", "display": "block"}}></span><span>Driver app for iPhone and Android</span></li>
<li style={{"display": "flex", "gap": "12px", "alignItems": "baseline"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7CF2C1", "flex": "none", "display": "block"}}></span><span>Live driver status and tracking on every ride</span></li>
<li style={{"display": "flex", "gap": "12px", "alignItems": "baseline"}}><span style={{"width": "7px", "height": "7px", "borderRadius": "50%", "background": "#7CF2C1", "flex": "none", "display": "block"}}></span><span>Client vouchers and your own booking page</span></li>
</ul>
<div style={{"display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "12px 24px", "paddingTop": "6px"}}>
<a href={"https://www.ridepilot.org"} style={{"background": "#FFFFFF", "color": "#0B0F0E", "textDecoration": "none", "padding": "14px 24px", "borderRadius": "999px", "fontWeight": "600", "fontSize": "16px"}}>Visit ridepilot.org</a>
<span style={{"fontSize": "16px", "color": "#9AA39F"}}>From €39 per month</span>
</div>
</div>
<div style={{"flex": "1.3 1 420px", "minWidth": "0", "background": "#151C1A", "border": "1px solid #26302C", "borderRadius": "24px", "padding": "20px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "12px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "12px", "padding": "4px 6px 8px"}}>
<span style={{"fontWeight": "600", "fontSize": "16px"}}>Today's rides</span>
<span style={{"fontSize": "13px", "color": "#9AA39F"}}>Sample data</span>
</div>
<div style={{"background": "#1C2522", "borderRadius": "16px", "padding": "16px 18px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "10px 16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
<span style={{"fontWeight": "600", "fontSize": "16px"}}>Ljubljana Airport → Bled</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>14:30 · 2 passengers · Driver: Luka</span>
</div>
<span style={{"background": "#F4C76B", "color": "#2A1F04", "fontSize": "13px", "fontWeight": "600", "padding": "6px 12px", "borderRadius": "999px"}}>On the way</span>
</div>
<div style={{"background": "#1C2522", "borderRadius": "16px", "padding": "16px 18px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "10px 16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
<span style={{"fontWeight": "600", "fontSize": "16px"}}>Zagreb → Ljubljana</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>16:00 · 4 passengers · Driver: Ana</span>
</div>
<span style={{"background": "#7CF2C1", "color": "#06281C", "fontSize": "13px", "fontWeight": "600", "padding": "6px 12px", "borderRadius": "999px"}}>Accepted</span>
</div>
<div style={{"background": "#1C2522", "borderRadius": "16px", "padding": "16px 18px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "10px 16px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "3px", "minWidth": "0"}}>
<span style={{"fontWeight": "600", "fontSize": "16px"}}>Verona → Innsbruck</span>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>Tomorrow 09:15 · 3 passengers · Driver not assigned</span>
</div>
<span style={{"border": "1px solid #5B6461", "color": "#FFFFFF", "fontSize": "13px", "fontWeight": "600", "padding": "5px 12px", "borderRadius": "999px"}}>New request</span>
</div>
</div>
</article>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(440px, 100%), 1fr))", "gap": "24px"}}>

<article style={{"background": "#FFFFFF", "borderRadius": "32px", "padding": "clamp(28px, 3.4vw, 44px)", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>Finance for sole proprietors</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(32px, 3.4vw, 46px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>Monetar Finance</h3>
<p style={{"margin": "0", "color": "#4A5350"}}>Invoices, expenses, VAT, travel orders and fixed assets, calculated the way Slovenian law expects.</p>
</div>
<div style={{"background": "#F3F4F2", "borderRadius": "22px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "12px 20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
<span style={{"fontSize": "14px", "color": "#4A5350"}}>Income · November</span>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-0.03em"}}>8.420,00 €</span>
</div>
<span style={{"background": "#FCEBC8", "color": "#6B4A00", "fontSize": "13px", "fontWeight": "600", "padding": "6px 12px", "borderRadius": "999px"}}>VAT due 1.215,40 €</span>
</div>
<div aria-hidden={"true"} style={{"display": "grid", "gridTemplateColumns": "repeat(12, minmax(0, 1fr))", "gap": "8px", "alignItems": "end", "height": "96px"}}>
<span style={{"display": "block", "height": "54%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "38%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "46%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "30%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "62%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "70%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "100%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "88%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "76%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "66%", "background": "#9FDCC6", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "48%", "background": "#0E7C5A", "borderRadius": "6px"}}></span>
<span style={{"display": "block", "height": "4%", "background": "#D5D9D6", "borderRadius": "6px"}}></span>
</div>
<span style={{"fontSize": "13px", "color": "#4A5350"}}>Sample data</span>
</div>
<a href={"https://www.monetar.finance"} style={{"alignSelf": "flex-start", "background": "#0B0F0E", "color": "#FFFFFF", "textDecoration": "none", "padding": "14px 24px", "borderRadius": "999px", "fontWeight": "600", "fontSize": "16px", "marginTop": "auto"}}>Visit monetar.finance</a>
</article>

<article style={{"background": "#FFFFFF", "borderRadius": "32px", "padding": "clamp(28px, 3.4vw, 44px)", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "28px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>App for electric cars</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(32px, 3.4vw, 46px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>Range Pilot</h3>
<p style={{"margin": "0", "color": "#4A5350"}}>The range your dashboard should show. It learns how your car really drives, and can read the battery straight from the car.</p>
</div>
<div style={{"background": "#0B0F0E", "color": "#FFFFFF", "borderRadius": "22px", "padding": "22px", "display": "flex", "flexDirection": "column", "gap": "18px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "12px 20px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
<span style={{"fontSize": "14px", "color": "#9AA39F"}}>Range left</span>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "36px", "letterSpacing": "-0.03em"}}>312 km</span>
</div>
<span style={{"fontSize": "14px", "color": "#C9D1CE"}}>46 km per 10 % battery</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "8px"}}>
<div aria-hidden={"true"} style={{"height": "14px", "background": "#26302C", "borderRadius": "999px", "overflow": "hidden"}}><span style={{"display": "block", "width": "68%", "height": "100%", "background": "#7CF2C1", "borderRadius": "999px"}}></span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "12px", "fontSize": "14px", "color": "#9AA39F"}}><span>Battery 68 %</span><span>Outside 6 °C</span></div>
</div>
<span style={{"fontSize": "13px", "color": "#9AA39F"}}>Sample data</span>
</div>
<a href={"https://rangepilot.net"} style={{"alignSelf": "flex-start", "background": "#0B0F0E", "color": "#FFFFFF", "textDecoration": "none", "padding": "14px 24px", "borderRadius": "999px", "fontWeight": "600", "fontSize": "16px", "marginTop": "auto"}}>Visit rangepilot.net</a>
</article>
</div>
</div>
</section>

<section id={"green"} style={{"background": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "56px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px 64px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px", "flex": "1 1 520px", "minWidth": "0"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>02 · Greener transport</span>
<h2 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(38px, 4.8vw, 72px)", "lineHeight": "0.98", "letterSpacing": "-0.04em"}}>Fewer empty kilometres.{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em", "color": "#0E7C5A"}}>Less fuel.</span>{" "}More time.</h2>
</div>
<p style={{"margin": "0", "flex": "0 1 360px", "color": "#4A5350"}}>The greenest kilometre is the one nobody has to drive. Our products are built to remove it.</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "24px"}}>
<div style={{"background": "#EAF6F0", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 40 40"} fill={"none"}><path d={"M20 6c6 7 9 11 9 16a9 9 0 0 1-18 0c0-5 3-9 9-16z"} stroke={"#0E7C5A"} strokeWidth={"2.2"} strokeLinejoin={"round"} /><path d={"M12 30L30 12"} stroke={"#0E7C5A"} strokeWidth={"2.2"} strokeLinecap={"round"} /></svg>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "28px", "letterSpacing": "-0.03em"}}>Less fuel</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#33403B"}}>RidePilot gives a ride to the driver who is already dropping off nearby, instead of sending an empty car from the office.</p>
</div>
<div style={{"background": "#EAF6F0", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 40 40"} fill={"none"}><circle cx={"20"} cy={"21"} r={"13"} stroke={"#0E7C5A"} strokeWidth={"2.2"} /><path d={"M20 13v8l5 4"} stroke={"#0E7C5A"} strokeWidth={"2.2"} strokeLinecap={"round"} strokeLinejoin={"round"} /></svg>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "28px", "letterSpacing": "-0.03em"}}>Less time</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#33403B"}}>Bookings arrive on their own, drivers get the ride on their phone, and dispatch sees every step without a phone call.</p>
</div>
<div style={{"background": "#EAF6F0", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<svg aria-hidden={"true"} width={"40"} height={"40"} viewBox={"0 0 40 40"} fill={"none"}><path d={"M22 5L10 23h9l-2 12 13-19h-9l1-11z"} stroke={"#0E7C5A"} strokeWidth={"2.2"} strokeLinejoin={"round"} /></svg>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "28px", "letterSpacing": "-0.03em"}}>More electric</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#33403B"}}>Range Pilot shows the real range of an electric car, so switching a fleet to electric is easier to trust.</p>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "24px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0B0F0E", "color": "#FFFFFF", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box"}}>
<span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>Diesel replaced by electric</span>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 4.2vw, 60px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>93.100 g</span>
<span style={{"fontWeight": "600", "fontSize": "17px"}}>of CO₂ less from the exhaust, per vehicle per day</span>
<span style={{"fontSize": "15px", "color": "#C9D1CE"}}>One vehicle driving 500 km a day. About 73.000 g a day after counting the electricity used for charging.</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0B0F0E", "color": "#FFFFFF", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box"}}>
<span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>Empty kilometres</span>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 4.2vw, 60px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>9.300 g</span>
<span style={{"fontWeight": "600", "fontSize": "17px"}}>of CO₂ avoided with every empty 50 km run we skip</span>
<span style={{"fontSize": "15px", "color": "#C9D1CE"}}>RidePilot gives the ride to a driver already nearby. Each skipped run also saves 3,5 litres of diesel.</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px", "background": "#0B0F0E", "color": "#FFFFFF", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box"}}>
<span style={{"fontSize": "13px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>Electric share</span>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(40px, 4.2vw, 60px)", "lineHeight": "1", "letterSpacing": "-0.04em"}}>60 %</span>
<span style={{"fontWeight": "600", "fontSize": "17px"}}>of our kilometres are electric, and growing</span>
<span style={{"fontSize": "15px", "color": "#C9D1CE"}}>Every electric kilometre has no exhaust emissions.</span>
</div>
</div>
<p style={{"margin": "0", "fontSize": "14px", "color": "#4A5350", "maxWidth": "980px"}}>How we calculated: diesel vehicle at 7 l/100 km and 2,66 kg CO₂ per litre burned (186 g per km). Electric vehicle at 22 kWh/100 km on the Slovenian grid at 183 g CO₂ per kWh (2025 average). Exhaust and charging emissions only.</p>
</div>
</section>

<section id={"transfers"} style={{"background": "#0A3A2B", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "56px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "alignItems": "flex-end", "gap": "24px 64px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px", "flex": "1 1 520px", "minWidth": "0"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#7CF2C1"}}>03 · Transfers</span>
<h2 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(38px, 4.8vw, 72px)", "lineHeight": "0.98", "letterSpacing": "-0.04em"}}>Door to door,{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em", "color": "#7CF2C1"}}>from the Adriatic</span>{" "}to the Alps.</h2>
</div>
<p style={{"margin": "0", "flex": "0 1 360px", "color": "#CFE3DB"}}>Private cars and vans with our own drivers and trusted partners, for airports, cruise ports and ski resorts.</p>
</div>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "24px"}}>
<img src={"/mercedes-vle.jpg"} alt={"Mercedes VLE electric van driving on a mountain road"} style={{"flex": "1.4 1 480px", "minWidth": "0", "width": "100%", "minHeight": "380px", "aspectRatio": "16 / 10", "objectFit": "cover", "objectPosition": "60% 50%", "borderRadius": "32px", "display": "block"}} />
<ul style={{"flex": "1 1 360px", "minWidth": "0", "margin": "0", "padding": "0", "listStyle": "none", "display": "flex", "flexDirection": "column", "justifyContent": "center"}}>
<li style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "22px 0", "borderBottom": "1px solid #1F5A46"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "24px", "letterSpacing": "-0.02em"}}>Reserve now, pay later</span>
<span style={{"fontSize": "16px", "color": "#CFE3DB"}}>Payment is due 48 hours before pick-up.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "22px 0", "borderBottom": "1px solid #1F5A46"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "24px", "letterSpacing": "-0.02em"}}>We wait if you're late</span>
<span style={{"fontSize": "16px", "color": "#CFE3DB"}}>Normal flight and ship delays cost nothing extra.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "22px 0", "borderBottom": "1px solid #1F5A46"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "24px", "letterSpacing": "-0.02em"}}>Skis travel free</span>
<span style={{"fontSize": "16px", "color": "#CFE3DB"}}>Ski and snowboard bags are included.</span>
</li>
<li style={{"display": "flex", "flexDirection": "column", "gap": "4px", "padding": "22px 0"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "24px", "letterSpacing": "-0.02em"}}>Ready for winter</span>
<span style={{"fontSize": "16px", "color": "#CFE3DB"}}>Winter tyres on every vehicle, mid-November to mid-April.</span>
</li>
</ul>
</div>
</div>
</section>

<section id={"how"} style={{"background": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "56px"}}>
<div style={{"display": "flex", "flexDirection": "column", "gap": "18px", "maxWidth": "900px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>04 · How we work</span>
<h2 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(38px, 4.8vw, 72px)", "lineHeight": "0.98", "letterSpacing": "-0.04em"}}>The road{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em", "color": "#0E7C5A"}}>tests</span>{" "}everything we ship.</h2>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit, minmax(min(300px, 100%), 1fr))", "gap": "24px"}}>
<div style={{"background": "#F3F4F2", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontStyle": "italic", "fontSize": "44px", "lineHeight": "1", "color": "#0E7C5A"}}>01</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "26px", "letterSpacing": "-0.02em"}}>A booking comes in</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#4A5350"}}>Every reservation from our transfer websites lands directly in RidePilot. Nothing is retyped.</p>
</div>
<div style={{"background": "#F3F4F2", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontStyle": "italic", "fontSize": "44px", "lineHeight": "1", "color": "#0E7C5A"}}>02</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "26px", "letterSpacing": "-0.02em"}}>A driver takes it</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#4A5350"}}>The ride rings on the driver's phone. Dispatch follows each step, from pick-up to drop-off.</p>
</div>
<div style={{"background": "#F3F4F2", "borderRadius": "28px", "padding": "32px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "14px"}}>
<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontStyle": "italic", "fontSize": "44px", "lineHeight": "1", "color": "#0E7C5A"}}>03</span>
<h3 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "700", "fontSize": "26px", "letterSpacing": "-0.02em"}}>We fix what slowed us down</h3>
<p style={{"margin": "0", "fontSize": "16px", "color": "#4A5350"}}>Whatever cost us time on the road becomes the next improvement in the product.</p>
</div>
</div>
<div style={{"borderTop": "1px solid #E3E6E4", "paddingTop": "40px", "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "24px 48px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "18px", "flex": "1 1 420px", "minWidth": "0"}}>
<div style={{"flex": "none", "width": "84px", "height": "84px", "borderRadius": "22px", "background": "#0B0F0E", "color": "#FFFFFF", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "28px", "letterSpacing": "-0.03em"}}>AA+</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontWeight": "600", "fontSize": "18px"}}>CompanyWall Business Excellence rating</span>
<span style={{"fontSize": "16px", "color": "#4A5350"}}>Awarded for 2024 and 2025.</span>
</div>
</div>
<div style={{"display": "flex", "alignItems": "center", "gap": "18px", "flex": "1 1 420px", "minWidth": "0"}}>
<div style={{"flex": "none", "width": "84px", "height": "84px", "borderRadius": "22px", "background": "#E3F4EC", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
<svg aria-hidden={"true"} width={"34"} height={"34"} viewBox={"0 0 34 34"} fill={"none"}><rect x={"9"} y={"3"} width={"16"} height={"28"} rx={"4"} stroke={"#0E7C5A"} strokeWidth={"2.2"} /><path d={"M14 26h6"} stroke={"#0E7C5A"} strokeWidth={"2.2"} strokeLinecap={"round"} /></svg>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "4px"}}>
<span style={{"fontWeight": "600", "fontSize": "18px"}}>RidePilot Driver app</span>
<span style={{"fontSize": "16px", "color": "#4A5350"}}>Available on the App Store and for Android.</span>
</div>
</div>
</div>
</div>
</section>

<section id={"contact"} style={{"background": "#F3F4F2"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "120px 32px", "boxSizing": "border-box", "display": "flex", "flexWrap": "wrap", "gap": "48px 72px"}}>
<div style={{"flex": "1 1 380px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#0E7C5A"}}>Contact</span>
<h2 style={{"margin": "0", "fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "clamp(38px, 4.8vw, 72px)", "lineHeight": "0.98", "letterSpacing": "-0.04em"}}>Tell us{" "}<span style={{"fontFamily": "'Instrument Serif', Georgia, serif", "fontWeight": "400", "fontStyle": "italic", "letterSpacing": "-0.02em", "color": "#0E7C5A"}}>what you need.</span></h2>
<p style={{"margin": "0", "color": "#4A5350", "maxWidth": "420px"}}>A transfer, a demo of our software, or a partnership. One message reaches the person who can answer.</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "6px", "fontSize": "16px", "paddingTop": "8px"}}>
<a href={"mailto:info@artcomp.net"} style={{"fontWeight": "600", "fontSize": "20px", "color": "#0B0F0E"}}>info@artcomp.net</a>
<span style={{"color": "#4A5350"}}>Offices in Ljubljana, Koper and Trieste</span>
</div>
</div>
<ContactForm />
</div>
</section>

<footer style={{"background": "#0B0F0E", "color": "#FFFFFF"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "80px 32px 48px", "boxSizing": "border-box", "display": "flex", "flexDirection": "column", "gap": "56px"}}>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "40px 64px", "justifyContent": "space-between"}}>
<div style={{"flex": "1 1 300px", "minWidth": "0", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<span style={{"fontFamily": "'Bricolage Grotesque', Inter, sans-serif", "fontWeight": "800", "fontSize": "40px", "letterSpacing": "-0.04em", "lineHeight": "1"}}>Artcomp</span>
<span style={{"fontSize": "16px", "color": "#9AA39F", "maxWidth": "320px"}}>Transfers on the road. Software for greener transport.</span>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "fontSize": "16px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#9AA39F"}}>Software</span>
<a href={"https://www.ridepilot.org"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>RidePilot</a>
<a href={"https://www.monetar.finance"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>Monetar Finance</a>
<a href={"https://rangepilot.net"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>Range Pilot</a>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "fontSize": "16px"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#9AA39F"}}>Company</span>
<a href={"#how"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>How we work</a>
<a href={"#contact"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>Contact</a>
<a href={"mailto:info@artcomp.net"} style={{"color": "#FFFFFF", "textDecoration": "none"}}>info@artcomp.net</a>
</div>
</div>
<div style={{"borderTop": "1px solid #26302C", "paddingTop": "28px", "display": "flex", "flexWrap": "wrap", "justifyContent": "space-between", "gap": "12px 32px", "fontSize": "14px", "color": "#9AA39F"}}>
<span>© 2026 Artcomp Marko Keder s.p. · Ljubljana · Koper · Trieste · VAT ID SI81926561</span>
</div>
</div>
</footer>
</div>
    </div>
  );
}
