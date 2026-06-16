/* ═══════════════════════════════════════════════════════════
   CAREER QUEST — script.js
   Pure vanilla JS, no dependencies, no backend
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── 1. CAREER DATA ─── */
const CAREERS = {
  'Web Developer': {
    icon: '🌐', tag: 'Frontend · Backend · Full Stack',
    overview: 'Master the craft of building powerful web experiences — from pixel-perfect UIs to robust server logic.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'📄', title:'HTML Foundations', desc:'Semantic markup, accessibility, document structure and best practices.', skills:['HTML5','Semantics','Accessibility','SEO Basics'], project:'Build a personal portfolio page with semantic HTML' },
          { icon:'🎨', title:'CSS Essentials', desc:'Selectors, box model, flexbox, grid, transitions, and responsive design.', skills:['CSS3','Flexbox','Grid','Media Queries'], project:'Recreate a landing page from a Dribbble design' },
          { icon:'⚡', title:'JavaScript Basics', desc:'Variables, data types, functions, DOM manipulation, and event handling.', skills:['ES6+','DOM API','Events','Fetch API'], project:'Build a to-do list app with local storage' },
          { icon:'🔧', title:'Dev Tools & Git', desc:'Browser DevTools, version control with Git and GitHub, command line basics.', skills:['Git','GitHub','Terminal','Chrome DevTools'], project:'Version-control your portfolio on GitHub' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'⚛️', title:'React.js', desc:'Components, hooks, state management, and the React ecosystem.', skills:['React','Hooks','Context API','JSX'], project:'Build a multi-page SPA with routing and state' },
          { icon:'🗄️', title:'Node.js & Express', desc:'Server-side JS, REST APIs, middleware, authentication.', skills:['Node.js','Express','REST','JWT'], project:'Create a RESTful blog API with user auth' },
          { icon:'🗃️', title:'Databases', desc:'SQL fundamentals, PostgreSQL, and NoSQL with MongoDB.', skills:['SQL','PostgreSQL','MongoDB','ORM'], project:'Build a bookmarking app with a full DB backend' },
          { icon:'🎯', title:'TypeScript', desc:'Static typing, interfaces, generics — write safer, scalable code.', skills:['TypeScript','Interfaces','Generics','Types'], project:'Migrate a JS project to TypeScript' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'🚀', title:'Performance & Optimization', desc:'Core Web Vitals, code splitting, lazy loading, caching strategies.', skills:['Lighthouse','Webpack','Lazy Loading','CDN'], project:'Achieve 95+ Lighthouse score on a complex app' },
          { icon:'🔒', title:'Web Security', desc:'OWASP Top 10, XSS, CSRF, HTTPS, Content Security Policy.', skills:['OWASP','CSP','CORS','OAuth 2.0'], project:'Audit and harden an existing web application' },
          { icon:'📦', title:'Micro-frontends & Monorepos', desc:'Module federation, Nx, Turborepo, scalable architecture.', skills:['Module Federation','Nx','Turborepo','Lerna'], project:'Architect a micro-frontend e-commerce platform' },
          { icon:'🧪', title:'Testing Mastery', desc:'Unit, integration, E2E testing with Jest, React Testing Library, Playwright.', skills:['Jest','RTL','Playwright','TDD'], project:'Achieve 90%+ test coverage on a production app' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🌩️', title:'Cloud Deployment & DevOps', desc:'AWS/Vercel/GCP, CI/CD pipelines, Docker, infrastructure as code.', skills:['AWS','Docker','GitHub Actions','Terraform'], project:'Deploy a scalable app with zero-downtime CI/CD' },
          { icon:'🏗️', title:'System Design', desc:'Scalability patterns, load balancing, caching layers, event-driven arch.', skills:['System Design','Redis','Kafka','CDN'], project:'Design a system serving 10M+ users' },
          { icon:'🤖', title:'AI Integration', desc:'LLM APIs, vector databases, RAG pipelines in web apps.', skills:['OpenAI API','LangChain','Pinecone','Embeddings'], project:'Build an AI-powered code review assistant' },
          { icon:'📐', title:'Open Source Leadership', desc:'Maintain open-source libs, write RFCs, mentor contributors.', skills:['OSS','Documentation','Code Review','RFC'], project:'Launch and maintain a developer tool with 1K+ stars' },
        ]
      }
    }
  },

  'Data Scientist': {
    icon: '📊', tag: 'ML · Statistics · Python',
    overview: 'Transform raw data into decisions — build models that predict, classify, and generate insight.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🐍', title:'Python for Data', desc:'Python syntax, data structures, file I/O, and the scientific stack.', skills:['Python','NumPy','Pandas','Matplotlib'], project:'Analyze a public dataset and create 5 meaningful visualizations' },
          { icon:'📈', title:'Statistics Fundamentals', desc:'Descriptive stats, probability, distributions, hypothesis testing.', skills:['Statistics','Probability','Hypothesis Testing','Scipy'], project:'A/B test analysis on a sample marketing dataset' },
          { icon:'🗂️', title:'Data Wrangling', desc:'Cleaning, transforming, and merging messy real-world datasets.', skills:['Pandas','Data Cleaning','ETL','Regex'], project:'Clean and prepare a Kaggle dataset for analysis' },
          { icon:'📉', title:'Exploratory Analysis', desc:'EDA techniques, outlier detection, correlation analysis.', skills:['Seaborn','Plotly','EDA','Feature Analysis'], project:'Full EDA report on a chosen domain dataset' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'🧠', title:'Machine Learning', desc:'Supervised & unsupervised learning, model evaluation, scikit-learn.', skills:['Scikit-learn','Regression','Classification','Clustering'], project:'Predict house prices with ensemble methods' },
          { icon:'🔮', title:'Feature Engineering', desc:'Creating powerful features, dimensionality reduction, encoding.', skills:['PCA','Feature Selection','Encoding','SMOTE'], project:'Win a Kaggle competition with creative features' },
          { icon:'⏱️', title:'Time Series Analysis', desc:'ARIMA, Prophet, trend decomposition, forecasting.', skills:['ARIMA','Prophet','Statsmodels','Forecasting'], project:'Forecast sales for a retail dataset' },
          { icon:'🗣️', title:'NLP Fundamentals', desc:'Text preprocessing, TF-IDF, sentiment analysis, transformers intro.', skills:['NLTK','spaCy','TF-IDF','BERT'], project:'Sentiment analysis dashboard for product reviews' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'🔬', title:'Deep Learning', desc:'Neural networks, CNNs, RNNs, PyTorch/TensorFlow, training pipelines.', skills:['PyTorch','TensorFlow','CNN','LSTM'], project:'Train an image classifier on a custom dataset' },
          { icon:'🛤️', title:'MLOps & Pipelines', desc:'Model versioning, experiment tracking, deployment, monitoring.', skills:['MLflow','DVC','Airflow','Docker'], project:'Build an automated ML training & serving pipeline' },
          { icon:'💬', title:'Large Language Models', desc:'Fine-tuning, prompt engineering, RLHF, LLM evaluation.', skills:['HuggingFace','PEFT','LoRA','Evaluation'], project:'Fine-tune an LLM for a domain-specific task' },
          { icon:'📐', title:'Causal Inference', desc:'Causal graphs, counterfactuals, propensity scoring.', skills:['DoWhy','CausalPy','DAGs','A/B Testing'], project:'Design a causal study for a business decision' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🏆', title:'Research & Publishing', desc:'Read/write papers, reproduce SOTA, contribute to open research.', skills:['Paper Reading','Arxiv','LaTeX','Reproducibility'], project:'Reproduce a NeurIPS paper and publish findings' },
          { icon:'🌐', title:'Production ML Systems', desc:'Feature stores, real-time inference, A/B experiments at scale.', skills:['Feast','Triton','Ray','Kubeflow'], project:'Serve a model to 1M+ users with sub-100ms latency' },
          { icon:'🔐', title:'Responsible AI', desc:'Fairness, explainability, privacy-preserving ML, governance.', skills:['SHAP','LIME','Fairlearn','Differential Privacy'], project:'Audit a model for bias and produce a fairness report' },
          { icon:'🤝', title:'Thought Leadership', desc:'Blog, speak, mentor — define standards in your org and community.', skills:['Technical Writing','Speaking','Mentoring','RFC'], project:'Give a talk at a data conference or meet-up' },
        ]
      }
    }
  },

  'UI/UX Designer': {
    icon: '🎨', tag: 'Design · Research · Prototyping',
    overview: 'Shape digital experiences that delight users — from first concept to polished product.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🎭', title:'Design Principles', desc:'Color theory, typography, gestalt, visual hierarchy.', skills:['Color Theory','Typography','Layout','Gestalt'], project:'Redesign 3 screens of a poorly-rated app' },
          { icon:'📐', title:'Figma Fundamentals', desc:'Components, auto-layout, prototyping, variables.', skills:['Figma','Components','Auto-layout','Variants'], project:'Build a design system starter kit in Figma' },
          { icon:'🔍', title:'User Research Basics', desc:'Interviews, surveys, usability tests, affinity mapping.', skills:['User Interviews','Surveys','Usability Testing','Personas'], project:'Conduct 5 user interviews and synthesize findings' },
          { icon:'🗺️', title:'Information Architecture', desc:'Site maps, card sorting, navigation patterns.', skills:['IA','Card Sorting','Sitemaps','Taxonomy'], project:'Redesign the IA for a complex SaaS dashboard' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'📱', title:'Mobile-First Design', desc:'iOS/Android HIG, responsive patterns, touch targets.', skills:['iOS HIG','Material Design','Touch Design','Responsive'], project:'Design a cross-platform mobile banking app' },
          { icon:'♿', title:'Accessibility', desc:'WCAG 2.1 AA, colour contrast, screen reader considerations.', skills:['WCAG','ARIA','Colour Contrast','Focus States'], project:'Audit a product for accessibility and propose fixes' },
          { icon:'⚡', title:'Motion & Interaction', desc:'Micro-interactions, Lottie animations, After Effects basics.', skills:['Motion Design','Lottie','After Effects','Protopie'], project:'Create a fully animated onboarding flow prototype' },
          { icon:'🧩', title:'Design Systems', desc:'Tokens, component libraries, documentation, governance.', skills:['Design Tokens','Storybook','Figma Tokens','Documentation'], project:'Build and document a production-grade design system' },
        ]
      },
      advanced: {
        label: 'Intermediate', topics: [
          { icon:'📊', title:'Data-Driven Design', desc:'Analytics, heatmaps, quantitative UX, experiment design.', skills:['Mixpanel','Hotjar','A/B Testing','Metrics'], project:'Run a design experiment that improves conversion 15%' },
          { icon:'🧠', title:'UX Strategy', desc:'Jobs-to-be-done, value proposition design, competitive analysis.', skills:['JTBD','Value Proposition','Competitive Analysis','Vision'], project:'Deliver a UX strategy document for a product pivot' },
          { icon:'🏗️', title:'Design Ops', desc:'Tool stack governance, handoff workflows, team scaling.', skills:['Design Ops','Zeroheight','Handoff','Versioning'], project:'Set up a design ops workflow for a 10-person team' },
          { icon:'🎙️', title:'Stakeholder Influence', desc:'Presenting design, negotiating scope, aligning leadership.', skills:['Presenting','Storytelling','Negotiation','OKRs'], project:'Present a redesign to executive stakeholders and ship it' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🔭', title:'Futures & Emerging Tech', desc:'AR/VR design, voice UI, AI-native experiences.', skills:['ARKit','VR Design','Voice UI','AI UX'], project:'Design an AR spatial computing interface prototype' },
          { icon:'🌍', title:'Global & Inclusive Design', desc:'Localisation, cultural UX, emerging markets.', skills:['Localisation','RTL Design','Low-bandwidth UX','i18n'], project:'Redesign an app for a non-Western market' },
          { icon:'📖', title:'Publish & Mentor', desc:'Write case studies, speak at events, coach junior designers.', skills:['Case Studies','Mentoring','Conference Talks','Portfolio'], project:'Publish a 2000-word case study on a shipped product' },
          { icon:'🏆', title:'Head of Design Track', desc:'Team building, hiring, budgets, cross-functional leadership.', skills:['Hiring','Team Building','OKRs','Budget'], project:'Build out a design team and process from scratch' },
        ]
      }
    }
  },

  'Mobile App Developer': {
    icon: '📱', tag: 'iOS · Android · React Native',
    overview: 'Build apps that live in people\'s pockets — native performance meets cross-platform efficiency.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'📲', title:'Mobile Fundamentals', desc:'App lifecycle, platform differences, UI paradigms for iOS & Android.', skills:['iOS HIG','Material You','App Lifecycle','Gestures'], project:'Build a simple counter app on your preferred platform' },
          { icon:'⚛️', title:'React Native Basics', desc:'Components, navigation, Expo, Metro bundler.', skills:['React Native','Expo','StyleSheet','Navigation'], project:'Build a notes app with Expo' },
          { icon:'🐦', title:'Swift / Kotlin Intro', desc:'Language syntax, optionals, Kotlin coroutines, SwiftUI basics.', skills:['Swift','SwiftUI','Kotlin','Jetpack Compose'], project:'Build a weather app with a native UI' },
          { icon:'🗃️', title:'Local Storage', desc:'AsyncStorage, SQLite, Core Data, Room Database.', skills:['AsyncStorage','SQLite','Core Data','Room'], project:'Offline-first to-do app with sync' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'🌐', title:'APIs & Networking', desc:'REST, GraphQL, authentication, background fetch, websockets.', skills:['REST','GraphQL','JWT','WebSocket'], project:'Real-time chat app with socket.io' },
          { icon:'🔔', title:'Push Notifications', desc:'FCM, APNs, deep linking, notification UX best practices.', skills:['FCM','APNs','Deep Linking','OneSignal'], project:'Implement rich push notifications with deep links' },
          { icon:'📷', title:'Native Modules', desc:'Camera, GPS, biometrics, NFC, Bluetooth integration.', skills:['Camera','GPS','Bluetooth','Biometrics'], project:'Build a QR-code scanner with torch control' },
          { icon:'🛒', title:'App Store Deployment', desc:'Code signing, TestFlight, Play Store, release management.', skills:['TestFlight','Play Store','Code Signing','Fastlane'], project:'Publish an app to both stores' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'⚡', title:'Performance', desc:'Hermes engine, JS thread optimisation, memory profiling.', skills:['Flipper','Hermes','Profiling','Reanimated'], project:'Reduce app cold start time by 50%' },
          { icon:'🧪', title:'Testing & QA', desc:'Detox E2E, Jest, device farms, crash reporting.', skills:['Detox','Jest','Firebase Crashlytics','BrowserStack'], project:'Full E2E test suite for a shopping app' },
          { icon:'🏗️', title:'Architecture Patterns', desc:'Clean Architecture, MVVM, Redux, Zustand, modularisation.', skills:['MVVM','Redux','Zustand','Clean Architecture'], project:'Architect a scalable multi-feature super-app' },
          { icon:'💳', title:'Monetisation', desc:'In-app purchases, subscriptions, RevenueCat, analytics.', skills:['StoreKit','RevenueCat','Analytics','A/B Tests'], project:'Implement a freemium subscription model' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🤖', title:'On-device ML', desc:'Core ML, TensorFlow Lite, ONNX, model quantization.', skills:['Core ML','TFLite','ONNX','Model Optimization'], project:'Ship an on-device image recognition feature' },
          { icon:'🥽', title:'AR & Spatial', desc:'ARKit, ARCore, Reality Composer, spatial UI design.', skills:['ARKit','ARCore','RealityKit','Spatial Computing'], project:'Build an AR furniture placement app' },
          { icon:'🔐', title:'Security & Privacy', desc:'Secure storage, certificate pinning, GDPR/CCPA compliance.', skills:['Keychain','Certificate Pinning','GDPR','App Attest'], project:'Security audit and harden a production app' },
          { icon:'🌐', title:'Cross-platform Leadership', desc:'Monorepo strategy, shared business logic, team alignment.', skills:['Nx','KMM','TurboModules','Swift Package Manager'], project:'Architect a KMM or shared-logic cross-platform solution' },
        ]
      }
    }
  },

  'Cybersecurity Analyst': {
    icon: '🔐', tag: 'Security · Defense · Ethical Hacking',
    overview: 'Defend systems, hunt threats, and protect data in an increasingly dangerous digital world.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🌐', title:'Networking Fundamentals', desc:'TCP/IP, DNS, HTTP/S, subnetting, Wireshark, packet analysis.', skills:['TCP/IP','Wireshark','DNS','HTTP'], project:'Capture and analyze traffic on your home network' },
          { icon:'🐧', title:'Linux & CLI', desc:'File permissions, bash scripting, process management, SSH.', skills:['Linux','Bash','SSH','Cron'], project:'Set up a hardened Linux server from scratch' },
          { icon:'🔍', title:'Security Concepts', desc:'CIA triad, threat models, authentication, common vulnerabilities.', skills:['CIA Triad','OWASP','Authentication','Threat Modeling'], project:'Threat model a simple web application' },
          { icon:'🛡️', title:'Security Tools Intro', desc:'Nmap, Metasploit basics, Burp Suite, OSINT tools.', skills:['Nmap','Metasploit','Burp Suite','OSINT'], project:'Complete a beginner TryHackMe room' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'💣', title:'Penetration Testing', desc:'Reconnaissance, scanning, exploitation, post-exploitation, reporting.', skills:['Kali Linux','Metasploit','SQLMap','Nikto'], project:'Complete an OWASP WebGoat challenge set' },
          { icon:'🔬', title:'Digital Forensics', desc:'Evidence collection, memory forensics, log analysis, chain of custody.', skills:['Autopsy','Volatility','FTK','Log Analysis'], project:'Investigate a simulated incident response scenario' },
          { icon:'🚨', title:'SIEM & Monitoring', desc:'Splunk, Elastic SIEM, alert tuning, threat hunting.', skills:['Splunk','Elastic','Suricata','YARA'], project:'Build a SIEM dashboard for a mock enterprise' },
          { icon:'☁️', title:'Cloud Security', desc:'AWS/Azure security groups, IAM, GuardDuty, cloud pentesting.', skills:['AWS Security','IAM','GuardDuty','CloudTrail'], project:'Secure and audit an AWS environment' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'⚡', title:'Red Team Operations', desc:'Advanced persistence, lateral movement, C2 frameworks.', skills:['Cobalt Strike','C2','AD Attacks','OPSEC'], project:'Red team a lab environment with full kill chain' },
          { icon:'🧬', title:'Malware Analysis', desc:'Static and dynamic analysis, reverse engineering, sandboxing.', skills:['Ghidra','IDA Pro','Cuckoo','YARA'], project:'Analyse a real malware sample in a sandbox' },
          { icon:'🔏', title:'Cryptography', desc:'PKI, TLS internals, crypto attacks, zero-knowledge proofs.', skills:['PKI','TLS','AES','ZK Proofs'], project:'Implement and attack a custom crypto protocol' },
          { icon:'📋', title:'Compliance & GRC', desc:'ISO 27001, SOC 2, GDPR, risk assessment frameworks.', skills:['ISO 27001','SOC 2','GDPR','Risk Assessment'], project:'Write a SOC 2 readiness assessment for a SaaS' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🦠', title:'Zero-Day Research', desc:'Bug bounty hunting, CVE disclosure, exploit development.', skills:['Bug Bounty','CVE','Exploit Dev','Responsible Disclosure'], project:'Find and responsibly disclose a real vulnerability' },
          { icon:'🏭', title:'ICS/OT Security', desc:'SCADA, industrial protocols, critical infrastructure protection.', skills:['SCADA','Modbus','IEC 62443','OT Monitoring'], project:'Simulate and defend an ICS environment attack' },
          { icon:'🤖', title:'AI Security', desc:'Adversarial ML, model poisoning, LLM jailbreaks, AI red teaming.', skills:['Adversarial ML','LLM Red Team','Model Security','Prompt Injection'], project:'Red team an LLM-powered product' },
          { icon:'🎙️', title:'Leadership & Policy', desc:'Build security programs, hire teams, engage regulators.', skills:['CISO Skills','Security Policy','Hiring','Board Reporting'], project:'Draft a security program roadmap for a startup' },
        ]
      }
    }
  },

  'Cloud Engineer': {
    icon: '☁️', tag: 'AWS · Azure · GCP · DevOps',
    overview: 'Design and operate cloud infrastructure that scales infinitely and fails gracefully.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🌩️', title:'Cloud Fundamentals', desc:'IaaS/PaaS/SaaS, regions, availability zones, pricing models.', skills:['AWS','Azure','GCP','Cloud Concepts'], project:'Deploy a static website on S3/Blob Storage' },
          { icon:'🐧', title:'Linux & Scripting', desc:'Shell scripting, cron, systemd, package management.', skills:['Bash','Linux','Systemd','Cron'], project:'Automate server setup with a bash script' },
          { icon:'🌐', title:'Networking in the Cloud', desc:'VPCs, subnets, security groups, load balancers, DNS.', skills:['VPC','Security Groups','Route53','Load Balancers'], project:'Design and deploy a 3-tier VPC architecture' },
          { icon:'🐳', title:'Docker Basics', desc:'Images, containers, volumes, networking, Docker Compose.', skills:['Docker','Docker Compose','Containers','Registry'], project:'Containerise a full-stack application' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'⚙️', title:'Infrastructure as Code', desc:'Terraform, AWS CDK, CloudFormation — codify everything.', skills:['Terraform','CDK','CloudFormation','HCL'], project:'Provision a production-grade VPC with Terraform' },
          { icon:'🔄', title:'CI/CD Pipelines', desc:'GitHub Actions, CodePipeline, Jenkins, deployment strategies.', skills:['GitHub Actions','Jenkins','Blue/Green','Canary'], project:'Build a zero-downtime deployment pipeline' },
          { icon:'☸️', title:'Kubernetes', desc:'Pods, deployments, services, ingress, Helm charts.', skills:['Kubernetes','Helm','Ingress','RBAC'], project:'Deploy a microservices app on a managed K8s cluster' },
          { icon:'📊', title:'Observability', desc:'Prometheus, Grafana, distributed tracing, log aggregation.', skills:['Prometheus','Grafana','Jaeger','ELK Stack'], project:'Build a full observability stack for a K8s cluster' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'🔐', title:'Cloud Security', desc:'IAM least privilege, KMS, VPN, WAF, security auditing.', skills:['IAM','KMS','WAF','Security Hub'], project:'Implement a full security posture for a production account' },
          { icon:'💰', title:'Cost Optimisation', desc:'Reserved instances, spot fleets, rightsizing, FinOps.', skills:['FinOps','Cost Explorer','Spot Instances','Savings Plans'], project:'Reduce a cloud bill by 40% without degrading performance' },
          { icon:'🌍', title:'Multi-region Architecture', desc:'Global load balancing, data replication, failover strategies.', skills:['Global Accelerator','Route53 Failover','CRR','RTO/RPO'], project:'Architect a multi-region active-active system' },
          { icon:'⚡', title:'Serverless at Scale', desc:'Lambda, Step Functions, event-driven architecture, cold starts.', skills:['Lambda','Step Functions','EventBridge','Serverless Framework'], project:'Build a serverless data processing pipeline' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🏗️', title:'Platform Engineering', desc:'Internal developer platforms, golden paths, self-service infra.', skills:['Backstage','Crossplane','Platform Engineering','Developer Experience'], project:'Build an internal developer platform with self-service capabilities' },
          { icon:'🤖', title:'AI/ML Infrastructure', desc:'GPU clusters, model serving, MLOps platforms, vector DBs.', skills:['SageMaker','Vertex AI','Triton','Pinecone'], project:'Design an ML training and serving platform' },
          { icon:'🔁', title:'GitOps & Policy as Code', desc:'ArgoCD, Flux, OPA, admission controllers.', skills:['ArgoCD','Flux','OPA','Gatekeeper'], project:'Implement GitOps with full policy enforcement' },
          { icon:'📐', title:'Cloud Architecture Leadership', desc:'Well-Architected reviews, evangelism, hiring, mentoring.', skills:['AWS Well-Architected','Architecture Review','Hiring','RFC'], project:'Lead a Well-Architected Review for a production workload' },
        ]
      }
    }
  },

  'AI Engineer': {
    icon: '🤖', tag: 'LLMs · MLOps · Systems',
    overview: 'Build AI systems that work in the real world — from fine-tuning models to scaling inference.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🐍', title:'Python & Math', desc:'Python, NumPy, linear algebra, probability, calculus fundamentals.', skills:['Python','NumPy','Linear Algebra','Calculus'], project:'Implement linear regression from scratch with NumPy' },
          { icon:'🤖', title:'ML Fundamentals', desc:'Supervised learning, loss functions, gradient descent, evaluation.', skills:['Scikit-learn','Loss Functions','Gradient Descent','Cross-validation'], project:'Train a classifier that beats the baseline by 15%' },
          { icon:'🧠', title:'Neural Networks', desc:'Perceptrons, backprop, activation functions, PyTorch basics.', skills:['PyTorch','Backpropagation','Activation Functions','Autograd'], project:'Train a handwritten digit recognizer with PyTorch' },
          { icon:'💬', title:'Prompt Engineering', desc:'Zero/few-shot prompting, chain-of-thought, structured outputs.', skills:['Prompt Engineering','CoT','JSON Mode','System Prompts'], project:'Build a multi-step reasoning chain for a complex task' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'🔤', title:'Transformers & Attention', desc:'Attention mechanism, BERT, GPT architecture, tokenization.', skills:['Transformers','Attention','HuggingFace','Tokenization'], project:'Fine-tune BERT for a text classification task' },
          { icon:'🏗️', title:'RAG Systems', desc:'Vector databases, embeddings, retrieval pipelines, reranking.', skills:['Pinecone','LlamaIndex','LangChain','Embeddings'], project:'Build a knowledge-base Q&A system with RAG' },
          { icon:'⚙️', title:'Fine-tuning', desc:'LoRA, QLoRA, PEFT, DPO, instruction tuning datasets.', skills:['LoRA','QLoRA','PEFT','Axolotl'], project:'Fine-tune Llama for a domain-specific assistant' },
          { icon:'🔗', title:'AI Agents & Tools', desc:'Tool use, memory, planning, multi-agent frameworks.', skills:['LangGraph','CrewAI','Tool Calling','Memory Systems'], project:'Build a coding agent that writes and runs code' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'🚀', title:'Inference Optimization', desc:'Quantization, speculative decoding, vLLM, batching strategies.', skills:['vLLM','TensorRT','Quantization','Speculative Decoding'], project:'Serve a 70B model at 50+ tok/s on a single node' },
          { icon:'📊', title:'Evaluation & Alignment', desc:'LLM evals, RLHF, DPO, red teaming, benchmark design.', skills:['RLHF','DPO','Evals','Red Teaming'], project:'Design and run an eval suite for a custom LLM' },
          { icon:'🔭', title:'Multimodal Systems', desc:'Vision-language models, audio AI, image generation, grounding.', skills:['CLIP','LLaVA','Whisper','Stable Diffusion'], project:'Build a vision-language product demo' },
          { icon:'🧩', title:'AI System Design', desc:'Latency vs. accuracy trade-offs, serving architectures, cost modelling.', skills:['System Design','Cost Modelling','Caching','Routing'], project:'Design an AI system architecture for 10M users' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🔬', title:'Research Contributions', desc:'Novel architecture ideas, ablation studies, paper writing.', skills:['Research Methods','Paper Writing','Arxiv','Reproducibility'], project:'Publish a pre-print on a novel technique' },
          { icon:'🏭', title:'Large-Scale Training', desc:'Distributed training, FSDP, DeepSpeed, GPU cluster management.', skills:['DeepSpeed','FSDP','Megatron','NCCL'], project:'Train a 7B model from scratch on a cluster' },
          { icon:'🔐', title:'AI Safety & Security', desc:'Jailbreaks, adversarial prompts, constitutional AI, model cards.', skills:['Constitutional AI','Model Cards','Jailbreak Defense','Safety Testing'], project:'Implement and evaluate a constitutional AI pipeline' },
          { icon:'🌍', title:'AI Product Leadership', desc:'Build AI teams, define roadmaps, navigate ethics, talk to boards.', skills:['AI Strategy','Team Building','Ethics','Roadmapping'], project:'Ship an AI product used by 100K+ users' },
        ]
      }
    }
  },

  'Digital Marketer': {
    icon: '📣', tag: 'SEO · Ads · Content · Analytics',
    overview: 'Grow brands, acquire customers, and drive revenue through data-driven digital campaigns.',
    stages: {
      beginner: {
        label: 'Beginner', topics: [
          { icon:'🔍', title:'SEO Fundamentals', desc:'On-page SEO, keyword research, technical basics, ranking factors.', skills:['Google Search Console','Ahrefs','Keywords','Meta Tags'], project:'Optimise a blog to rank for 3 target keywords' },
          { icon:'📱', title:'Social Media Marketing', desc:'Platform algorithms, content calendars, engagement tactics.', skills:['Instagram','LinkedIn','TikTok','Buffer'], project:'Grow a brand account to 1K followers in 30 days' },
          { icon:'📧', title:'Email Marketing', desc:'List building, segmentation, automation sequences, A/B testing.', skills:['Mailchimp','Klaviyo','Automation','Deliverability'], project:'Build a 5-email welcome sequence with 40%+ open rate' },
          { icon:'📊', title:'Analytics Fundamentals', desc:'Google Analytics 4, UTM parameters, funnel analysis.', skills:['GA4','UTM','Funnels','Looker Studio'], project:'Build a marketing attribution dashboard in Looker Studio' },
        ]
      },
      intermediate: {
        label: 'Intermediate', topics: [
          { icon:'💰', title:'Paid Advertising', desc:'Google Ads, Meta Ads, audience targeting, bid strategies, ROAS.', skills:['Google Ads','Meta Ads','Bidding','Quality Score'], project:'Run a profitable $500 Google Ads campaign' },
          { icon:'📝', title:'Content Marketing', desc:'Content strategy, pillar pages, distribution, repurposing.', skills:['Content Strategy','SEMrush','Editorial Calendar','Repurposing'], project:'Build a content engine generating 10K monthly visitors' },
          { icon:'🔄', title:'Conversion Rate Optimisation', desc:'Landing pages, A/B tests, user testing, copy optimisation.', skills:['Unbounce','Hotjar','A/B Testing','Copywriting'], project:'Increase landing page CVR from 2% to 5%' },
          { icon:'🤝', title:'Influencer & Partnership', desc:'Finding creators, briefing, contracts, performance measurement.', skills:['Creator Outreach','Briefing','Contracts','Tracking Links'], project:'Run an influencer campaign with measurable ROAS' },
        ]
      },
      advanced: {
        label: 'Advanced', topics: [
          { icon:'🧠', title:'Marketing Analytics & Attribution', desc:'Multi-touch attribution, media mix modelling, incrementality.', skills:['MMM','Incrementality','Python','Data Studio'], project:'Build a media mix model for a $100K/mo budget' },
          { icon:'⚙️', title:'Marketing Automation', desc:'HubSpot, behavioural triggers, lead scoring, CRM integration.', skills:['HubSpot','Lead Scoring','CRM','Workflow Automation'], project:'Build a full inbound marketing automation system' },
          { icon:'🛒', title:'E-commerce Growth', desc:'Lifecycle marketing, LTV modelling, retention loops, shopping ads.', skills:['Shopify','Klaviyo','Google Shopping','LTV Modelling'], project:'Increase a DTC brand\'s repeat purchase rate by 25%' },
          { icon:'🌍', title:'International Expansion', desc:'Localisation, hreflang, regional ad platforms, cultural nuance.', skills:['Hreflang','Localisation','Regional Ads','Cultural Adaptation'], project:'Launch a brand in 3 new markets simultaneously' },
        ]
      },
      expert: {
        label: 'Expert', topics: [
          { icon:'🤖', title:'AI-Powered Marketing', desc:'Generative content at scale, AI ad creative, predictive analytics.', skills:['ChatGPT','Jasper','Predictive Analytics','Automation'], project:'Build an AI content pipeline producing 50 posts/week' },
          { icon:'📐', title:'Brand Strategy', desc:'Positioning, messaging architecture, brand equity measurement.', skills:['Positioning','Brand Equity','NPS','Brand Tracking'], project:'Develop and test a brand repositioning strategy' },
          { icon:'💼', title:'Marketing Leadership', desc:'Budget allocation, team hiring, board reporting, CMO skills.', skills:['Budget Planning','Team Leadership','OKRs','Board Decks'], project:'Build and present a full annual marketing plan' },
          { icon:'🔬', title:'Research & Innovation', desc:'Market research, emerging channels, beta experiments.', skills:['Market Research','Trend Forecasting','Innovation Labs','Emerging Channels'], project:'Identify and pilot a new channel delivering positive ROAS' },
        ]
      }
    }
  }
};

