const forms = [
  {
    icon: "🏥",
    title: "Health Insurance",
    text: "Protect yourself and your family.",
    href: "https://tally.so/r/KYbbbD",
  },
  {
    icon: "🛡️",
    title: "Term Life Insurance",
    text: "Protect your family’s financial future.",
    href: "https://tally.so/r/A7Z1GD",
  },
  {
    icon: "🚗",
    title: "Motor Insurance",
    text: "New policy, renewal, comparison or assistance.",
    href: "https://tally.so/r/PdKVJb",
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      <section className="shell">
        <header className="topbar">
          <div className="brand">
            <div className="logo">C</div>
            <div>
              <div className="brandName">CAPITUP</div>
              <div className="brandTag">Insurance made simple.</div>
            </div>
          </div>
          <div className="secure">● Secure enquiry</div>
        </header>

        <section className="hero">
          <div className="eyebrow">YOUR INSURANCE, YOUR WAY</div>
          <h1>What type of insurance<br /><span>do you need?</span></h1>
          <p>Choose a service below and tell us what you need. A CapitUp advisor will help you with the next step.</p>
        </section>

        <section className="cards">
          {forms.map((item) => (
            <a className="card" href={item.href} key={item.title}>
              <div className="icon">{item.icon}</div>
              <div className="cardBody">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <div className="arrow">→</div>
            </a>
          ))}
        </section>

        <section className="trust">
          <div><strong>Simple</strong><span>Quick online enquiry</span></div>
          <div><strong>Human</strong><span>Advisor assistance</span></div>
          <div><strong>Secure</strong><span>Your details are handled responsibly</span></div>
        </section>

        <footer>
          By continuing, you agree to be contacted by CapitUp regarding your insurance enquiry.
          Your information will be used to respond to your request.
        </footer>
      </section>
    </main>
  );
}
