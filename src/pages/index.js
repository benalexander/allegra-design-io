import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Allegra Design - Coming Soon</title>
      </Head>
      <div
        style={{
          backgroundColor: "#343c3e",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <img
          src="/allegra-design-logo.png"
          alt="Allegra Design Logo"
          style={{
            maxWidth: "100%",
            height: "auto",
            marginBottom: "40px",
          }}
        />
        <h1
          style={{
            color: "#ffffff",
            fontSize: "24px",
            fontWeight: "300",
            letterSpacing: "2px",
            margin: 0,
            textTransform: "uppercase",
          }}
        >
          Coming Soon
        </h1>
      </div>
    </>
  );
}
