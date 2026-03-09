import React, { useState, useEffect } from 'react';
import { ShieldAlert, BrainCircuit, Database, GitMerge, ChevronRight, CheckCircle2, FileText, BarChart3, ArrowRight, AppWindow, ExternalLink, ChevronDown, PlayCircle, Presentation } from 'lucide-react';

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
            <ShieldAlert aria-hidden="true" className="w-6 h-6 text-blue-600" />
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
              href="https://github.com/YulinChen12/Agentic-and-Fractal-Reasoning-for-Automated-Fact-Checking" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors shadow-sm"
            >
              <span>View GitHub Repo</span>
              <ExternalLink aria-hidden="true" className="w-4 h-4" />
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
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mb-10">
            <a href="https://drive.google.com/file/d/1v_3_r1s50QLXRXbmNhpUODadefhmKN3S/view?usp=drive_link" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl">
              <PlayCircle aria-hidden="true" className="w-5 h-5" />
              <span>App Demo Video</span>
            </a>
            <a href="https://drive.google.com/file/d/1D0U48H13eCO68nTvLkAE5gMhsSmuVOW3/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
              <Presentation aria-hidden="true" className="w-5 h-5" />
              <span>Poster</span>
            </a>
            <a href="https://drive.google.com/file/d/1qUTmeblOpo7QNRbXUlYY5f_1_sDzye2A/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-2 w-full sm:w-auto px-6 py-3 bg-white text-slate-700 font-bold rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
              <span>Research Report</span>
              <ArrowRight aria-hidden="true" className="w-5 h-5" />
            </a>
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
              <FileText aria-hidden="true" className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold">Introduction: What's this all about?</h2>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-0 mb-3">Problem Statement & Target Stakeholders</h3>
            <p>
            The exponential growth of online misinformation has overwhelmed the capacity of human fact-checkers, creating an urgent need for automated verification systems that can operate at internet scale. However, current AI approaches face a fundamental trade-off. On one hand, traditional <strong>predictive models</strong> offer statistical stability but lack context, struggling to understand the nuance of long-form journalism. On the other hand, modern <strong>generative models (like Gemini)</strong> provide flexible reasoning but are prone to hallucination—often making up facts or uncritically agreeing with whatever information they are fed.
            </p>           
            <p className="font-medium text-slate-900 text-xl border-l-4 border-indigo-500 pl-6 my-8">
              Our solution is a novel, hybrid framework that synthesizes both worlds. By orchestrating a suite of specialized machine-learning classifiers and feeding their outputs into a Google Agent Development Kit (ADK) framework powered by <strong>Gemini 3 Flash</strong>, we generate a highly accurate, multi-dimensional credibility measure. Our target stakeholders include <strong>social media platforms, independent journalists, and everyday consumers</strong> who need transparent, scalable tools to navigate the modern information crisis.
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
            <Database aria-hidden="true" className="w-6 h-6 mr-3 text-indigo-500" />
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
                <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
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
              <BarChart3 aria-hidden="true" className="w-6 h-6 text-blue-300" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Predictive Classifiers</h3>
            <p className="text-slate-300 mb-6 text-sm">
              Providing the statistical grounding. We engineered specific models for the semantic factuality factors using the LIAR-PLUS dataset.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong className="mr-1">LinearSVC:</strong> Utilized for Sensationalism and News Coverage.</li>
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong>Cosine Similarity:</strong> Prototype-based approach for Intent classification.</li>
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-blue-400 flex-shrink-0"/> <strong className="mr-1">DistilRoBERTa:</strong> Fine-tuned for Stance classification.</li>
            </ul>
          </div>

          {/* Generative */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 rounded-3xl shadow-xl">
            <div className="p-3 bg-white/10 w-fit rounded-xl mb-6">
              <BrainCircuit aria-hidden="true" className="w-6 h-6 text-blue-100" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Generative Agent Framework</h3>
            <p className="text-blue-100 mb-6 text-sm">
              Built on the <strong>Google Agent Development Kit (ADK)</strong> and powered by the high-speed reasoning of <strong>Gemini 3 Flash</strong>. The system employs a <code>SequentialAgent</code> that orchestrates a parallel squad of factor specialists.
            </p>
            <ul className="space-y-3 text-sm text-blue-100">
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong className="mr-1">Factor Squad:</strong> A <code className="mx-1">ParallelAgent</code> managing 6 specialized analysts.</li>
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong>Final Synthesizer:</strong> Resolves contradictions and performs retrospective re-grounding.</li>
              <li className="flex items-center"><ChevronRight aria-hidden="true" className="w-4 h-4 mr-2 text-white flex-shrink-0"/> <strong className="mr-1">External Verification:</strong> Context Veracity and Title-Body Alignment integrate Google Search APIs for real-time grounding.</li>
            </ul>
          </div>
        </div>

        {/* Dataset Rigor & Leakage Prevention (NEWLY ADDED) */}
        <div className="bg-slate-50 p-8 rounded-3xl shadow-sm border border-slate-200 mb-12">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Database aria-hidden="true" className="w-6 h-6 mr-3 text-emerald-500" />
            Dataset Rigor & Leakage Prevention
          </h3>
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              Our predictive models were trained on the <strong>LIAR-PLUS dataset</strong>. To ensure validity and prevent data leakage, we implemented strict dataset splitting protocols:
            </p>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong>Stance Model:</strong> We utilized a speaker-disjoint split, ensuring that no speaker appeared in both the train and test sets. This allowed us to effectively evaluate generalization to unseen speakers. We also applied speaker-level sample weighting via weighted cross-entropy loss to address large speaker frequency imbalances.
              </li>
              <li>
                <strong>Sensationalism Model:</strong> Evaluated using stratified 3-fold cross-validation.
              </li>
              <li>
                <strong>Agent Workflow Evaluation:</strong> We manually labeled a dataset of 27 articles. This was partitioned into an <strong>Instructional Subset</strong> of 7 articles for few-shot in context learning (ICL), and an <strong>Evaluation Subset</strong> of 20 articles to benchmark the agent workflow against human-provided ground truth labels.
              </li>
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
                SequentialAgent: FactCheck_Framework
              </div>
              
              {/* Factor Squad (Parallel) */}
              <div className="border border-blue-200 bg-blue-50/50 p-4 md:p-6 rounded-2xl mb-8 relative mt-4">
                <div className="absolute -top-3 left-6 bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                  ParallelAgent: Factor_Squad
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-2">
                  {['Sensationalism_Analyst', 'Stance_Analyst', 'Context_Veracity_Analyst', 'News_Coverage_Analyst', 'Intent_Analyst', 'Title_Body_Analyst'].map(agent => (
                    <div key={agent} className="bg-white p-3 rounded-xl border border-blue-100 text-center text-xs md:text-sm font-medium text-slate-700 shadow-sm flex flex-col items-center justify-center">
                      <BrainCircuit aria-hidden="true" className="w-5 h-5 text-blue-400 mb-2" />
                      {agent.replace(/_/g, ' ')}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center mb-8">
                <ArrowRight aria-hidden="true" className="w-8 h-8 text-indigo-300 rotate-90" />
              </div>

              {/* Final Synthesizer */}
              <div className="bg-indigo-600 text-white p-6 rounded-2xl text-center shadow-md mx-auto max-w-md relative mt-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-800 text-indigo-100 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500 whitespace-nowrap">
                  Agent: Final_Synthesizer
                </div>
                <GitMerge aria-hidden="true" className="w-8 h-8 text-indigo-200 mx-auto mb-3 mt-2" />
                <p className="text-sm font-medium">Recursive Synthesis & Inter-agent Reflectivity</p>
              </div>
            </div>

            <div className="h-6 w-0.5 bg-slate-300 mt-4 mb-4"></div>
            {/* Output */}
            <div className="px-6 py-3 bg-emerald-100 text-emerald-800 font-bold rounded-full border border-emerald-300 shadow-sm text-center text-sm md:text-base">
              FactCheckFinalReport
            </div>
          </div>
        </div>

        {/* Synthesis */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 text-center">
          <GitMerge aria-hidden="true" className="w-10 h-10 text-indigo-500 mx-auto mb-4" />
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
          
          <div className="mb-12">
            {/* Predictive Results */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-lg">Individual Predictive Model Performance</h3>
                <p className="text-xs text-slate-500 mt-1">Evaluated on the LIAR-PLUS test set prior to generative integration.</p>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm min-w-[800px]">
                  <thead>
                    <tr className="bg-slate-50 text-slate-500 border-b border-slate-200">
                      <th className="p-3 font-medium whitespace-nowrap">Factor</th>
                      <th className="p-3 font-medium">Model / Approach</th>
                      <th className="p-3 font-medium text-center">Accuracy</th>
                      <th className="p-3 font-medium text-center">Macro F1</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">News Coverage</td>
                      <td className="p-3 text-slate-600">LinearSVC (TF-IDF)</td>
                      <td className="p-3 text-center font-mono">0.33</td>
                      <td className="p-3 text-center font-mono">0.17</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">Intent</td>
                      <td className="p-3 text-slate-600">Prototype-based Cosine Similarity</td>
                      <td className="p-3 text-center font-mono">0.35</td>
                      <td className="p-3 text-center font-mono">0.17</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">Sensationalism</td>
                      <td className="p-3 text-slate-600">Linear SVM</td>
                      <td className="p-3 text-center font-mono">0.62</td>
                      <td className="p-3 text-center font-mono">0.61</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">Stance</td>
                      <td className="p-3 text-slate-600">Fine-tuned DistilRoBERTa</td>
                      <td className="p-3 text-center font-mono">0.40</td>
                      <td className="p-3 text-center font-mono">0.39</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mb-12">
            {/* Agent Evaluation */}
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
                      <td className="p-3 text-center font-mono p-3 text-center font-mono text-emerald-600 font-bold">0.65</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.35</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.63</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">CoT</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.50</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.90</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.76</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-900 font-bold bg-indigo-50/50 whitespace-nowrap border-y border-indigo-100">CoT + Function Calling</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.80</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.80</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold bg-indigo-50/50">0.90</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.55</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.85</td>
                      <td className="p-3 text-center font-mono bg-indigo-50/50">0.70</td>
                      <td className="p-3 text-center font-mono font-black bg-indigo-100 border-l border-indigo-200 text-indigo-700">0.77</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-slate-700 font-medium whitespace-nowrap">CoT + Few Shot + Func Calling</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono text-emerald-600 font-bold">0.85</td>
                      <td className="p-3 text-center font-mono">0.80</td>
                      <td className="p-3 text-center font-mono">0.55</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.77</td>
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
                      <td className="p-3 text-center font-mono">0.60</td>
                      <td className="p-3 text-center font-mono">0.85</td>
                      <td className="p-3 text-center font-mono">0.70</td>
                      <td className="p-3 text-center font-mono font-bold bg-slate-50 border-l border-slate-200">0.75</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Interpreting the Data (Meaningful vs Noise) */}
          <div className="bg-orange-50 border border-orange-200 p-8 rounded-3xl mb-12 shadow-sm">
            <h4 className="font-bold text-orange-900 text-xl mt-0 mb-4">Interpreting the Results: </h4>
            <p className="text-sm text-orange-800 mb-6 leading-relaxed">
              When reviewing the table above, it is crucial to distinguish between meaningful performance and statistical noise. Our qualitative audits revealed that higher accuracy scores did not always equate to better reasoning. Here is how we interpret the variance across the six factuality factors:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">1. News Coverage (High CoT = Noise)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  Standard CoT achieved a highly impressive 0.90 accuracy, but this was often <strong>noise</strong>. The agent tended to cast a "wide net," predicting overly broad, safe topics (like "Politics") rather than precise, useful categories (like "Public Safety").
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">2. Stance (Simple Prompting Wins)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  Surprisingly, the baseline Simple Prompt achieved the best stance performance (0.65). <strong>This is meaningful.</strong> Stance is often better captured through a direct reading of overall framing rather than elaborate CoT reasoning, which can cause the model to over-focus on isolated cues.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">3. Intent (Function Calling Anchors)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  Function Calling provided a <strong>meaningful boost</strong> here. By anchoring the generative agent to the mathematical baseline of our Phase 1 classifiers, the system was able to stabilize its subjective interpretations of author intent.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">4. Sensationalism (FCoT Paralysis)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  The lower scores seen in FCoT reflect <strong>meaningful decision paralysis</strong>. When forced to deeply reconcile conflicting quantitative and qualitative signals regarding emotional manipulation, the model became overly cautious and missed strict categorical thresholds.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">5. Title vs Body (Highly Stable)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  High scores across all agents (0.80-0.90) are highly <strong>stable and meaningful</strong>. This task relies on explicit structural comparisons and factual overlap, which LLMs naturally excel at mapping.
                </p>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-orange-100 shadow-sm">
                <h5 className="font-bold text-orange-900 text-sm mb-1">6. Context Veracity (Search Required)</h5>
                <p className="text-xs text-orange-800 leading-relaxed">
                  The Simple Prompt's failure (0.35) is <strong>meaningful</strong>, proving LLMs cannot verify facts from memory alone. Higher tool-enabled scores are genuine improvements, though still vulnerable to the "Tool Bypass" anomaly if the agent gets confused by timelines.
                </p>
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
                  <ChevronDown aria-hidden="true" className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4 mt-2">
                  <p className="mb-3"><strong>Simple Prompt:</strong> Standard instructions asking the model to immediately output a verdict. The model acts on instinct, often resulting in lower accuracy and missed nuances.</p>
                  <p><strong>Chain of Thought (CoT):</strong> A two-phase protocol where the agent first calls its assigned predictive tool (if provided), then independently reviews the article text. If the text contradicts the tool, the agent explains the discrepancy rather than blindly accepting the prediction.</p>
                </div>
              </details>

              <details className="group bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-indigo-900">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-indigo-200 flex items-center justify-center text-xs mr-3 border border-indigo-300">2</span>
                    Fractal CoT (FCoT)
                  </div>
                  <ChevronDown aria-hidden="true" className="w-5 h-5 text-indigo-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-indigo-800 border-t border-indigo-200 pt-4 mt-2">
                  <p>Our custom 5-phase recursive protocol. The model conducts a localized linguistic "blind read" first, then expands its aperture to call predictive tools, and actively reconciles any discrepancies (Reflective Update) before finalizing a verdict. This prevents the AI from blindly trusting outside tools without verifying context.</p>
                </div>
              </details>

              <details className="group bg-white rounded-2xl border border-slate-200 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-slate-900">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs mr-3 border border-slate-300">3</span>
                    Tool Enhancements: Function Calling & Few-Shot Learning
                  </div>
                  <ChevronDown aria-hidden="true" className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-sm text-slate-600 border-t border-slate-100 pt-4 mt-2">
                  <p className="mb-3"><strong>Function Calling (Tool Use):</strong> Instead of relying solely on the generative AI's internal knowledge, we give the agent access to external tools mid-thought. It can query our trained predictive models (like LinearSVC) or run live Google Web Searches to mathematically ground its evaluation with real data.</p>
                  <p><strong>Few-Shot In Context Learning (ICL):</strong> We supply the AI with a "reference library" of 7 human-annotated articles directly within the prompt. By studying these expert examples before making a decision, the AI learns complex human reasoning patterns and effectively calibrates its judgment.</p>
                </div>
              </details>
            </div>
          </div>

          {/* Interactive Web App Highlight */}
          <div className="bg-indigo-900 text-indigo-50 p-8 rounded-3xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-start md:items-center gap-6">
               <div className="p-4 bg-indigo-800 rounded-2xl flex-shrink-0">
                 <AppWindow aria-hidden="true" className="w-10 h-10 text-indigo-300" />
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
                <ExternalLink aria-hidden="true" className="w-4 h-4" />
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
              Analyzing the impact of our hybrid architecture and evaluating deployment readiness.
            </p>
          </div>
          <div className="prose prose-lg text-slate-600 max-w-none">
            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Iteration: How We Got Here</h3>
            <p>
              Our system architecture underwent significant iteration. We initially started with isolated predictive classifiers (Phase 1), but they lacked the contextual awareness to understand long-form journalism. We then tested a <strong>Simple Prompt</strong> generative agent, but it failed catastrophically on externally verifiable tasks (scoring just 0.35 on Context Veracity). To fix this, we iterated to structured <strong>Chain of Thought (CoT)</strong> pipelines with function calling. Finally, observing that standard CoT often blindly trusted faulty predictive tools, we engineered the custom <strong>Fractal Chain of Thought (FCoT)</strong> to force the AI to explicitly reconcile discrepancies between its own linguistic analysis and the tool's output.
            </p>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Final Deployment Decision</h3>
            <p>
              The comparison across prompting methods suggests that improving an agent is not simply a matter of adding more reasoning steps, but of choosing the right level of structure for the task. Structured prompting methods generally outperformed the <strong>Simple Prompt</strong> baseline, proving that explicit reasoning improves multi-factor credibility assessment.
            </p>
            
            <p>
              Qualitatively, our tests showed that performance differed significantly by factor. Labels tied to factual support and article structure, such as Title-Body Alignment and Context Veracity, were stable across agents. In contrast, topic-related judgments (News Coverage) were less consistent because they heavily depend on how the agent interprets an article's main rhetorical emphasis.
            </p>

            <div className="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl my-8">
              <h4 className="font-bold text-indigo-900 mt-0 mb-2">Why We Chose CoT + Function Calling</h4>
              <p className="text-sm text-indigo-800 mb-4">
                For our final application, we selected <strong>CoT + Function Calling</strong>. It offered the best overall tradeoff between accuracy and practicality. It performed strongly across factors (achieving a 0.77 average), used tools in a reliable way, and avoided the added overhead of few-shot examples or more complex FCoT-style reasoning. 
              </p>
              <p className="text-sm text-indigo-800 mb-0">
                While <strong>CoT + Few-Shot + Function Calling</strong> achieved a similar average score, relying on a longer prompt inherently increases inference cost and latency, and can occasionally weaken the model's focus on the core task. Similarly, <strong>FCoT</strong> methods occasionally suffered from decision paralysis or missed strict categorical thresholds when over-analyzing conflicting signals. This made CoT + Function Calling the most efficient and robust choice for a real-time deployment environment.
              </p>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Limitations & Failure Modes: The "Tool Bypass" Anomaly</h3>
            <p>
              A major limitation we discovered—and an important failure mode to acknowledge honestly—was the <strong>"Tool Bypass" anomaly</strong> in the Context Veracity agent. When evaluating articles reporting on recent events (e.g., late 2025 or 2026, beyond the LLM's internal knowledge cutoff), the generative model would confidently hallucinate that the real events were fictional or "analog horror" rather than executing a search query. Because the model perceived the date as being in the future, its internal confidence artificially inflated, bypassing the search tool entirely. 
            </p>
            <p>
              <strong>The Fix (Temporal Grounding):</strong> We mitigated this by hardcoding temporal grounding—dynamically injecting the current, real-world date into the system prompt to explicitly remind the agent that its internal weights were outdated, thereby forcing it to rely on the Google Search API.
            </p>

            <p className="mt-8 border-t border-slate-200 pt-8">
              <strong>Conclusion:</strong> Combining structured reasoning with predictive tool grounding is a highly effective approach for multi-factor article analysis. Our findings highlight that strong performance in automated fact-checking depends not only on raw model capability, but also on careful prompt design, web-grounded verification, and practical deployment considerations like latency and cost.
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

      {/* References */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-xl font-bold mb-6 text-slate-900">References & External Tools</h3>
          <ul className="space-y-4 text-sm text-slate-600">
            <li>
              <strong>[1]</strong> Alhindi, T., Petridis, S., & Muresan, S. (2018). "Where is Your Evidence: Improving Fact-Checking by Justification Modeling." <em>Proceedings of the First Workshop on Fact Extraction and VERification (FEVER)</em>.
            </li>
            <li>
              <strong>[2]</strong> Chen, C., & Shu, K. (2024). "Combating Misinformation in the Age of LLMs: Opportunities and Challenges." <em>AI Magazine</em> 45(3): 354-368.
            </li>
            <li>
              <strong>[3]</strong> Wang, W. Y. (2017). ""Liar, Liar Pants on Fire": A New Benchmark Dataset for Fake News Detection." <em>Proceedings of the 55th Annual Meeting of the Association for Computational Linguistics (ACL)</em>.
            </li>
            <li>
              <strong>[4]</strong> Zhang, Y., Sharma, K., Du, L., & Liu, Y. (2024). "Toward Mitigating Misinformation and Social Media Manipulation in LLM Era." <em>Companion Proceedings of the ACM Web Conference 2024</em>.
            </li>
            <li>
              <strong>[5]</strong> Reuters. (2025). "Hong Kong Leader Orders Independent Probe into Fire That Killed 151." <em>Reuters</em>, December 2, 2025.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <ShieldAlert aria-hidden="true" className="w-8 h-8 mx-auto text-blue-500 mb-6" />
          <p className="mb-2">© 2026 Cecilia Lin, Yulin Chen, Yaoxi Li. GenAI For Good Capstone Project.</p>
          <p className="text-sm">University of California, San Diego • Mentors: Ali Arsanjani, Samuel Lau</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a href="https://github.com/YulinChen12/Agentic-and-Fractal-Reasoning-for-Automated-Fact-Checking" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository</a>
            <a href="https://drive.google.com/file/d/1qUTmeblOpo7QNRbXUlYY5f_1_sDzye2A/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Project Report</a>
            <a href="https://drive.google.com/file/d/1D0U48H13eCO68nTvLkAE5gMhsSmuVOW3/view?usp=sharing" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Poster</a>
            <a href="https://drive.google.com/file/d/1v_3_r1s50QLXRXbmNhpUODadefhmKN3S/view?usp=drive_link" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Demo Video</a>
          </div>
        </div>
      </footer>
    </div>
  );
}