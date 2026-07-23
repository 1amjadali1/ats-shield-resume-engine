import { create } from 'zustand'

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string
  description: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  year: string
}

interface ResumeState {
  personal: {
    fullName: string
    email: string
    phone: string
    linkedin: string
    portfolio: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  skills: string
  setPersonal: (field: string, value: string) => void
  addExperience: () => void
  updateExperience: (id: string, field: string, value: string) => void
  addEducation: () => void
  updateEducation: (id: string, field: string, value: string) => void
  setSkills: (skills: string) => void
}

export const useResumeStore = create<ResumeState>((set) => ({
  personal: {
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '(555) 123-4567',
    linkedin: 'linkedin.com/in/johndoe',
    portfolio: 'johndoe.dev',
    summary: 'Results-driven professional with a proven track record...'
  },
  experience: [
    {
      id: '1',
      company: 'Tech Solutions Inc',
      role: 'Software Engineer',
      startDate: 'Jan 2020',
      endDate: 'Present',
      description: '- Developed core features\n- Optimized database queries'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'B.S. Computer Science',
      year: '2019'
    }
  ],
  skills: 'JavaScript, TypeScript, React, Node.js, SQL, AWS',
  setPersonal: (field, value) =>
    set((state) => ({
      personal: { ...state.personal, [field]: value }
    })),
  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        { id: Date.now().toString(), company: '', role: '', startDate: '', endDate: '', description: '' }
      ]
    })),
  updateExperience: (id, field, value) =>
    set((state) => ({
      experience: state.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    })),
  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        { id: Date.now().toString(), institution: '', degree: '', year: '' }
      ]
    })),
  updateEducation: (id, field, value) =>
    set((state) => ({
      education: state.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    })),
  setSkills: (skills) => set({ skills })
}))
