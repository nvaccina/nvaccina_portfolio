import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

const siteKey = "6LcTXXwrAAAAAHsmCaKoFsfFK4j41C-ia6Oyvo3K";
const apiKey = "AIzaSyA0q8bWQH4X9ryyCACDfTAChCBXAVHQxAo";
const projectId = "portfolio-451216";

app.post("/api/verify-recaptcha", async (req, res) => {
  const { token } = req.body;

  try {
    const response = await fetch(
      `https://recaptchaenterprise.googleapis.com/v1/projects/${projectId}/assessments?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          event: {
            token,
            expectedAction: "submit",
            siteKey
          }
        })
      }
    );
    const text = await response.text();

    let data = {};
    if (text) data = JSON.parse(text);

    if (!data.tokenProperties?.valid) {
      return res.status(400).json({
        success: false,
        reason: data.tokenProperties?.invalidReason || "Invalid token"
      });
    }

    if (data.tokenProperties?.action !== "submit") {
      return res.status(400).json({
        success: false,
        reason: "Action mismatch",
        expected: "submit",
        received: data.tokenProperties?.action
      });
    }

    // Controllo dello score
    if (data.riskAnalysis?.score < 0.5) {
      return res.status(403).json({
        success: false,
        reason: "Score too low",
        score: data.riskAnalysis?.score
      });
    }

    return res.json({ success: true, score: data.riskAnalysis?.score });

  } catch (error) {
    console.error("Errore verifica reCAPTCHA:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.use(express.static(path.join(__dirname, "dist")));

// --- Catch-all: ritorna index.html per il frontend Vue ---
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server avviato su http://localhost:${PORT}`));