/* ─── 2. BADGES ─── */
const BADGE_DEFS = [
  { id:'first_step',  emoji:'🌱', name:'First Step',     desc:'Complete your first topic',                condition: s => s.totalDone >= 1 },
  { id:'beginner',    emoji:'🎓', name:'Beginner Done',  desc:'Finish all beginner topics',               condition: s => s.stagePercent.beginner === 100 },
  { id:'halfway',     emoji:'⚡', name:'Halfway Hero',   desc:'Reach 50% overall completion',             condition: s => s.overallPct >= 50 },
  { id:'intermediate',emoji:'🔥', name:'Mid-level Pro',  desc:'Finish all intermediate topics',           condition: s => s.stagePercent.intermediate === 100 },
  { id:'advanced',    emoji:'💎', name:'Advanced Ace',   desc:'Finish all advanced topics',               condition: s => s.stagePercent.advanced === 100 },
  { id:'completionist',emoji:'👑',name:'Completionist',  desc:'Complete 100% of all topics',              condition: s => s.overallPct === 100 },
  { id:'speed',       emoji:'⏱️', name:'Speed Run',      desc:'Complete 5 topics in a single session',    condition: s => s.sessionDone >= 5 },
  { id:'expert',      emoji:'🚀', name:'Expert Reached', desc:'Unlock the Expert stage',                  condition: s => s.stagePercent.advanced === 100 },
];

