import { Language } from '@components';
import { ProjectItemType } from './types';
import { ProjectName } from '@assets';

export const ProjectsData: ProjectItemType[] = [
  {
    title: 'Hourcoding.com',
    icon: ProjectName.Hourcoding,
    description:
      'Developed a website for coding tutorials and programming articles. Currently this website have more than 300 language, framework and library tutorials.',
    githubLink: 'https://www.github.com/onemanfighter/hourcoding-main',
    image: [
      'hourcoding/hourcoding_main1.png',
      'hourcoding/hourcoding_main2.png',
      'hourcoding/hourcoding_main3.png',
    ],
    link: 'https://hourcoding.com',
    tags: [
      Language.react,
      Language.tanstack,
      Language.zustand,
      Language.mysql,
      Language.i18n,
      Language.python,
      Language.typescript,
      Language.chakra,
    ],
    keyPoints: [
      'This website is designed for coding tutorials and programming articles.',
      'It is built with React, Next.js, TypeScript, Chakra UI, and Tailwind CSS.',
      'Currently working on adding more content and improving the design.',
      'Hourcoding.com supports various features like coding tutorials, cheatsheets.',
    ],
    demoVideo: 'hourcoding/hourcoding_main.webm',
  },
  {
    title: 'Mac OS App',
    icon: ProjectName.MacOs,
    description:
      'Developed a web app of the Mac OS desktop using React and Tailwind CSS. This project is inspired by the Mac OS desktop.',
    githubLink: 'https://www.github.com/onemanfighter/mac-os-app',
    image: ['mac/AR_Mac1.png', 'mac/AR_Mac2.png', 'mac/AR_Mac3.png'],
    link: 'https://mac.amitraikwar.in',
    tags: [Language.react, Language.typescript, Language.chakra],
    keyPoints: [
      'This project is inspired by the Mac OS desktop.',
      'It is built with React and Chakra ui.',
      'Currently working on adding more features and improving the design.',
      'Mac OS App supports various features like opening and closing of windows, changing the wallpaper, and more.',
    ],
    demoVideo: 'mac/AR_Mac.webm',
  },
];
