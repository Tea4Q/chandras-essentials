import Header from "../components/Header";

export const metadata = {
  title: "Privacy Policy | Chandra's Essentials",
  description:
    "Privacy policy for Chandra's Essentials and its apps, including MySeedBook and Velvet Ladle.",
};

const sections = [
  {
    heading: "Information We Collect",
    body: `We collect only what is necessary to provide our services. For this website, we collect no personal information beyond what is voluntarily submitted through our contact form (name and email address). Our apps — MySeedBook and Velvet Ladle — collect app usage data and, where applicable, account credentials you create within the app. We do not sell or rent your personal information to third parties.`,
  },
  {
    heading: "How We Use Your Information",
    body: `Information you provide through our contact form is used solely to respond to your inquiry. App data is used to deliver and improve app functionality. We do not use your information for advertising profiles or share it with data brokers.`,
  },
  {
    heading: "Third-Party Services",
    body: `Our apps are distributed through Google Play and Apple Store may integrate with third-party analytics or crash-reporting tools (such as Posthog) to help us identify and fix bugs. These services have their own privacy policies. This website may use standard hosting analytics (such as Vercel Analytics) that collect anonymized page-view data. No advertising networks or tracking pixels are used on this site.`,
  },
  {
    heading: "Data Retention",
    body: `Contact form submissions are retained only as long as needed to address your request. In-app data you create (such as seed catalogs or recipe collections) is stored on your device or, where cloud sync is offered, in a secured database. You can delete your in-app data at any time through the app settings.`,
  },
  {
    heading: "Your Rights",
    body: `You have the right to access, correct, or delete any personal information we hold about you. To make a request, contact us at the address below. If you are located in the European Economic Area or California, additional rights may apply under GDPR or the CCPA.`,
  },
  {
    heading: "Children's Privacy",
    body: `Our services are not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can delete it.`,
  },
  {
    heading: "Changes to This Policy",
    body: `We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    heading: "Contact",
    body: `Questions or requests about this privacy policy can be sent to: hello@chandrasessentials.com`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F7F3E8] text-[#12385C]">
      <Header />

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <p className="mb-4 inline-flex rounded-full border border-[#12385C]/15 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.28em] text-[#12385C]/70 shadow-sm">
          Legal
        </p>
        <h1 className="font-serif text-4xl leading-tight md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[#12385C]/60">Effective date: April 15, 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl">{section.heading}</h2>
              <p className="mt-3 leading-7 text-[#12385C]/80">{section.body}</p>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