/* ─── 3. STATE ─── */
let state = {
  career: null,
  completed: {},   // { "stageKey|topicIndex": true }
  sessionDone: 0,
  currentPanel: 'roadmap',
  currentStageFilter: 'all',
  theme: 'dark',
  accent: 'violet',
  unlockedBadges: [],
};

const STAGE_ORDER = ['beginner','intermediate','advanced','expert'];

/* ─── 4. PARTICLE CANVAS ─── */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width  = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 60; i++) particles.push(createParticle());

  function createParticle() {
    return {
      x: Math.random() * (w || 800),
      y: Math.random() * (h || 600),
      r: Math.random() * 1.8 + .4,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      alpha: Math.random() * .5 + .1,
    };
  }

  function getAccentColor() {
    const map = { violet:'124,58,237', cyan:'6,182,212', rose:'225,29,72', amber:'217,119,6', emerald:'5,150,105' };
    return map[state.accent] || '124,58,237';
  }

  function loop() {
    ctx.clearRect(0, 0, w, h);
    const col = getAccentColor();
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col},${p.alpha})`;
      ctx.fill();
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── 5. TYPING HERO ─── */
(function initTyping() {
  const phrases = [
    'Plan Your Career.','Track Every Skill.','Unlock Your Potential.','Build Your Future.'
  ];
  const el = document.getElementById('typedText');
  let pi = 0, ci = 0, deleting = false;

  function tick() {
    const phrase = phrases[pi];
    if (!deleting) {
      ci++;
      el.textContent = phrase.slice(0, ci);
      if (ci === phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      ci--;
      el.textContent = phrase.slice(0, ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 45 : 80);
  }
  tick();
})();

/* ─── 6. CAREER GRID ─── */
function renderCareerGrid() {
  const grid = document.getElementById('careerGrid');
  grid.innerHTML = '';
  Object.entries(CAREERS).forEach(([name, data], i) => {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.style.animationDelay = `${i * 60}ms`;
    card.dataset.name = name;
    card.innerHTML = `
      <span class="career-icon">${data.icon}</span>
      <span class="career-name">${name}</span>
      <span class="career-tag">${data.tag}</span>`;
    card.addEventListener('click', e => {
      addRipple(card, e);
      setTimeout(() => selectCareer(name), 200);
    });
    grid.appendChild(card);
  });
}

/* ─── 7. SEARCH ─── */
document.getElementById('careerSearch').addEventListener('input', function() {
  const q = this.value.toLowerCase();
  document.getElementById('searchClear').classList.toggle('visible', q.length > 0);
  document.querySelectorAll('.career-card').forEach(c => {
    c.classList.toggle('hidden', !c.dataset.name.toLowerCase().includes(q));
  });
});
document.getElementById('searchClear').addEventListener('click', () => {
  document.getElementById('careerSearch').value = '';
  document.getElementById('searchClear').classList.remove('visible');
  document.querySelectorAll('.career-card').forEach(c => c.classList.remove('hidden'));
});

/* ─── 8. SELECT CAREER ─── */
function selectCareer(name) {
  state.career = name;
  state.completed = {};
  state.sessionDone = 0;
  state.unlockedBadges = [];

  // Transition
  document.getElementById('heroSection').classList.add('hidden');
  const dash = document.getElementById('dashboard');
  dash.classList.remove('hidden');
  dash.style.opacity = '0';
  requestAnimationFrame(() => {
    dash.style.transition = 'opacity .5s ease';
    dash.style.opacity = '1';
  });

  updateSidebarCareer();
  renderRoadmap();
  renderStats();
  renderBadges();
  setPanel('roadmap');
}

/* ─── 9. SIDEBAR ─── */
function updateSidebarCareer() {
  const career = CAREERS[state.career];
  document.getElementById('sidebarCareerName').textContent = state.career;
  document.getElementById('roadmapTitle').textContent = state.career;
  document.getElementById('roadmapSub').textContent = career.overview;
  document.getElementById('topbarTitle').textContent = state.career;
  updateProgress();
}

/* ─── 10. PROGRESS ─── */
function calcProgress() {
  const career = CAREERS[state.career];
  if (!career) return { overall: 0, stages: {} };

  let totalTopics = 0, totalDone = 0;
  const stages = {};
  STAGE_ORDER.forEach(stage => {
    const topics = career.stages[stage].topics;
    const done = topics.filter((_, i) => state.completed[`${stage}|${i}`]).length;
    stages[stage] = { total: topics.length, done, pct: Math.round((done / topics.length) * 100) };
    totalTopics += topics.length;
    totalDone += done;
  });
  return { overall: totalTopics ? Math.round((totalDone / totalTopics) * 100) : 0, stages, totalDone, totalTopics };
}

function updateProgress() {
  const { overall, stages, totalDone, totalTopics } = calcProgress();

  // Sidebar
  document.getElementById('sidebarProgressFill').style.width = overall + '%';
  document.getElementById('sidebarPct').textContent = overall + '%';
  document.getElementById('topbarPct').textContent = overall + '%';

  // Header stats
  document.getElementById('hsTasks').textContent = totalTopics;
  document.getElementById('hsDone').textContent = totalDone;
  document.getElementById('hsPct').textContent = overall + '%';

  // Stage progress bars in roadmap
  STAGE_ORDER.forEach(stage => {
    const el = document.getElementById(`stage-fill-${stage}`);
    const txt = document.getElementById(`stage-pct-${stage}`);
    if (el && stages[stage]) {
      el.style.width = stages[stage].pct + '%';
      if (txt) txt.textContent = `${stages[stage].done}/${stages[stage].total}`;
    }
  });

  updateStats(overall, stages, totalDone);
  checkBadges({ overallPct: overall, stagePercent: { beginner: stages.beginner?.pct || 0, intermediate: stages.intermediate?.pct || 0, advanced: stages.advanced?.pct || 0, expert: stages.expert?.pct || 0 }, totalDone, sessionDone: state.sessionDone });
}

/* ─── 11. RENDER ROADMAP ─── */
function renderRoadmap() {
  const career = CAREERS[state.career];
  const tree = document.getElementById('roadmapTree');
  tree.innerHTML = '';

  STAGE_ORDER.forEach((stage, si) => {
    const stageData = career.stages[stage];

    // Connector
    if (si > 0) {
      const connector = document.createElement('div');
      connector.className = 'stage-connector';
      connector.innerHTML = '<div class="connector-node"></div>';
      tree.appendChild(connector);
    }

    // Stage block
    const block = document.createElement('div');
    block.className = `stage-block`;
    block.id = `stage-block-${stage}`;
    block.dataset.stage = stage;

    const isLocked = si > 0 && !isStageUnlocked(stage);
    if (isLocked) block.classList.add('locked');

    const colors = { beginner: '#10b981', intermediate: '#3b82f6', advanced: '#f59e0b', expert: '#ef4444' };
    block.innerHTML = `
      <div class="stage-header">
        <span class="stage-level-badge level-${stage}">${stageData.label.toUpperCase()}</span>
        <span class="stage-title">${stageData.label} Stage</span>
        <span class="stage-progress-text" id="stage-pct-${stage}">0/${stageData.topics.length}</span>
      </div>
      <div class="stage-progress-bar">
        <div class="stage-progress-fill fill-${stage}" id="stage-fill-${stage}" style="width:0%"></div>
      </div>
      <div class="topics-grid" id="topics-${stage}"></div>`;

    tree.appendChild(block);

    // Render topic cards
    const topicsEl = block.querySelector(`#topics-${stage}`);
    stageData.topics.forEach((topic, ti) => {
      topicsEl.appendChild(createMilestoneCard(stage, ti, topic));
    });
  });

  applyStageFilter(state.currentStageFilter);
  updateProgress();
}

