import React from "react";

const AppBar = ({ walletAddress, onConnectWallet }) => {
  return (
    <div>
      {/* Top Row */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", padding: "10px 0" }}>
        {[
          { label: "SEXUAL WELLNESS", link: "/sexual-wellness" },
          { label: "INSIGHTS", link: "/insights" },
          { label: "SITES", link: "/sites" },
          { label: "SHOP", link: "/shop" },
          { label: "TRUST & SAFETY", link: "/trust-safety" },
          { label: "EN", link: "/en" },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              color: "#888888",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Middle Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#0e0e0e",
          height: "70px",
          padding: "0 10px",
        }}
      >
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <i style={{ color: "#ff9000", fontSize: "30px" }}>SENSUAL</i>
        </button>
        {/* <img src="./logo.png" alt="CornHub Logo" style={{ height: "70px" }} /> */}
        <div style={{ flex: 1 }} />
        <input
          type="text"
          placeholder="Search Cornhub"
          style={{
            width: "500px",
            height: "40px",
            backgroundColor: "#242424",
            color: "#c6c6c6",
            border: "none",
            paddingLeft: "10px",
          }}
        />
        <div style={{ flex: 1 }} />
        <button
          style={{
            backgroundColor: "#ff9000",
            color: "#ffffff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "14px",
            cursor: "pointer",
            marginRight: "10px",
          }}
          onClick={onConnectWallet}
        >
          Connect Wallet
        </button>
        <button
          style={{
            backgroundColor: "#242424",
            color: "#c6c6c6",
            border: "1px solid #888888",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "14px",
            cursor: "default", // Make non-clickable
          }}
        >
          {walletAddress || "Wallet Address"}
        </button>
      </div>

      {/* Bottom Tab */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#0e0e0e",
          height: "40px",
        }}
      >
        {[
          { label: "HOME", link: "/" },
          { label: "CORN VIDEOS", link: "/corn-videos" },
          { label: "CATEGORIES", link: "/categories" },
          { label: "LIVE CAMS", link: "/live-cams" },
          { label: "CORNSTART", link: "/cornstart" },
          { label: "COMMUNITY", link: "/community" },
          { label: "PHOTOS & GIFTS", link: "/photos-gifts" },
        ].map((tab, index) => (
          <a
            key={index}
            href={tab.link}
            style={{
              borderBottom: index === 0 ? "3px solid #ff9000" : "none",
              color: "#c6c6c6",
              fontSize: "13px",
              textAlign: "center",
              lineHeight: "40px",
              textDecoration: "none",
              padding: "0 10px",
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AppBar;