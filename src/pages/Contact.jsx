import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper.jsx';
import PageHero from '../components/sections/PageHero.jsx';
import Container from '../components/ui/Container.jsx';
import Button from '../components/ui/Button.jsx';
import { fadeUp } from '../lib/motion.js';
import { cn } from '../lib/utils.js';

const offices = [
  { city: 'London', detail: '1 Finsbury Avenue, London EC2M 2PF', tag: 'Headquarters' },
  { city: 'New York', detail: '200 Park Avenue, New York, NY 10166', tag: 'Americas' },
  { city: 'Singapore', detail: 'Marina Bay Financial Centre, 018983', tag: 'Asia-Pacific' },
  { city: 'Abu Dhabi', detail: 'Al Maryah Island, Abu Dhabi Global Market', tag: 'Middle East' },
];

const inputBase =
  'w-full border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-slatey/60 transition-colors duration-300 focus:border-brass focus:outline-none';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageWrapper>
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
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">First name</label>
                  <input required className={inputBase} placeholder="Jane" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Last name</label>
                  <input required className={inputBase} placeholder="Whitfield" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Institution</label>
                  <input required className={inputBase} placeholder="Endowment, pension, sovereign fund…" />
                </div>
                <div>
                  <label className="eyebrow mb-3 block text-ink/50">Work email</label>
                  <input required type="email" className={inputBase} placeholder="jane@institution.org" />
                </div>
                <div className="sm:col-span-2">
                  <label className="eyebrow mb-3 block text-ink/50">How can we help?</label>
                  <textarea
                    rows={4}
                    className={cn(inputBase, 'resize-none')}
                    placeholder="A few words on your mandate and objectives…"
                  />
                </div>
                <div className="sm:col-span-2 pt-4">
                  <Button variant="primary" type="submit">
                    Submit enquiry
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Button>
                  <p className="mt-5 text-xs leading-relaxed text-slatey">
                    For institutional and professional investors only. Your information is
                    handled in confidence and never shared.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Offices */}
          <div className="lg:col-span-5 lg:border-l lg:border-ink/10 lg:pl-16">
            <p className="eyebrow mb-8">Our offices</p>
            <div className="space-y-8">
              {offices.map((office, i) => (
                <motion.div
                  key={office.city}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="border-t border-ink/10 pt-5"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-serif text-2xl font-light text-ink">{office.city}</h3>
                    <span className="text-xs uppercase tracking-micro text-brass">{office.tag}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slatey">{office.detail}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 border-t border-ink/10 pt-8">
              <p className="eyebrow mb-3 text-ink/50">General enquiries</p>
              <a href="mailto:institutional@nexuscapital.com" className="link-underline text-ink">
                institutional@nexuscapital.com
              </a>
            </div>
          </div>
        </Container>
      </section>
    </PageWrapper>
  );
}