function isStageUnlocked(stage) {
  const idx = STAGE_ORDER.indexOf(stage);
  if (idx === 0) return true;
  const prevStage = STAGE_ORDER[idx - 1];
  const career = CAREERS[state.career];
  const prevTopics = career.stages[prevStage].topics;
  const donePrev = prevTopics.filter((_, i) => state.completed[`${prevStage}|${i}`]).length;
  return donePrev === prevTopics.length;
}

function createMilestoneCard(stage, ti, topic) {
  const card = document.createElement('div');
  const isDone = !!state.completed[`${stage}|${ti}`];
  card.className = `milestone-card${isDone ? ' completed' : ''}`;
  card.style.animationDelay = `${ti * 80}ms`;
  card.dataset.stage = stage; card.dataset.ti = ti;

  card.innerHTML = `
    <div class="mc-top">
      <span class="mc-icon">${topic.icon}</span>
      <div class="mc-check">✓</div>
    </div>
    <div class="mc-title">${topic.title}</div>
    <div class="mc-desc">${topic.desc}</div>
    <div class="mc-tags">${topic.skills.map(s => `<span class="mc-tag">${s}</span>`).join('')}</div>
    <div class="mc-project"><strong>📁 Project:</strong> ${topic.project}</div>
    <button class="mc-complete-btn">${isDone ? '✓ Completed' : 'Mark Complete'}</button>`;

  card.querySelector('.mc-complete-btn').addEventListener('click', e => {
    e.stopPropagation();
    toggleTopic(stage, ti, card);
  });
  return card;
}

