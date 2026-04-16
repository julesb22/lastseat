import Link from "next/link";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/lib/mockData";
import { Zap, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Home() {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="dot-grid"
        style={{ padding: "80px 24px", borderBottom: "2px solid var(--color-black)" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
            <span
              className="badge badge-md"
              style={{ backgroundColor: "var(--color-yellow)", color: "var(--color-black)" }}
            >
              <Zap size={14} style={{ marginRight: "4px" }} />
              Last-minute deals
            </span>
            <span
              className="badge badge-md"
              style={{ backgroundColor: "var(--color-teal)", color: "var(--color-white)" }}
            >
              Paris &amp; Île-de-France
            </span>
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              lineHeight: "1.0",
              fontWeight: 900,
              margin: "0 0 24px 0",
              maxWidth: "900px",
            }}
          >
            <span>EMPTY SEATS </span>
            <span
              style={{ display: "inline-block", WebkitTextStroke: "3px var(--color-black)", color: "transparent" }}
            >
              SHOULDN&apos;T
            </span>
            <br />
            <span
              style={{
                backgroundColor: "var(--color-coral)",
                padding: "0 12px",
                border: "2px solid var(--color-black)",
                display: "inline-block",
                marginTop: "8px",
              }}
            >
              EXIST.
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-ui)",
              fontSize: "20px",
              lineHeight: "30px",
              color: "var(--color-text-secondary)",
              maxWidth: "560px",
              marginBottom: "40px",
            }}
          >
            Grab unsold tickets to sports, concerts, and live events near you — days before they happen.
            If you&apos;re flexible, you get access.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/events" className="btn btn-primary btn-xl" style={{ textDecoration: "none" }}>
              Browse Events Near Me
              <ArrowRight size={20} />
            </Link>
            <Link href="/sign-in" className="btn btn-ghost btn-xl" style={{ textDecoration: "none" }}>
              Sign In
            </Link>
          </div>

          <div style={{ display: "flex", gap: "48px", marginTop: "64px", flexWrap: "wrap" }}>
            {[
              { value: "2,400+", label: "Tickets sold this month" },
              { value: "< 2 min", label: "Average purchase time" },
              { value: "50%", label: "Average savings vs face value" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display" style={{ fontSize: "40px", fontWeight: 900, lineHeight: "1" }}>
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--color-text-secondary)",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "var(--color-black)",
          borderBottom: "2px solid var(--color-black)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2
            className="font-display"
            style={{ fontSize: "48px", fontWeight: 800, color: "var(--color-white)", marginBottom: "48px" }}
          >
            HOW IT WORKS
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {[
              { step: "01", icon: <MapPin size={24} />, title: "FIND EVENTS NEAR YOU", desc: "We surface unsold tickets within your area, sorted by proximity.", color: "var(--color-coral)" },
              { step: "02", icon: <Clock size={24} />, title: "LAST-MINUTE ONLY", desc: "Only tickets available 1–7 days before the event. No clutter.", color: "var(--color-yellow)" },
              { step: "03", icon: <Zap size={24} />, title: "BUY IN UNDER 2 MIN", desc: "Simple checkout, instant QR code confirmation. Show up.", color: "var(--color-teal)" },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  border: "2px solid var(--color-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                  position: "relative",
                }}
              >
                <div
                  className="font-display"
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "20px",
                    fontSize: "64px",
                    fontWeight: 900,
                    color: "rgba(255,255,255,0.06)",
                    lineHeight: "1",
                  }}
                >
                  {item.step}
                </div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: item.color,
                    border: "2px solid var(--color-white)",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                    color: "var(--color-black)",
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, color: "var(--color-white)", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: "1.6", margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section style={{ padding: "80px 24px", borderBottom: "2px solid var(--color-black)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "40px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h2 className="font-display" style={{ fontSize: "48px", fontWeight: 800, margin: 0 }}>
              TONIGHT&apos;S DEALS
            </h2>
            <Link href="/events" className="btn btn-ghost btn-md" style={{ textDecoration: "none" }}>
              See all events <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "80px 24px",
          backgroundColor: "var(--color-yellow)",
          borderBottom: "2px solid var(--color-black)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
            <h2 className="font-display" style={{ fontSize: "56px", fontWeight: 900, margin: "0 0 12px 0" }}>
              DON&apos;T LET THE SEAT GO EMPTY.
            </h2>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "18px", color: "#444", margin: 0 }}>
              Sign up free. Get access to last-minute deals in your city.
            </p>
          </div>
          <Link href="/sign-up" className="btn btn-dark btn-xl" style={{ textDecoration: "none", whiteSpace: "nowrap" }}>
            Get Started — It&apos;s Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "40px 24px", borderTop: "2px solid var(--color-black)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span className="font-display" style={{ fontSize: "24px", fontWeight: 900 }}>
            <span
              style={{
                backgroundColor: "var(--color-coral)",
                padding: "0 6px",
                border: "2px solid var(--color-black)",
                borderRadius: "4px",
                marginRight: "4px",
              }}
            >
              LAST
            </span>
            SEAT
          </span>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-text-muted)",
              margin: 0,
            }}
          >
            © 2025 LastSeat. If you&apos;re flexible, you get access.
          </p>
        </div>
      </footer>
    </div>
  );
}
