"use client";
import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { mockEvents, CATEGORY_COLORS, CATEGORY_TEXT } from "@/lib/mockData";
import { MapPin, Calendar, ChevronLeft, Heart, Ticket, Minus, Plus } from "lucide-react";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const event = mockEvents.find((e) => e.id === params.id);

  const [selectedTicketType, setSelectedTicketType] = useState(event?.ticketTypes[0]?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [favorited, setFavorited] = useState(false);

  if (!event) {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Navbar />
        <div style={{ padding: "80px 24px", textAlign: "center" }}>
          <h1 className="font-display" style={{ fontSize: "48px" }}>EVENT NOT FOUND</h1>
          <Link href="/events" className="btn btn-primary btn-lg" style={{ textDecoration: "none", marginTop: "24px", display: "inline-flex" }}>
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const categoryBg = CATEGORY_COLORS[event.category];
  const categoryTextColor = CATEGORY_TEXT[event.category];
  const selectedType = event.ticketTypes.find((t) => t.id === selectedTicketType);
  const total = (selectedType?.price ?? event.price) * quantity;
  const isLowStock = event.ticketsLeft < 10;

  const handleBuy = () => {
    router.push(`/checkout?eventId=${event.id}&ticketType=${selectedTicketType}&quantity=${quantity}`);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Back */}
        <Link
          href="/events"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontFamily: "var(--font-mono)",
            fontSize: "13px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--color-text-secondary)",
            textDecoration: "none",
            marginBottom: "32px",
          }}
        >
          <ChevronLeft size={16} />
          Back to Events
        </Link>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "40px", alignItems: "start" }}>
          {/* Left column */}
          <div>
            {/* Image */}
            <div
              style={{
                position: "relative",
                aspectRatio: "16/9",
                border: "2px solid var(--color-black)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                marginBottom: "32px",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <img src={event.image} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <span
                className="badge badge-md"
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  backgroundColor: categoryBg,
                  color: categoryTextColor,
                }}
              >
                {event.category}
              </span>
              <button
                onClick={() => setFavorited(!favorited)}
                style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  width: "44px",
                  height: "44px",
                  border: "2px solid var(--color-black)",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: favorited ? "#FF4D4D" : "var(--color-white)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Heart size={18} fill={favorited ? "white" : "none"} stroke={favorited ? "white" : "var(--color-black)"} />
              </button>
            </div>

            {/* Title */}
            <h1
              className="font-display"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, lineHeight: "1.1", margin: "0 0 20px" }}
            >
              {event.title}
            </h1>

            {/* Meta */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MapPin size={18} style={{ color: "var(--color-coral)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: "16px", fontWeight: 500 }}>
                  {event.venue}, {event.city}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Calendar size={18} style={{ color: "var(--color-coral)", flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "15px", fontWeight: 700, letterSpacing: "0.06em" }}>
                  {event.date} · {event.time}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Ticket size={18} style={{ color: "var(--color-coral)", flexShrink: 0 }} />
                <span
                  className="badge badge-sm"
                  style={{
                    backgroundColor: isLowStock ? "var(--color-coral)" : "var(--color-teal)",
                    color: "var(--color-white)",
                  }}
                >
                  {event.ticketsLeft} tickets left
                </span>
              </div>
            </div>

            {/* Description */}
            <div
              style={{
                border: "2px solid var(--color-black)",
                borderRadius: "var(--radius-lg)",
                padding: "24px",
                backgroundColor: "var(--color-white)",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <h2
                className="font-display"
                style={{ fontSize: "22px", fontWeight: 800, margin: "0 0 12px" }}
              >
                ABOUT THIS EVENT
              </h2>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "16px", lineHeight: "1.7", color: "var(--color-text-secondary)", margin: 0 }}>
                {event.description}
              </p>
            </div>

            {/* Map placeholder */}
            <div
              style={{
                marginTop: "24px",
                border: "2px solid var(--color-black)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                height: "200px",
                backgroundColor: "var(--color-cream-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <MapPin size={32} style={{ color: "var(--color-coral)", marginBottom: "8px" }} />
                <p className="font-display" style={{ fontSize: "18px", fontWeight: 800, margin: 0 }}>
                  {event.venue}
                </p>
                <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "var(--color-text-secondary)", margin: 0 }}>
                  {event.city}
                </p>
              </div>
            </div>
          </div>

          {/* Right column — sticky purchase card */}
          <div
            style={{
              position: "sticky",
              top: "80px",
              border: "2px solid var(--color-black)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-white)",
              boxShadow: "var(--shadow-xl)",
              overflow: "hidden",
            }}
          >
            {/* Price header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "2px solid var(--color-black)",
                backgroundColor: "var(--color-yellow)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-text-secondary)",
                  margin: "0 0 4px",
                }}
              >
                Starting from
              </p>
              <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "48px", fontWeight: 900, lineHeight: "1" }}>
                  €{event.price}
                </span>
                {event.originalPrice > event.price && (
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "18px", color: "var(--color-text-secondary)", textDecoration: "line-through" }}>
                    €{event.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {/* Ticket type */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Ticket Type
                </label>
                {event.ticketTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedTicketType(type.id)}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: `2px solid ${selectedTicketType === type.id ? "var(--color-coral)" : "var(--color-black)"}`,
                      borderRadius: "var(--radius-md)",
                      backgroundColor: selectedTicketType === type.id ? "#FFF0F0" : "var(--color-white)",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                      boxShadow: selectedTicketType === type.id ? "2px 2px 0px var(--color-coral)" : "var(--shadow-sm)",
                      transition: "all 0.1s",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: "14px" }}>
                      {type.name}
                    </span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 800 }}>
                      €{type.price}
                    </span>
                  </button>
                ))}
              </div>

              {/* Quantity */}
              <div>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  Quantity
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid var(--color-black)",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-white)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Minus size={16} />
                  </button>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "28px",
                      fontWeight: 900,
                      minWidth: "32px",
                      textAlign: "center",
                    }}
                  >
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(event.ticketsLeft, quantity + 1))}
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid var(--color-black)",
                      borderRadius: "var(--radius-md)",
                      backgroundColor: "var(--color-white)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Total */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px",
                  backgroundColor: "var(--color-cream)",
                  border: "2px solid var(--color-black)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Total
                </span>
                <span className="font-display" style={{ fontSize: "32px", fontWeight: 900 }}>
                  €{total}
                </span>
              </div>

              <button onClick={handleBuy} className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                Buy Ticket
              </button>

              <p
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "12px",
                  color: "var(--color-text-muted)",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                Secure checkout via Stripe · Instant confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