function toggleTopic(stage, ti, card) {
  const key = `${stage}|${ti}`;
  const wasDone = !!state.completed[key];
  state.completed[key] = !wasDone;

  if (!wasDone) {
    state.sessionDone++;
    card.classList.add('completed');
    card.querySelector('.mc-complete-btn').textContent = '✓ Completed';
    addRipple(card, { clientX: card.getBoundingClientRect().left + card.offsetWidth/2, clientY: card.getBoundingClientRect().top + 20 });

    // Check if next stage just unlocked
    const currentIdx = STAGE_ORDER.indexOf(stage);
    if (currentIdx < STAGE_ORDER.length - 1) {
      const nextStage = STAGE_ORDER[currentIdx + 1];
      if (isStageUnlocked(nextStage)) {
        const nextBlock = document.getElementById(`stage-block-${nextStage}`);
        if (nextBlock && nextBlock.classList.contains('locked')) {
          nextBlock.classList.remove('locked');
          showToast(`🔓 ${CAREERS[state.career].stages[nextStage].label} stage unlocked!`);
          launchConfetti();
        }
      }
    }
  } else {
    state.sessionDone = Math.max(0, state.sessionDone - 1);
    card.classList.remove('completed');
    card.querySelector('.mc-complete-btn').textContent = 'Mark Complete';
  }

  updateProgress();
  renderStats();
  renderBadges();
}

