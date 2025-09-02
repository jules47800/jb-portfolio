"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Composant Code Block stylisé
export function CodeBlock({ children, title, language = "javascript" }: { children: string; title?: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  
  const copyCode = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-8 rounded-2xl border border-border/50 overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10">
      {title && (
        <div className="flex items-center justify-between px-6 py-3 bg-muted/50 border-b border-border/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <span className="text-sm font-medium text-muted-foreground ml-2">{title}</span>
            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{language}</span>
          </div>
          <button 
            onClick={copyCode}
            className="text-xs bg-background hover:bg-muted px-3 py-1 rounded-lg border border-border/50 transition-colors"
          >
            {copied ? "✅ Copié" : "📋 Copier"}
          </button>
        </div>
      )}
      <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
        <pre className="text-foreground">{children}</pre>
      </div>
    </div>
  );
}

// Composant Démo Interactive
export function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-8 rounded-2xl border border-primary/20 overflow-hidden bg-gradient-to-br from-primary/5 to-transparent">
      <div className="px-6 py-3 bg-primary/10 border-b border-primary/20">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-xs text-primary-foreground">🚀</span>
          </div>
          <span className="font-semibold text-primary">{title}</span>
        </div>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

// Composant Métrique avec animation
export function Metric({ label, value, unit, color = "primary" }: { label: string; value: number; unit: string; color?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-4 border border-border/50 text-center"
    >
      <div className={`text-2xl font-bold text-${color} mb-1`}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {value}{unit}
        </motion.span>
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

// Composant Avant/Après
export function BeforeAfter({ before, after }: { before: React.ReactNode; after: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');
  
  return (
    <div className="my-8 rounded-2xl border border-border/50 overflow-hidden">
      <div className="flex bg-muted/30">
        <button
          onClick={() => setActiveTab('before')}
          className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'before' 
              ? 'bg-red-500/10 text-red-600 border-b-2 border-red-500' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ❌ Avant
        </button>
        <button
          onClick={() => setActiveTab('after')}
          className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
            activeTab === 'after' 
              ? 'bg-green-500/10 text-green-600 border-b-2 border-green-500' 
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          ✅ Après
        </button>
      </div>
      <div className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'before' ? before : after}
        </motion.div>
      </div>
    </div>
  );
}

// Composant Tip/Warning
export function Tip({ type = "tip", children }: { type?: "tip" | "warning" | "info"; children: React.ReactNode }) {
  const configs = {
    tip: { icon: "💡", color: "yellow", bg: "yellow-500/10", border: "yellow-500/20" },
    warning: { icon: "⚠️", color: "orange", bg: "orange-500/10", border: "orange-500/20" },
    info: { icon: "ℹ️", color: "blue", bg: "blue-500/10", border: "blue-500/20" }
  };
  
  const config = configs[type];
  
  return (
    <div className={`my-6 rounded-xl p-4 bg-${config.bg} border border-${config.border}`}>
      <div className="flex gap-3">
        <span className="text-lg">{config.icon}</span>
        <div className="flex-1 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}

// Composant Performance Gauge
export function PerformanceGauge({ score, label }: { score: number; label: string }) {
  const getColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl p-6 border border-border/50 text-center"
    >
      <div className="relative w-24 h-24 mx-auto mb-4">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/30"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={getColor(score)}
            strokeDasharray={`${2 * Math.PI * 40}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
            whileInView={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - score / 100) }}
            transition={{ duration: 2, delay: 0.5 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getColor(score)}`}>{score}</span>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

// Schéma visuel simple
export function Schema({ title, steps }: { title: string; steps: string[] }) {
  return (
    <div className="my-8">
      <h4 className="text-lg font-semibold mb-6 text-center">{title}</h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-primary text-primary-foreground rounded-xl px-4 py-2 text-sm font-medium min-w-0 text-center"
            >
              {step}
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="hidden md:block mx-2 text-muted-foreground"
              >
                →
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
