import { Link } from 'react-router-dom';
import Container from '../ui/Container.jsx';
import Logo from './Logo.jsx';
import RevealText from '../ui/RevealText.jsx';
import { footerNav } from '../../data/navigation.js';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <Container className="py-20 md:py-28">
        {/* Oversized closing statement */}
        <div className="mb-20 max-w-4xl">
          <h2 className="font-serif text-display font-light leading-[1.05]">
            <RevealText text="Capital, stewarded for generations." />
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-16">
          <div className="col-span-2 md:col-span-1">
            <Logo light />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              An institutional asset manager entrusted with the long-term capital of the
              world's most discerning institutions.
            </p>
          </div>

          {footerNav.map((group) => (
            <div key={group.heading}>
              <h3 className="eyebrow mb-5 text-ivory/40">{group.heading}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="link-underline text-sm text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-ivory/10 pt-8 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
          <p>© {year} Nexus Capital Partners LLP. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link to="/legal" className="hover:text-ivory/70">Legal &amp; Regulatory</Link>
            <Link to="/privacy" className="hover:text-ivory/70">Privacy</Link>
            <Link to="/modern-slavery" className="hover:text-ivory/70">Modern Slavery Statement</Link>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-[11px] leading-relaxed text-ivory/30">
          This website is for institutional and professional investors only and does not
          constitute an offer or solicitation. Capital at risk. The value of investments
          and the income from them may fall as well as rise. Past performance is not a
          reliable indicator of future results.
        </p>

        <p className="mt-12 text-center text-xs text-ivory/40">
          All Rights Reserved.Made with💖© 2026 nexuscapital.in
        </p>
      </Container>
    </footer>
  );
}