/* ─── 12. STAGE FILTER ─── */
document.getElementById('stageTabs').addEventListener('click', e => {
  if (!e.target.classList.contains('stage-tab')) return;
  document.querySelectorAll('.stage-tab').forEach(t => t.classList.remove('active'));
  e.target.classList.add('active');
  state.currentStageFilter = e.target.dataset.stage;
  applyStageFilter(state.currentStageFilter);
});

function applyStageFilter(filter) {
  document.querySelectorAll('.stage-block').forEach(block => {
    block.style.display = (filter === 'all' || block.dataset.stage === filter) ? '' : 'none';
  });
  document.querySelectorAll('.stage-connector').forEach(c => c.style.display = filter === 'all' ? '' : 'none');
}

/* ─── 13. STATS ─── */
function renderStats() {
  const { overall, stages } = calcProgress();
  updateStats(overall, stages);
}

function updateStats(overall, stages) {
  // Circle
  const circle = document.getElementById('overallCircle');
  const circumference = 314;
  const offset = circumference - (overall / 100) * circumference;
  circle.style.strokeDashoffset = offset;
  document.getElementById('overallPct').textContent = overall + '%';

  // Stage bars
  const barsEl = document.getElementById('stageBars');
  barsEl.innerHTML = '';
  const fillClasses = { beginner:'fill-beginner', intermediate:'fill-intermediate', advanced:'fill-advanced', expert:'fill-expert' };
  STAGE_ORDER.forEach(stage => {
    const s = stages[stage] || { pct:0, done:0, total:0 };
    barsEl.innerHTML += `
      <div class="stage-bar-item">
        <div class="sb-label"><span>${CAREERS[state.career]?.stages[stage]?.label || stage}</span><span>${s.pct}%</span></div>
        <div class="sb-bar"><div class="sb-fill ${fillClasses[stage]}" style="width:${s.pct}%"></div></div>
      </div>`;
  });

  // Activity list
  const actEl = document.getElementById('activityList');
  actEl.innerHTML = '';
  const icons = { beginner:'🌱', intermediate:'🔷', advanced:'⚡', expert:'🚀' };
  STAGE_ORDER.forEach(stage => {
    const s = stages[stage] || { done:0, total:0 };
    actEl.innerHTML += `
      <div class="activity-item">
        <span class="ai-icon">${icons[stage]}</span>
        <div class="ai-label">
          ${CAREERS[state.career]?.stages[stage]?.label || stage}
          <small>${s.done} of ${s.total} topics completed</small>
        </div>
        <span class="ai-count">${s.done}/${s.total}</span>
      </div>`;
  });
}

