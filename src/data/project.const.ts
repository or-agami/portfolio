export interface Project {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  url: string;
  publishedAt: string;
  thumbnail: { type: 'video' | 'image', name: string };
  snapshots: string[];
  category: string;
  tags: string[];
  stack?: Array<'HTML' | 'Vanilla JS' | 'React' | 'Svelte' | 'Angular' | 'Vue' | 'NodeJS' | 'ExpressJS' | 'MongoDB' | 'Local Storage'>;
  // languages?: Array<'JavaScript' | 'C++' | 'DeviceTree'>
}

export const projects: Project[] = [
  {
    id: 'agenda',
    title: 'agenda',
    subtitle: 'Task manager inspired by Monday',
    desc: 'agenda is an platform where anyone can create and manage the tools they need to run every aspect of their work. With agenda every project become more easy to manage and follow the progress of the project members, open your account and try now!. Inspired by Monday',
    url: 'https://agenda.agami-network.com',
    publishedAt: 'Sep 2022',
    thumbnail: { type: 'video', name: 'agenda-mobile' },
    snapshots: ['homepage', 'board', 'kanban', 'dashboard'],
    category: 'Tool',
    tags: ['Organize', 'Productivity', 'Management'],
    stack: ['React', 'NodeJS', 'ExpressJS', 'MongoDB'],
  },
  {
    id: 'meme-generator',
    title: 'Meme Generator',
    subtitle: 'Single page web-app to make awesome memes',
    desc: 'Awesome looking single web app with meme templates and fully customizable pics with saving, download and share options, build with vanilla js and responsive design ',
    url: 'https://or-agami.github.io/meme-generator-ca/',
    publishedAt: 'Aug 2022',
    thumbnail: { type: 'video', name: 'meme-generator-mobile' },
    snapshots: ['homepage', 'i18n', 'merge-conflicts', 'new-framework'],
    category: 'Game',
    tags: ['Game', 'Canvas', 'Meme'],
    stack: ['HTML', 'Vanilla JS', 'Local Storage'],
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    subtitle: 'Minesweeper game with extra features',
    desc: 'Minesweeper is single-player logic-based computer game played on rectangular board whose object is to locate a predetermined number of randomly-placed mines in the shortest possible time by clicking on safe squares while avoiding the squares with mines.',
    url: 'https://or-agami.github.io/Minesweeper-CA/',
    publishedAt: 'Jule 2022',
    thumbnail: { type: 'video', name: 'minesweeper-mobile' },
    snapshots: ['won', 'beginner', 'medium', 'expert'],
    category: 'Game',
    tags: ['Matrixes', 'Game'],
    stack: ['HTML', 'Vanilla JS'],
  },
  {
    id: 'ergogami',
    title: 'Ergogami',
    subtitle: 'Custom fully wireless split keyboard',
    desc: '"Regular" keyboard layout is the same since the original mechanical type writer. I tried to make a keyboard with minimal fingers movement and improved ergonomics without compromise keys behavior. the layout is fully programmable with easy to use config, PCB design with future proof in mind - hot-swappable switches, easy to swap rechargable battery. you want to get one? click "View Project"!',
    url: 'https://github.com/or-agami/Ergogami',
    publishedAt: 'Jule 2022',
    thumbnail: { type: 'image', name: 'both-versions' },
    snapshots: ['both-versions', 'assembled', 'pcb', 'pcb-both'],
    category: 'Hardware',
    tags: ['Electronics', 'Keyboard'],
  },
  {
    id: 'touch-nums',
    title: 'Touch Nums',
    subtitle: 'Try your best to press the nums by order',
    desc: 'You have to touch numbers quickly. The best score is the least time to touch all numbers in order.',
    url: 'https://or-agami.github.io/touch-nums-ca/',
    publishedAt: 'Jule 2022',
    thumbnail: { type: 'video', name: 'touch-nums-mobile' },
    snapshots: ['homepage', 'easy', 'medium', 'hard'],
    category: 'Game',
    tags: ['Matrixes', 'Game'],
    stack: ['HTML', 'Vanilla JS'],
  },
]
