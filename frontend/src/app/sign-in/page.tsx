"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Zap } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    router.push("/events");
  };

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
        {/* Header */}
        <div
          style={{
            padding: "32px 32px 24px",
            borderBottom: "2px solid var(--color-black)",
            backgroundColor: "var(--color-coral)",
          }}
        >
          <Link
            href="/"
            className="font-display"
            style={{ fontSize: "28px", fontWeight: 900, textDecoration: "none", color: "var(--color-black)", display: "block", marginBottom: "12px" }}
          >
            <span
              style={{
                backgroundColor: "var(--color-black)",
                color: "var(--color-white)",
                padding: "0 6px",
                borderRadius: "4px",
                marginRight: "4px",
              }}
            >
              LAST
            </span>
            SEAT
          </Link>
          <h1 className="font-display" style={{ fontSize: "32px", fontWeight: 900, margin: 0 }}>
            WELCOME BACK
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
              Email
            </label>
            <input
              className="input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <label
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                Password
              </label>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "13px",
                  color: "var(--color-coral)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Forgot password?
              </a>
            </div>
            <div style={{ position: "relative" }}>
              <input
                className="input"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ paddingRight: "44px" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "var(--color-text-muted)",
                }}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }} disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>

          <p style={{ fontFamily: "var(--font-ui)", fontSize: "14px", textAlign: "center", color: "var(--color-text-secondary)", margin: 0 }}>
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" style={{ color: "var(--color-coral)", fontWeight: 700, textDecoration: "none" }}>
              Sign up free
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
