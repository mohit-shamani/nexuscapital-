import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import Seo from '../components/utils/Seo.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import InsightsPreview from '../components/sections/InsightsPreview.jsx';
import { fadeUp } from '../lib/motion.js';
import { cn } from '../lib/utils.js';

const inputBase =
  'w-full border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-slatey/60 transition-colors duration-300 focus:border-brass focus:outline-none';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch('/contact.php', {
        method: 'POST',
        body: data,
      });
      const result = await res.json();
      if (result.success) {
        setSent(true);
      } else {
        setError(result.message || 'Something went wrong. Please email us directly.');
      }
    } catch {
      setError('Unable to send right now. Please email info@nexuscapital.in directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <PageWrapper>
      <Seo
        title="Contact — Book a Portfolio Review"
        path="/contact"
        description="Begin a confidential conversation with NexusCapital. Contact our institutional team to discuss your mandate and book a portfolio review. Email info@nexuscapital.in."
      />
      <PageHero
        eyebrow="Contact"
        title="Begin a confidential conversation."
        intro="We partner with a select number of institutions. Tell us a little about your mandate and our institutional team will respond personally."
      />

      <section className="bg-ivory py-24 md:py-32">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex h-full flex-col justify-center"
              >
                <span className="font-serif text-4xl font-light text-ink">Thank you.</span>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-slatey">
                  Your enquiry has been received. A member of our institutional team will be
                  in touch within two business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Honeypot — hidden from people, catches bots */}
                <input
                  type="text"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">First name</label>
                  <input required name="first_name" className={inputBase} placeholder="Jane" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Last name</label>
                  <input required name="last_name" className={inputBase} placeholder="Whitfield" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Institution</label>
                  <input required name="institution" className={inputBase} placeholder="Endowment, pension, sovereign fund…" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Work email</label>
                  <input required type="email" name="email" className={inputBase} placeholder="jane@institution.org" />
                </div>
                <div className="sm:col-span-2">
                  <label className="eyebrow mb-3 block text-ink/50">How can we help?</label>
                  <textarea
                    name="message"
                    rows={4}
                    className={cn(inputBase, 'resize-none')}
                    placeholder="A few words on your mandate and objectives…"
                  />
                </div>
                <div className="sm:col-span-2 pt-4">
                  <Button variant="primary" type="submit" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Submit enquiry'}
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  {error && (
                    <p className="mt-5 text-sm leading-relaxed text-red-700">{error}</p>
                  )}
                  <p className="mt-5 text-xs leading-relaxed text-slatey">
                    For institutional and professional investors only. Your information is
                    handled in confidence and never shared.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="eyebrow mb-8">General enquiries</p>
              <a
                href="mailto:info@nexuscapital.in"
                className="link-underline block font-serif text-2xl font-light text-ink"
              >
                info@nexuscapital.in
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-slatey">
                Every enquiry is reviewed personally by our institutional team. We aim to
                respond within two business days.
              </p>
            </motion.div>

            <div className="mt-12 border-t border-ink/10 pt-8">
              <p className="eyebrow mb-3 text-ink/50">Hours</p>
              <p className="text-sm leading-relaxed text-slatey">
                Monday – Friday, 9:00 – 18:00 IST
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Recent insights */}
      <div className="border-t border-ink/10">
        <InsightsPreview />
      </div>
    </PageWrapper>
  );
}
