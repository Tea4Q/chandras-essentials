import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import FeedbackForm from "./FeedbackForm";

export const metadata = {
  title: "MySeedBook Catalogue – Seed Collection & Garden Planning | Chandra's Essentials",
  description:
    "MySeedBook Catalogue is the complete gardening companion. Catalog your seeds, track suppliers, get weather integration, and plan your entire growing season. Available on Google Play and the App Store.",
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

const screenshots: { src: string; caption: string; label: string; description: string }[] = [
  {
    src: "/MySeedBook/Seed Inventory.png",
    label: "Seed Inventory",
    caption: "Your full collection at a glance",
    description: "Every seed you own, catalogued with variety, type, supplier, and planting details.",
  },
  {
    src: "/MySeedBook/Add Seed.png",
    label: "Add a Seed",
    caption: "Every detail, beautifully captured",
    description: "Log variety, description, planting dates, harvest windows, and photos in seconds.",
  },
  {
    src: "/MySeedBook/weather.png",
    label: "Weather",
    caption: "Real-time planting insights",
    description: "Live conditions and a 7-day forecast tailored to help you decide exactly when to sow.",
  },
  {
    src: "/MySeedBook/Events.png",
    label: "Calendar",
    caption: "Plan your full growing season",
    description: "Planting reminders, harvest alerts, and crop rotation schedules all in one view.",
  },
  {
    src: "/MySeedBook/supplierview2.png",
    label: "Suppliers",
    caption: "Track your seed sources",
    description: "Save supplier names, websites, and contacts — and link each seed back to its source.",
  },
  {
    src: "/MySeedBook/Multiple_Images.png",
    label: "Photos",
    caption: "Attach multiple images",
    description: "Document your seeds and garden progress with photos right inside each seed entry.",
  },
];

export default function MySeedBookPage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#12385C]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(127,183,126,0.22),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(95,168,168,0.14),transparent_30%)]" />
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
                  href="https://play.google.com/store/apps/details?id=com.myseedbook.catalogue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#12385C] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-[#12385C]/15 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 1-1.18-1.8V2.04A2 2 0 0 1 3.18.28l11.9 11.74-11.9 11.74zm13.09-8.43-2.9-2.87 2.9-2.87 3.27 1.87a1.6 1.6 0 0 1 0 2.99l-3.27 1.88zM4.44 22.7l9.5-9.38-2.27-2.24L4.44 22.7zM4.44 1.3l7.23 11.62-2.27 2.24L4.44 1.3z"/></svg>
                  Get it on Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/myseedbook/id6759670875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#12385C]/20 bg-white px-8 py-3.5 text-sm font-medium text-[#12385C] shadow-lg shadow-[#12385C]/10 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download on the App Store
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-[#12385C]/8 bg-white/60">
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-[#12385C]/10 px-6 py-8 text-center">
            {[
              ["Built for", "Home & market gardeners"],
              ["Platform", "Android · iOS"],
              ["Status", "Google Play & App Store"],
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

        {/* Screenshots */}
        <section className="relative overflow-hidden bg-[#F4F7F1] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7FB77E22,transparent_35%),radial-gradient(circle_at_bottom_right,#12385C22,transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#7FB77E]">MySeedBook Catalogue</p>
              <h2 className="font-serif text-4xl leading-tight text-[#12385C] md:text-5xl">
                Your garden, beautifully organised.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#12385C]/70">
                Catalogue seeds, track suppliers, plan your season, and never miss a planting window.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {screenshots.map((shot) => (
                <figure
                  key={shot.src}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-[#12385C]/10 transition duration-500 hover:-translate-y-2 hover:shadow-[#12385C]/20"
                >
                  <div className="absolute left-8 top-8 z-20 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#12385C] backdrop-blur-md">
                    {shot.label}
                  </div>
                  <div className="relative h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#F4F7F1] to-[#E6D8B5]">
                    <Image
                      src={shot.src}
                      alt={shot.caption}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12385C]/85 via-[#12385C]/10 to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 z-20 p-7">
                      <h3 className="text-2xl font-bold text-white">{shot.caption}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/80">{shot.description}</p>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section id="feedback" className="mx-auto max-w-3xl px-6 py-20">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7FB77E]">Feedback</p>
            <h2 className="mt-2 font-serif text-4xl">Help us grow better.</h2>
            <p className="mt-4 text-lg leading-8 text-[#12385C]/70">
              Found a bug, have a feature idea, or just want to share your experience? We&apos;d love to hear from you.
            </p>
          </div>
          <FeedbackForm />
        </section>

        {/* Early access CTA */}
        <section id="early-access" className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#12385C] px-8 py-14 text-white shadow-2xl shadow-[#12385C]/20 md:px-12">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Download Now</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Your garden, catalogued.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              MySeedBook Catalogue is live on Google Play and the App Store. Download free and upgrade to Premium for weather integration, the advanced calendar, and unlimited seeds.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.myseedbook.catalogue"
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
