export default function Home() {
  const services = [
    {
      title: "BIM Coordination",
      description:
        "Multidisciplinary coordination support focused on reducing clashes, improving constructability, and keeping teams aligned before issues reach the field.",
    },
    {
      title: "Model Management",
      description:
        "Clean, organized, data-rich model oversight for project teams that need dependable model structure, issue tracking, and reliable deliverables.",
    },
    {
      title: "Clash Detection & Resolution",
      description:
        "Proactive clash detection workflows using coordination reviews, issue reporting, and team follow-through to reduce rework and protect schedules.",
    },
    {
      title: "BIM Execution Planning",
      description:
        "Project setup support for BIM goals, team workflows, coordination expectations, and model standards from kickoff through delivery.",
    },
  ];

  const differentiators = [
    "Field-minded coordination approach",
    "Clear communication with design and construction teams",
    "Focus on constructability, accountability, and usable data",
    "Built for GCs, subcontractors, developers, and project teams",
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      text: "Review project scope, coordination needs, model status, and team expectations.",
    },
    {
      step: "02",
      title: "Align",
      text: "Set coordination standards, communication flow, and project-specific BIM priorities.",
    },
    {
      step: "03",
      title: "Coordinate",
      text: "Run model reviews, track issues, and drive resolution with the team.",
    },
    {
      step: "04",
      title: "Deliver",
      text: "Support cleaner models, better decisions, and a smoother path to construction.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.22em] text-white">IRONCLAD</div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">BIM Solutions</div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-black/30 transition hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.16),transparent_28%)]" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
              BIM / VDC Consulting
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
              Strong coordination.
              <br />
              Clear workflows.
              <br />
              Better project delivery.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Ironclad BIM Solutions helps project teams manage models, coordinate trades,
              reduce clashes, and build with greater confidence. We bring a disciplined,
              practical BIM approach designed to support real construction outcomes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-center text-base font-semibold text-slate-950 shadow-xl shadow-black/30 transition hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-center text-base font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                ["Coordination", "Trade and team alignment"],
                ["Constructability", "Problems found earlier"],
                ["Accountability", "Clear issue tracking"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Project Snapshot</div>
                    <div className="mt-2 text-xl font-semibold text-white">Coordination Support</div>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    Active Workflow
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    ["Model Review", "Structured model oversight and issue visibility"],
                    ["Clash Tracking", "Clear reporting and follow-through across teams"],
                    ["BIM Standards", "Consistent setup and coordination expectations"],
                    ["Project Delivery", "Support for better decisions before field impact"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-sm font-semibold text-white">{title}</div>
                      <div className="mt-1 text-sm leading-6 text-slate-300">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Services</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            BIM support built for real project pressure.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            Whether you need full coordination support or targeted BIM help on a critical project,
            Ironclad provides practical workflows that help teams stay organized, proactive, and build-ready.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1"
            >
              <div className="text-xl font-semibold text-white">{service.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.28em] text-slate-400">About Ironclad</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A disciplined BIM partner for teams that need clarity and execution.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-300">
              Ironclad BIM Solutions was built to help project teams reduce confusion, improve coordination,
              and strengthen model-based decision-making. Our approach is rooted in accountability,
              communication, and practical construction support—not BIM for show, but BIM that helps work get done.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm leading-7 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Process</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A straightforward path from project kickoff to coordination confidence.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((item) => (
            <div key={item.step} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="text-sm font-semibold tracking-[0.25em] text-slate-400">{item.step}</div>
              <div className="mt-4 text-2xl font-semibold text-white">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Contact</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Let’s talk about your next project.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Need BIM coordination, model management, or project-specific support? Reach out to discuss your project,
                timeline, and coordination goals.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Email</div>
                  <a href="mailto:kris@ironcladbimsolutions.com" className="mt-2 block text-base text-white hover:underline">
                    kris@ironcladbimsolutions.com
                  </a>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Website</div>
                  <div className="mt-2 text-base text-white">ironcladbimsolutions.com</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-slate-500">Availability</div>
                  <div className="mt-2 text-base text-white">Open to project-based and ongoing BIM support</div>
                </div>
              </div>
              <a
                href="mailto:kris@ironcladbimsolutions.com?subject=Project%20Inquiry%20-%20Ironclad%20BIM%20Solutions"
                className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-white px-6 py-3 text-base font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Email Ironclad BIM Solutions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}