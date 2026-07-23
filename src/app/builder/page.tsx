"use client"

import { useState } from "react"
import { useResumeStore } from "@/store/useResumeStore"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Download, PlusCircle, CheckCircle2, Bot } from "lucide-react"

export default function BuilderPage() {
  const [activeStep, setActiveStep] = useState(1)
  const steps = ["Personal", "Experience", "Education", "Skills"]
  
  const { 
    personal, setPersonal, 
    experience, updateExperience, addExperience,
    education, updateEducation, addEducation,
    skills, setSkills
  } = useResumeStore()

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-4rem)] p-4 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        
        {/* Left Panel: Wizard Form */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4">
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-lg">Resume Builder</CardTitle>
              <div className="text-sm font-medium text-muted-foreground">Step {activeStep} of {steps.length}</div>
            </div>
            {/* Step Indicator */}
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-border -z-10"></div>
              {steps.map((step, index) => (
                <div 
                  key={step}
                  className={`flex flex-col items-center gap-1 cursor-pointer ${
                    activeStep === index + 1 ? 'text-primary' : 
                    activeStep > index + 1 ? 'text-green-500' : 'text-muted-foreground'
                  }`}
                  onClick={() => setActiveStep(index + 1)}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold border-2 bg-background ${
                    activeStep === index + 1 ? 'border-primary' : 
                    activeStep > index + 1 ? 'border-green-500 text-green-500' : 'border-border'
                  }`}>
                    {activeStep > index + 1 ? <CheckCircle2 className="w-4 h-4" /> : index + 1}
                  </div>
                  <span className="text-xs font-medium">{step}</span>
                </div>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-6 overflow-y-auto">
            {activeStep === 1 && (
              <div className="space-y-4 animate-in slide-in-from-right-4">
                <h3 className="text-xl font-bold mb-4">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Full Name</label>
                    <input 
                      type="text" 
                      value={personal.fullName}
                      onChange={(e) => setPersonal("fullName", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Email</label>
                    <input 
                      type="email" 
                      value={personal.email}
                      onChange={(e) => setPersonal("email", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Phone</label>
                    <input 
                      type="text" 
                      value={personal.phone}
                      onChange={(e) => setPersonal("phone", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">LinkedIn</label>
                    <input 
                      type="text" 
                      value={personal.linkedin}
                      onChange={(e) => setPersonal("linkedin", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Professional Summary</label>
                    <textarea 
                      rows={4}
                      value={personal.summary}
                      onChange={(e) => setPersonal("summary", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="space-y-6 animate-in slide-in-from-right-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Experience</h3>
                  <Button size="sm" variant="outline" onClick={addExperience} className="gap-2">
                    <PlusCircle className="w-4 h-4" /> Add Role
                  </Button>
                </div>
                {experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 border border-white/10 rounded-lg bg-black/20 space-y-4 relative">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Company</label>
                        <input 
                          type="text" 
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Role</label>
                        <input 
                          type="text" 
                          value={exp.role}
                          onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Start Date</label>
                        <input 
                          type="text" 
                          value={exp.startDate}
                          placeholder="e.g. Jan 2020"
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">End Date</label>
                        <input 
                          type="text" 
                          value={exp.endDate}
                          placeholder="e.g. Present"
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="flex justify-between items-end mb-1.5">
                          <label className="text-sm font-medium text-muted-foreground">Achievements / Responsibilities</label>
                          <Button variant="ghost" size="sm" className="h-6 text-xs text-primary gap-1 px-2">
                            <Bot className="w-3 h-3" /> AI Suggest
                          </Button>
                        </div>
                        <textarea 
                          rows={4}
                          value={exp.description}
                          placeholder="- Managed a team of..."
                          onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeStep === 3 && (
              <div className="space-y-6 animate-in slide-in-from-right-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold">Education</h3>
                  <Button size="sm" variant="outline" onClick={addEducation} className="gap-2">
                    <PlusCircle className="w-4 h-4" /> Add Degree
                  </Button>
                </div>
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 border border-white/10 rounded-lg bg-black/20 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Institution</label>
                        <input 
                          type="text" 
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Degree / Major</label>
                        <input 
                          type="text" 
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Graduation Year</label>
                        <input 
                          type="text" 
                          value={edu.year}
                          onChange={(e) => updateEducation(edu.id, "year", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeStep === 4 && (
              <div className="space-y-4 animate-in slide-in-from-right-4">
                <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Skills (Comma separated)</label>
                  <textarea 
                    rows={4}
                    value={skills}
                    placeholder="React, Next.js, Node.js..."
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

          </CardContent>
          <div className="p-4 border-t border-border/50 bg-black/10 flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              disabled={activeStep === 1}
            >
              Previous
            </Button>
            {activeStep < steps.length ? (
              <Button onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}>
                Next Step
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Finish Review
              </Button>
            )}
          </div>
        </Card>

        {/* Right Panel: Live ATS Output */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Live ATS Preview</CardTitle>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="gap-2 border border-white/10">
                <Download className="w-4 h-4" /> PDF
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-y-auto bg-white dark:bg-[#fdfdfd]">
            <div className="p-8 text-black min-h-full font-serif text-sm">
              <div className="max-w-[21cm] mx-auto space-y-4">
                
                {/* Header */}
                <header className="text-center border-b border-black pb-3">
                  <h1 className="text-2xl font-bold uppercase tracking-wide">{personal.fullName || 'Your Name'}</h1>
                  <p className="mt-1 text-xs">
                    {personal.email && <span>{personal.email}</span>}
                    {personal.phone && <span> | {personal.phone}</span>}
                    {personal.linkedin && <span> | {personal.linkedin}</span>}
                  </p>
                </header>
                
                {/* Summary */}
                {personal.summary && (
                  <section>
                    <h2 className="text-md font-bold uppercase border-b border-black/20 mb-2 pb-0.5">Summary</h2>
                    <p className="leading-relaxed text-xs">
                      {personal.summary}
                    </p>
                  </section>
                )}
                
                {/* Experience */}
                {experience.length > 0 && experience[0].company && (
                  <section>
                    <h2 className="text-md font-bold uppercase border-b border-black/20 mb-2 pb-0.5">Experience</h2>
                    <div className="space-y-3">
                      {experience.map(exp => (
                        exp.company && (
                          <div key={exp.id}>
                            <div className="flex justify-between font-bold text-xs">
                              <span>{exp.role} - {exp.company}</span>
                              <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                            {exp.description && (
                              <ul className="list-disc pl-4 mt-1 text-xs space-y-0.5">
                                {exp.description.split('\n').map((line, i) => (
                                  line.trim() ? <li key={i}>{line.replace(/^-/, '').trim()}</li> : null
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      ))}
                    </div>
                  </section>
                )}

                {/* Education */}
                {education.length > 0 && education[0].institution && (
                  <section>
                    <h2 className="text-md font-bold uppercase border-b border-black/20 mb-2 pb-0.5">Education</h2>
                    <div className="space-y-2">
                      {education.map(edu => (
                        edu.institution && (
                          <div key={edu.id} className="flex justify-between text-xs">
                            <span className="font-bold">{edu.degree} - {edu.institution}</span>
                            <span className="font-bold">{edu.year}</span>
                          </div>
                        )
                      ))}
                    </div>
                  </section>
                )}

                {/* Skills */}
                {skills && (
                  <section>
                    <h2 className="text-md font-bold uppercase border-b border-black/20 mb-2 pb-0.5">Technical Skills</h2>
                    <p className="text-xs">
                      {skills}
                    </p>
                  </section>
                )}

              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
