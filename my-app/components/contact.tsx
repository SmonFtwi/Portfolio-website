import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaEnvelope className="h-4 w-4" />,
    label: "Email",
    value: "smonftwi1@gmail.com",
    href: "mailto:smonftwi1@gmail.com",
  },
  {
    icon: <FaPhoneAlt className="h-4 w-4" />,
    label: "Phone",
    value: "+971 50 866 3790",
    href: "tel:+971508663790",
  },
  {
    icon: <FaMapMarkerAlt className="h-4 w-4" />,
    label: "Location",
    value: "Dubai, UAE",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 animate-fadeIn">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Let&apos;s connect.</h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            I&apos;m available for full-time opportunities, advisory roles, and research-driven collaborations.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="rounded-2xl border border-slate-200/70 p-4 dark:border-white/10">
                <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                  {detail.icon}
                  <span className="text-xs uppercase tracking-[0.3em]">{detail.label}</span>
                </div>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-2 block text-lg font-semibold text-slate-900 hover:text-purple-600 dark:text-white"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{detail.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/70 bg-slate-900 p-6 text-white dark:border-white/10">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">Availability</p>
            <p className="mt-1 text-xl font-semibold">Accepting new projects and interviews</p>
          </div>
          <div className="flex gap-4 text-sm font-semibold">
            <Link href="https://github.com/SmonFtwi" target="_blank" className="flex items-center gap-2 text-white">
              <FaGithub />
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/smon-ftwi-59b44720a/"
              target="_blank"
              className="flex items-center gap-2 text-white"
            >
              <FaLinkedin />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
