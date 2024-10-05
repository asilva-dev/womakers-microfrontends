import React from "react";
import ErrorBoundary from "./ErrorBoundary";
const RemoteApp = React.lazy(() => import("Remote/App"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
      padding: "20px"
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: "#16181b", 
    color: "#363636", 
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  }}>
    <h1 style={{ color: "#f9dd17" }}>Esta é a tela Host!</h1>
    <h2 style={{ color: "#c6195b" }}>Aplicação Remota:</h2>
    <RemoteWrapper>
      <RemoteApp />
    </RemoteWrapper>
    
    <br />
    <a 
      href="http://localhost:4000" 
      style={{
        color: "#ffffff",
        textDecoration: "none", 
        padding: "10px 20px", 
        backgroundColor: "#d77e2a", 
        borderRadius: "5px",
        transition: "background-color 0.3s",
      }} 
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#ce5a2d"}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#d77e2a"}
    >
      Link Aplicação Remota!
    </a>
  </div>
);


export default App;
