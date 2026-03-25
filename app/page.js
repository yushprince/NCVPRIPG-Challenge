const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'challenge', label: 'Challenge' },
  { id: 'task', label: 'Task' },
  { id: 'dates', label: 'Dates' },
  { id: 'rules', label: 'Rule' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'registration', label: 'Registration' },
];

export default function Home() {
  return (
    <main>
      <header className="hero" id="home">
        <div className="overlay" />
        <nav className="topNav">
          <div className="brand">AutoAnn-Indic</div>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <section className="heroContent container">
          <p className="badge">NCVPRIPG 2026 Challenge Track</p>
          <h1>AutoAnn-Indic</h1>
          <h2>
            Human-Effort Efficient Automated Annotation for Indic Manuscripts
            <span> and Ram Charit Manas</span>
          </h2>
          <p>
            A challenge dedicated to scalable annotation pipelines for Indic
            cultural heritage manuscripts under real-world degradations.
          </p>
          <div className="heroCtas">
            <a href="#registration" className="btn primary">
              Register Now
            </a>
            <a href="#challenge" className="btn ghost">
              Explore Challenge
            </a>
          </div>
        </section>
      </header>

      <section className="conferenceBand">
        <div className="container conferenceGrid">
          <div>
            <h3>Conference</h3>
            <p>
              NCVPRIPG 2026 — The 11th National Conference on Computer Vision,
              Pattern Recognition, Image Processing and Graphics
            </p>
          </div>
          <div>
            <h3>Date</h3>
            <p>22nd – 24th July, 2026</p>
          </div>
          <div>
            <h3>Venue</h3>
            <p>
              The LNM Institute Of Information Technology, Jaipur, in
              association with IUPRAI
            </p>
          </div>
        </div>
      </section>

      <section id="challenge" className="section container">
        <h2>Challenge</h2>
        <p>
          Indic manuscripts—on paper and palm-leaf—show extreme variation in
          script and calligraphic style, ink density, background texture, page
          geometry, and degradation such as bleed-through, stains, cracks,
          holes, fading, marginal notes, ornaments, and inconsistent ruling.
          Despite digitization at scale, Indic Document AI progress remains
          constrained by limited high-quality annotations.
        </p>
        <p>
          AutoAnn-Indic introduces a realistic benchmark for automated
          annotation generation over diverse Indic manuscripts, including a
          focused and culturally significant Ram Charit Manas subset. The
          challenge emphasizes practical usability of generated pre-annotations
          and reduced human effort in downstream correction workflows.
        </p>
      </section>

      <section id="task" className="section alt">
        <div className="container">
          <h2>Task</h2>
          <div className="cards">
            <article className="card">
              <h3>Input Data</h3>
              <ul>
                <li>Curated manuscript pages across writing styles.</li>
                <li>Ram Charit Manas pages with realistic degradations.</li>
                <li>Seed set of expert-annotated pages + larger unlabeled pool.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Expected Outputs</h3>
              <ul>
                <li>
                  Layout parsing: text regions, marginalia/notes,
                  illustrations/diagrams, page/frame, damage/holes.
                </li>
                <li>Text-line and baseline extraction.</li>
                <li>Submission format: PAGE-XML or COCO polygons.</li>
              </ul>
            </article>
            <article className="card">
              <h3>Evaluation Focus</h3>
              <ul>
                <li>Annotation quality on hidden evaluation subset.</li>
                <li>Correction effort measured in seconds/page.</li>
                <li>Ranking by quality and human-effort efficiency.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="dates" className="section container">
        <h2>Dates</h2>
        <p className="muted">Detailed timeline will be announced soon.</p>
        <div className="timeline">
          <div className="timelineItem">
            <span>Registration Opens</span>
            <strong>To be announced</strong>
          </div>
          <div className="timelineItem">
            <span>Submission Deadline</span>
            <strong>To be announced</strong>
          </div>
          <div className="timelineItem">
            <span>Result Notification</span>
            <strong>To be announced</strong>
          </div>
          <div className="timelineItem">
            <span>Demo / Presentation</span>
            <strong>To be announced</strong>
          </div>
        </div>
      </section>

      <section id="rules" className="section alt">
        <div className="container">
          <h2>Rule</h2>
          <p>
            Challenge rules, participation policy, and submission compliance
            details will be shared here.
          </p>
          <ul className="placeholderList">
            <li>Eligibility and team composition</li>
            <li>Allowed external data and model constraints</li>
            <li>Submission limits and leaderboard policy</li>
            <li>Reproducibility and code release requirements</li>
          </ul>
        </div>
      </section>

      <section id="team" className="section container">
        <h2>Team</h2>
        <p>
          Organizing committee details will be added here. You can include
          names, affiliations, and role-wise responsibilities.
        </p>
        <div className="logoSlot">[Logo / Partner Banners Placeholder]</div>
      </section>

      <section id="contact" className="section alt">
        <div className="container">
          <h2>Contact Us</h2>
          <p>
            Contact email(s) and communication details will be updated here.
          </p>
          <p className="contactPlaceholder">example@domain.edu</p>
        </div>
      </section>

      <section id="registration" className="section container">
        <h2>Registration</h2>
        <p>
          Registration link will be added here once available. Replace the
          button URL with your challenge form link.
        </p>
        <a className="btn primary" href="#" aria-disabled="true">
          Registration Form (Coming Soon)
        </a>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © 2026 AutoAnn-Indic Challenge • NCVPRIPG 2026 • LNMIIT Jaipur
          </p>
        </div>
      </footer>
    </main>
  );
}
