// api/solve.js
import OpenAI from "openai";

export default async function handler(req, res) {
  try {
    const { problem } = JSON.parse(req.body);

    if (!problem) {
      return res.status(400).json({ error: "No problem provided" });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful math tutor for kids." },
        { role: "user", content: `Solve this math problem step by step: ${problem}` }
      ],
    });

    const solution = completion.choices[0].message.content;
    res.status(200).json({ solution });

  } catch (err) {
    console.error("AI solve error:", err);
    res.status(500).json({ error: "Something went wrong." });
  }
}
