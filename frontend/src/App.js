import React, { useRef, useEffect, useState } from "react";

const mainBg = {
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  fontFamily: "'Inter', 'Roboto', Arial, sans-serif",
  color: "#222",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: 0,
};

const cardStyle = {
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)",
  border: "1px solid #e0e7ef",
  padding: 32,
  marginTop: 48,
  minWidth: 340,
  maxWidth: 520,
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const videoStyle = {
  width: 400,
  maxWidth: "100%",
  borderRadius: 12,
  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.08)",
  marginBottom: 24,
  background: "#e0e7ef",
  border: "1px solid #d1d5db",
  minHeight: 220,
};

const buttonStyle = {
  background: "linear-gradient(90deg, #7dd3fc 0%, #a7f3d0 100%)",
  color: "#222",
  border: "none",
  borderRadius: 8,
  padding: "10px 28px",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  marginBottom: 18,
  marginTop: 8,
  boxShadow: "0 2px 8px 0 rgba(52,144,220,0.10)",
  transition: "background 0.2s, box-shadow 0.2s",
};

const inputStyle = {
  border: "1px solid #d1d5db",
  borderRadius: 6,
  padding: "8px 12px",
  fontSize: 15,
  marginLeft: 8,
  marginBottom: 8,
  background: "#f3f4f6",
  color: "#222",
  outline: "none",
  width: 220,
};

const labelStyle = {
  fontWeight: 500,
  fontSize: 15,
  color: "#38bdf8",
};

const descBox = {
  background: "#f3f4f6",
  borderRadius: 10,
  padding: "18px 20px",
  marginTop: 24,
  fontSize: 20,
  minHeight: 48,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
  color: "#222",
  width: "100%",
  textAlign: "center",
  letterSpacing: 0.2,
  transition: "background 0.2s",
};

const settingsCard = {
  background: "#f3f4f6",
  borderRadius: 12,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
  padding: 20,
  marginBottom: 18,
  marginTop: 8,
  width: "100%",
  maxWidth: 400,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 8,
};

const devButtonStyle = {
  position: "fixed",
  top: 32,
  right: 32,
  zIndex: 1001,
  background: "linear-gradient(90deg, #38bdf8 0%, #a7f3d0 100%)",
  color: "#222",
  border: "none",
  borderRadius: 16,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 4px 16px 0 rgba(52,144,220,0.13)",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
  letterSpacing: 1,
  outline: "none",
};

const devPanelStyle = (open) => ({
  position: "fixed",
  top: 0,
  right: open ? 0 : -440,
  width: 420,
  height: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  boxShadow: "-8px 0 32px 0 rgba(31,38,135,0.13)",
  borderLeft: "1px solid #e0e7ef",
  zIndex: 1002,
  transition: "right 0.5s cubic-bezier(.77,0,.18,1)",
  display: "flex",
  flexDirection: "column",
  borderTopLeftRadius: 24,
  borderBottomLeftRadius: 24,
  overflow: "hidden",
});

const devTabBar = {
  display: "flex",
  borderBottom: "1px solid #e0e7ef",
  background: "#f3f4f6",
  borderTopLeftRadius: 24,
};

const devTabStyle = (active) => ({
  flex: 1,
  padding: "16px 0",
  cursor: "pointer",
  background: active ? "linear-gradient(90deg, #bae6fd 0%, #a7f3d0 100%)" : "#f3f4f6",
  border: "none",
  fontWeight: 700,
  color: active ? "#2563eb" : "#222",
  fontSize: 17,
  borderBottom: active ? "3px solid #38bdf8" : "1px solid #e0e7ef",
  transition: "background 0.2s, color 0.2s, border-bottom 0.2s",
  outline: "none",
});

const devLogBox = {
  flex: 1,
  background: "linear-gradient(135deg, #f3f4f6 0%, #e0e7ef 100%)",
  padding: 18,
  fontFamily: "Fira Mono, monospace",
  fontSize: 15,
  color: "#222",
  overflowY: "auto",
  borderRadius: 16,
  margin: 18,
  marginTop: 0,
  boxShadow: "0 2px 12px 0 rgba(0,0,0,0.06)",
  lineHeight: 1.6,
  letterSpacing: 0.1,
  border: "1px solid #e0e7ef",
  minHeight: 200,
  maxHeight: "calc(100vh - 120px)",
  transition: "background 0.2s",
};

