import React, { useState } from "react"
import { ArrowRight, CheckCircle2, Key, Lock } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Section } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setError("Please enter a valid developer email address.")
      return
    }
    setError("")
    setSubmitted(true)
  }

  return (
    <Section variant="subtle" bordered className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl border border-line rounded-lg p-8 md:p-12 bg-bg space-y-6">
          
          {submitted ? (
            <div className="space-y-4 py-4 animate-in fade-in duration-180">
              <div className="flex size-10 items-center justify-center rounded-sm border border-line-strong bg-fg1 text-bg">
                <CheckCircle2 className="size-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium tracking-tight text-fg1">
                ACCESS KEY PROVISIONED
              </h3>
              <p className="text-sm text-fg2 font-normal max-w-prose">
                We have emailed your sandbox API key and gRPC endpoint credentials to <strong>{email}</strong>.
              </p>
              <Button variant="default" size="sm" onClick={() => setSubmitted(false)} className="mt-2 font-mono text-xs">
                Request Key for Another Account
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="subtle" className="gap-1.5 font-mono text-xs">
                  <Key className="size-3.5 text-fg1" />
                  <span>EARLY DEVELOPER ACCESS</span>
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg1">
                  Start Building with Synapse AI Today
                </h3>
                <p className="text-sm md:text-base text-fg2 font-normal max-w-prose">
                  Get immediate access to 100,000 free monthly tokens and SDK access for TypeScript, Python, and Rust.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3">
                <div className="flex-1 space-y-1">
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className="font-mono text-xs"
                    required
                  />
                  {error && <span className="text-xs text-danger font-mono block">{error}</span>}
                </div>

                <Button variant="inverted" size="default" type="submit" className="font-mono text-xs shrink-0">
                  Request API Key <ArrowRight className="size-3.5" />
                </Button>
              </form>

              <div className="flex items-center gap-2 text-xs text-fg3 font-mono">
                <Lock className="size-3.5 text-fg2" />
                <span>Zero spam. Direct gRPC endpoints & developer updates only.</span>
              </div>
            </div>
          )}

        </div>
      </Container>
    </Section>
  )
}
