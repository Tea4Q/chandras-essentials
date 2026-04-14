"use client";

export default function ChandrasEssentialsHomepage() {
  const products = [
    {
      name: "MySeedBook",
      description:
        "A garden planning and seed inventory app that helps growers organize, track, and grow with confidence.",
      tag: "Garden planning",
    },
    {
      name: "Velvet Ladle",
      description:
        "A recipe and kitchen companion built to make collecting, saving, and using recipes feel effortless.",
      tag: "Kitchen workflow",
    },
    {
      name: "Future Apps",
      description:
        "Thoughtful digital tools that blend systems thinking, calm design, and practical everyday value.",
      tag: "SaaS studio",
    },
  ];

  const services = [
    "Product strategy for new app ideas",
    "SaaS planning and launch structure",
    "Workflow design and systems thinking",
    "Project management for digital builds",
  ];

  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#12385C]">
      <header className="sticky top-0 z-30 border-b border-[#12385C]/10 bg-[#F7F3E8]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#12385C]/15 bg-white shadow-sm">
              <div className="relative h-6 w-6">
                <div className="absolute left-0 top-1 h-4 w-3 rounded-t-full rounded-b-sm border-2 border-[#12385C] border-b-[1.5px] bg-[#7FB77E]/70" />
                <div className="absolute right-0 top-1 h-4 w-3 rounded-t-full rounded-b-sm border-2 border-[#12385C] border-b-[1.5px] bg-[#5FA8A8]/70" />
                <div className="absolute left-1/2 top-0 h-6 w-[2px] -translate-x-1/2 rounded-full bg-[#12385C]" />
              </div>
            </div>
            <div>
              <p className="font-serif text-xl tracking-wide">Chandra&apos;s Essentials</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[#12385C]/60">SaaS studio & consulting</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#products" className="transition hover:text-[#5FA8A8]">Products</a>
            <a href="#services" className="transition hover:text-[#5FA8A8]">Services</a>
            <a href="#about" className="transition hover:text-[#5FA8A8]">About</a>
            <a
              href="#contact"
              className="rounded-full bg-[#12385C] px-4 py-2 text-white transition hover:opacity-90"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,168,168,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(127,183,126,0.16),transparent_28%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:grid-cols-2 md:py-24">
            <div className="relative z-10">
              <p className="mb-4 inline-flex rounded-full border border-[#12385C]/15 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#12385C]/70 shadow-sm">
                Build systems that grow
              </p>
              <h1 className="max-w-2xl font-serif text-5xl leading-tight md:text-6xl lg:text-7xl">
                Thoughtful apps and steady strategy for growing ideas.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#12385C]/75">
                Chandra&apos;s Essentials brings together SaaS product development, structured project management, and calm,
                intentional brand building.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="rounded-full bg-[#12385C] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#12385C]/15 transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  Explore Products
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-[#12385C]/20 bg-white px-6 py-3 text-sm font-medium text-[#12385C] shadow-sm transition hover:border-[#5FA8A8] hover:text-[#5FA8A8]"
                >
                  View Services
                </a>
              </div>

              <div className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center">
                {[
                  ["Apps", "Consumer-focused tools"],
                  ["Strategy", "Product + delivery support"],
                  ["Brand", "Calm and cohesive systems"],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-2xl border border-[#12385C]/10 bg-white/80 p-4 shadow-sm">
                    <p className="font-serif text-2xl">{title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#12385C]/60">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-[#12385C]/10 bg-white/70 p-4 shadow-2xl shadow-[#12385C]/10 backdrop-blur">
                <div className="rounded-[1.5rem] bg-[#E6D8B5] p-6">
                  <div className="rounded-[1.5rem] border-2 border-[#12385C]/20 bg-[#E6D8B5] p-6 shadow-inner">
                    <div className="mb-5 text-center">
                      <p className="font-serif text-3xl text-[#12385C]">Chandra&apos;s Essentials</p>
                    </div>

                    <div className="mx-auto max-w-md rounded-[1.75rem] border-[3px] border-[#12385C] bg-[#E6D8B5] p-4">
                      <div className="mx-auto mb-3 h-4 w-40 rounded-t-md border-[3px] border-[#12385C] bg-[#7FB77E]/50" />
                      <div className="mx-auto mb-5 grid h-16 w-56 grid-cols-6 overflow-hidden rounded-t-2xl border-[3px] border-[#12385C] bg-white">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <div
                            key={i}
                            className={i % 2 === 0 ? "bg-[#12385C]" : "bg-[#5FA8A8]/70"}
                          />
                        ))}
                      </div>

                      <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-4">
                        <div className="rounded-2xl border-[3px] border-[#12385C] bg-[#5FA8A8]/20 p-4">
                          <div className="relative flex h-40 items-end justify-center rounded-xl bg-[#12385C]/90 p-3">
                            <div className="absolute right-3 top-3 h-6 w-6 rotate-12 border-t-2 border-r-2 border-white/70" />
                            <div className="absolute bottom-4 left-4 h-14 w-8 rounded-t-full rounded-b-md border-2 border-[#7FB77E] bg-[#7FB77E]/35" />
                            <div className="absolute bottom-8 left-14 h-20 w-4 rotate-[-20deg] rounded-full bg-[#F7F3E8]" />
                            <div className="absolute bottom-8 left-20 h-20 w-4 rotate-[20deg] rounded-full bg-[#F7F3E8]" />
                            <div className="absolute bottom-3 left-10 h-8 w-12 rounded-t-full border-2 border-[#C47F4C] bg-[#C47F4C]/80" />
                          </div>
                        </div>

                        <div className="grid h-44 w-24 place-items-center rounded-t-3xl border-[3px] border-[#12385C] bg-[#12385C] text-white">
                          <div className="grid gap-2 text-center text-xs">
                            <div className="mx-auto h-9 w-1 rounded-full bg-white/70" />
                            <div className="flex gap-2">
                              <div className="h-2 w-2 rounded-full bg-white/70" />
                              <div className="h-2 w-2 rounded-full bg-white/70" />
                            </div>
                          </div>
                        </div>

                        <div className="rounded-2xl border-[3px] border-[#12385C] bg-[#7FB77E]/20 p-4">
                          <div className="relative flex h-40 items-end justify-center rounded-xl bg-[#12385C]/90 p-3">
                            <div className="absolute right-3 top-3 h-6 w-6 rotate-12 border-t-2 border-r-2 border-white/70" />
                            <div className="absolute bottom-6 left-5 h-16 w-10 rounded-t-full rounded-b-sm bg-[#D97A3A]" />
                            <div className="absolute bottom-20 left-8 h-8 w-5 rounded-full bg-[#7FB77E]" />
                            <div className="absolute bottom-5 left-20 h-10 w-10 rounded-full border-2 border-white/80" />
                            <div className="absolute bottom-5 left-[4.9rem] h-2 w-10 rounded-full bg-white/80" />
                            <div className="absolute bottom-4 left-11 flex gap-1">
                              <div className="h-5 w-5 rounded-full bg-[#C65D3A]" />
                              <div className="h-5 w-5 rounded-full bg-[#D97A3A]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between px-2 text-sm uppercase tracking-[0.28em] text-[#12385C]/80">
                        <span>ESTD</span>
                        <span>1993</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#5FA8A8]">Products</p>
              <h2 className="mt-2 font-serif text-4xl">An ecosystem designed to grow with you.</h2>
            </div>
            <p className="max-w-xl text-[#12385C]/70">
              Consumer-friendly apps, thoughtful workflows, and a brand system that connects each product back to a bigger vision.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group rounded-[2rem] border border-[#12385C]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#12385C]/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6D8B5] text-[#12385C] shadow-inner">
                  <div className="relative h-7 w-7">
                    <div className="absolute left-1/2 top-0 h-7 w-[2px] -translate-x-1/2 bg-[#12385C]" />
                    <div className="absolute left-0 top-1 h-5 w-3 rounded-t-full rounded-b-sm bg-[#7FB77E]" />
                    <div className="absolute right-0 top-1 h-5 w-3 rounded-t-full rounded-b-sm bg-[#5FA8A8]" />
                  </div>
                </div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#12385C]/50">{product.tag}</p>
                <h3 className="mt-3 font-serif text-2xl">{product.name}</h3>
                <p className="mt-3 leading-7 text-[#12385C]/70">{product.description}</p>
                <a href="#contact" className="mt-6 inline-block text-sm font-medium text-[#5FA8A8] transition group-hover:translate-x-1">
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="bg-white/70 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#5FA8A8]">Services</p>
              <h2 className="mt-2 font-serif text-4xl">From app idea to organized launch.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-[#12385C]/72">
                Chandra&apos;s Essentials also supports founders and growing businesses with structured planning, digital delivery,
                and calm operational thinking.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#12385C]/10 bg-[#F7F3E8] p-8 shadow-sm">
              <div className="grid gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#7FB77E]" />
                    <p className="leading-7 text-[#12385C]/80">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="rounded-[2rem] border border-[#12385C]/10 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.25em] text-[#5FA8A8]">About</p>
              <h2 className="mt-2 font-serif text-4xl">A studio rooted in clarity, care, and growth.</h2>
              <p className="mt-5 leading-8 text-[#12385C]/72">
                Built by Chandra Skinner, this brand brings together product thinking, project management discipline, and a love of tools
                that make everyday work feel more grounded.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Intentional design", "Clean interfaces and cohesive product storytelling."],
                ["Structured execution", "Project-driven systems that support real delivery."],
                ["Growth mindset", "Technology, planning, and brand identity working together."],
                ["Long-term vision", "A business ecosystem built to expand thoughtfully."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-[1.75rem] border border-[#12385C]/10 bg-white p-6 shadow-sm">
                  <h3 className="font-serif text-2xl">{title}</h3>
                  <p className="mt-3 leading-7 text-[#12385C]/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#12385C] px-8 py-14 text-white shadow-2xl shadow-[#12385C]/20 md:px-12">
            <p className="text-sm uppercase tracking-[0.28em] text-white/65">Contact</p>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">Ready to build something thoughtful?</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
              Reach out to discuss consulting, collaborations, or the next phase of your digital product vision.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hello@chandraskinner.com"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-[#12385C] transition hover:opacity-90"
              >
                Email Chandra
              </a>
              <a
                href="https://www.chandraskinner.com"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Visit Website
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
