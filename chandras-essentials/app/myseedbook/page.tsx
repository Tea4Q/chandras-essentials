import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "MySeedBook Catalogue – Seed Collection & Garden Planning | Chandra's Essentials",
  description:
    "MySeedBook Catalogue is the complete gardening companion. Catalog your seeds, track suppliers, get weather integration, and plan your entire growing season. Available on Google Play.",
};

const features = [
  {
    title: "Seed Collection Management",
    description:
      "Catalog unlimited seeds with variety, type, description, planting dates, harvest times, and photos. Never forget what you have or when to sow again.",
    icon: "🌱",
  },
  {
    title: "Supplier Tracking",
    description:
      "Maintain a full database of your seed suppliers — names, websites, and contacts. Link each seed to its source for easy reordering.",
    icon: "🏪",
  },
  {
    title: "Weather Integration",
    description:
      "Real-time conditions and 7-day forecasts for your location with gardening insights. Know the perfect moment to sow and harvest.",
    icon: "☀️",
    premium: true,
  },
  {
    title: "Advanced Calendar",
    description:
      "Plan your full growing season with planting reminders, harvest alerts, and crop rotation schedules. Never miss a key gardening window.",
    icon: "📅",
    premium: true,
  },
  {
    title: "Categories & Organization",
    description:
      "Organize by vegetables, fruits, herbs, flowers, and more. Search and filter your entire collection in seconds.",
    icon: "🗂️",
  },
  {
    title: "Privacy & Guest Mode",
    description:
      "No ads, ever. Use guest mode without signing up, create an account to sync, and export your data any time.",
    icon: "🔒",
  },
];

export default function MySeedBookPage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#12385C]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,183,126,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(95,168,168,0.14),transparent_30%)]" />
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/#products"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#12385C]/15 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#12385C]/60 shadow-sm transition hover:text-[#5FA8A8]"
              >
                ← Back to Products
              </Link>

              <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white shadow-md ring-2 ring-[#7FB77E]/20 overflow-hidden">
                <Image
                  src="/myseedbook-logo.png"
                  alt="MySeedBook logo"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#7FB77E]">Garden planning app</p>
              <h1 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">MySeedBook Catalogue</h1>
              <p className="mt-6 text-xl leading-9 text-[#12385C]/70">
                The complete gardening companion. Catalog your seeds, track suppliers,
                get real-time weather insights, and plan your entire growing season — all in one place.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/search?q=MySeedBook&c=apps&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#12385C] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#12385C]/15 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 1-1.18-1.8V2.04A2 2 0 0 1 3.18.28l11.9 11.74-11.9 11.74zm13.09-8.43-2.9-2.87 2.9-2.87 3.27 1.87a1.6 1.6 0 0 1 0 2.99l-3.27 1.88zM4.44 22.7l9.5-9.38-2.27-2.24L4.44 22.7zM4.44 1.3l7.23 11.62-2.27 2.24L4.44 1.3z"/></svg>
                  Get it on Google Play
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#12385C]/20 bg-white px-8 py-3.5 text-sm font-medium text-[#12385C]/50">
                  iOS — Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#12385C]/8 bg-white/60">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-[#12385C]/10 px-6 py-8 text-center">
            {[
              ["Built for", "Home & market gardeners"],
              ["Platform", "Android · iOS soon"],
              ["Status", "Live on Google Play"],
            ].map(([label, value]) => (
              <div key={label} className="px-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#12385C]/50">{label}</p>
                <p className="mt-1 font-serif text-lg text-[#12385C]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7FB77E]">Features</p>
            <h2 className="mt-2 font-serif text-4xl">Everything your garden needs, in one place.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-[#12385C]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#7FB77E]/15 text-3xl">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl">
                  {feature.title}
                  {"premium" in feature && feature.premium && (
                    <span className="ml-2 rounded-full bg-[#7FB77E]/15 px-2 py-0.5 text-xs font-normal text-[#7FB77E]">Premium</span>
                  )}
                </h3>
                <p className="mt-3 leading-7 text-[#12385C]/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Visual mockup placeholder */}
        <section className="bg-white/60 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-[2rem] border border-[#12385C]/10 bg-[#E6D8B5] shadow-xl shadow-[#12385C]/8">
              <div className="flex items-center gap-2 border-b border-[#12385C]/10 bg-white/50 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-[#C65D3A]/70" />
                <div className="h-3 w-3 rounded-full bg-[#D97A3A]/70" />
                <div className="h-3 w-3 rounded-full bg-[#7FB77E]/70" />
                <span className="ml-4 text-xs text-[#12385C]/40 uppercase tracking-widest">MySeedBook · Dashboard</span>
              </div>
              <div className="grid gap-4 p-8 md:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm md:col-span-2">
                  <p className="text-xs uppercase tracking-widest text-[#12385C]/40">My Seeds</p>
                  <p className="mt-1 font-serif text-2xl">48 varieties</p>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Tomatoes", "Beans", "Squash", "Herbs", "Flowers", "Roots"].map((cat) => (
                      <div key={cat} className="rounded-xl bg-[#7FB77E]/12 px-3 py-2 text-xs font-medium text-[#12385C]/70">
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-[#12385C]/40">Next to Plant</p>
                    <p className="mt-1 font-serif text-lg">Arugula</p>
                    <p className="text-xs text-[#7FB77E]">Window opens in 12 days</p>
                  </div>
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-widest text-[#12385C]/40">Beds Planned</p>
                    <p className="mt-1 font-serif text-lg">6 of 8</p>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#12385C]/10">
                      <div className="h-full w-3/4 rounded-full bg-[#7FB77E]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Early access CTA */}
        <section id="early-access" className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#12385C] px-8 py-14 text-white shadow-2xl shadow-[#12385C]/20 md:px-12">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Download Now</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Your garden, catalogued.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              MySeedBook Catalogue is live on Google Play. Download free and upgrade to Premium for weather integration, the advanced calendar, and unlimited seeds. iOS is in review — coming soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/search?q=MySeedBook&c=apps&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12385C] transition hover:opacity-90"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 1-1.18-1.8V2.04A2 2 0 0 1 3.18.28l11.9 11.74-11.9 11.74zm13.09-8.43-2.9-2.87 2.9-2.87 3.27 1.87a1.6 1.6 0 0 1 0 2.99l-3.27 1.88zM4.44 22.7l9.5-9.38-2.27-2.24L4.44 22.7zM4.44 1.3l7.23 11.62-2.27 2.24L4.44 1.3z"/></svg>
                Get it on Google Play
              </a>
              <Link
                href="/#products"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
