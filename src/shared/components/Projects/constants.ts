import { cibMongodb, cibNextJs, cibNodeJs, cibReact, cibTypescript, cibVueJs } from '@coreui/icons';

export const projectsArr = [
  {
    id: 1,
    title: 'DevFlow:',
    desc: 'A forum for programmers where you can ask questions on a wide range of topics, engage in discussions, and share your knowledge and expertise.',
    technologies: ['react', 'ts'],
    type: 'web-application',
    icons: [
      { icon: cibNextJs, fill: 'fill-slate-200' },
      { icon: cibTypescript, fill: 'fill-blue-400' },
      { icon: cibMongodb, fill: 'fill-lime-600' },
    ],
  },
  {
    id: 2,
    title: 'Inventory',
    desc: 'A comprehensive CRM system for an electronics store, designed to efficiently manage orders, products, and customer interactions.',
    type: 'web-application',
    icons: [
      { icon: cibReact, fill: 'fill-blue-500' },
      { icon: cibNodeJs, fill: 'fill-green-500' },
      { icon: cibMongodb, fill: 'fill-lime-600' },
    ],
  },
  {
    id: 3,
    title: 'Weather Wise',
    desc: 'A weather forecast app with automatic location detection, charts, autocomplete features, and various additional functionalities.',
    type: 'web-application',
    icons: [{ icon: cibVueJs, fill: 'fill-green-500' }],
  },
];
