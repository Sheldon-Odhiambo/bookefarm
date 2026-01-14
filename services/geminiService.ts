
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Bookefarm Primary School Virtual Assistant. 
Your tone is warm, professional, and extremely helpful.
Key Info:
- Motto: "Learn. Strive. Excel."
- Location: Greenspan, Nairobi.
- Curriculum: Competency Based Curriculum (CBC).
- Levels: Play Group to Grade 6 (Junior School).
- Values: Discipline, Excellence, Integrity, Care.
- Admissions: Requires child's birth certificate, clinical record, and previous school report.
- Activities: Football, Swimming, Music, Drama, Coding Club, Chess.
- Contact Number: 0746129446
If a parent asks about fees, tell them they are "available on request via our admissions department to ensure we discuss the best plan for your child."
Keep answers concise (max 3 sentences).
`;

export async function askAssistant(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't process that. Please contact our front office at 0746129446.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting. Please try again or call us directly!";
  }
}
