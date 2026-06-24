import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo.jsx';
import Container from '../ui/Container.jsx';
import Magnetic from '../ui/Magnetic.jsx';
import { navLinks } from '../../data/navigation.js';
import { cn } from '../../lib/utils.js';
import { EASE_EXPO } from '../../lib/motion.js';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Route to a page, closing the mobile menu first.
  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  // Interior pages open on a dark hero (PageHero / bg-ink); Home's hero is light.
  // At the very top — before the light panel appears — the navbar must use light
  // contents there, or dark-on-dark renders it invisible.
  const onDarkHero = location.pathname !== '/';
  const atTopDark = !scrolled && onDarkHero;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-expo',
          scrolled
            ? 'border-b border-ink/5 bg-ivory/80 py-4 backdrop-blur-xl'
            : 'border-b border-transparent py-6'
        )}
      >
        <Container className="flex items-center justify-between">
          <button onClick={() => go('/')} aria-label="Nexus Capital — home">
            <Logo light={atTopDark} />
          </button>

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => go(link.path)}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={cn(
                  'link-underline text-sm font-medium tracking-wide transition-colors duration-300',
                  atTopDark ? 'hover:text-ivory' : 'hover:text-ink',
                  location.pathname === link.path
                    ? atTopDark ? 'text-ivory' : 'text-ink'
                    : atTopDark ? 'text-ivory/70' : 'text-ink/70'
                )}
              >
                {link.label}
              </button>
            ))}
            <Magnetic>
              <button
                onClick={() => go('/contact')}
                className={cn(
                  'rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-300',
                  atTopDark
                    ? 'bg-ivory text-ink hover:bg-ivory/90'
                    : 'bg-ink text-ivory hover:bg-ink-600'
                )}
              >
                Book A Consultation
              </button>
            </Magnetic>
          </nav>

          {/* Mobile trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={cn(
                'h-px w-6 transition-all duration-300 ease-expo',
                atTopDark && !menuOpen ? 'bg-ivory' : 'bg-ink',
                menuOpen && 'translate-y-[3.5px] rotate-45'
              )}
            />
            <span
              className={cn(
                'h-px w-6 transition-all duration-300 ease-expo',
                atTopDark && !menuOpen ? 'bg-ivory' : 'bg-ink',
                menuOpen && '-translate-y-[3.5px] -rotate-45'
              )}
            />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_EXPO }}
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-ivory px-6 py-24 lg:hidden"
          >
            <nav className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.6, ease: EASE_EXPO }}
                  onClick={() => go(link.path)}
                  className="block border-b border-ink/10 py-4 text-left font-serif text-3xl font-light text-ink"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE_EXPO }}
              className="mt-10"
            >
              <button
                onClick={() => go('/contact')}
                className="inline-flex rounded-full bg-ink px-8 py-4 text-sm font-medium text-ivory"
              >
                Book A Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
