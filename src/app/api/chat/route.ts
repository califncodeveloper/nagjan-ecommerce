import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const NAGJAN_SYSTEM_PROMPT = `You are NAGJAN Industrial AI, the expert technical assistant for NAGJAN (Mount Kailash Printpack Machines).

### Company Profile & Verified Facts:
- **Brand Name:** NAGJAN
- **Company Name:** Mount Kailash Printpack Machines
- **Tagline:** Industrial Corrugated Packaging Machinery Solutions
- **Established:** 2010.
- **Track Record:** 240+ Corrugation lines delivered and installed across India.
- **Headquarters / Registered Office:** Plot No. 21, Door No. 14, Third Cross, Thirumalai Nagar, Perungudi, Chennai – 600 096, Tamil Nadu, India.
- **Godown & Spares Depot:** No. 1, Perumal Koil Street, Near Madhavaram New Bus Depot, Madhavaram, Chennai – 600 060, Tamil Nadu, India. (Houses 400+ ready-stock industrial spare parts with rapid dispatch across India).
- **Sales Hotline:** +91-94455 66288
- **Service & Spares Hotline:** +91-7299 20 7800
- **Landline:** +91-44-2496 2406
- **Email:** sales@nagjan.com

### Key Machinery Categories:
1. **Corrugation Production Lines & 2PLY Plants:**
   - WJ-100-1800 2PLY Automatic Corrugation Plant (High speed continuous line, 100 m/min, 1800mm web width)
   - Hydraulic Shaftless Mill Roll Stands (ZJ-V5B, dual arm, hydraulic clamping & lifting, pneumatic multi-disc brakes)
   - ZDF Conveyor Bridge & Preheaters
2. **Single Facer Corrugators:**
   - SF-10 High Speed Hood Suction Single Facer (Negative pressure suction, tungsten carbide rolls, 180 m/min)
   - SF-280 / SF-320 Fingerless Single Facers
3. **Rotary Die Cutters & Slitters:**
   - High-Speed Automatic Lead Edge Feeder Rotary Die Cutters
   - Thin Blade Slitter Scorers (Tungsten carbide alloy thin blades, automatic pneumatic grinding)
   - NC-1800 Computer Rotary Cutters (Helical blade cutoff, ±1.0mm accuracy)
4. **Flute Laminators & Converting Equipment:**
   - TMB-C / STM High-Speed Automatic Flute Laminators (bottom vacuum suction feeder, elastic front-lay registration)
   - Semi-Automatic & Automatic Carton Folder Gluers
   - Heavy-duty Box Stitching Machines (Single, double, and combined stitching)

### Ready-Stock Spare Parts (400+ SKUs):
- Tungsten carbide and chrome-plated Corrugating Rollers
- Thin blades, female slotting knives, circular slitting knives, rotary cutoff blades
- Synchronous timing belts, conveyor belts, silicone suction belts
- Pneumatic disc brakes, airbags, rotary joints, steam siphons
- Pit-mesh glue applicator rolls, doctor rolls
- High-pressure positive blower motors, bearings, and lubrication spares

### Response Guidelines:
1. **Formatting:**
   - Always structure your responses with clean Markdown!
   - Use **bold** for product names, models, and technical specifications.
   - Use bullet points (- or *) for lists of features, specs, or parts.
   - Use numbered lists for sequential steps or procedures.
   - Use headings (###) when dividing answers into logical sections.
   - Embed internal links to relevant website pages:
     - Machinery Catalog: [Browse Machinery](/products)
     - Spare Parts Catalog: [400+ Spare Parts](/spare-parts)
     - Request a Quote: [Request a Quote](/request-quote)
     - Contact & Godown: [Contact Us](/contact)
2. **Tone:** Professional, technically sound, helpful, polite, and oriented towards corrugated packaging plant owners and plant managers.
3. **Accuracy:** Never invent non-existent specifications. If a custom size or quotation is needed, invite the user to [Request a Custom Quotation](/request-quote) or contact the Chennai sales desk directly at +91-94455 66288.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body as { messages?: ChatMessage[] };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request: messages array is required." },
        { status: 400 }
      );
    }

    // Keep conversation history concise (last 10 messages) to maintain fast responses
    const recentMessages = messages.slice(-10).map((m) => ({
      role: m.role === "assistant" || m.role === "system" ? m.role : ("user" as const),
      content: String(m.content || "").slice(0, 3000),
    }));

    const apiKey = process.env.GROQ_API_KEY;

    // Graceful fallback if GROQ_API_KEY is not configured yet
    if (!apiKey || apiKey.trim() === "" || apiKey === "your_groq_api_key_here") {
      const fallbackResponse = `👋 Welcome to **NAGJAN Industrial AI Assistant**!

We manufacture and supply high-speed corrugated box machinery, 2PLY production lines, and maintain **400+ ready-stock spare parts** at our Madhavaram depot in Chennai.

