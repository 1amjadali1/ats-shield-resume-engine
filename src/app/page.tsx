import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6 lg:p-12 overflow-hidden">
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center text-center space-y-8 pt-12 pb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-sm font-medium text-primary mb-4 animate-in slide-in-from-bottom-4 duration-700">
          <Sparkles className="w-4 h-4" />
          <span>V1.0 is now live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl animate-in slide-in-from-bottom-6 duration-700 delay-100">
          Beat the ATS. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Get Shortlisted.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in slide-in-from-bottom-8 duration-700 delay-200">
          An AI-powered resume engine designed to tailor your resume for specific job descriptions and guarantee 100% Applicant Tracking System compliance.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-in slide-in-from-bottom-10 duration-700 delay-300">
          <Link href="/tailor">
            <Button size="lg" className="w-full sm:w-auto gap-2 group h-12 px-8 text-base shadow-lg shadow-primary/20">
              Tailor Resume for a Job
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/builder">
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 h-12 px-8 text-base">
              <FileText className="w-4 h-4" />
              Build ATS Resume
            </Button>
          </Link>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-1000 delay-500">
        <Card className="glass border-white/10 hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Precision Keyword Matching</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Our AI scans the target Job Description and suggests high-value keywords to seamlessly integrate into your resume experience.
          </CardContent>
        </Card>

        <Card className="glass border-white/10 hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-blue-500" />
            </div>
            <CardTitle>100% ATS Compliant</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            We enforce strict single-column formatting, standard fonts, and standardized section headers to ensure parsers read your data perfectly.
          </CardContent>
        </Card>

        <Card className="glass border-white/10 hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-500" />
            </div>
            <CardTitle>AI Action Bullet Points</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Stuck on what to write? Our AI suggests powerful action-verb driven bullet points tailored to your role.
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
