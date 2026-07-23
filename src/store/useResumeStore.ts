import { create } from 'zustand'

export interface Experience {
  id: string
  company: string
  location: string
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
    subtitle: string
    location: string
    phone: string
    email: string
    linkedin: string
    summary: string
  }
  experience: Experience[]
  education: Education[]
  skills: string
  certifications: string
  setPersonal: (field: string, value: string) => void
  addExperience: () => void
  updateExperience: (id: string, field: string, value: string) => void
  addEducation: () => void
  updateEducation: (id: string, field: string, value: string) => void
  setSkills: (skills: string) => void
  setCertifications: (certs: string) => void
}

export const useResumeStore = create<ResumeState>((set) => ({
  personal: {
    fullName: 'AMJAD ALI',
    subtitle: 'Data Analyst — Business Intelligence — Python — SQL — Power BI — ETL',
    location: 'New Delhi, India',
    phone: '+91-9650506702',
    email: 'amjad0475@gmail.com',
    linkedin: 'LinkedIn',
    summary: 'Results-driven Senior Data Analyst with 7+ years of experience transforming complex datasets into actionable business insights across operations, e-commerce, and verification domains. Expert in building end-to-end analytics solutions including data extraction, modeling, visualization, and automated reporting. Proven track record of designing Power BI dashboards, developing predictive models with Python, and optimizing ETL workflows to drive operational efficiency and strategic decision-making.'
  },
  experience: [
    {
      id: '1',
      company: 'Concentrix',
      location: 'Gurugram, India',
      role: 'Senior Analyst - Data Analytics & Business Intelligence',
      startDate: 'Jan 2024',
      endDate: 'Present',
      description: '• Engineered interactive Power BI dashboards tracking agent productivity, quality metrics, and SLA adherence, enabling data-driven decisions for 500+ user leadership team\n• Developed predictive models using Python to forecast customer satisfaction trends, improving proactive service delivery by 25%\n• Automated daily/weekly reporting workflows using Python and SQL, reducing manual effort by 40% and improving accuracy'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      degree: 'Bachelor of Computer Applications (BCA)',
      year: '2022 – 2025'
    }
  ],
  skills: 'Programming & Databases: Python (Pandas, NumPy, Data Analysis), SQL (MySQL, MS SQL Server, Query Optimization)\nBI & Visualization: Power BI (DAX, Power Query, RLS, Custom Visuals), Tableau, Google Analytics\nData Engineering: ETL Workflows, Data Warehousing, Data Modeling, Data Pipeline Automation\nAnalytics & Tools: Advanced Excel (Pivot Tables, VBA, Power Query), Statistical Analysis, Predictive Modeling\nOther Tools: Generative AI, Git, MS Office Suite, Freshdesk, Atlas, Samson',
  certifications: 'Python for Data Science — SQL for Data Science — Career Essentials in Data Analysis (Microsoft & LinkedIn) — Data Analytics Virtual Internship — Business Applications of Data Science, AI & ML — Google Data Analytics Professional Certificate — SQL(Advanced)',
  
  setPersonal: (field, value) =>
    set((state) => ({
      personal: { ...state.personal, [field]: value }
    })),
  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        { id: Date.now().toString(), company: '', location: '', role: '', startDate: '', endDate: '', description: '' }
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
  setSkills: (skills) => set({ skills }),
  setCertifications: (certifications) => set({ certifications })
}))
