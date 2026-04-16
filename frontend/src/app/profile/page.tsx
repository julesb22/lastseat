"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { User, Settings, LogOut, Heart, Ticket, ChevronRight } from "lucide-react";

const CATEGORIES = [
  { id: "sport", label: "Sport", color: "#FF4D4D" },
  { id: "music", label: "Music", color: "#FFD60A" },
  { id: "theatre", label: "Theatre", color: "#B5A4F5" },
  { id: "comedy", label: "Comedy", color: "#FF8C42" },
  { id: "other", label: "Other", color: "#4D9EFF" },
];

const DISTANCES = ["5 km", "10 km", "25 km", "50 km", "Any"];

export default function ProfilePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["sport", "music"]);
  const [selectedDistance, setSelectedDistance] = useState("25 km");
  const [saved, setSaved] = useState(false);

  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
    setSaved(false);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "48px 24px" }}>
        {/* Avatar + name */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
            padding: "24px",
            backgroundColor: "var(--color-white)",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "2px solid var(--color-black)",
              borderRadius: "var(--radius-full)",
              backgroundColor: "var(--color-coral)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
              flexShrink: 0,
            }}
          >
            <User size={28} style={{ color: "var(--color-white)" }} />
          </div>
          <div>
            <h1 className="font-display" style={{ fontSize: "28px", fontWeight: 900, margin: "0 0 4px" }}>
              ALEX MARTIN
            </h1>
            <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "var(--color-text-secondary)", margin: 0 }}>
              alex@example.com
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "32px" }}>
          {[
            { href: "/tickets", icon: <Ticket size={20} />, label: "MY TICKETS", count: "2 upcoming" },
            { href: "/favorites", icon: <Heart size={20} />, label: "FAVORITES", count: "2 saved" },
          ].map(({ href, icon, label, count }) => (
            <Link
              key={href}
              href={href}
              className="card"
              style={{
                textDecoration: "none",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ color: "var(--color-coral)" }}>{icon}</div>
                <ChevronRight size={16} style={{ color: "var(--color-text-muted)" }} />
              </div>
              <div>
                <p className="font-display" style={{ fontSize: "16px", fontWeight: 800, margin: 0 }}>{label}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-text-secondary)", margin: 0, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {count}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Preferences */}
        <div
          style={{
            backgroundColor: "var(--color-white)",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-md)",
            overflow: "hidden",
            marginBottom: "24px",
          }}
        >
          <div style={{ padding: "20px 24px", borderBottom: "2px solid var(--color-black)", display: "flex", alignItems: "center", gap: "10px" }}>
            <Settings size={18} />
            <h2 className="font-display" style={{ fontSize: "22px", fontWeight: 800, margin: 0 }}>
              EVENT PREFERENCES
            </h2>
          </div>
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Categories */}
            <div>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
                Preferred Categories
              </label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {CATEGORIES.map((cat) => {
                  const active = selectedCategories.includes(cat.id);
                  return (
                    <button
                      key={cat.id}
                      onClick={() => toggleCategory(cat.id)}
                      className="filter-chip"
                      style={{
                        backgroundColor: active ? cat.color : "var(--color-white)",
                        color: active && cat.id === "music" ? "var(--color-black)" : active && cat.id === "theatre" ? "var(--color-black)" : active ? "var(--color-white)" : "var(--color-black)",
                        boxShadow: active ? "var(--shadow-md)" : "var(--shadow-sm)",
                      }}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Distance */}
            <div>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "12px" }}>
                Distance Radius
              </label>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                {DISTANCES.map((d) => (
                  <button
                    key={d}
                    onClick={() => { setSelectedDistance(d); setSaved(false); }}
                    className="filter-chip"
                    style={{
                      backgroundColor: selectedDistance === d ? "var(--color-black)" : "var(--color-white)",
                      color: selectedDistance === d ? "var(--color-white)" : "var(--color-black)",
                      boxShadow: selectedDistance === d ? "var(--shadow-md)" : "var(--shadow-sm)",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSave}
              className={saved ? "btn btn-secondary btn-md" : "btn btn-dark btn-md"}
              style={{ width: "fit-content" }}
            >
              {saved ? "✓ Preferences Saved" : "Save Preferences"}
            </button>
          </div>
        </div>

        {/* Sign out */}
        <Link
          href="/sign-in"
          className="btn btn-ghost btn-md"
          style={{
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--color-text-secondary)",
          }}
        >
          <LogOut size={16} />
          Sign Out
        </Link>
      </div>
    </div>
  );
}
