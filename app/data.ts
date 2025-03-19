type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
  tech: string[]
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
  color: string
}

type TechStack = {
  label: string
  logo: string
  color: string
}

export const PROJECTS: Project[] = [
  {
    name: 'ONG Sensei',
    description:
      'Online calculator for oil and gas engineers to streamline workflows',
    link: 'https://ong-sensei.vercel.app/',
    video:
      'https://res.cloudinary.com/dyzev9uto/video/upload/v1742078122/u3m5pr3ba8kerhqn4258.mp4',
    id: 'project1',
    tech: ['React', 'Next.JS', 'TailwindCSS', 'AWS', 'Figma'],
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Accenture Consulting',
    title: 'AWS Technology Analyst',
    start: 'April 2024',
    end: 'Present',
    link: 'https://accenture.com',
    id: 'work1',
  },
  {
    company: 'Salesforce',
    title: 'Software Engineer Intern',
    start: 'June 2022',
    end: 'September 2022',
    link: 'https://www.salesforce.com/',
    id: 'work2',
  },
  {
    company: 'Tableau',
    title: 'Software Engineer Intern',
    start: 'June 2021',
    end: 'September 2021',
    link: 'https://www.tableau.com/',
    id: 'work3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/robelgeb',
    color: 'dark:hover:bg-green-800 hover:text-green-800',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/robelgeb',
    color: 'dark:hover:bg-blue-500 hover:text-blue-500',
  },
  {
    label: 'Resume',
    link: 'robel-geb-resume-mar25.pdf',
    color: 'dark:hover:bg-amber-900 hover:text-amber-900',
  },
]

export const TECH_STACK: TechStack[] = [
  {
    label: 'React',
    logo: '/react.svg',
    color: 'dark:bg-sky-600 hover:text-sky-600',
  },
  {
    label: 'Next.JS',
    logo: '/next-js.svg',
    color: 'dark:bg-zinc-600 hover:text-zinc-600',
  },
  {
    label: 'JavaScript',
    logo: '/jslogo.svg',
    color: 'dark:bg-yellow-600 text-yellow-600',
  },
  {
    label: 'Node.JS',
    logo: '/nodejs.svg',
    color: 'dark:bg-lime-900 hover:text-lime-900',
  },
  {
    label: 'HTML',
    logo: '/html-5.svg',
    color: 'dark:bg-orange-800 hover:text-orange-800',
  },
  {
    label: 'CSS',
    logo: './/css-3.svg',
    color: 'dark:bg-blue-900 hover:text-blue-900',
  },
  
  {
    label: 'TailwindCSS',
    logo: '/tailwindcss.svg',
    color: 'dark:bg-sky-700 hover:text-sky-700',
  },
  { 
    label: 'AWS',
    logo: '/aws.svg',
    color: 'dark:bg-orange-700 hover:text-orange-700',
  },
  {
    label: 'Git',
    logo: '/git-scm-icon.svg',
    color: 'dark:bg-red-800',
  },
  {
    label: 'PostgreSQL',
    logo: '/postgresql.svg',
    color: 'dark:bg-sky-800 hover:text-sky-800',
  },
  {
    label: 'Figma',
    logo: '/figma.svg',
    color: 'dark:bg-purple-700 hover:text-purple-700',
  },

]



export const EMAIL = 'robelgebrem@gmail.com'