/* ─── 14. BADGES ─── */
function checkBadges(s) {
  BADGE_DEFS.forEach(badge => {
    if (!state.unlockedBadges.includes(badge.id) && badge.condition(s)) {
      state.unlockedBadges.push(badge.id);
      showToast(`🏆 Badge Unlocked: ${badge.name}!`);
      launchConfetti();
    }
  });
  renderBadges();
}

function renderBadges() {
  const grid = document.getElementById('badgesGrid');
  grid.innerHTML = '';
  BADGE_DEFS.forEach(badge => {
    const unlocked = state.unlockedBadges.includes(badge.id);
    grid.innerHTML += `
      <div class="badge-card ${unlocked ? 'unlocked' : 'locked-badge'}">
        <span class="badge-emoji">${badge.emoji}</span>
        <div class="badge-name">${badge.name}</div>
        <div class="badge-desc">${badge.desc}</div>
        <div class="badge-status">${unlocked ? '✓ UNLOCKED' : 'LOCKED'}</div>
      </div>`;
  });
}

/* ─── 15. NAVIGATION ─── */
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setPanel(btn.dataset.panel);
    document.getElementById('sidebar').classList.remove('open');
  });
});

function setPanel(name) {
  state.currentPanel = name;
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.dataset.panel === name));
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById(`panel-${name}`)?.classList.add('active');
}

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('open');
});

