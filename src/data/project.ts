export interface Project {
  id: string;
  name: string;
  title: string;
  desc: string;
  url: string;
  publishedAt: string;
  category: string;
  labels: string[];
}

export const projects: Project[] = [
  {
    id: 'agenda',
    name: 'Agenda',
    title: 'Task manager inspired by Monday',
    desc: 'agenda is an platform where anyone can create and manage the tools they need to run every aspect of their work. With agenda every project become more easy to manage and follow the progress of the project members, open your account and try now!. Inspired by Monday',
    url: 'https://agenda.agami-network.com',
    publishedAt: 'Sep 2022',
    category: 'Tool',
    labels: ['Organize', 'Productivity tool', 'Management']
  },
  {
    id: 'ergogami',
    name: 'Ergogami',
    title: 'Custom fully wireless split keyboard',
    desc: '"Regular" keyboard layout is the same since the original mechanical type writer. I tried to make a keyboard with minimal fingers movement and improved ergonomics without compromise keys behavior. the layout is fully programmable with easy to use config, PCB design with future proof in mind - hot-swappable switches, easy to swap rechargable battery. you want to get one? click "View Project"!',
    url: 'https://github.com/or-agami/Ergogami',
    publishedAt: 'Jule 2022',
    category: 'Hardware',
    labels: ['Electronics', 'Keyboard']
  },
  {
    id: 'meme-generator',
    name: 'Meme Generator',
    title: 'Single page web-app to make awesome memes',
    desc: 'Awesome looking single web app with meme templates and fully customizable pics with saving, download and share options, build with vanilla js and responsive design ',
    url: 'https://or-agami.github.io/meme-generator-ca/',
    publishedAt: 'Aug 2022',
    category: 'Game',
    labels: ['Game']
  },
  {
    id: 'minesweeper',
    name: 'Minesweeper',
    title: 'Minesweeper game with extra features',
    desc: 'Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.',
    url: 'https://or-agami.github.io/Minesweeper-CA/',
    publishedAt: 'Jule 2022',
    category: 'Game',
    labels: ['Matrixes', 'Game']
  },
  {
    id: 'touch-nums',
    name: 'Touch Nums',
    title: 'Try your best to press the nums by order',
    desc: 'You have to touch numbers quickly. The best score is the least time to touch all numbers in order.',
    url: 'https://or-agami.github.io/touch-nums-ca/',
    publishedAt: 'Jule 2022',
    category: 'Game',
    labels: ['Matrixes', 'Game']
  },
]
