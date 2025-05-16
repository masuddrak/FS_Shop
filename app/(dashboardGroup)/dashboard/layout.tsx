import React from "react";

const DashbordLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#111", color: "#fff" }}>
        <div style={{ display: "flex" }}>
          <aside style={{ width: "200px", background: "#222" }}>
            🔐 Admin Sidebar
          </aside>
          <main style={{ flex: 1 }}>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default DashbordLayout;