document.getElementById('backBtn').addEventListener('click', () => {
  document.getElementById('dashboard').classList.add('hidden');
  document.getElementById('heroSection').classList.remove('hidden');
  state.career = null;
});

/* ─── 16. THEME ─── */
document.getElementById('themeToggle').addEventListener('click', () => {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', state.theme);
  document.getElementById('themeToggle').querySelector('.theme-icon').textContent = state.theme === 'dark' ? '🌙' : '☀️';
});

document.querySelectorAll('.theme-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    state.accent = pill.dataset.accent;
    document.documentElement.setAttribute('data-accent', state.accent);
    document.querySelectorAll('.theme-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
  });
});

/* ─── 17. RIPPLE ─── */
function addRipple(el, e) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = el.getBoundingClientRect();
  const size = Math.max(el.offsetWidth, el.offsetHeight) * 2;
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
  ripple.style.top  = (e.clientY - rect.top  - size/2) + 'px';
  el.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* ─── 18. TOAST ─── */
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

/* ─── 19. CONFETTI ─── */
function launchConfetti() {
  const container = document.getElementById('confettiContainer');
  const colors = ['#7c3aed','#06b6d4','#f59e0b','#10b981','#ef4444','#a78bfa','#fbbf24'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left   = Math.random() * 100 + 'vw';
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = (Math.random() * 1.2 + 1) + 's';
    piece.style.animationDelay = Math.random() * .6 + 's';
    piece.style.transform = `rotate(${Math.random()*360}deg)`;
    piece.style.width  = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
    container.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

/* ─── 20. INIT ─── */
renderCareerGrid();
