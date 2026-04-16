"use client";
import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { mockEvents, CATEGORY_COLORS, CATEGORY_TEXT } from "@/lib/mockData";
import { Lock, CreditCard, ChevronLeft } from "lucide-react";

function CheckoutContent() {
  const router = useRouter();
  const params = useSearchParams();
  const eventId = params.get("eventId") ?? "1";
  const ticketTypeId = params.get("ticketType") ?? "";
  const quantity = parseInt(params.get("quantity") ?? "1");

  const event = mockEvents.find((e) => e.id === eventId) ?? mockEvents[0];
  const ticketType = event.ticketTypes.find((t) => t.id === ticketTypeId) ?? event.ticketTypes[0];
  const subtotal = ticketType.price * quantity;
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;

  const [form, setForm] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);

  const categoryBg = CATEGORY_COLORS[event.category];
  const categoryTextColor = CATEGORY_TEXT[event.category];

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  const formatCard = (val: string) =>
    val.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim().slice(0, 19);

  const formatExpiry = (val: string) => {
    const digits = val.replace(/\D/g, "");
    if (digits.length >= 3) return digits.slice(0, 2) + "/" + digits.slice(2, 4);
    return digits;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    router.push("/confirmation");
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--color-cream)" }}>
      <Navbar />

      <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "32px 24px" }}>
        <Link
          href={`/events/${event.id}`}
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
          Back to Event
        </Link>

        <h1 className="font-display" style={{ fontSize: "48px", fontWeight: 900, margin: "0 0 32px" }}>
          CHECKOUT
        </h1>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "32px", alignItems: "start" }}>
          {/* Payment form */}
          <form onSubmit={handleSubmit}>
            <div
              style={{
                backgroundColor: "var(--color-white)",
                border: "2px solid var(--color-black)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-md)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "24px", borderBottom: "2px solid var(--color-black)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CreditCard size={20} />
                  <h2 className="font-display" style={{ fontSize: "24px", fontWeight: 800, margin: 0 }}>
                    PAYMENT DETAILS
                  </h2>
                </div>
              </div>

              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { field: "cardName", label: "Name on Card", placeholder: "Alex Martin", type: "text" },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                      {label}
                    </label>
                    <input className="input" type={type} placeholder={placeholder} value={form[field as keyof typeof form]} onChange={(e) => update(field, e.target.value)} required />
                  </div>
                ))}

                <div>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                    Card Number
                  </label>
                  <input
                    className="input"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={form.cardNumber}
                    onChange={(e) => update("cardNumber", formatCard(e.target.value))}
                    maxLength={19}
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                      Expiry
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="MM/YY"
                      value={form.expiry}
                      onChange={(e) => update("expiry", formatExpiry(e.target.value))}
                      maxLength={5}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                      CVV
                    </label>
                    <input
                      className="input"
                      type="text"
                      placeholder="123"
                      value={form.cvv}
                      onChange={(e) => update("cvv", e.target.value.replace(/\D/g, "").slice(0, 4))}
                      maxLength={4}
                      required
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 16px",
                    backgroundColor: "var(--color-cream)",
                    border: "2px solid var(--color-black)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <Lock size={16} style={{ color: "var(--color-teal)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: "13px", color: "var(--color-text-secondary)" }}>
                    Your payment is secured by Stripe. We never store your card details.
                  </span>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={loading}>
                  {loading ? "Processing..." : `Pay €${total}`}
                </button>
              </div>
            </div>
          </form>

          {/* Order summary */}
          <div
            style={{
              border: "2px solid var(--color-black)",
              borderRadius: "var(--radius-lg)",
              backgroundColor: "var(--color-white)",
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
              position: "sticky",
              top: "80px",
            }}
          >
            <div style={{ padding: "20px", borderBottom: "2px solid var(--color-black)" }}>
              <h3 className="font-display" style={{ fontSize: "20px", fontWeight: 800, margin: 0 }}>
                ORDER SUMMARY
              </h3>
            </div>

            <div style={{ aspectRatio: "16/9", borderBottom: "2px solid var(--color-black)", overflow: "hidden" }}>
              <img src={event.image} alt={event.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span className="badge badge-sm" style={{ backgroundColor: categoryBg, color: categoryTextColor, width: "fit-content" }}>
                {event.category}
              </span>
              <h4 className="font-display" style={{ fontSize: "20px", fontWeight: 800, margin: 0 }}>
                {event.title}
              </h4>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "13px", fontWeight: 700, color: "var(--color-text-secondary)", margin: 0 }}>
                {event.date} · {event.time}
              </p>
              <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "var(--color-text-secondary)", margin: 0 }}>
                {event.venue}
              </p>

              <div style={{ borderTop: "1px solid var(--color-cream-dark)", paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { label: `${ticketType.name} × ${quantity}`, value: `€${subtotal}` },
                  { label: "Service fee (10%)", value: `€${serviceFee}` },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: "14px", color: "var(--color-text-secondary)" }}>{label}</span>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: "14px", fontWeight: 600 }}>{value}</span>
                  </div>
                ))}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderTop: "2px solid var(--color-black)",
                    paddingTop: "8px",
                    marginTop: "4px",
                  }}
                >
                  <span className="font-display" style={{ fontSize: "18px", fontWeight: 800 }}>TOTAL</span>
                  <span className="font-display" style={{ fontSize: "22px", fontWeight: 900, color: "var(--color-coral)" }}>€{total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div style={{ padding: "80px", textAlign: "center" }}>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
