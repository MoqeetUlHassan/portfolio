import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: '🚀',
    title: 'Built from Scratch',
    desc: 'Conceived, architected, and shipped entirely by the founder — no templates, no shortcuts.',
  },
  {
    icon: '⚙️',
    title: 'Full-Stack Architecture',
    desc: 'End-to-end ownership: backend APIs, frontend UI, database design, and DevOps pipeline.',
  },
  {
    icon: '📈',
    title: 'Live in Production',
    desc: 'A real product with real users — not a side project, but a running business.',
  },
  {
    icon: '🔒',
    title: 'Secure by Design',
    desc: 'Security-first approach baked into every layer of the stack from day one.',
  },
];

const AmrokGate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <a
            href="https://www.amrokgate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition-colors">
            Visit amrokgate.com ↗
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 0%, #6366f1 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <img
              src="/assets/amrokgatelogo.svg"
              alt="AmrokGate"
              className="w-14 h-14 rounded-2xl"
            />
            <h1 className="text-6xl sm:text-7xl font-black tracking-tight">AmrokGate</h1>
          </div>

          <p className="text-xl sm:text-2xl text-neutral-400 leading-relaxed mb-4 max-w-2xl mx-auto">
            A platform founded, built, and shipped by me — from zero to live product.
          </p>

          <p className="text-base text-neutral-500 mb-10 max-w-xl mx-auto">
            Started in 2024, AmrokGate is my own venture where I own the full stack: product vision,
            architecture, engineering, and growth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.amrokgate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all hover:scale-105 text-center">
              Go to amrokgate.com ↗
            </a>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3 rounded-xl border border-white/20 text-neutral-300 hover:text-white hover:border-white/50 transition-all text-center">
              See My Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About the Product</h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            AmrokGate is a platform I conceived and built from the ground up. Every line of code, every product
            decision, and every architecture choice was made by me. It started as an idea and is now a live,
            functioning product accessible at{' '}
            <a
              href="https://www.amrokgate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 hover:text-indigo-400 transition-colors">
              amrokgate.com
            </a>
            .
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed mt-4">
            As Founder & Owner, I wear every hat — product manager, engineer, designer, and operator. This
            project represents my most complete demonstration of end-to-end ownership.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What makes it different</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                <span className="text-3xl">{f.icon}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-4">Ready to explore?</h2>
          <p className="text-neutral-400 mb-8">
            Visit the live product at amrokgate.com or head back to see more of my work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.amrokgate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-black font-semibold hover:bg-neutral-200 transition-all hover:scale-105 text-center">
              Visit amrokgate.com ↗
            </a>
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3 rounded-xl border border-white/20 text-neutral-300 hover:text-white hover:border-white/50 transition-all text-center">
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="text-neutral-600 text-sm">
          Built by{' '}
          <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
            Moqeet
          </Link>{' '}
          · View full portfolio at{' '}
          <Link to="/" className="text-neutral-400 hover:text-white transition-colors">
            moqeet.dev
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default AmrokGate;
