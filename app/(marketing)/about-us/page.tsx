import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '../../components/animations/reveal';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { aboutDefaults, valuesDefaults, teamDefaults } from '../../data/static-content';
import { CtaBanner } from '../../components/sections/cta-banner';



export default function AboutUsPage() {
  return (
    <>
      <section className="section-padding hero-gradient">
        <div className="mx-auto w-full max-w-6xl text-center">
          <Reveal>
            <h1 className="text-4xl font-bold text-primary sm:text-5xl lg:text-6xl">
              We build digital ecosystems that drive growth
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mx-auto mt-6 max-w-2xl">
              Visionary Hub partners with ambitious teams to architect, launch, and scale high-performing digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-8">
            {aboutDefaults && aboutDefaults?.map((section, index) => (
              <Reveal key={section.title} delay={index * 0.08}>
                <div>
                  <h2 className="text-2xl font-semibold text-primary">{section.title}</h2>
                  <p className="mt-3 text-base text-slate-600">{section.description}</p>
                  {section.items ? (
                    <ul className="mt-4 space-y-2 text-sm text-slate-500">
                      {section.items.map((item: string) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex-1">
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Team collaboration"
                  width={720}
                  height={540}
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="section-title text-center">Our core values</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mx-auto max-w-xl text-center">
              Principles that guide every decision, project, and partnership.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valuesDefaults.map((value, index) => (
              <Reveal key={value.id} delay={index * 0.08}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary">
                    {index + 1}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-primary">{value.name}</h3>
                  <p className="mt-3 text-sm text-slate-600">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="mx-auto w-full max-w-6xl">
          <Reveal>
            <h2 className="section-title text-center">Meet the team</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-subtitle mx-auto max-w-xl text-center">
              Strategists, designers, and growth marketers united by a passion for measurable impact.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {teamDefaults.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.08}>
                <div className="card-hover rounded-3xl border border-slate-200 bg-white p-6 text-center">
                  <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-primary">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                  <p className="mt-4 text-sm text-slate-600">{member.bio}</p>
                  <div className="mt-6 flex items-center justify-center gap-3">
                    {member.social.linkedin ? (
                      <Link
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                        aria-label="LinkedIn"
                      >
                        <FaLinkedinIn />
                      </Link>
                    ) : null}
                    {member.social.twitter ? (
                      <Link
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary"
                        aria-label="Twitter"
                      >
                        <FaTwitter />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
