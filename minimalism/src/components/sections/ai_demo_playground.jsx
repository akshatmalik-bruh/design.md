import React, { useState, useEffect } from "react"
import { Play, RotateCcw, Copy, Check, Sparkles, Sliders, ShieldCheck } from "lucide-react"
import { siteConfig } from "@/data/site"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function AIDemoPlayground() {
  const [selectedModel, setSelectedModel] = useState(siteConfig.aiModels[0])
  const [promptText, setPromptText] = useState(selectedModel.promptPreset)
  const [streamOutput, setStreamOutput] = useState(selectedModel.outputPreset)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [temperature, setTemperature] = useState(0.1)

  // When model selection changes, update preset
  const handleSelectModel = (model) => {
    setSelectedModel(model)
    setPromptText(model.promptPreset)
    setStreamOutput(model.outputPreset)
  }

  const handleRunInference = () => {
    setIsGenerating(true)
    setStreamOutput("")
    
    const fullText = selectedModel.outputPreset
    let currentIdx = 0

    const interval = setInterval(() => {
      if (currentIdx < fullText.length) {
        setStreamOutput((prev) => prev + fullText.charAt(currentIdx))
        currentIdx += 2 // Stream fast for smooth feel
      } else {
        setStreamOutput(fullText)
        setIsGenerating(false)
        clearInterval(interval)
      }
    }, 15)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(streamOutput)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section id="playground" variant="subtle" bordered className="py-16 md:py-24">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-3 mb-12 max-w-2xl">
          <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
            <Sparkles className="size-3.5 text-fg1" />
            <span>INTERACTIVE DEMO</span>
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
            Test Model Inference Live
          </h2>
          <p className="text-sm md:text-base text-fg2 font-normal">
            Select a model checkpoint below to test low-latency function calling and structured code generation.
          </p>
        </div>

        {/* Playground Container */}
        <div className="border border-line rounded-lg bg-bg overflow-hidden">
          
          {/* Top Model Switcher Tab Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-line bg-surface-1 p-2 sm:p-3 gap-3">
            <div className="flex flex-wrap gap-1.5">
              {siteConfig.aiModels.map((m) => {
                const isActive = selectedModel.id === m.id
                return (
                  <button
                    key={m.id}
                    onClick={() => handleSelectModel(m)}
                    className={`px-3 py-1.5 rounded-md text-xs font-mono transition-colors cursor-pointer border ${
                      isActive
                        ? "bg-bg text-fg1 border-line-strong font-medium"
                        : "bg-transparent text-fg2 border-transparent hover:text-fg1 hover:bg-surface-2"
                    }`}
                  >
                    {m.name}
                  </button>
                )
              })}
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-fg2 px-2">
              <span className="flex items-center gap-1">
                <span className="size-2 rounded-full bg-success inline-block" />
                {selectedModel.speed}
              </span>
              <span>Context: {selectedModel.context}</span>
            </div>
          </div>

          {/* Playground Main Workspace Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-line">
            
            {/* Left: Input Prompt & Controls */}
            <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-medium text-fg1 uppercase tracking-wider">
                    Prompt Input:
                  </label>
                  <button 
                    onClick={() => setPromptText("")} 
                    className="text-xs text-fg3 hover:text-fg1 font-mono cursor-pointer"
                  >
                    Clear
                  </button>
                </div>

                <textarea
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  rows={6}
                  className="w-full rounded-md border border-line-strong bg-bg p-3 font-mono text-xs text-fg1 placeholder:text-fg3 focus:outline-2 focus:outline-focus focus:outline-offset-2 transition-colors resize-none"
                  placeholder="Type your prompt or instructions here..."
                />

                {/* Temperature slider control */}
                <div className="p-3 rounded-md border border-line-subtle bg-surface-1 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-fg2 flex items-center gap-1">
                      <Sliders className="size-3.5" /> Temperature
                    </span>
                    <span className="text-fg1 font-medium">{temperature}</span>
                  </div>
                  <input 
                    type="range" 
                    min="0.0" 
                    max="1.0" 
                    step="0.1" 
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-full h-1 bg-line-subtle rounded-lg appearance-none cursor-pointer accent-fg1"
                  />
                  <div className="flex justify-between text-[10px] text-fg3 font-mono">
                    <span>0.0 (Deterministic)</span>
                    <span>1.0 (Creative)</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="inverted"
                  size="default"
                  disabled={isGenerating || !promptText.trim()}
                  onClick={handleRunInference}
                  className="w-full justify-center font-mono text-xs uppercase tracking-wider"
                >
                  {isGenerating ? (
                    <span>Running Inference...</span>
                  ) : (
                    <>
                      <Play className="size-3.5 fill-current" /> Execute Prompt
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Right: Streaming Output Window */}
            <div className="lg:col-span-7 p-4 sm:p-6 bg-surface-1 flex flex-col justify-between min-h-[300px]">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-line-subtle pb-3">
                  <span className="text-xs font-mono font-medium text-fg1 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="size-4 text-success" /> Verified Output Stream:
                  </span>

                  <button
                    onClick={handleCopy}
                    disabled={!streamOutput}
                    className="flex items-center gap-1.5 text-xs font-mono text-fg2 hover:text-fg1 disabled:opacity-40 cursor-pointer"
                  >
                    {copied ? <Check className="size-3.5 text-success" /> : <Copy className="size-3.5" />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>

                <pre className="font-mono text-xs text-fg1 leading-relaxed whitespace-pre-wrap overflow-x-auto p-3 rounded-md border border-line-subtle bg-bg min-h-[220px]">
                  {streamOutput || <span className="text-fg3 italic">Click 'Execute Prompt' to stream model response...</span>}
                </pre>
              </div>

              <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-fg3">
                <span>Model: {selectedModel.name}</span>
                <span>Tokens Generated: {streamOutput.split(" ").length * 2}</span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  )
}
