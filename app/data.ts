type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
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
  },
  {
    name: 'WeatherAPI',
    description:
      'Weather application that displays local weather conditions and 5 day forecast',
    link: 'https://www.weather.com',
    video:
      '',
    id: 'project2',
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

// export const BLOG_POSTS: BlogPost[] = [
//   {
//     title: 'Exploring the Intersection of Design, AI, and Design Engineering',
//     description: 'How AI is changing the way we design',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-1',
//   },
//   {
//     title: 'Why I left my job to start my own company',
//     description:
//       'A deep dive into my decision to leave my job and start my own company',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-2',
//   },
//   {
//     title: 'What I learned from my first year of freelancing',
//     description:
//       'A look back at my first year of freelancing and what I learned',
//     link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
//     uid: 'blog-3',
//   },
// ]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/robelgeb',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/robelgeb',
  },
  {
    label: 'Resume',
    link: '',
  },
]

export const TECH_STACK: TechStack[] = [
  {
    label: 'React',
    logo: '',
    color: '',
  },
  {
    label: 'Next.JS',
    logo: '',
    color: '',
  },
  {
    label: 'JavaScript',
    logo: '',
    color: '',
  },
  {
    label: 'Node.JS',
    logo: '',
    color: '',
  },
  {
    label: 'HTML',
    logo: '',
    color: '',
  },
  {
    label: 'CSS',
    logo: '',
    color: '',
  },
  {
    label: 'Git',
    logo: '',
    color: '',
  },
  {
    label: 'PostgreSQL',
    logo: '',
    color: '',
  },
]

export const EMAIL = 'robelgebrem@gmail.com'
