import { Card, CardContent } from "@/components/ui/card";

const modelCategories = [
  {
    name: "OpenAI",
    models: [
      "GPT-4o (ChatGPT)",
      "GPT-4o-mini",
      "GPT-3.5",
      "System Prompt Generator (playground)",
      "Custom GPT's"
    ]
  },
  {
    name: "Anthropic",
    models: [
      "Claude 3.5 Sonnet 20241022",
      "Claude 3.5",
      "Claude-3 OPUS"
    ]
  },
  {
    name: "Google",
    models: [
      "GEMINI EXPERIMENTAL 1206",
      "GEMINI FLASH 2.0",
      "GEMINI EXPERIMENTAL 1114",
      "GEMINI-1.5-PRO-002",
      "GEMINI-1.5-FLASH-002",
      "GEMINI 1.5 PRO EXPERIMENTAL 0801",
      "GEMINI 1.5 PRO"
    ]
  },
  {
    name: "Meta",
    models: [
      "LLAMA-3.3-70B",
      "LLAMA-3.1-405B",
      "LLAMA-3-70B"
    ]
  },
  {
    name: "Others",
    models: [
      "Apple Intelligence 18.2",
      "Nova Models",
      "QWEN QWQ",
      "QWEN 2.5 CODER",
      "QWEN 2",
      "QWEN",
      "DEEPSEEK-R1-LITE",
      "DeepSeek 2",
      "DeepSeek",
      "Mistral Large 2",
      "Mistral Large (Le Chat)",
      "Nous (Hermes 3 70B)",
      "NVIDIA (LLAMA-3.1-NEMOTRON-70B, NVIDIA NEMOTRON-4-340B)",
      "Perplexity",
      "REFLECTION-70B",
      "Reka (Reka Core)",
      "xAI (Grok 2)",
      "Zamba (Zamba-7b)"
    ]
  }
];

export default function SupportedModels() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Supported AI Models
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modelCategories.map((category, index) => (
            <Card key={index} className="border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.models.map((model, modelIndex) => (
                    <li key={modelIndex} className="text-muted-foreground">
                      {model}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
