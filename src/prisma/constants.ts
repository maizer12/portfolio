export const projectsArr = [
  {
    title: 'DevFlow',
    desc: 'A forum for programmers where you can ask questions on a wide range of topics, engage in discussions, and share your knowledge and expertise.',
    type: 'web-application',
    categories: [1],
    icons: [
      { icon: 'cibNextJs', fill: 'fill-slate-200' },
      { icon: 'cibTypescript', fill: 'fill-blue-400' },
    ],
    technologyIds: [2, 4, 5],
  },
  {
    title: 'Inventory',
    desc: 'A comprehensive CRM system for an electronics store, designed to efficiently manage orders, products, and customer interactions.',
    type: 'web-application',
    categories: [1, 2],
    icons: [
      { icon: 'cibReact', fill: 'fill-blue-500' },
      { icon: 'cibNodeJs', fill: 'fill-green-500' },
      { icon: 'cibMongodb', fill: 'fill-lime-600' },
    ],
    technologyIds: [1, 5, 9],
  },
  {
    title: 'Weather Wise',
    desc: 'A weather forecast app with automatic location detection, charts, autocomplete features, and various additional functionalities.',
    type: 'web-application',
    categories: [1],
    icons: [{ icon: 'cibVueJs', fill: 'fill-green-500' }],
    technologyIds: [4],
  },
  {
    title: 'Next Pizza',
    desc: 'An online platform for ordering pizzas with a customizable menu, fast delivery, and various payment options.',
    type: 'web-application',
    categories: [1, 2],
    icons: [{ icon: 'cibVueJs', fill: 'fill-green-500' }],
    technologyIds: [4],
  },
  {
    title: 'Game Arcade',
    desc: 'A web-based arcade gaming platform offering a wide range of games and leaderboards to compete with friends.',
    type: 'web-application',
    categories: [4],
    icons: [{ icon: 'cibVueJs', fill: 'fill-green-500' }],
    technologyIds: [4],
  },
  {
    title: 'Simple Portfolio',
    desc: 'A personal portfolio website to showcase projects, skills, and contact information.',
    type: 'web-application',
    categories: [1],
    icons: [{ icon: 'cibReact', fill: 'fill-blue-500' }],
    technologyIds: [2],
  },
  {
    title: 'Social Network',
    desc: 'A social networking platform for connecting with friends, sharing updates, and joining communities.',
    type: 'web-application',
    categories: [4],
    icons: [{ icon: 'cibVueJs', fill: 'fill-green-500' }],
    technologyIds: [4],
  },
  {
    title: 'E-commerce Platform',
    desc: 'An advanced e-commerce platform with features such as product listings, shopping cart, checkout, and user reviews.',
    type: 'web-application',
    categories: [1, 3],
    icons: [
      { icon: 'cibNextJs', fill: 'fill-black' },
      { icon: 'cibStripe', fill: 'fill-blue-500' },
    ],
    technologyIds: [3],
  },
  {
    title: 'Fitness Tracker',
    desc: 'A mobile-friendly web app to track workouts, monitor progress, and set fitness goals.',
    type: 'web-application',
    categories: [2],
    icons: [
      { icon: 'cibReact', fill: 'fill-blue-500' },
      { icon: 'cibNodeJs', fill: 'fill-green-500' },
    ],
    technologyIds: [2, 6],
  },
  {
    title: 'Blog Platform',
    desc: 'A blogging platform where users can create, edit, and share posts, with features for comments and social sharing.',
    type: 'web-application',
    categories: [1],
    icons: [
      { icon: 'cibReact', fill: 'fill-blue-500' },
      { icon: 'cibTailwindCss', fill: 'fill-blue-500' },
    ],
    technologyIds: [2],
  },
];

export const projectCategories = ['Web Application', 'Fullstack', 'Landing Page', 'Desktop Application', 'Games'];

export const technologiesConstants = [
  { value: 'react', label: 'React', icon: 'cibReact', fill: 'fill-blue-600' },
  { value: 'next', label: 'Next', icon: 'cibNextJs', fill: 'fill-white' },
  { value: 'vue', label: 'Vue', icon: 'cibVueJs', fill: 'fill-green-500' },
  { value: 'ts', label: 'TS', icon: 'cibTypescript', fill: 'fill-blue-400' },
  { value: 'node', label: 'Node', icon: 'cibNodeJs', fill: 'fill-green-600' },
  { value: 'websocket', label: 'Websocket', icon: 'cibSocketIo', fill: 'fill-gray-400' },
  { value: 'electron', label: 'Electron', icon: 'cibElectron', fill: 'fill-blue-700' },
  { value: 'jquery', label: 'Jquery', icon: 'cibJquery', fill: 'fill-blue-500' },
  { label: 'Mongodb', icon: 'cibMongodb', fill: 'fill-lime-600' },
];

export const projectDetails = [
  {
    project: {
      connect: {
        id: 1,
      },
    },
    gitLink: 'https://github.com/maizer12/next-pizza',
    link: 'https://next-pizza.vercel.app/',
    imageUrl: [
      'https://onzxuggvoclteqxynecc.supabase.co/storage/v1/object/sign/projects/DevFlow/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0cy9EZXZGbG93LzEucG5nIiwiaWF0IjoxNzI1NzM4OTAzLCJleHAiOjE3NTcyNzQ5MDN9.6_1CirFnYeuSdTusjJMAaXrzRVaZ8DXe8V2nwH5pMbs&t=2024-09-07T19%3A55%3A03.722Z',
    ],
    desc: JSON.stringify([
      {
        title: 'Order Management',
        description: 'Users can retrieve, create, and delete orders, providing a seamless workflow for order handling.',
      },
      {
        title: 'Product Management',
        description:
          'Users can retrieve, create, and delete products. Each product created is linked to a specific order, ensuring a clear connection between products and their respective orders.',
      },
      {
        title: 'Search Optimization',
        description:
          'A debounce mechanism is implemented on the search function to reduce server load by limiting the number of queries sent.',
      },
      {
        title: 'React Lazy Loading',
        description:
          'All pages are wrapped with React Lazy for additional optimization, enabling faster application load times by loading components as they are needed.',
      },
      {
        title: 'Lazy Loading of Orders Table',
        description: 'The orders table is lazily loaded to improve performance and speed up the user interface.',
      },
      {
        title: 'Form Validation',
        description: 'All forms are validated to ensure the integrity of the data entered.',
      },
      {
        title: 'Product Page Filtering',
        description: 'Filtering options are available on the products page, simplifying the search for specific items.',
      },
      {
        title: 'Current Date Display',
        description: 'The interface includes the display of the current date.',
      },
      {
        title: 'Real-Time Active User Count',
        description:
          'The number of active users is displayed in real-time, fostering an interactive and dynamic user experience.',
      },
      {
        title: 'Multi-Language Support',
        description: 'The application supports two languages, Ukrainian and English, to cater to a diverse user base.',
      },
      {
        title: 'Loaders for Each Loading Process',
        description:
          'Loaders are implemented for every loading operation to enhance the user experience by providing visual feedback.',
      },
      {
        title: 'File Upload Capability',
        description:
          'Users have the ability to upload files, adding to the functionality and flexibility of the application.',
      },
    ]),
  },
];
