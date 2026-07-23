"use client"

import { useState, useRef } from "react"
import { useResumeStore } from "@/store/useResumeStore"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Download, PlusCircle, CheckCircle2, Bot } from "lucide-react"
import { useReactToPrint } from "react-to-print"

export default function BuilderPage() {
  const [activeStep, setActiveStep] = useState(1)
  const steps = ["Personal", "Experience", "Education", "Skills", "Certifications"]
  
  const { 
    personal, setPersonal, 
    experience, updateExperience, addExperience,
    education, updateEducation, addEducation,
    skills, setSkills,
    certifications, setCertifications
  } = useResumeStore()

  const resumeRef = useRef<HTMLDivElement>(null)

  const handleDownloadPDF = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: `${personal.fullName.replace(/\s+/g, '_')}_Resume`,
  })

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
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 bg-background ${
                    activeStep === index + 1 ? 'border-primary' : 
                    activeStep > index + 1 ? 'border-green-500 text-green-500' : 'border-border'
                  }`}>
                    {activeStep > index + 1 ? <CheckCircle2 className="w-3 h-3" /> : index + 1}
                  </div>
                  <span className="text-[10px] font-medium hidden sm:block">{step}</span>
                </div>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-6 overflow-y-auto">
            {activeStep === 1 && (
              <div className="space-y-4 animate-in slide-in-from-right-4">
                <h3 className="text-xl font-bold mb-4">Personal Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Full Name (e.g. AMJAD ALI)</label>
                    <input 
                      type="text" 
                      value={personal.fullName}
                      onChange={(e) => setPersonal("fullName", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Subtitle / Job Titles (e.g. Data Analyst — Python — SQL)</label>
                    <input 
                      type="text" 
                      value={personal.subtitle}
                      onChange={(e) => setPersonal("subtitle", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Location (e.g. New Delhi, India)</label>
                    <input 
                      type="text" 
                      value={personal.location}
                      onChange={(e) => setPersonal("location", e.target.value)}
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
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Email</label>
                    <input 
                      type="email" 
                      value={personal.email}
                      onChange={(e) => setPersonal("email", e.target.value)}
                      className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block text-muted-foreground">LinkedIn Handle / URL</label>
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
                      rows={5}
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
                  <h3 className="text-xl font-bold">Professional Experience</h3>
                  <Button size="sm" variant="outline" onClick={addExperience} className="gap-2">
                    <PlusCircle className="w-4 h-4" /> Add Role
                  </Button>
                </div>
                {experience.map((exp, index) => (
                  <div key={exp.id} className="p-4 border border-white/10 rounded-lg bg-black/20 space-y-4">
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
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Location (e.g. Gurugram, India)</label>
                        <input 
                          type="text" 
                          value={exp.location}
                          onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Role / Title</label>
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
                          placeholder="e.g. Jan 2024"
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
                          <label className="text-sm font-medium text-muted-foreground">Bullet Points (Start each line with • or -)</label>
                        </div>
                        <textarea 
                          rows={5}
                          value={exp.description}
                          placeholder="• Engineered interactive..."
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
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Degree / Major (e.g. Bachelor of Computer Applications)</label>
                        <input 
                          type="text" 
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Institution</label>
                        <input 
                          type="text" 
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                          className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                      <div className="col-span-2">
                        <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Duration (e.g. 2022 - 2025)</label>
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
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Skills (Format as 'Category: Items')</label>
                  <textarea 
                    rows={8}
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full bg-background border border-input rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>
            )}

            {activeStep === 5 && (
              <div className="space-y-4 animate-in slide-in-from-right-4">
                <h3 className="text-xl font-bold mb-4">Certifications</h3>
                <div>
                  <label className="text-sm font-medium mb-1.5 block text-muted-foreground">Certifications (Separated by —)</label>
                  <textarea 
                    rows={6}
                    value={certifications}
                    onChange={(e) => setCertifications(e.target.value)}
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
              <Button onClick={() => handleDownloadPDF()} className="bg-green-600 hover:bg-green-700 text-white gap-2">
                <Download className="w-4 h-4" /> Download PDF
              </Button>
            )}
          </div>
        </Card>

        {/* Right Panel: Live ATS Output */}
        <Card className="flex flex-col h-full border-white/10 glass overflow-hidden">
          <CardHeader className="border-b border-border/50 bg-black/10 py-4 flex flex-row items-center justify-between">
            <CardTitle className="text-lg">Live PDF Preview</CardTitle>
            <Button onClick={() => handleDownloadPDF()} variant="outline" size="sm" className="gap-2">
              <Download className="w-4 h-4" /> Save PDF
            </Button>
          </CardHeader>
          <CardContent className="flex-1 p-0 overflow-y-auto bg-[#525659] flex justify-center py-8">
            
            {/* The Actual A4 PDF Document */}
            <div 
              ref={resumeRef}
              className="bg-white text-black font-serif shadow-2xl"
              style={{
                width: '210mm',
                minHeight: '297mm',
                padding: '20mm 20mm',
                boxSizing: 'border-box'
              }}
            >
              
              {/* Header section */}
              <div className="text-center mb-6">
                <h1 className="text-3xl font-bold uppercase mb-1">{personal.fullName}</h1>
                <div className="text-sm mb-1">{personal.subtitle}</div>
                <div className="text-sm">
                  {[personal.location, personal.phone, personal.email, personal.linkedin].filter(Boolean).join(' — ')}
                </div>
              </div>

              {/* Summary section */}
              {personal.summary && (
                <div className="mb-4">
                  <h2 className="text-base font-bold uppercase border-b border-black mb-2 pb-0.5">Professional Summary</h2>
                  <p className="text-[13px] leading-relaxed text-justify">
                    {personal.summary}
                  </p>
                </div>
              )}

              {/* Technical Skills */}
              {skills && (
                <div className="mb-4">
                  <h2 className="text-base font-bold uppercase border-b border-black mb-2 pb-0.5">Technical Skills</h2>
                  <div className="text-[13px] leading-relaxed">
                    {skills.split('\n').map((line, index) => {
                      const splitLine = line.split(':');
                      if (splitLine.length > 1) {
                        return (
                          <div key={index} className="mb-1">
                            <span className="font-bold">{splitLine[0]}:</span> {splitLine.slice(1).join(':')}
                          </div>
                        )
                      }
                      return <div key={index} className="mb-1">{line}</div>
                    })}
                  </div>
                </div>
              )}

              {/* Experience section */}
              {experience.length > 0 && experience[0].company && (
                <div className="mb-4">
                  <h2 className="text-base font-bold uppercase border-b border-black mb-2 pb-0.5">Professional Experience</h2>
                  
                  {experience.map(exp => (
                    exp.company && (
                      <div key={exp.id} className="mb-3">
                        <div className="flex justify-between items-baseline mb-0.5 text-[13px]">
                          <span className="font-bold text-[14px]">{exp.company}</span>
                          <span className="text-right">{exp.location}</span>
                        </div>
                        <div className="flex justify-between items-baseline mb-1 text-[13px]">
                          <span className="italic">{exp.role}</span>
                          <span className="text-right">{[exp.startDate, exp.endDate].filter(Boolean).join(' – ')}</span>
                        </div>
                        {exp.description && (
                          <ul className="list-none text-[13px] leading-relaxed space-y-0.5 mt-1">
                            {exp.description.split('\n').map((line, i) => {
                              const bulletPoint = line.trim();
                              if (!bulletPoint) return null;
                              
                              // Handle standard bullet points (remove existing - or • and render properly aligned)
                              const cleanedText = bulletPoint.replace(/^[-•]\s*/, '');
                              return (
                                <li key={i} className="flex">
                                  <span className="mr-2 text-sm">•</span>
                                  <span>{cleanedText}</span>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* Education section */}
              {education.length > 0 && education[0].institution && (
                <div className="mb-4">
                  <h2 className="text-base font-bold uppercase border-b border-black mb-2 pb-0.5">Education</h2>
                  {education.map(edu => (
                    edu.institution && (
                      <div key={edu.id} className="flex justify-between items-baseline mb-1 text-[13px]">
                        <div>
                          <span className="font-bold">{edu.degree}</span>
                          {edu.institution && <span> — {edu.institution}</span>}
                        </div>
                        <span className="text-right">{edu.year}</span>
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* Certifications */}
              {certifications && (
                <div>
                  <h2 className="text-base font-bold uppercase border-b border-black mb-2 pb-0.5">Certifications</h2>
                  <div className="text-[13px] leading-relaxed">
                    {certifications}
                  </div>
                </div>
              )}

            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
