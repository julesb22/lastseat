"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Ticket, Heart, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/events", label: "Events" },
    { href: "/favorites", label: "Favorites" },
    { href: "/tickets", label: "My Tickets" },
  ];

  return (
    <nav
      style={{
        backgroundColor: "var(--color-cream)",
        borderBottom: "2px solid var(--color-black)",
        height: "64px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "28px",
            fontWeight: 900,
            color: "var(--color-black)",
            textDecoration: "none",
            letterSpacing: "0.04em",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              backgroundColor: "var(--color-coral)",
              color: "var(--color-black)",
              padding: "2px 8px",
              border: "2px solid var(--color-black)",
              borderRadius: "4px",
            }}
          >
            LAST
          </span>
          SEAT
        </Link>

        {/* Desktop Nav */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "32px" }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-ui)",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-black)",
                textDecoration: "none",
                borderBottom:
                  pathname === link.href
                    ? "2px solid var(--color-coral)"
                    : "2px solid transparent",
                paddingBottom: "2px",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: "12px" }}
        >
          <Link
            href="/favorites"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              border: "2px solid var(--color-black)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-black)",
              backgroundColor: "transparent",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translate(-2px, -2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--shadow-sm)";
            }}
          >
            <Heart size={18} />
          </Link>
          <Link
            href="/profile"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
              border: "2px solid var(--color-black)",
              borderRadius: "var(--radius-md)",
              color: "var(--color-black)",
              backgroundColor: "transparent",
              cursor: "pointer",
              boxShadow: "var(--shadow-sm)",
              transition: "transform 0.1s, box-shadow 0.1s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translate(-2px, -2px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--shadow-md)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "var(--shadow-sm)";
            }}
          >
            <User size={18} />
          </Link>
          <Link
            href="/sign-in"
            className="btn btn-primary btn-md"
            style={{ textDecoration: "none" }}
          >
            Sign In
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "2px solid var(--color-black)",
            borderRadius: "var(--radius-md)",
            padding: "6px",
            cursor: "pointer",
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="flex md:hidden flex-col"
          style={{
            backgroundColor: "var(--color-cream)",
            borderBottom: "2px solid var(--color-black)",
            padding: "16px 24px",
            gap: "16px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-black)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sign-in"
            className="btn btn-primary btn-md"
            style={{ textDecoration: "none", width: "fit-content" }}
          >
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
}
