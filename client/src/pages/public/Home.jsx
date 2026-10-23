import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Clock } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';

const features = [
  {
    icon: Star,
    title: 'Premium Comfort',
    description: 'Every room is designed for an unforgettable stay with attention to every detail.',
  },
  {
    icon: Shield,
    title: 'Secure Booking',
    description: 'Your reservation and payment data are protected with industry-grade security.',
  },
  {
    icon: Clock,
    title: 'Seamless Check-in',
    description: 'Arrive and settle in effortlessly with our streamlined check-in process.',
  },
];

const Home = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative overflow-hidden bg-forest">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(176,141,87,0.15),_transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-brass">
              Welcome to HotelPro
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-ivory sm:text-5xl lg:text-6xl">
              Where Elegance Meets Comfort
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ivory/70">
              Discover beautifully appointed rooms, world-class amenities, and
              personalised hospitality that makes every stay extraordinary.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="group inline-flex items-center gap-2 rounded-md bg-brass px-6 py-3 text-sm font-semibold text-charcoal transition-all hover:bg-brass-light hover:shadow-lg"
              >
                Browse Rooms
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/register"
                className="inline-flex items-center gap-2 rounded-md border border-ivory/20 px-6 py-3 text-sm font-semibold text-ivory transition-all hover:border-ivory/40 hover:bg-ivory/5"
              >
                Create Account
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Why Choose HotelPro
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-charcoal/60">
            Thoughtful hospitality, modern convenience, and a tranquil environment — everything a guest deserves.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
              className="group rounded-xl border border-stone bg-white p-8 transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-forest/5 text-forest transition-colors group-hover:bg-forest/10">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-charcoal">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
