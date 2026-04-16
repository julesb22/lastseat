import Navbar from "@/components/Navbar";
import Link from "next/link";
import { mockTickets, CATEGORY_COLORS, CATEGORY_TEXT } from "@/lib/mockData";
import { Calendar, MapPin, QrCode, Ticket } from "lucide-react";

export default function TicketsPage() {
  const upcoming = mockTickets.filter((t) => t.status === "upcoming");
  const past = mockTickets.filter((t) => t.status === "past");

  const TicketCard = ({ ticket }: { ticket: (typeof mockTickets)[0] }) => {
    const categoryBg = CATEGORY_COLORS[ticket.category];
    const categoryTextColor = CATEGORY_TEXT[ticket.category];
    const isPast = ticket.status === "past";

    return (
      <div
        style={{
          backgroundColor: isPast ? "var(--color-cream-dark)" : "var(--color-white)",
          border: "2px solid var(--color-black)",
          borderRadius: "var(--radius-lg)",
          boxShadow: isPast ? "var(--shadow-sm)" : "var(--shadow-md)",
          overflow: "hidden",
          opacity: isPast ? 0.7 : 1,
        }}
      >
        <div style={{ padding: "20px", borderBottom: "2px solid var(--color-black)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
          <div style={{ flex: 1 }}>
            <span className="badge badge-sm" style={{ backgroundColor: categoryBg, color: categoryTextColor, marginBottom: "8px", display: "inline-block" }}>
              {ticket.category}
            </span>
            <h3 className="font-display" style={{ fontSize: "22px", fontWeight: 800, margin: "0 0 8px" }}>
              {ticket.eventTitle}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Calendar size={14} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, letterSpacing: "0.06em" }}>
                  {ticket.date} · {ticket.time}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                  {ticket.venue}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Ticket size={14} style={{ color: "var(--color-coral)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "13px" }}>
                  {ticket.quantity}× {ticket.ticketType} · €{ticket.totalPrice}
                </span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-text-muted)", marginBottom: "4px" }}>
              Booking ref
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700 }}>
              {ticket.bookingRef}
            </div>
          </div>
        </div>
        <div style={{ padding: "16px 20px", display: "flex", gap: "12px" }}>
          {!isPast ? (
            <button className="btn btn-dark btn-sm" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <QrCode size={14} />
              Show QR Code
            </button>
          ) : (
            <span
              className="badge badge-sm"
              style={{ backgroundColor: "var(--color-cream-dark)", color: "var(--color-text-muted)", border: "2px solid var(--color-text-muted)" }}
            >
              Past event
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px" }}>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, margin: "0 0 40px" }}>
          MY TICKETS
        </h1>

        {upcoming.length > 0 && (
          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-secondary)",
                marginBottom: "16px",
              }}
            >
              Upcoming ({upcoming.length})
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {upcoming.map((t) => <TicketCard key={t.id} ticket={t} />)}
            </div>
          </section>
        )}

        {past.length > 0 && (
          <section>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-secondary)",
                marginBottom: "16px",
              }}
            >
              Past Events ({past.length})
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {past.map((t) => <TicketCard key={t.id} ticket={t} />)}
            </div>
          </section>
        )}

        {upcoming.length === 0 && past.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <Ticket size={48} style={{ color: "var(--color-text-muted)", marginBottom: "16px" }} />
            <p className="font-display" style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 8px" }}>NO TICKETS YET</p>
            <p style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Browse events and grab your first seat.
            </p>
            <Link href="/events" className="btn btn-primary btn-lg" style={{ textDecoration: "none" }}>
              Browse Events
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
