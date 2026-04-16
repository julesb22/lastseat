import Link from "next/link";
import Navbar from "@/components/Navbar";
import { CheckCircle, Ticket, Download, Calendar, MapPin } from "lucide-react";

export default function ConfirmationPage() {
  const bookingRef = "LS-2025-" + Math.floor(Math.random() * 9000 + 1000);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Success header */}
        <div
          style={{
            backgroundColor: "var(--color-teal)",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-xl)",
            padding: "40px",
            textAlign: "center",
            marginBottom: "24px",
          }}
        >
          <CheckCircle size={56} style={{ color: "var(--color-black)", marginBottom: "16px" }} />
          <h1
            className="font-display"
            style={{ fontSize: "48px", fontWeight: 900, color: "var(--color-black)", margin: "0 0 8px" }}
          >
            YOU&apos;RE IN!
          </h1>
          <p style={{ fontFamily: "var(--font-ui)", fontSize: "18px", color: "var(--color-black)", margin: "0 0 16px" }}>
            Your tickets are confirmed. See you there!
          </p>
          <span
            className="badge badge-md"
            style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}
          >
            Booking ref: {bookingRef}
          </span>
        </div>

        {/* Ticket card */}
        <div
          style={{
            backgroundColor: "var(--color-white)",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          {/* Event banner */}
          <div style={{ height: "160px", overflow: "hidden", borderBottom: "2px solid var(--color-black)" }}>
            <img
              src="https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80"
              alt="Event"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ padding: "24px", borderBottom: "2px solid var(--color-black)" }}>
            <span className="badge badge-sm" style={{ backgroundColor: "var(--color-coral)", color: "var(--color-white)", marginBottom: "12px", display: "inline-block" }}>
              Sport
            </span>
            <h2 className="font-display" style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 12px" }}>
              PSG vs OM
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Calendar size={16} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em" }}>
                  SAT 19 APR · 21:00
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={16} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "var(--color-text-secondary)" }}>
                  Parc des Princes, Paris
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Ticket size={16} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "14px" }}>
                  2× South Stand · €90
                </span>
              </div>
            </div>
          </div>

          {/* QR code */}
          <div
            style={{
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
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
              Show this at the venue
            </p>
            {/* QR placeholder */}
            <div
              style={{
                width: "180px",
                height: "180px",
                border: "2px solid var(--color-black)",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-cream)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-md)",
                gap: "8px",
              }}
            >
              {/* Simple QR visual placeholder */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "3px", width: "120px" }}>
                {Array.from({ length: 36 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: "100%",
                      aspectRatio: "1",
                      backgroundColor: Math.random() > 0.5 ? "var(--color-black)" : "transparent",
                      borderRadius: "1px",
                    }}
                  />
                ))}
              </div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em" }}>
                {bookingRef}
              </span>
            </div>

            <button
              className="btn btn-ghost btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <Download size={14} />
              Download Ticket
            </button>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link href="/tickets" className="btn btn-dark btn-lg" style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}>
            <Ticket size={18} />
            View My Tickets
          </Link>
          <Link href="/events" className="btn btn-ghost btn-md" style={{ textDecoration: "none", width: "100%", justifyContent: "center" }}>
            Browse More Events
          </Link>
        </div>

        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "13px",
            color: "var(--color-text-muted)",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          A confirmation email has been sent to your registered address.
        </p>
      </div>
    </div>
  );
}
