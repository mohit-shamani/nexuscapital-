import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import ScrollProgress from '../ui/ScrollProgress.jsx';

/** Persistent chrome wrapping every routed page. */
export default function Layout({ children }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