*(Note for Administrator: To enable real-time Groq LLM streaming, add your \`GROQ_API_KEY\` to \`.env.local\`)*

### How can we assist you today?
- 🏭 **Industrial Machinery:** View our [Corrugation Machinery Catalog](/products)
- ⚙️ **400+ Spare Parts:** Explore ready stock at [NAGJAN Spare Parts](/spare-parts)
- 📋 **Quotation Desk:** Submit your plant specifications at [Request a Quote](/request-quote)
- 📞 **Direct Hotline:** Call our sales engineers at **[+91-94455 66288](tel:+919445566288)** or service desk at **[+91-7299 20 7800](tel:+917299207800)**

Feel free to ask questions about machine models like the **WJ-100-1800 2PLY Plant**, **SF-10 Single Facer**, or spare parts availability!`;

      return NextResponse.json({
        role: "assistant",
        content: fallbackResponse,
      });
    }

    // List of candidate models to try with automatic fallback
    const preferredModel = process.env.GROQ_MODEL || "openai/gpt-oss-20b";
    const fallbackModels = [
      preferredModel,
      "openai/gpt-oss-20b",
      "qwen/qwen3.8-27b",
      "openai/gpt-oss-120b",
      "allam-2-7b",
      "llama-3.3-70b-versatile",
      "llama-3.1-8b-instant",
    ].filter((m, idx, arr) => Boolean(m) && arr.indexOf(m) === idx);

    let data: any = null;
    let lastErrorText = "";

    for (const modelToTry of fallbackModels) {
      const groqPayload = {
        model: modelToTry,
        messages: [
          { role: "system", content: NAGJAN_SYSTEM_PROMPT },
          ...recentMessages,
        ],
        temperature: 0.4,
        max_tokens: 1024,
        top_p: 0.9,
      };

      try {
        const groqResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey.trim()}`,
          },
          body: JSON.stringify(groqPayload),
        });

        if (groqResponse.ok) {
          data = await groqResponse.json();
          break;
        }

        lastErrorText = await groqResponse.text();
        console.warn(`[Groq Model Attempt ${modelToTry}]:`, groqResponse.status, lastErrorText);
      } catch (fetchErr) {
        console.error(`[Groq Fetch Error with ${modelToTry}]:`, fetchErr);
      }
    }

    // Dynamic recovery: If all candidate models failed, dynamically fetch active models from Groq
    if (!data) {
      try {
        console.log("[Groq Fallback] Attempting dynamic model discovery...");
        const listRes = await fetch("https://api.groq.com/openai/v1/models", {
          headers: {
            Authorization: `Bearer ${apiKey.trim()}`,
          },
        });

        if (listRes.ok) {
          const listJson = await listRes.json();
          const dynamicModels: string[] = (listJson?.data || [])
            .map((item: any) => item.id as string)
            .filter((id: string) => {
              if (!id) return false;
              const lower = id.toLowerCase();
              return (
                !lower.includes("whisper") &&
                !lower.includes("guard") &&
                !lower.includes("safeguard") &&
                !lower.includes("orpheus") &&
                !fallbackModels.includes(id)
              );
            });

          for (const dynModel of dynamicModels) {
            try {
              const dynRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${apiKey.trim()}`,
                },
                body: JSON.stringify({
                  model: dynModel,
                  messages: [
                    { role: "system", content: NAGJAN_SYSTEM_PROMPT },
                    ...recentMessages,
                  ],
                  temperature: 0.4,
                  max_tokens: 1024,
                  top_p: 0.9,
                }),
              });

              if (dynRes.ok) {
                data = await dynRes.json();
                console.log(`[Groq Dynamic Fallback Success]: used ${dynModel}`);
                break;
              }
            } catch {
              // continue to next model
            }
          }
        }
      } catch (dynamicErr) {
        console.error("[Groq Dynamic Models Fetch Error]:", dynamicErr);
      }
    }

    if (!data) {
      console.error("[Groq All Models Failed]:", lastErrorText);
      return NextResponse.json(
        {
          error: "Groq API temporarily unavailable.",
          role: "assistant",
          content: `⚠️ We encountered a temporary connection issue with our AI processing engine.

Our technical support team in Chennai is ready to help you directly:
- **Sales Hotline:** [+91-94455 66288](tel:+919445566288)
- **Spares & Service:** [+91-7299 20 7800](tel:+917299207800)
- **WhatsApp:** Click the green WhatsApp button below for instant assistance!

Please try your query again or [Request a Direct Quote](/request-quote).`,
        },
        { status: 200 }
      );
    }

    const replyContent =
      data?.choices?.[0]?.message?.content ||
      "Thank you for contacting NAGJAN. How can I help you with our machinery or spare parts?";

    return NextResponse.json({
      role: "assistant",
      content: replyContent,
    });
  } catch (err: unknown) {
    console.error("[Chat API Handler Error]:", err);
    return NextResponse.json(
      {
        error: "Internal server error occurred.",
        role: "assistant",
        content: `⚠️ An unexpected error occurred while processing your request. Please try again or reach our team at [sales@nagjan.com](mailto:sales@nagjan.com) or **+91-94455 66288**.`,
      },
      { status: 200 }
    );
  }
}
