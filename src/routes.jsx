import App from './App.jsx';
import { insights } from './data/insights.js';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        lazy: async () => {
          const { default: Component } = await import('./pages/Home.jsx');
          return { Component };
        },
      },
      {
        path: 'firm',
        lazy: async () => {
          const { default: Component } = await import('./pages/About.jsx');
          return { Component };
        },
      },
      {
        path: 'strategies',
        lazy: async () => {
          const { default: Component } = await import('./pages/Strategies.jsx');
          return { Component };
        },
      },
      {
        path: 'insights',
        lazy: async () => {
          const { default: Component } = await import('./pages/Insights.jsx');
          return { Component };
        },
      },
      {
        path: 'insights/:id',
        getStaticPaths: () => insights.map(({ id }) => `insights/${id}`),
        lazy: async () => {
          const { default: Component } = await import('./pages/InsightPost.jsx');
          return { Component };
        },
      },
      {
        path: 'expertise',
        lazy: async () => {
          const { default: Component } = await import('./pages/Expertise.jsx');
          return { Component };
        },
      },
      {
        path: 'contact',
        lazy: async () => {
          const { default: Component } = await import('./pages/Contact.jsx');
          return { Component };
        },
      },
      {
        path: 'legal',
        lazy: async () => {
          const { default: Legal } = await import('./pages/Legal.jsx');
          return { Component: () => <Legal slug="legal" /> };
        },
      },
      {
        path: 'privacy',
        lazy: async () => {
          const { default: Legal } = await import('./pages/Legal.jsx');
          return { Component: () => <Legal slug="privacy" /> };
        },
      },
      {
        path: 'modern-slavery',
        lazy: async () => {
          const { default: Legal } = await import('./pages/Legal.jsx');
          return { Component: () => <Legal slug="modern-slavery" /> };
        },
      },
      {
        path: '*',
        lazy: async () => {
          const { default: Component } = await import('./pages/NotFound.jsx');
          return { Component };
        },
      },
    ],
  },
];

export default routes;
