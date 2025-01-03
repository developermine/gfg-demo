import React from "react";
import MainApp from "./Components/VideoCont";
import AppBar from "./Components/AppHeader";

const App = () => {
  const handleConnectWallet = () => {
    console.log("Connect Wallet clicked");
    // Implement wallet connection logic here
  };

  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <AppBar
        walletAddress="awtuwyybbsbshghws7266265yhsbsbbsbv"
        onConnectWallet={handleConnectWallet}
      />
      <div style={{ padding: "20px" }}>
        <h2>Hot Corn Videos in your region</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <MainApp />
        </div>
      </div>
    </div>
  );
};

export default App;
