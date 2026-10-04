export const siteConfig = {
  name: "SYNAPSE AI",
  tagline: "Autonomous Intelligence. Zero Overhead.",
  description: "A quiet, high-throughput AI engine designed for developers and product teams who require deterministic reasoning, sub-50ms latency, and local model privacy.",
  contact: {
    email: "developers@synapse-ai.io",
    docsUrl: "https://docs.synapse-ai.io",
    statusUrl: "https://status.synapse-ai.io",
  },
  navLinks: [
    { label: "Features", href: "#features" },
    { label: "Playground", href: "#playground" },
    { label: "Architecture", href: "#architecture" },
    { label: "Benchmarks", href: "#benchmarks" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  stats: [
    { value: "38ms", label: "P99 Time to First Token", note: "Streamed via HTTP/3" },
    { value: "128K", label: "Context Window Tokens", note: "Sub-quadratic attention" },
    { value: "99.4%", label: "Tool Execution Accuracy", note: "Zero hallucinated function calls" },
    { value: "$0.0004", label: "Cost Per 1K Tokens", note: "85% lower than market average" },
  ],
  aiModels: [
    {
      id: "synapse-flash",
      name: "Synapse-Flash v2",
      speed: "32ms P99",
      context: "64K",
      description: "Ultra-fast execution model for real-time edge agents and instant UI autocompletion.",
      promptPreset: "Write a high-performance Rust function to calculate SHA-256 hashes concurrently using tokio worker threads.",
      outputPreset: `use sha2::{Digest, Sha256};
use tokio::task;

pub async fn hash_batch_concurrently(data_chunks: Vec<Vec<u8>>) -> Vec<String> {
    let mut handles = Vec::with_capacity(data_chunks.len());
    
    for chunk in data_chunks {
        handles.push(task::spawn_blocking(move || {
            let mut hasher = Sha256::new();
            hasher.update(&chunk);
            format!("{:x}", hasher.finalize())
        }));
    }
    
    let mut results = Vec::with_capacity(handles.len());
    for handle in handles {
        if let Ok(hash) = handle.await {
            results.push(hash);
        }
    }
    results
}`
    },
    {
      id: "synapse-reasoning",
      name: "Synapse-Reasoning v1",
      speed: "65ms P99",
      context: "128K",
      description: "Step-by-step logical reasoning engine trained for multi-turn tool calling and schema validation.",
      promptPreset: "Analyze the security of JWT authentication without expiration validation and suggest mitigation.",
      outputPreset: `[REASONING CHAIN]:
1. Vulnerability Analysis: JWTs without explicit 'exp' claims persist indefinitely, enabling replay attacks.
2. Attack Vector: Stolen tokens can be reused indefinitely across microservices.
3. Mitigation Protocol:
   a) Enforce compulsory 'exp' & 'nbf' claims on server verification.
   b) Maintain a Redis bloom filter for revoked JTI (JWT ID) blacklisting.
   c) Rotate signing keys every 72 hours via JWKS endpoint.`
    },
    {
      id: "synapse-agent",
      name: "Synapse-SubAgent Graph",
      speed: "80ms P99",
      context: "256K",
      description: "Orchestration framework for spawning micro sub-agents to parallelize complex code refactoring.",
      promptPreset: "Decompose a monolithic Express JS server into 3 decoupled microservices with gRPC communication.",
      outputPreset: `[ORCHESTRATOR GRAPH EXECUTED]:
- SubAgent 1 (Auth Service): Extracted /login & /register into auth-service (gRPC port 50051).
- SubAgent 2 (Billing Service): Extracted Stripe webhooks into billing-service (gRPC port 50052).
- SubAgent 3 (Gateway): Configured envoy proxy route definitions.
✓ Build verified: 0 TypeScript errors.`
    }
  ],
  features: [
    {
      id: "f1",
      title: "Deterministic Function Calling",
      description: "Strict JSON Schema validation guarantees 100% type-safe payloads for your internal APIs with zero hallucinated parameters.",
      tag: "Type-Safe",
      icon: "Code2"
    },
    {
      id: "f2",
      title: "Sub-50ms Streaming Latency",
      description: "Custom C++ inference kernel built on Vulkan and Metal acceleration delivering instant streaming to end users.",
      tag: "High Throughput",
      icon: "Zap"
    },
    {
      id: "f3",
      title: "Local On-Premises Privacy",
      description: "Deploy models directly into your AWS VPC or Kubernetes cluster with zero external API calls or data logging.",
      tag: "SOC2 Type II",
      icon: "Shield"
    },
    {
      id: "f4",
      title: "Autonomous Multi-Agent Graph",
      description: "Decompose complex multi-step user tasks into specialized micro-agents running concurrently with self-correcting loops.",
      tag: "Orchestration",
      icon: "GitBranch"
    },
    {
      id: "f5",
      title: "Native Vector RAG Pipeline",
      description: "Built-in HNSW vector index stores millions of embeddings for instant semantic search across your codebase.",
      tag: "Vector Search",
      icon: "Database"
    },
    {
      id: "f6",
      title: "Fine-Tuning & Adapter Export",
      description: "Export compact LoRA adapters in minutes to customize model weights for your domain-specific language.",
      tag: "Custom Weights",
      icon: "Cpu"
    }
  ],
  architectureSteps: [
    {
      step: "01",
      title: "Ingestion & Tokenization",
      description: "Incoming user prompts and context documents are tokenized in < 2ms using our rust tokenization engine."
    },
    {
      step: "02",
      title: "Semantic Vector Graph",
      description: "The prompt graph fetches top-k relevant embeddings from your local vector index without network latency."
    },
    {
      step: "03",
      title: "Sub-Agent Execution",
      description: "Parallel sub-agents execute tools, validate schemas, and run type-check tests in isolated sandboxes."
    },
    {
      step: "04",
      title: "Verified Output",
      description: "Final output passes strict schema validation before streaming directly to your client application."
    }
  ],
  benchmarks: [
    { model: "Synapse-Flash v2", latency: "32 ms", context: "128,000", accuracy: "99.4%", cost: "$0.0004" },
    { model: "Industry Standard A", latency: "240 ms", context: "128,000", accuracy: "94.2%", cost: "$0.0025" },
    { model: "Industry Standard B", latency: "310 ms", context: "200,000", accuracy: "95.8%", cost: "$0.0030" },
    { model: "Open Model Baseline", latency: "180 ms", context: "32,000", accuracy: "89.1%", cost: "$0.0010" }
  ],
  plans: [
    {
      id: "plan-dev",
      name: "Developer",
      price: "$0",
      period: "forever free",
      description: "For individual engineers building side projects and prototypes.",
      highlight: false,
      badge: "FREE TIER",
      features: [
        "100,000 Tokens per month",
        "Access to Synapse-Flash v2",
        "Community Discord support",
        "Public API access",
        "Standard rate limits (60 RPM)"
      ],
      buttonText: "Start Building Free"
    },
    {
      id: "plan-pro",
      name: "Pro Studio",
      price: "$29",
      period: "per month",
      description: "For fast-moving product teams requiring high throughput and dedicated agents.",
      highlight: true,
      badge: "RECOMMENDED",
      features: [
        "5,000,000 Tokens included per month",
        "Access to all Reasoning & Agent models",
        "Dedicated gRPC endpoint (< 40ms P99)",
        "Priority 24/7 engineering support",
        "10 Concurrent Sub-Agent graphs",
        "Custom LoRA adapter exports"
      ],
      buttonText: "Get Pro API Key"
    },
    {
      id: "plan-enterprise",
      name: "Enterprise VPC",
      price: "Custom",
      period: "per organization",
      description: "For scale enterprise security, custom model weights, and VPC deployment.",
      highlight: false,
      badge: "VPC DEPLOYMENT",
      features: [
        "Unlimited self-hosted tokens",
        "Full VPC & On-Premises Kubernetes deployment",
        "Custom LoRA weights training",
        "Dedicated Technical Account Manager",
        "SOC2 Type II & HIPAA compliance SLA",
        "Custom billing & invoicing"
      ],
      buttonText: "Contact Sales Team"
    }
  ],
  faqs: [
    {
      question: "How does Synapse AI achieve sub-50ms latency?",
      answer: "We built a custom inference kernel from scratch in Rust and C++, bypassing heavy Python runtimes. We utilize FlashAttention-3 and INT4 quantized weight caching directly on edge GPU clusters."
    },
    {
      question: "Is my proprietary code or data used for training?",
      answer: "No. Zero customer code or telemetry is ever stored or used for model training. All data transmission is encrypted using TLS 1.3, and Enterprise customers deploy models inside their own isolated VPC."
    },
    {
      question: "What SDKs and languages are supported?",
      answer: "We provide official client SDKs for TypeScript/JavaScript, Python, Rust, Go, and a standard OpenAI-compatible REST/gRPC API interface for seamless drop-in integration."
    },
    {
      question: "Can I host Synapse AI on our own hardware?",
      answer: "Yes! Our Enterprise plan includes containerized Helm charts and Docker images optimized for NVIDIA H100/A100 clusters, Apple Silicon Macs, and AMD Instinct accelerators."
    },
    {
      question: "How does function calling schema validation work?",
      answer: "Synapse enforces JSON Schema constraints at the logit generation level during inference, making it mathematically impossible for the model to emit invalid JSON keys or incorrect data types."
    }
  ]
};
