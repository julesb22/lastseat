"use client";
import Link from "next/link";
import { MapPin, Calendar, Heart } from "lucide-react";
import { Event, CATEGORY_COLORS, CATEGORY_TEXT } from "@/lib/mockData";
import { useState } from "react";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [favorited, setFavorited] = useState(event.isFavorited ?? false);
  const categoryBg = CATEGORY_COLORS[event.category];
  const categoryTextColor = CATEGORY_TEXT[event.category];
  const isLowStock = event.ticketsLeft < 10;

  return (
    <div
      className="card"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16/9",
          borderBottom: "2px solid var(--color-black)",
          overflow: "hidden",
        }}
      >
        <img
          src={event.image}
          alt={event.title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* Category badge */}
        <span
          className="badge badge-sm"
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            backgroundColor: categoryBg,
            color: categoryTextColor,
          }}
        >
          {event.category}
        </span>
        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setFavorited(!favorited);
          }}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            width: "36px",
            height: "36px",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-full)",
            backgroundColor: favorited ? "#FF4D4D" : "var(--color-white)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "var(--shadow-sm)",
            transition: "transform 0.1s",
          }}
        >
          <Heart
            size={16}
            fill={favorited ? "white" : "none"}
            stroke={favorited ? "white" : "var(--color-black)"}
          />
        </button>
      </div>

      {/* Content */}
      <div style={{ padding: "16px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        {/* Title */}
        <h3
          className="font-display"
          style={{ fontSize: "22px", lineHeight: "26px", fontWeight: 800, margin: 0 }}
        >
          {event.title}
        </h3>

        {/* Venue */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--color-text-secondary)" }}>
          <MapPin size={14} />
          <span style={{ fontSize: "13px", fontFamily: "var(--font-ui)" }}>
            {event.venue}, {event.city}
          </span>
        </div>

        {/* Date */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Calendar size={14} />
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.06em",
            }}
          >
            {event.date} · {event.time}
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
            paddingTop: "12px",
            borderTop: "1px solid var(--color-cream-dark)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 700,
                fontSize: "20px",
                color: "var(--color-coral)",
              }}
            >
              €{event.price}
            </span>
            {event.originalPrice > event.price && (
              <span
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "13px",
                  color: "var(--color-text-muted)",
                  textDecoration: "line-through",
                  marginLeft: "8px",
                }}
              >
                €{event.originalPrice}
              </span>
            )}
          </div>
          <span
            className="badge badge-sm"
            style={{
              backgroundColor: isLowStock ? "var(--color-coral)" : "var(--color-teal)",
              color: "var(--color-white)",
            }}
          >
            {event.ticketsLeft} left
          </span>
        </div>

        <Link
          href={`/events/${event.id}`}
          className="btn btn-dark btn-md"
          style={{ textDecoration: "none", width: "100%", marginTop: "8px" }}
        >
          View Event
        </Link>
      </div>
    </div>
  );
}
