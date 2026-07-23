"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { FileText, Target, Zap, Download, Sparkles, CheckCircle2, AlertTriangle } from "lucide-react"

export default function TailorPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [matchScore, setMatchScore] = useState<number | null>(null)

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    // Simulate AI processing
    setTimeout(() => {
      setIsAnalyzing(false)
      setMatchScore(92)
    }, 2500)
  }

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] p-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-full">
        
        {/* Left Panel: Job Description */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary" />
              1. Job Description
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            <div>
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Company Name</label>
              <input 
                type="text" 
                placeholder="e.g. Google, Stripe" 
                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Job Title</label>
              <input 
                type="text" 
                placeholder="e.g. Senior Frontend Engineer" 
                className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Job Description</label>
              <textarea 
                placeholder="Paste the full job description here..." 
                className="flex-1 w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button className="w-full gap-2">
              <Zap className="w-4 h-4" />
              Extract Keywords
            </Button>
          </CardContent>
        </Card>

        {/* Middle Panel: Resume Input */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="w-5 h-5 text-blue-500" />
              2. Your Resume
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 p-4 flex flex-col gap-4 overflow-y-auto">
            <div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center text-center bg-black/5 hover:bg-black/10 transition-colors cursor-pointer">
              <FileText className="w-10 h-10 text-muted-foreground mb-4" />
              <p className="text-sm font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mt-1">PDF or DOCX (Max 5MB)</p>
            </div>
            
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-border"></div>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">or paste text</span>
              <div className="flex-1 h-px bg-border"></div>
            </div>

            <div className="flex-1 flex flex-col">
              <textarea 
                placeholder="Paste your existing resume content here..." 
                className="flex-1 w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <Button 
              className="w-full gap-2" 
              variant="default"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Analyzing & Tailoring...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Analyze & Tailor Resume
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Right Panel: Output & Analytics */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4 flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-lg">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              3. ATS Output
            </CardTitle>
            {matchScore && (
              <div className="flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-sm font-bold border border-green-500/20">
                <Target className="w-4 h-4" />
                {matchScore}% Match
              </div>
            )}
          </CardHeader>
          <CardContent className="flex-1 p-0 flex flex-col overflow-y-auto bg-white dark:bg-zinc-100">
            {matchScore ? (
              <div className="p-8 text-black min-h-full">
                {/* Simulated ATS Resume Preview */}
                <div className="max-w-[21cm] mx-auto space-y-6 font-serif">
                  <header className="text-center border-b border-black pb-4">
                    <h1 className="text-3xl font-bold uppercase tracking-wide">Alex Developer</h1>
                    <p className="text-sm mt-1">alex@email.com | (555) 123-4567 | linkedin.com/in/alexdev</p>
                  </header>
                  
                  <section>
                    <h2 className="text-lg font-bold uppercase border-b border-black/20 mb-2">Summary</h2>
                    <p className="text-sm leading-relaxed">
                      Results-driven <span className="bg-green-200 font-bold px-1 rounded">Senior Frontend Engineer</span> with 5+ years of experience building scalable web applications. Proven track record in optimizing performance and leading cross-functional teams to deliver high-quality <span className="bg-green-200 font-bold px-1 rounded">React</span> and <span className="bg-green-200 font-bold px-1 rounded">Next.js</span> solutions.
                    </p>
                  </section>
                  
                  <section>
                    <h2 className="text-lg font-bold uppercase border-b border-black/20 mb-2">Experience</h2>
                    <div className="mb-4">
                      <div className="flex justify-between font-bold text-sm">
                        <span>Software Engineer - TechCorp</span>
                        <span>Jan 2021 - Present</span>
                      </div>
                      <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                        <li><span className="bg-yellow-200 font-bold px-1 rounded">Architected</span> and deployed a micro-frontend architecture improving load times by 40%.</li>
                        <li>Collaborated with product managers to define <span className="bg-green-200 font-bold px-1 rounded">Agile</span> sprint goals.</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-muted-foreground text-center">
                <div className="w-16 h-16 rounded-full bg-black/5 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-8 h-8 opacity-50" />
                </div>
                <p>Provide Job Description and Resume to generate your ATS-optimized output.</p>
              </div>
            )}
          </CardContent>
          <div className="p-4 border-t border-border/50 bg-black/10 flex gap-2">
            <Button variant="outline" className="flex-1 gap-2" disabled={!matchScore}>
              <Download className="w-4 h-4" /> PDF
            </Button>
            <Button variant="outline" className="flex-1 gap-2" disabled={!matchScore}>
              <Download className="w-4 h-4" /> DOCX
            </Button>
          </div>
        </Card>

      </div>
    </div>
  )
}
