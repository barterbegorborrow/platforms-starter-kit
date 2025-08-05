export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      textAlign: "center",
      padding: "2rem",
      background: "linear-gradient(135deg, #4facfe, #00f2fe)",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        🚀 Barter, Beg, or Borrow
      </h1>
      <p style={{ fontSize: "1.2rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
        The new community marketplace and content hub is coming soon.
        Trade, share, and connect — all in one place.
      </p>
      <p style={{ fontWeight: "bold", marginBottom: "2rem" }}>
        Launching 2025
      </p>
    </main>
  );
}
