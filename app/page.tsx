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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.22em] text-white">
              IRONCLAD
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
              BIM Solutions
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white px-4 py-2 text-sm font-medium text-slate-950 transition hover:-translate-y-1"
          >
            Book a Call
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(148,163,184,0.22),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-32">
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
              BIM / VDC Consulting
            </div>

            <h1 className="text-5xl font-semibold leading-tight md:text-6xl lg:text-7xl">
              Precision coordination.
              <br />
              Clear execution.
              <br />
              <span className="text-slate-300">Built for real construction.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-slate-300">
              Ironclad BIM Solutions helps project teams manage models, coordinate trades,
              reduce clashes, and improve project delivery.
            </p>

            <div className="mt-10 flex gap-4">
              <a href="#contact" className="rounded-2xl bg-white px-6 py-3 text-black">
                Schedule a Consultation
              </a>
              <a href="#services" className="rounded-2xl border px-6 py-3">
                Explore Services
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative z-10 flex items-center">
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">

              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                <div className="flex justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-sm text-slate-400">Project Snapshot</div>
                    <div className="text-xl font-semibold">Coordination Support</div>
                  </div>
                  <div className="text-xs border px-3 py-1 rounded-full">Active</div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    "Model Review",
                    "Clash Tracking",
                    "BIM Standards",
                    "Project Delivery",
                  ].map((item) => (
                    <div key={item} className="p-4 border rounded-xl">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* LOGO */}
              <div className="mt-6 flex justify-end">
                <img
                  src="/logo.png"
                  alt="Ironclad Logo"
                  className="h-14 opacity-80"
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold">Services</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="p-6 border rounded-xl">
              <h3>{s.title}</h3>
              <p className="text-sm text-slate-300">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="px-6 pb-24">
        <h2 className="text-3xl">Contact</h2>
        <p className="mt-4">kris@ironcladbimsolutions.com</p>
      </section>
    </div>
  );
}