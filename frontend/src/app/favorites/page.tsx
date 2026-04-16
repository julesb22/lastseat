import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";
import Link from "next/link";
import { mockEvents } from "@/lib/mockData";
import { Heart } from "lucide-react";

export default function FavoritesPage() {
  const favorites = mockEvents.slice(0, 2).map((e) => ({ ...e, isFavorited: true }));

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>
        <h1 className="font-display" style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, margin: "0 0 8px" }}>
          FAVORITES
        </h1>
        <p style={{ fontFamily: "var(--font-ui)", fontSize: "16px", color: "var(--color-text-secondary)", marginBottom: "40px" }}>
          Events you&apos;ve saved. Don&apos;t wait too long — tickets sell fast.
        </p>

        {favorites.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {favorites.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0" }}>
            <Heart size={48} style={{ color: "var(--color-text-muted)", marginBottom: "16px" }} />
            <p className="font-display" style={{ fontSize: "32px", fontWeight: 800, margin: "0 0 8px" }}>NO FAVORITES YET</p>
            <p style={{ fontFamily: "var(--font-ui)", color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Tap the heart icon on any event to save it here.
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
