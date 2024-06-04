import { IconType } from "react-icons"
import { BsFillLightningFill, BsLaptop, BsStack } from "react-icons/bs"


interface Specialty {
  Icon: IconType,
  title: string,
  description: string
}
export const specialties: Specialty[] = [
  {
    Icon: BsFillLightningFill,
    title: 'Blazing Fast',
    description: 'Optimization, performance and great UX/UI is high priority for me',
  },
  {
    Icon: BsLaptop,
    title: 'Responsive Design',
    description: 'Development with responsive design in mind, one code for all devices',
  },
  {
    Icon: BsStack,
    title: 'Full Stack',
    description: 'From backend to frontend, Easy and optimized app ready for deployment',
  },
]


type Integer1to10 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
interface Skill {
  title: string,
  score: Integer1to10,
}
export const skills: Skill[] = [
  {
    title: 'JavaScript',
    score: 9.5
  },
  {
    title: 'React',
    score: 9
  },
  {
    title: 'Svelte',
    score: 7
  },
  // {
  //   title: 'Angular',
  //   score: 5
  // },
  // {
  //   title: 'Vue',
  //   score: 6
  // },
  // {
  //   title: 'HTML & CSS/SASS',
  //   score: 7
  // },
  // {
  //   title: 'Docker',
  //   score: 5
  // },
  {
    title: 'MongoDB',
    score: 7
  },
  {
    title: 'Git',
    score: 9
  },
]
