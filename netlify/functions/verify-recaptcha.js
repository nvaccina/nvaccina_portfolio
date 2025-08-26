import fetch from "node-fetch";

export async function handler(event, context) {
  try {
    const { token } = JSON.parse(event.body);

    const siteKey = "6LcTXXwrAAAAAHsmCaKoFsfFK4j41C-ia6Oyvo3K";
    const apiKey = "AIzaSyA0q8bWQH4X9ryyCACDfTAChCBXAVHQxAo";
    const projectId = "portfolio-451216";

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

    const data = await response.json();

    if (!data.tokenProperties?.valid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, reason: "Invalid token" })
      };
    }

    if (data.riskAnalysis?.score < 0.5) {
      return {
        statusCode: 403,
        body: JSON.stringify({ success: false, reason: "Score too low" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, score: data.riskAnalysis?.score })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: err.message })
    };
  }
}