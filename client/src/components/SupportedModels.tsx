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
      "Gemini Experimental 1206",
      "Gemini Flash 2.0",
      "Gemini Experimental 1114",
      "Gemini-1.5-PRO-002",
      "Gemini-1.5-FLASH-002",
      "Gemini 1.5 PRO Experimental 0801",
      "Gemini 1.5 PRO"
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
    name: "Alibaba",
    models: [
      "QWEN QWQ",
      "QWEN 2.5 CODER",
      "QWEN 2",
      "QWEN"
    ]
  },
  {
    name: "DeepSeek",
    models: [
      "DEEPSEEK-R1-LITE",
      "DeepSeek 2",
      "DeepSeek"
    ]
  },
  {
    name: "Mistral",
    models: [
      "Mistral Large 2",
      "Mistral Large (Le Chat)"
    ]
  },
  {
    name: "NVIDIA",
    models: [
      "LLAMA-3.1-NEMOTRON-70B",
      "NVIDIA NEMOTRON-4-340B"
    ]
  },
  {
    name: "Others",
    models: [
      "Apple Intelligence 18.2",
      "Amazon Nova Models",
      "Nous (Hermes 3 70B)",
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

        <p className="text-center text-muted-foreground mt-8">
          (more coming soon!)
        </p>
      </div>
    </section>
  );
}