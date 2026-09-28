const products = [
  {
    title: "Health Insurance",
    description: "Medical protection for you and your family.",
    href: "https://tally.so/r/KYbbbD",
    icon: "✚",
    tone: "health",
  },
  {
    title: "Term Life Insurance",
    description: "Financial protection for the people you care about.",
    href: "https://tally.so/r/A7Z1GD",
    icon: "◆",
    tone: "life",
  },
  {
    title: "Motor Insurance",
    description: "New policy, renewal, comparison and support.",
    href: "https://tally.so/r/PdKVJb",
    icon: "▰",
    tone: "motor",
  },
];

export default function Home() {
  return (
    <main className="page">
      <header className="nav">
        <a href="/" className="brand" aria-label="CapitUp home">
          <img src="/capitup-logo.png" alt="CapitUp" className="logo" />
          <span className="brandText">
            <strong>CAPITUP</strong>
            <small>Insurance made simple.</small>
          </span>
        </a>
        <div className="trustPill">
          <span className="dot" />
          Secure enquiry
        </div>
      </header>

      <section className="hero">
        <div className="eyebrow">INSURANCE MADE SIMPLE</div>
        <h1>
          Protect what matters.
          <br />
          <span>Choose your cover.</span>
        </h1>
        <p>
          Tell us what you need and a CapitUp advisor will help you with the
          right next step.
        </p>
      </section>

      <section className="productGrid" aria-label="Insurance products">
        {products.map((product) => (
          <a
            className={`productCard ${product.tone}`}
            href={product.href}
            key={product.title}
          >
            <div className="productIcon">{product.icon}</div>
            <div className="productCopy">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
            <span className="arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </section>

      <section className="trustRow">
        <div>
          <span className="trustIcon">⌁</span>
          <div><strong>Quick enquiry</strong><small>Simple online form</small></div>
        </div>
        <div>
          <span className="trustIcon">◯</span>
          <div><strong>Expert guidance</strong><small>Advisor assistance</small></div>
        </div>
        <div>
          <span className="trustIcon">◇</span>
          <div><strong>Secure</strong><small>Your details are handled responsibly</small></div>
        </div>
      </section>

      <section className="help">
        <div>
          <strong>Not sure what you need?</strong>
          <span>Start with any option and our advisor can guide you.</span>
        </div>
        <a href="https://tally.so/r/KYbbbD">Start an enquiry →</a>
      </section>

      <footer>
        <p>
          By continuing, you agree to be contacted by CapitUp regarding your
          insurance enquiry. Your information will be used to respond to your request.
        </p>
        <span>© {new Date().getFullYear()} CapitUp</span>
      </footer>
    </main>
  );
}
