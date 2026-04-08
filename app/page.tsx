export default function Home() {
  const services = [
    {
      title: "BIM Coordination",
      description:
        "Multidisciplinary coordination support designed to reduce clashes, improve constructability, and keep project teams aligned before issues impact the field.",
    },
    {
      title: "Model Management",
      description:
        "Structured model management that keeps files organized, reliable, and aligned with project coordination and construction requirements.",
    },
    {
      title: "Clash Detection & Resolution",
      description:
        "Proactive clash detection workflows that identify conflicts early, track resolution, and help prevent costly field issues and delays.",
    },
    {
      title: "BIM Execution Planning",
      description:
        "Clear BIM execution strategies that define workflows, coordination expectations, and standards from project kickoff through delivery.",
    },
  ];

  const differentiators = [
    "Focused on real construction outcomes, not theoretical workflows",
    "Clear communication across design and construction teams",
    "Accountability in coordination and issue tracking",
    "Flexible support for GCs, developers, and subcontractors",
  ];

  const experience = [
    {
      title: "Commercial Projects",
      subtitle: "Large-scale coordination",
      description:
        "Experience supporting BIM coordination on complex commercial projects with a focus on constructability and team alignment.",
    },
    {
      title: "Residential Developments",
      subtitle: "Design to execution",
      description:
        "Model development and coordination support across residential projects, bridging design intent with field execution.",
    },
    {
      title: "MEP Coordination",
      subtitle: "Trade-focused solutions",
      description:
        "Focused coordination across MEP systems to identify and resolve conflicts before construction begins.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assess",
      text: "Understand project scope, model status, and coordination challenges.",
    },
    {
      step: "02",
      title: "Align",
      text: "Establish workflows, standards, and communication structure.",
    },
    {
      step: "03",
      title: "Coordinate",
      text: "Run coordination reviews, track issues, and drive resolution.",
    },
    {
      step: "04",
      title: "Deliver",
      text: "Support cleaner models and more efficient project execution.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-[0.22em]">IRONCLAD</div>
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">
              BIM Solutions
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>

          <a
            href="#contact"
            className="rounded-2xl bg-white px-4 py-2 text-sm text-slate-950 font-medium"
          >
            Book a Call
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          
          <div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Precision coordination.
              <br />
              Clear execution.
              <br />
              <span className="text-slate-400">Built for real construction.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              Ironclad BIM Solutions supports construction teams with BIM coordination, clash detection, and VDC consulting that drives real project results. We focus on identifying issues early, improving coordination across trades, and helping projects move forward without unnecessary delays or rework.
            </p>

            <p className="mt-4 text-sm text-slate-400">
              Supporting general contractors, developers, and subcontractors across New Jersey and New York.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-2xl bg-white px-6 py-3 text-black text-center">
                Schedule a Consultation
              </a>
              <a href="#services" className="rounded-2xl border px-6 py-3 text-center">
                Explore Services
              </a>
            </div>
          </div>

          {/* CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-slate-400">Project Snapshot</div>
            <div className="mt-2 text-xl font-semibold">Coordination Support</div>

            <div className="mt-6 space-y-3">
              {["Model Review", "Clash Tracking", "BIM Standards", "Project Delivery"].map((item) => (
                <div key={item} className="rounded-xl border p-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-semibold">Services</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-4 py-20 border-y border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-6 text-lg text-slate-300">
            Ironclad BIM Solutions was built to support construction teams that need clarity, accountability, and reliable coordination. We focus on practical BIM workflows that improve communication, reduce confusion, and support better decision-making throughout the project lifecycle.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d} className="border rounded-xl p-4 text-sm">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-semibold">Experience</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experience.map((e) => (
            <div key={e.title} className="border rounded-xl p-6">
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{e.subtitle}</p>
              <p className="mt-3 text-sm text-slate-300">{e.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl font-semibold">Process</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {process.map((p) => (
            <div key={p.step} className="border rounded-xl p-6">
              <div className="text-sm text-slate-400">{p.step}</div>
              <h3 className="mt-2 font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-5xl px-4 pb-20">
        <div className="border rounded-2xl p-6">
          <h2 className="text-2xl font-semibold">Contact</h2>

          <p className="mt-4 text-slate-300">
            Have a project that needs BIM coordination or support? Reach out to discuss your project scope, timeline, and coordination needs.
          </p>

          <div className="mt-6 flex justify-between items-end flex-wrap gap-6">
            <div>
              <div className="text-sm text-slate-400">Email</div>
              <div className="text-lg">kris@ironcladbimsolutions.com</div>
            </div>

            <img src="/logo.png" className="h-32" />
          </div>
        </div>
      </section>

    </div>
  );
}