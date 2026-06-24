import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';
import SmoothScroll from './components/utils/SmoothScroll.jsx';
import PageLoader from './components/ui/PageLoader.jsx';

// Route-level code splitting keeps the initial payload minimal.
const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Strategies = lazy(() => import('./pages/Strategies.jsx'));
const Insights = lazy(() => import('./pages/Insights.jsx'));
const Expertise = lazy(() => import('./pages/Expertise.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/firm" element={<About />} />
              <Route path="/strategies" element={<Strategies />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/expertise" element={<Expertise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </Layout>
    </SmoothScroll>
  );
}
