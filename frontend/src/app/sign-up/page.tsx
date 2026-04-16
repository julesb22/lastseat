"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    router.push("/events");
  };

  const update = (field: string, value: string) => setForm({ ...form, [field]: value });

  return (
    <div
      className="dot-grid"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 24px" }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          backgroundColor: "var(--color-white)",
          border: "2px solid var(--color-black)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "32px 32px 24px",
            borderBottom: "2px solid var(--color-black)",
            backgroundColor: "var(--color-yellow)",
          }}
        >
          <Link
            href="/"
            className="font-display"
            style={{ fontSize: "28px", fontWeight: 900, textDecoration: "none", color: "var(--color-black)", display: "block", marginBottom: "12px" }}
          >
            <span style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)", padding: "0 6px", borderRadius: "4px", marginRight: "4px" }}>
              LAST
            </span>
            SEAT
          </Link>
          <h1 className="font-display" style={{ fontSize: "32px", fontWeight: 900, margin: 0 }}>
            CREATE ACCOUNT
          </h1>
        </div>

        <form onSubmit={handleSubmit} style={{ padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {error && (
            <div
              style={{
                padding: "12px 16px",
                backgroundColor: "#FFF0F0",
                border: "2px solid var(--color-coral)",
                borderRadius: "var(--radius-md)",
                fontFamily: "var(--font-ui)",
                fontSize: "14px",
                color: "var(--color-coral-dark)",
              }}
            >
              {error}
            </div>
          )}

          {[
            { field: "name", label: "Full Name", type: "text", placeholder: "Alex Martin" },
            { field: "email", label: "Email", type: "email", placeholder: "you@example.com" },
          ].map(({ field, label, type, placeholder }) => (
            <div key={field}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                {label}
              </label>
              <input
                className="input"
                type={type}
                placeholder={placeholder}
                value={form[field as keyof typeof form]}
                onChange={(e) => update(field, e.target.value)}
              />
            </div>
          ))}

          {["password", "confirm"].map((field) => (
            <div key={field}>
              <label style={{ fontFamily: "var(--font-mono)", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "8px" }}>
                {field === "password" ? "Password" : "Confirm Password"}
              </label>
              <div style={{ position: "relative" }}>
                <input
                  className="input"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={form[field as keyof typeof form]}
                  onChange={(e) => update(field, e.target.value)}
                  style={{ paddingRight: "44px" }}
                />
                {field === "password" && (
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted)" }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                )}
              </div>
            </div>
          ))}

          <button type="submit" className="btn btn-secondary btn-lg" style={{ width: "100%" }} disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>

          <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", textAlign: "center", color: "var(--color-text-secondary)", margin: 0 }}>
            Already have an account?{" "}
            <Link href="/sign-in" style={{ color: "var(--color-coral)", fontWeight: 700, textDecoration: "none" }}>
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
