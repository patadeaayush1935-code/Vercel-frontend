import Link from "next/link";

export default function Footer() {
  const links = {
    "For Workers": ["Browse Jobs", "Create Profile", "Skills Test", "Salary Guide"],
    "For Employers": ["Post a Job", "Search Talent", "Pricing", "Enterprise"],
    "Company": ["About Us", "Blog", "Careers", "Press"],
    "Support": ["Help Center", "Contact", "Terms", "Privacy"],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-navy rounded-sm flex items-center justify-center">
                <span className="text-saffron font-bold text-xs font-display">R</span>
              </div>
              <span className="font-display text-base text-navy font-semibold">
                RozGaar<span className="text-saffron">Setu</span>
              </span>
            </Link>
            <p className="font-body text-xs text-slate leading-relaxed">
              Bridging skilled workers with trusted employers across India.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {["𝕏", "in", "f"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-7 h-7 border border-gray-200 rounded-sm flex items-center justify-center text-xs text-slate hover:border-navy hover:text-navy transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="font-body font-semibold text-navy text-xs tracking-wider uppercase mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-body text-xs text-slate hover:text-navy transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-100">
          <p className="font-body text-xs text-slate/60">
            © 2025 RozGaarSetu. Made with care in India 🇮🇳
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="font-body text-xs text-slate/60">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
