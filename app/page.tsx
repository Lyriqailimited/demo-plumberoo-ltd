const services = [
  "Plumbing",
  "Gas/Heating",
  "Drainage",
  "Electrical",
  "Air Conditioning",
]

const serviceIcons: Record<string, string> = {
  "Plumbing": "🔧",
  "Gas/Heating": "🔥",
  "Drainage": "🌊",
  "Electrical": "⚡",
  "Air Conditioning": "❄️",
}

const features = [
  {
    icon: "🕐",
    title: "24/7 Availability",
    description:
      "Our AI receptionist answers calls around the clock — nights, weekends, and bank holidays included.",
  },
  {
    icon: "📅",
    title: "Instant Booking",
    description:
      "Customers can describe their job and schedule a visit on the spot, with no hold music.",
  },
  {
    icon: "📞",
    title: "Never Miss a Call",
    description:
      "Every enquiry captured while your engineers are on the tools. Zero missed leads.",
  },
]

export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || "#book"

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, #0d56ab 0%, #1a6ed4 55%, #0a4490 100%)",
        }}
      >
        {/* Yellow accent stripe */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "#fee25f" }}
        />
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className="inline-block border text-sm font-medium px-4 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(254, 226, 95, 0.15)",
              borderColor: "rgba(254, 226, 95, 0.4)",
              color: "#fee25f",
            }}
          >
            🇦🇺 London SW11 &amp; Central London
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Plumberoo Ltd
          </h1>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed" style={{ color: "#c8ddf7" }}>
            Your local team of (mostly) Australian plumbers, heating engineers
            and drainage engineers serving South West and Central London.
          </p>
          <a
            href="#widget"
            className="inline-block font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
            style={{ background: "#fee25f", color: "#0d56ab" }}
          >
            Try AI Receptionist
          </a>
          <p className="mt-4 text-sm" style={{ color: "#93c5fd" }}>
            No download needed · Works in your browser
          </p>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Talk to Our AI Receptionist
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Available 24/7 to answer questions, take details and book a job.
          </p>
          <iframe
            src="/widget.html"
            title="AI Voice Receptionist"
            width="100%"
            height="600"
            style={{ border: "none", borderRadius: "12px" }}
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-12">
            From emergency call-outs to full installations — we do it all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-all"
                style={{ borderTopWidth: "3px", borderTopColor: "#0d56ab" }}
              >
                <div className="text-3xl mb-4">{serviceIcons[service] || "🔧"}</div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {service}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6" style={{ background: "#f0f6ff" }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why an AI Receptionist?
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Stop missing jobs. Our AI handles every inbound call instantly —
            even when the whole team is out on site.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "#0d56ab" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to never miss a call again?
          </h2>
          <p className="text-lg mb-10" style={{ color: "#93c5fd" }}>
            Book a 15-minute demo and see how the AI receptionist works for
            Plumberoo.
          </p>
          <a
            href={bookingLink}
            className="inline-block font-bold px-10 py-4 rounded-xl text-lg transition-colors shadow-lg"
            style={{ background: "#fee25f", color: "#0d56ab" }}
          >
            Book a Demo Call
          </a>
          <p className="mt-6 text-sm" style={{ color: "#93c5fd" }}>
            Or call us: +44 20 7315 4150
          </p>
        </div>
      </section>
    </main>
  )
}
