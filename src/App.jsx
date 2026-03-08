import React, { useState, useEffect } from 'react';
import { ShieldAlert, BrainCircuit, Database, GitMerge, ChevronRight, CheckCircle2, FileText, BarChart3, ArrowRight, AppWindow, ExternalLink, ChevronDown } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Simple scroll spy to update active section in navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'introduction', 'methodology', 'results', 'discussion', 'future'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          current = section;
        }
      }
      setActiveSection(current || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 font-bold text-xl text-blue-900 cursor-pointer" onClick={() => scrollTo('home')}>
            <ShieldAlert className="w-6 h-6 text-blue-600" />
            <span className="hidden sm:inline">GenAI for Good</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            {['Introduction', 'Methodology', 'Results', 'Discussion', 'Future'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`hover:text-blue-600 transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-blue-600 border-b-2 border-blue-600' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/YulinChen12/DSC180A-GroupNull" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>Get the App</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span>UCSD Data Science Capstone 2026</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Agentic and Fractal Reasoning for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automated Fact-Checking</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Resolving the modern information crisis by combining the mathematical stability of predictive algorithms with the advanced, flexible reasoning of generative AI. 
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <a href="https://github.com/YulinChen12/DSC180A-GroupNull" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl">
              <AppWindow className="w-5 h-5" />
              <span>Try the Interactive App</span>
            </a>
            <button onClick={() => scrollTo('introduction')} className="flex items-center justify-center space-x-2 w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
              <span>Read the Research Report</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-slate-500 font-medium text-sm">
            <p>Team Members: <span className="text-slate-800 font-bold">Cecilia Lin, Yulin Chen, Yaoxi Li</span></p>
            <p className="hidden sm:block">•</p>
            <p>Mentors: <span className="text-slate-800 font-bold">Ali Arsanjani, Samuel Lau</span></p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Introduction: What's this all about?</h2>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              The exponential growth of online misinformation has overwhelmed the capacity of human fact-checkers, creating an urgent need for automated verification systems. However, current AI approaches face a fundamental trade-off. 
            </p>
            <p>
              On one hand, traditional <strong>predictive models</strong> offer statistical stability but lack context, struggling to understand the nuance of long-form journalism. On the other hand, modern <strong>generative models (like Gemini)</strong> provide flexible reasoning but are prone to hallucination—often making up facts or uncritically agreeing with whatever information they are fed.
            </p>
            <p className="font-medium text-slate-900 text-xl border-l-4 border-indigo-500 pl-6 my-8">
              Our solution is a novel, hybrid framework that synthesizes both worlds. By orchestrating a suite of specialized machine-learning classifiers and feeding their outputs into a Google Agent Development Kit (ADK) framework powered by <strong>Gemini 3 Flash</strong>, we generate a highly accurate, multi-dimensional credibility measure.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">System Architecture</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our dual-pipeline architecture translates unstructured text into a semantic credibility profile using a Master-Subordinate AI agent hierarchy.
          </p>
        </div>

        {/* Factuality Factors */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Database className="w-6 h-6 mr-3 text-indigo-500" />
            1. The Six Factuality Factors
          </h3>
          <p className="text-slate-600 mb-6">
            We decompose full-length news articles into 6 distinct, interpretable <strong>Factuality Factors</strong>. This allows us to move beyond binary "true or false" labeling to produce a nuanced profile reflecting source credibility, narrative framing, and evidentiary grounding:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "News Coverage", desc: "Topic proxy using TF-IDF and LinearSVC." },
              { title: "Intent", desc: "Prototype-based cosine similarity (Inform, Persuade, Entertain, Deceive)." },
              { title: "Sensationalism", desc: "Identifies clickbait architecture and emotional manipulation." },
              { title: "Stance", desc: "Article stance evaluated via DistilRoBERTa." },
              { title: "Title-Body Alignment", desc: "Detects deceptive framing and clickbait gaps." },
              { title: "Context Veracity", desc: "Validates claims against external knowledge." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Two Pillars */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Predictive */}
          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <div className="p-3 bg-white/10 w-fit rounded-xl mb-6">
              <BarChart3 className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Predictive Classifiers</h3>
            <p className="text-slate-300 mb-6 text-sm">
              Providing the statistical grounding. We engineered specific models for the semantic factuality factors using the LIAR-PLUS dataset.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong className="mr-1">LinearSVC:</strong> Utilized for Sensationalism and News Coverage.</li>
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong>Cosine Similarity:</strong> Prototype-based approach for Intent classification.</li>
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong className="mr-1">DistilRoBERTa:</strong> Fine-tuned for Stance classification.</li>
            </ul>
          </div>

          {/* Generative */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
            <div className="p-3 bg-white/10 w-fit rounded-xl mb-6">
              <BrainCircuit className="w-6 h-6 text-blue-100" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Generative Agent Framework</h3>
            <p className="text-blue-100 mb-6 text-sm">
              Built on the <strong>Google Agent Development Kit (ADK)</strong> and powered by the high-speed reasoning of <strong>Gemini 3 Flash</strong>. The system employs a <code>SequentialAgent</code> that orchestrates a parallel squad of factor specialists.
            </p>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong className="mr-1">Factor Squad:</strong> A <code className="mx-1">ParallelAgent</code> managing 6 specialized analysts.</li>
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong>Final Synthesizer:</strong> Resolves contradictions and performs retrospective re-grounding.</li>
              <li className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong className="mr-1">External Verification:</strong> Context Veracity and Title-Body Alignment integrate Google Search APIs for real-time grounding.</li>
            </ul>
          </div>
        </div>

        {/* Agent Workflow Visual */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 mb-12 overflow-hidden">
          <h3 className="text-2xl font-bold mb-8 text-center">ADK Agent Workflow Architecture</h3>
          <div className="flex flex-col items-center max-w-4xl mx-auto">
            {/* Input */}
            <div className="px-6 py-3 bg-slate-100 text-slate-700 font-bold rounded-full border border-slate-300 mb-4 shadow-sm">
              Raw Article Text
            </div>
            <div className="h-6 w-0.5 bg-slate-300 mb-4"></div>
            
            {/* Sequential Agent Box */}
            <div className="w-full p-4 md:p-6 border-2 border-indigo-200 bg-indigo-50/30 rounded-3xl relative mt-4">
              <div className="absolute -top-3 left-6 bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full border border-indigo-200">
                SequentialAgent: Fractal_FactCheck_Framework
              </div>
              
              {/* Factor Squad (Parallel) */}
              <div className="border border-blue-200 bg-blue-50/50 p-4 md:p-6 rounded-2xl mb-8 relative mt-4">
                <div className="absolute -top-3 left-6 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  ParallelAgent: Factor_Squad
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                  {['Sensationalism_Analyst', 'Stance_Analyst', 'Context_Veracity_Analyst', 'News_Coverage_Analyst', 'Intent_Analyst', 'Title_Body_Analyst'].map(agent => (
                    <div key={agent} className="bg-white p-3 rounded-xl border border-blue-100 text-center text-xs md:text-sm font-medium text-slate-700 shadow-sm flex flex-col items-center justify-center">
                      <BrainCircuit className="w-5 h-5 text-blue-400 mb-2" />
                      {agent.replace(/_/g, ' ')}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <ArrowRight className="w-8 h-8 text-indigo-300 rotate-90" />
              </div>

              {/* Final Synthesizer */}
              <div className="bg-indigo-600 text-white p-6 rounded-2xl text-center shadow-md mx-auto max-w-md relative mt-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-800 text-indigo-100 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500 whitespace-nowrap">
                  Agent: Final_Synthesizer
                </div>
                <GitMerge className="w-8 h-8 text-indigo-200 mx-auto mb-3 mt-2" />
                <p className="text-sm font-medium">Recursive Synthesis & Inter-agent Reflectivity</p>
              </div>
            </div>

            <div className="h-6 w-0.5 bg-slate-300 mt-4 mb-4"></div>
            {/* Output */}
            <div className="px-6 py-3 bg-emerald-100 text-emerald-800 font-bold rounded-full border border-emerald-300 shadow-sm text-center text-sm md:text-base">
              FactCheckFinalReport (JSON)
            </div>
          </div>
        </div>

        {/* Synthesis */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
          <GitMerge className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">4. Fractal Chain of Thought (FCoT)</h3>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8 text-sm md:text-base">
            Standard AI reasoning often accepts predictive tool outputs uncritically. Our custom FCoT protocol prevents this through a hierarchical architecture. It forces the AI to check its own work against mathematical models and explicitly resolve any disagreements.
          </p>
          
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            {[
              { 
                step: 1, 
                name: "Local Thought Unit", 
                desc: "The 'Blind' Read. The AI analyzes the text strictly based on its linguistic features (like tone, adjectives, or structure) to form an initial, unbiased hypothesis before seeing any outside data." 
              },
              { 
                step: 2, 
                name: "Predictive Grounding", 
                desc: "The Statistical Check. The agent queries our trained machine learning models (e.g., LinearSVC, DistilRoBERTa) to obtain a hard, mathematical prediction for the article." 
              },
              { 
                step: 3, 
                name: "Aperture Expansion", 
                desc: "Widening the Lens. The AI expands its context, placing its initial human-like hypothesis side-by-side with the statistical tool's prediction and data retrieved from other peer agents." 
              },
              { 
                step: 4, 
                name: "Reflective Update (RUM)", 
                desc: "Resolving Contradictions. If the AI's intuition and the math disagree, the agent cannot simply accept the tool's output. It must explicitly reflect on why the discrepancy exists (e.g., 'The tool missed subtle sarcasm' or 'The headline is metaphoric')." 
              },
              { 
                step: 5, 
                name: "Granularity Control", 
                desc: "The Final Synthesis. The agent locks in a final verdict and confidence score that perfectly balances its qualitative human-like nuance with the quantitative rigor of the predictive tools." 
              }
            ].map((item) => (
              <div key={item.step} className={`flex items-start p-4 rounded-2xl border ${item.step === 4 ? 'bg-indigo-50 border-indigo-200' : 'bg-slate-50 border-slate-200'}`}>
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 mr-4 ${item.step === 4 ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'}`}>
                   {item.step}
                 </div>
                 <div>
                   <h4 className={`font-bold ${item.step === 4 ? 'text-indigo-900' : 'text-slate-900'}`}>{item.name}</h4>
                   <p className={`text-sm mt-1 leading-relaxed ${item.step === 4 ? 'text-indigo-700' : 'text-slate-600'}`}>{item.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Performance & Evaluation</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our evaluation demonstrates that while individual predictive classifiers show varied performance on semantic tasks, the grounded CoT and FCoT generative framework successfully synthesize these signals into robust, verifiable credibility profiles.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Predictive Results */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-lg">Individual Predictive Model Performance</h3>
                <p className="text-xs text-slate-500 mt-1">Evaluated on the LIAR-PLUS test set prior to generative integration.</p>
              </div>
              <div className="p-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="text-sm text-slate-500 border-b border-slate-200">
                      <th className="pb-3 font-medium">Factor</th>
                      <th className="pb-3 font-medium text-right">Accuracy</th>
                      <th className="pb-3 font-medium text-right">Macro F1</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-700">News Coverage</td>
                      <td className="py-3 text-right font-mono">0.33</td>
                      <td className="py-3 text-right font-mono">0.17</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-700">Intent</td>
                      <td className="py-3 text-right font-mono">0.35</td>
                      <td className="py-3 text-right font-mono">0.17</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3 text-slate-700 font-medium">Sensationalism</td>
                      <td className="py-3 text-right font-mono">0.62</td>
                      <td className="py-3 text-right font-mono">0.61</td>
                    </tr>
                    <tr>
                      <td className="pt-3 text-slate-700">Stance</td>
                      <td className="pt-3 text-right font-mono">0.40</td>
                      <td className="pt-3 text-right font-mono">0.39</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-12">
            {/* Q2 Agent Evaluation */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-lg">Agent Workflow Performance</h3>
                <p className="text-xs text-slate-500 mt-1">Accuracy across different prompting strategies evaluated against human-annotated ground truth.</p>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm min-w-[800px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <th className="p-3 font-medium whitespace-nowrap">Prompting Strategy</th>
                      <th className="p-3 font-medium text-center">News Coverage</th>
                      <th className="p-3 font-medium text-center">Intent</th>
                      <th className="p-3 font-medium text-center">Sensationalism</th>
                      <th className="p-3 font-medium text-center">Stance</th>
                      <th className="p-3 font-medium text-center">Title vs Body</th>
                      <th className="p-3 font-medium text-center">Context Veracity</th>
                      <th className="p-3 font-bold text-center bg-slate-100 border-l border-slate-200">Average</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">Simple Prompt</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono">0.60</td>
                      <td className="p-3 text-center font-mono">0.65</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.35</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.63</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">CoT</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.50</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.77</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">CoT + Function Calling</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.55</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.77</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-900 font-bold bg-indigo-50/50 whitespace-nowrap border-y border-indigo-100">CoT + Few Shot + Func Calling</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.85</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold bg-indigo-50/50">0.85</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.80</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.55</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.85</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold bg-indigo-50/50">0.75</td>
                      <td className="p-3 text-center font-mono font-black bg-indigo-100 border-l border-indigo-200 text-indigo-700">0.78</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">FCOT</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono">0.75</td>
                      <td className="p-3 text-center font-mono">0.40</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.60</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.70</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">FCOT + Function Calling</td>
                      <td className="p-3 text-center font-mono">0.75</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.40</td>
                      <td className="p-3 text-center font-mono">0.55</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.75</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.68</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">FCOT + Few Shot + Func Calling</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.75</td>
                      <td className="p-3 text-center font-mono">0.75</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.70</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.65</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Prompting Explanations via Details/Summary (Dropdowns) to reduce clutter */}
          <div className="mb-12">
            <h3 className="font-bold text-2xl text-slate-900 mb-6 text-center">Understanding the AI Strategies (Technical Deep Dive)</h3>
            <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
              Curious about how the different AI models in the table above actually "think"? Expand the sections below to learn more about the prompt engineering methods we tested.
            </p>
            
            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs mr-3 border border-slate-300">1</span>
                    Simple Prompt & Chain of Thought (CoT)
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4 mt-2">
                  <p className="mb-3"><strong>Simple Prompt:</strong> Standard instructions asking the model to immediately output a verdict. The model acts on instinct, often resulting in lower accuracy and missed nuances.</p>
                  <p><strong>Chain of Thought (CoT):</strong> Forces the model to "think step-by-step" before answering. While it improves logical flow, it still uncritically accepts tool outputs and can hallucinate if left unchecked.</p>
                </div>
              </details>

              <details className="group bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-indigo-900">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-xs mr-3 border border-indigo-300">2</span>
                    Fractal CoT (FCoT)
                  </div>
                  <ChevronDown className="w-5 h-5 text-indigo-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-indigo-800 border-t border-indigo-200 pt-4 mt-2">
                  <p>Our custom recursive protocol. The model conducts localized linguistic checks, calls predictive tools, and actively reconciles discrepancies before finalizing a verdict. This prevents the AI from blindly trusting outside tools without verifying context.</p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs mr-3 border border-slate-300">3</span>
                    Tool Enhancements: Function Calling & Few-Shot Learning
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4 mt-2">
                  <p className="mb-3"><strong>Function Calling (Tool Use):</strong> Instead of relying solely on the generative AI's internal knowledge, we give the agent access to external tools mid-thought. It can query our trained predictive models (like LinearSVC) or run live Google Web Searches to mathematically ground its evaluation with real data.</p>
                  <p><strong>Few-Shot (In-Context Learning):</strong> We supply the AI with a "reference library" of 7 human-annotated articles directly within the prompt. By studying these expert examples before making a decision, the AI learns complex human reasoning patterns and effectively calibrates its judgment.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Interactive Web App Highlight */}
          <div className="bg-indigo-900 text-indigo-50 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-start md:items-center gap-6">
               <div className="p-4 bg-indigo-800 rounded-2xl flex-shrink-0">
                 <AppWindow className="w-10 h-10 text-indigo-300" />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-white mb-2">Try the Live Streamlit Dashboard</h3>
                  <p className="text-sm text-indigo-200 leading-relaxed max-w-2xl">
                    To support practical deployment, we developed an interactive Streamlit web application. You can clone our repository to run the app locally, paste any news article, and watch the ADK agent workflow operate in real-time. 
                  </p>
               </div>
             </div>
             <a href="https://github.com/YulinChen12/DSC180A-GroupNull" target="_blank" rel="noreferrer" className="flex-shrink-0 flex items-center justify-center space-x-2 px-6 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
                <span>View Repository</span>
                <ExternalLink className="w-4 h-4" />
             </a>
          </div>
        </div>
      </section>

      {/* Discussion */}
      <section id="discussion" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion & Discussion</h2>
            <p className="text-slate-600">
              Analyzing the impact of our hybrid architecture and advanced prompting strategies.
            </p>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <p>
              Our transition from single predictive classifiers to a hybrid, multi-agent reasoning framework highlights the immense potential of orchestrated LLM workflows. Across all evaluated strategies, structured reasoning significantly improved performance over <strong>Simple Prompting</strong>, which struggled severely with Context Veracity (scoring just 0.35). <strong>Chain of Thought (CoT)</strong> approaches achieved high scores—particularly excelling in News Coverage and Title-Body Alignment—but our qualitative analysis revealed this accuracy partly resulted from casting a "wide net" to predict broader, safer topical patterns rather than precise, news-specific judgments.
            </p>
            
            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl my-8">
              <h4 className="font-bold text-indigo-900 mt-0 mb-2">CoT's Guardrails vs. FCoT's Decision Paralysis</h4>
              <p className="text-sm text-indigo-800 mb-4">
                The inclusion of <strong>Function Calling</strong> directly strengthened the system's ability to detect Intent and Sensationalism by anchoring the generative agents to the statistical baseline of our predictive classifiers. The absolute highest overall performance (<strong>0.78</strong>) was achieved by the <strong>CoT + Few Shot + Function Calling</strong> strategy. This proves that Gemini models perform best when their generative flexibility is constrained by both historical examples and strict algorithmic guardrails.
              </p>
              <p className="text-sm text-indigo-800 mb-0">
                Conversely, the <strong>Fractal Chain of Thought (FCoT)</strong> framework offered a critical insight into agentic reflection. While FCoT provided deeply balanced textual assessments and successfully resolved conflicts between ML outputs and generative intuition, it struggled slightly with numerical label calibration (scoring 0.75 with full toolings). We discovered that forcing the model to over-analyze these conflicting signals occasionally resulted in decision paralysis or overly cautious, generalized outputs that missed stricter categorical thresholds.
              </p>
            </div>

            <p>
              <strong>Conclusion:</strong> By leveraging the Google Agent Development Kit and Gemini 3 Flash, we successfully integrated predictive "Factuality Factors" into a sophisticated generative pipeline. While advanced reasoning frameworks like FCoT offer superior qualitative depth and conflict resolution, they require careful calibration to prevent over-generalization. Ultimately, this agentic architecture demonstrates a highly promising, scalable path forward for nuanced misinformation detection.
            </p>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section id="future" className="py-20 px-6 max-w-4xl mx-auto bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Future Directions</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Expand Factors & Datasets", desc: "Expanding the number of facticity factors and improving the robustness of the foundational predictive models through larger, more diverse training datasets." },
            { title: "Enhance Web-Grounding", desc: "Enhancing the web-grounding capabilities of the ADK agents to further reduce hallucination and incorporate real-time verification signals." },
            { title: "Refine FCoT Calibration", desc: "Refining the FCoT protocol to better calibrate confidence scores, preventing the over-generalization and decision paralysis observed during deep reflection." },
            { title: "Scale Across Domains", desc: "Ultimately evaluating the multi-agent framework at scale across diverse news domains to ensure true deployment readiness." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <ShieldAlert className="w-8 h-8 mx-auto text-blue-500 mb-6" />
          <p className="mb-2">© 2026 Cecilia Lin, Yulin Chen, Yaoxi Li. GenAI For Good Capstone Project.</p>
          <p className="text-sm">University of California, San Diego • Mentors: Ali Arsanjani, Samuel Lau</p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href="https://github.com/YulinChen12/DSC180A-GroupNull" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
            <a href="#" className="hover:text-white transition-colors">Project Report</a>
          </div>
        </div>
      </footer>
    </div>
  );
}