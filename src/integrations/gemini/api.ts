export interface GeminiRequest {
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  objective: string;
}

export async function analyzeViaGemini(req: GeminiRequest) {
  const response = await fetch("/api/gemini-assessment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  });
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data.detail ?? "Erro ao chamar a API Gemini");
  }
  return await response.json();
}
