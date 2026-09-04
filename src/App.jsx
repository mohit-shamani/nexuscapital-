import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout.jsx';
import ScrollToTop from './components/utils/ScrollToTop.jsx';
import SmoothScroll from './components/utils/SmoothScroll.jsx';
import PageLoader from './components/ui/PageLoader.jsx';

export default function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Outlet key={location.pathname} />
          </AnimatePresence>
        </Suspense>
      </Layout>
    </SmoothScroll>
  );
}