const devCloseBtn = {
  position: "absolute",
  top: 18,
  right: 18,
  background: "#fff",
  border: "1px solid #e0e7ef",
  borderRadius: 8,
  fontSize: 20,
  fontWeight: 700,
  color: "#2563eb",
  cursor: "pointer",
  width: 36,
  height: 36,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px 0 rgba(52,144,220,0.08)",
  zIndex: 1003,
  transition: "background 0.2s, color 0.2s",
};

const flowButtonStyle = {
  ...buttonStyle,
  background: "linear-gradient(90deg, #fca5a5 0%, #fcd34d 100%)",
  color: "#222",
  marginLeft: 8,
  marginRight: 8,
};

const hintInputStyle = {
  ...inputStyle,
  width: 320,
  marginBottom: 0,
  marginTop: 8,
};

const sidebarWidth = 340;
const sidebarOverlayClosed = {
  position: "fixed",
  top: 0,
  left: -sidebarWidth,
  height: "100vh",
  width: sidebarWidth,
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  boxShadow: "4px 0 24px 0 rgba(31,38,135,0.13)",
  borderRight: "1px solid #e0e7ef",
  zIndex: 1200,
  display: "flex",
  flexDirection: "column",
  padding: 0,
  transition: "left 0.45s cubic-bezier(.77,0,.18,1)",
  maxWidth: "100vw",
};
const sidebarOverlayOpen = {
  ...sidebarOverlayClosed,
  left: 0,
};
const sidebarInner = {
  flex: 1,
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: 18,
  padding: "18px 18px 24px 18px",
};
const answerListHeaderRow = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "18px 18px 8px 18px",
  borderBottom: "1px solid #e0e7ef",
  background: "#f8fafc",
  position: "sticky",
  top: 0,
  zIndex: 2,
};
const answerListHeader = {
  fontWeight: 700,
  fontSize: 18,
  color: "#38bdf8",
  letterSpacing: 0.5,
};
const answerCard = {
  background: "#fff",
  borderRadius: 14,
  boxShadow: "0 2px 8px 0 rgba(31,38,135,0.07)",
  border: "1px solid #e0e7ef",
  padding: "18px 18px 18px 18px",
  fontSize: 15,
  color: "#222",
  fontWeight: 500,
  wordBreak: "break-word",
  opacity: 0.98,
  minHeight: 32,
  display: "block",
  lineHeight: 1.7,
  maxWidth: "100%",
  boxSizing: 'border-box',
};
const historyButtonStyle = {
  position: "fixed",
  top: 32,
  left: 32,
  zIndex: 1001,
  background: "linear-gradient(90deg, #38bdf8 0%, #a7f3d0 100%)",
  color: "#222",
  border: "none",
  borderRadius: 16,
  padding: "12px 32px",
  fontSize: 18,
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 4px 16px 0 rgba(52,144,220,0.13)",
  transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
  letterSpacing: 1,
  outline: "none",
};
const closeSidebarBtn = {
  position: "absolute",
  top: 12,
  right: 12,
  background: "#fff",
  border: "1px solid #e0e7ef",
  borderRadius: 8,
  fontSize: 20,
  fontWeight: 700,
  color: "#2563eb",
  cursor: "pointer",
  width: 32,
  height: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px 0 rgba(52,144,220,0.08)",
  zIndex: 1003,
  transition: "background 0.2s, color 0.2s",
};
const mainBgWithSidebar = (sidebarOpenState) => ({
  minHeight: "100vh",
  background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)",
  marginLeft: sidebarOpenState ? sidebarWidth : 0,
  width: sidebarOpenState ? `calc(100vw - ${sidebarWidth}px)` : "100vw",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: 24,
  paddingBottom: 24,
  transition: "margin-left 0.45s cubic-bezier(.77,0,.18,1), width 0.45s cubic-bezier(.77,0,.18,1)",
});
const cardStyleCompact = {
  background: "#fff",
  borderRadius: 18,
  boxShadow: "0 4px 24px 0 rgba(31,38,135,0.10)",
  border: "1px solid #e0e7ef",
  marginTop: 18,
  padding: 22,
  minWidth: 320,
  maxWidth: 420,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
const topBarStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 10,
  width: "100%",
  justifyContent: "flex-end",
};
const titleStyle = {
  fontWeight: 800,
  fontSize: 26,
  color: "#38bdf8",
  marginBottom: 2,
  letterSpacing: 0.5,
  textAlign: "center",
};
const descStyle = {
  color: "#555",
  marginBottom: 12,
  fontSize: 15,
  fontWeight: 400,
  textAlign: "center",
};
const promptRow = {
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginBottom: 8,
  marginTop: 2,
  gap: 6,
};
const lastAnswerBox = {
  background: "linear-gradient(90deg, #bae6fd 0%, #a7f3d0 100%)",
  borderRadius: 12,
  fontSize: 18,
  fontWeight: 700,
  color: "#2563eb",
  boxShadow: "0 4px 16px 0 rgba(52,144,220,0.13)",
  border: "2px solid #38bdf8",
  opacity: 1,
  margin: "10px 0 0 0",
  padding: "16px 14px 14px 14px",
  width: "100%",
  minHeight: 40,
  textAlign: "center",
  wordBreak: "break-word",
  transition: "background 0.2s, font-size 0.2s",
};

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [ollamaUrl, setOllamaUrl] = useState("http://localhost:11434/api/chat");
  const [ollamaModel, setOllamaModel] = useState("gemma3:4b-it-fp16");
  const [showSettings, setShowSettings] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [devTab, setDevTab] = useState("frontend");
  const [frontendLogs, setFrontendLogs] = useState([]);
  const [backendLogs, setBackendLogs] = useState([]);
  const [flowActive, setFlowActive] = useState(true);
  const [userHint, setUserHint] = useState("");
  const devLogRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [sidebarOpenState, setSidebarOpenState] = useState(false);

  useEffect(() => {
    // Google Fonts ekle
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    // Webcam erişimi
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((err) => {
        console.error("Kamera erişim hatası:", err);
      });
  }, []);

  useEffect(() => {
    if (!flowActive) return;
    const interval = setInterval(captureAndSend, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [ollamaUrl, ollamaModel, flowActive, userHint]);

  const captureAndSend = async () => {
    if (!flowActive) return;
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      setLoading(true);
      const formData = new FormData();
      formData.append("file", blob, "frame.jpg");
      formData.append("ollama_url", ollamaUrl);
      formData.append("ollama_model", ollamaModel);
      formData.append("user_hint", userHint);
      try {
        const res = await fetch("http://localhost:8000/describe", {
          method: "POST",
          body: formData,
        });
        if (!flowActive) { setLoading(false); return; }
        const data = await res.json();
        setDescription(data.description);
      } catch (e) {
        if (!flowActive) { setLoading(false); return; }
        setDescription("Açıklama alınamadı.");
      }
      setLoading(false);
    }, "image/jpeg");
  };

  // Frontend loglarını yakala
  useEffect(() => {
    const origLog = window.console.log;
    window.console.log = (...args) => {
      setFrontendLogs((prev) => [...prev.slice(-199), args.map(String).join(" ")]);
      origLog(...args);
    };
    return () => { window.console.log = origLog; };
  }, []);

  // Backend loglarını polling ile çek
  useEffect(() => {
    if (!devOpen || devTab !== "backend") return;
    let isActive = true;
    const fetchLogs = async () => {
      try {
        const res = await fetch("http://localhost:8000/logs");
        const data = await res.text();
        if (isActive) setBackendLogs(data.split("\n").slice(-200));
      } catch (e) {
        if (isActive) setBackendLogs(["Backend logları alınamadı."]);
      }
    };
    fetchLogs();
    const interval = setInterval(fetchLogs, 2000);
    return () => { isActive = false; clearInterval(interval); };
  }, [devOpen, devTab]);

  // Otomatik scroll
  useEffect(() => {
    if (devOpen && devLogRef.current) {
      devLogRef.current.scrollTop = devLogRef.current.scrollHeight;
    }
  }, [frontendLogs, backendLogs, devOpen, devTab]);

  // Yanıtları güncelle (en yeni en üstte)
  useEffect(() => {
    if (!flowActive) return;
    if (description && !loading) {
      setAnswers((prev) => {
        if (prev.length === 0 || prev[0] !== description) {
          return [description, ...prev];
        }
        return prev;
      });
    }
    // eslint-disable-next-line
  }, [description, loading, flowActive]);

  return (
    <>
      {/* Geçmiş butonu */}
      <button style={historyButtonStyle} onClick={() => setSidebarOpenState(true)}>
        Geçmiş
      </button>
      {/* Overlay arka planı doğrudan inline style ile ekle */}
      {sidebarOpenState && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(0,0,0,0.10)",
          zIndex: 1199,
          opacity: 1,
          transition: "opacity 0.3s",
        }} onClick={() => setSidebarOpenState(false)} />
      )}
      {/* Yanıtlar paneli overlay */}
      <div style={sidebarOpenState ? sidebarOverlayOpen : sidebarOverlayClosed}>
        <div style={answerListHeaderRow}>
          <div style={answerListHeader}>Yanıtlar</div>
          <button style={closeSidebarBtn} onClick={() => setSidebarOpenState(false)} title="Kapat">×</button>
        </div>
        <div style={sidebarInner}>
          {answers.slice(1, 6).map((ans, i) => (
            <div
              key={i}
              style={answerCard}
            >
              {ans}
            </div>
          ))}
        </div>
      </div>
      <button style={devButtonStyle} onClick={() => setDevOpen((v) => !v)}>
        DEV
      </button>
      <div style={devPanelStyle(devOpen)}>
        <div style={devTabBar}>
          <button style={devTabStyle(devTab === "frontend")}
            onClick={() => setDevTab("frontend")}>Frontend Logları</button>
          <button style={devTabStyle(devTab === "backend")}
            onClick={() => setDevTab("backend")}>Backend Logları</button>
        </div>
        <button style={devCloseBtn} onClick={() => setDevOpen(false)} title="Kapat">×</button>
        <div style={devLogBox} ref={devLogRef}>
          {devTab === "frontend"
            ? frontendLogs.map((l, i) => <div key={i}>{l}</div>)
            : backendLogs.map((l, i) => <div key={i}>{l}</div>)}
        </div>
      </div>
      <div style={mainBg}>
        <div style={cardStyle}>
          <div style={{ fontWeight: 800, fontSize: 26, color: "#38bdf8", marginBottom: 2, letterSpacing: 0.5, textAlign: "center" }}>
            Canlı Kamera Açıklama
          </div>
          <div style={{ color: "#555", marginBottom: 12, fontSize: 15, fontWeight: 400, textAlign: "center" }}>
            Kameradan alınan görüntüyü yapay zeka ile anlık olarak açıklayın.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, width: "100%", justifyContent: "flex-end" }}>
            <button style={flowButtonStyle} onClick={() => setFlowActive((v) => !v)}>
              {flowActive ? "Durdur" : "Başlat"}
            </button>
            <button onClick={() => setShowSettings(!showSettings)} style={buttonStyle}>
              {showSettings ? "Ayarları Gizle" : "Ollama Ayarları"}
            </button>
          </div>
          {showSettings && (
            <div style={settingsCard}>
              <div>
                <label style={labelStyle}>Ollama API URL:</label>
                <input type="text" value={ollamaUrl} onChange={e => setOllamaUrl(e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Model Adı:</label>
                <input type="text" value={ollamaModel} onChange={e => setOllamaModel(e.target.value)} style={inputStyle} />
              </div>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: 8, marginTop: 2, gap: 6 }}>
            <input
              type="text"
              placeholder="Modelin yanıtı için ipucu (ör: kısa, detaylı, mizahi...)"
              value={userHint}
              onChange={e => setUserHint(e.target.value)}
              style={hintInputStyle}
            />
          </div>
          <video ref={videoRef} autoPlay playsInline muted style={videoStyle} />
          <canvas ref={canvasRef} style={{ display: "none" }} />
          {answers.length > 0 && (
            <div style={{
              background: "linear-gradient(90deg, #bae6fd 0%, #a7f3d0 100%)",
              borderRadius: 12,
              fontSize: 18,
              fontWeight: 700,
              color: "#2563eb",
              boxShadow: "0 4px 16px 0 rgba(52,144,220,0.13)",
              border: "2px solid #38bdf8",
              opacity: 1,
              margin: "10px 0 0 0",
              padding: "16px 14px 14px 14px",
              width: "100%",
              minHeight: 40,
              textAlign: "center",
              wordBreak: "break-word",
              transition: "background 0.2s, font-size 0.2s",
            }}>{answers[0]}</div>
          )}
        </div>
        <footer style={{ marginTop: 18, color: "#bbb", fontSize: 13 }}>
          <span>© {new Date().getFullYear()} Kamera Açıklama Uygulaması</span>
        </footer>
      </div>
    </>
  );
}

export default App;
