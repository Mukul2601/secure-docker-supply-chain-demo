import './App.css'

const skills = [
  'React', 'Docker', 'Python', 'CI/CD',
  'Kubernetes', 'GitHub Actions', 'Node.js', 'Security',
]

const projects = [
  {
    title: 'Secure Docker Supply Chain',
    description:
      'Demonstrates secure container image practices, SBOM awareness, CVE tracking, and multi-stage Docker builds with minimal attack surface.',
    link: 'https://github.com/Mukul2601/secure-docker-supply-chain-demo',
  },
  {
    title: 'Portfolio Website',
    description:
      'A React + Vite portfolio served via Nginx in a hardened Alpine container, deployed through a GitHub Actions CI/CD pipeline.',
    link: 'https://github.com/Mukul2601',
  },
  {
    title: 'CI/CD Pipeline Automation',
    description:
      'End-to-end CI/CD automation using GitHub Actions with automated testing, linting, container builds, and Trivy vulnerability scanning.',
    link: 'https://github.com/Mukul2601',
  },
]

function App() {
  return (
    <div className="portfolio">
      {/* Hero */}
      <section className="hero">
        <h1>Mukul Mogha</h1>
        <h2>Full Stack Developer &amp; DevOps Engineer</h2>
        <p className="tagline">
          Building secure, scalable software — from code to container.
        </p>
      </section>

      {/* About */}
      <section className="section" id="about">
        <h3 className="section-title">About</h3>
        <p className="about-text">
          I am a software engineer passionate about secure software development,
          containerisation best practices, and DevOps culture. I specialise in
          building resilient full-stack applications backed by hardened Docker
          images, automated CI/CD pipelines, and proactive vulnerability
          management.
        </p>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <h3 className="section-title">Skills</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span className="skill-chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <h3 className="section-title">Projects</h3>
        <div className="projects-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <h3 className="section-title">Contact</h3>
        <div className="contact-links">
          <a href="mailto:moghaansh@gmail.com">moghaansh@gmail.com</a>
          <a
            href="https://github.com/Mukul2601"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Mukul2601
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
