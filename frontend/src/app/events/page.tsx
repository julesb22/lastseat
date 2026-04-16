"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import { Category, Event } from "@/lib/mockData";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";

const CATEGORIES: { value: Category | "all"; label: string; color?: string }[] = [
  { value: "all", label: "All Events" },
  { value: "sport", label: "Sport", color: "#FF4D4D" },
  { value: "music", label: "Music", color: "#FFD60A" },
  { value: "theatre", label: "Theatre", color: "#B5A4F5" },
  { value: "comedy", label: "Comedy", color: "#FF8C42" },
  { value: "other", label: "Other", color: "#4D9EFF" },
];

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((r) => r.json())
      .then((data) => setEvents(data.events ?? []));
  }, []);

  const filtered = events.filter((e) => {
    const matchesCategory = activeCategory === "all" || e.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      {/* Header */}
      <section
        style={{
          padding: "48px 24px 32px",
          borderBottom: "2px solid var(--color-black)",
          backgroundColor: "var(--color-cream)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
            <MapPin size={16} />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-secondary)",
              }}
            >
              Paris &amp; Île-de-France · Next 7 days
            </span>
          </div>
          <h1
            className="font-display"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, margin: "0 0 32px 0" }}
          >
            AVAILABLE EVENTS
          </h1>

          {/* Search */}
          <div style={{ position: "relative", maxWidth: "480px", marginBottom: "24px" }}>
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "14px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--color-text-muted)",
              }}
            />
            <input
              className="input"
              style={{ paddingLeft: "44px" }}
              placeholder="Search events, venues..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter chips */}
          <div style={{ display: "flex", gap: "10px", overflowX: "auto", paddingBottom: "4px" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className="filter-chip"
                style={{
                  backgroundColor:
                    activeCategory === cat.value
                      ? cat.color ?? "var(--color-black)"
                      : "var(--color-white)",
                  color:
                    activeCategory === cat.value
                      ? cat.value === "music"
                        ? "var(--color-black)"
                        : cat.value === "theatre"
                        ? "var(--color-black)"
                        : cat.value === "all"
                        ? "var(--color-white)"
                        : "var(--color-white)"
                      : "var(--color-black)",
                  boxShadow:
                    activeCategory === cat.value ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-text-secondary)",
                margin: 0,
              }}
            >
              {filtered.length} event{filtered.length !== 1 ? "s" : ""} found
            </p>
            <button
              className="btn btn-ghost btn-sm"
              style={{ display: "flex", alignItems: "center", gap: "6px" }}
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 24px",
                border: "2px dashed var(--color-black)",
                borderRadius: "var(--radius-lg)",
              }}
            >
              <p className="font-display" style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 8px" }}>
                NO EVENTS FOUND
              </p>
              <p style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-secondary)", margin: 0 }}>
                Try a different category or search term.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "24px",
              }}
            >
              {filtered.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
