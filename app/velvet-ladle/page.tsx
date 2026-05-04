import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

export const metadata = {
  title: "Velvet Ladle – Personal Recipe Collection App | Chandra's Essentials",
  description:
    "Velvet Ladle is a personal recipe collection and discovery app. Save recipes from any website, create your own, and build your cookbook — available now on Google Play.",
};

const features = [
  {
    title: "Recipe Collection",
    description:
      "Store all your recipes in one place — manually entered, imported from the web, or snapped from a cookbook page.",
    icon: "📝",
  },
  {
    title: "Smart Import",
    description:
      "Paste any recipe URL and Velvet Ladle pulls the ingredients and instructions automatically, no copy-paste marathon needed.",
    icon: "🔗",
  },
  {
    title: "Favorites & Recents",
    description:
      "Quick access to the recipes you reach for most. Your kitchen workflow, not an algorithm's idea of what you should cook.",
    icon: "⭐",
  },
  {
    title: "Nutrition Details",
    description:
      "See nutritional breakdowns per serving so you can make informed choices without leaving the app.",
    icon: "🥗",
  },
  {
    title: "Category Filters",
    description:
      "Organize by cuisine, meal type, or your own custom tags. Find the right recipe in seconds.",
    icon: "🗂️",
  },
  {
    title: "Notes & Edits",
    description:
      "Add your own notes to any recipe — substitutions, what worked, what didn't. Make every recipe yours.",
    icon: "✏️",
  },
];

const screenshots: { src: string; caption: string; label: string; description: string }[] = [
  {
    src: "/velvet-ladle/recipe_dashboard.png",
    label: "Dashboard",
    caption: "Your recipes at a glance",
    description: "See your saved recipes, favourites, and recent meals the moment you open the app.",
  },
  {
    src: "/velvet-ladle/recipe_url.png",
    label: "Recipe Url",
    caption: "Save from any website",
    description: "Paste any recipe URL and Velvet Ladle pulls in the full recipe automatically.",
  },
  {
    src: "/velvet-ladle/recipe_list.png",
    label: "Library",
    caption: "Browse your full collection",
    description: "All your recipes — family favourites, online finds, and originals — in one place.",
  },
  {
    src: "/velvet-ladle/recipeView.png",
    label: "Recipe View",
    caption: "Details and instructions",
    description: "Clean, easy-to-follow layout with every ingredient and step clearly presented.",
  },
  {
    src: "/velvet-ladle/AppleSubScreenshot.png",
    label: "IOS (coming soon)",
    caption: "Available on the App Store",
    description: "Download Velvet Ladle on mobile and iPad for a seamless cooking experience.",
  },
  {
    src: "/velvet-ladle/Screenshot_20260414_222925_Velvet Ladle.png",
    label: "Android",
    caption: "Your kitchen companion",
    description: "Live on Google Play — take your recipes anywhere you cook.",
  },
];

export default function VelvetLadlePage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#12385C]">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(196,127,76,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(95,168,168,0.12),transparent_30%)]" />
          <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/#products"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#12385C]/15 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#12385C]/60 shadow-sm transition hover:text-[#5FA8A8]"
              >
                ← Back to Products
              </Link>

              <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white shadow-md ring-2 ring-[#C47F4C]/20 overflow-hidden">
                <Image
                  src="/velvetladle-logo.png"
                  alt="Velvet Ladle logo"
                  width={144}
                  height={144}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#C47F4C]">Kitchen workflow app</p>
              <h1 className="font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">Velvet Ladle</h1>
              <p className="mt-6 text-xl leading-9 text-[#12385C]/70">
                Save recipes from any website, create your own, and build a personal cookbook
                that&apos;s actually yours — no subscriptions, no paywalls on your own food.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.qtea.VelvetLadle&hl=en_US"
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
              ["Platform", "Android · iOS soon"],
              ["Category", "Food & Drink"],
              ["Status", "Live on Google Play"],
            ].map(([label, value]) => (
              <div key={label} className="px-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#12385C]/50">{label}</p>
                <p className="mt-1 font-serif text-lg text-[#12385C]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="relative overflow-hidden bg-[#F7F1E8] py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,#8B1E3F22,transparent_35%),radial-gradient(circle_at_bottom_right,#12385C22,transparent_35%)]" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#8B1E3F]">Velvet Ladle</p>
              <h2 className="font-serif text-4xl leading-tight text-[#12385C] md:text-5xl">
                Your recipe box, beautifully organised.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#12385C]/70">
                Save recipes, search fast, and keep your kitchen inspiration in one elegant place.
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
                  <div className="relative h-[520px] overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FFF9F1] to-[#E6D8B5]">
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

        {/* Features */}
        <section id="features" className="bg-white/60 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-12 text-center">
              <p className="text-sm uppercase tracking-[0.25em] text-[#C47F4C]">Features</p>
              <h2 className="mt-2 font-serif text-4xl">Everything your kitchen workflow needs.</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[2rem] border border-[#12385C]/10 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C47F4C]/12 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="font-serif text-xl">{feature.title}</h3>
                  <p className="mt-3 leading-7 text-[#12385C]/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#12385C] px-8 py-14 text-white shadow-2xl shadow-[#12385C]/20 md:px-12">
            <p className="text-sm uppercase tracking-[0.28em] text-white/60">Get Velvet Ladle</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Your recipe life, organized.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              Download Velvet Ladle on Android and spend less time hunting for recipes and more time actually cooking. iOS is in review — coming very soon.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.qtea.VelvetLadle&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12385C] transition hover:opacity-90"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 1-1.18-1.8V2.04A2 2 0 0 1 3.18.28l11.9 11.74-11.9 11.74zm13.09-8.43-2.9-2.87 2.9-2.87 3.27 1.87a1.6 1.6 0 0 1 0 2.99l-3.27 1.88zM4.44 22.7l9.5-9.38-2.27-2.24L4.44 22.7zM4.44 1.3l7.23 11.62-2.27 2.24L4.44 1.3z"/></svg>
                Get it on Google Play
              </a>
              <a
                href="mailto:hello@chandraskinner.com?subject=Velvet Ladle Feedback"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Send Feedback
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
