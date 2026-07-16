import "./TechStack.scss";
import Container from "../../components/common/Container";

import {
  Monitor,
  ServerCog,
  Database,
  Rocket,
  Palette,
} from "lucide-react";

function TechStack() {
  return (
    <section className="tech-stack" id="skills">
      <Container>

        {/* Header */}
        <div className="tech-stack__header">

          <span className="tech-stack__subtitle">
            MY SKILLS
          </span>

          <h2 className="tech-stack__title">
            Technical Arsenal
          </h2>

          <p className="tech-stack__description">
            Building modern, scalable and responsive web applications
            using technologies that I continuously learn and improve.
          </p>

        </div>

        {/* Grid */}
        <div className="tech-grid">

          {/* Frontend */}
          <div className="tech-card tech-card--frontend">

            <div className="tech-card__top">

              <div className="tech-card__title">
                <Monitor size={20} />
                <h3>Frontend</h3>
              </div>

              <p>
                Creating modern interfaces with responsive layouts,
                reusable components and smooth user experiences.
              </p>

            </div>

            <div className="tech-tags">
              <span>React</span>
              <span>JavaScript</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>

          </div>

          {/* Backend */}
          <div className="tech-card tech-card--backend">

            <div className="tech-card__top">

              <div className="tech-card__title">
                <ServerCog size={20} />
                <h3>Backend</h3>
              </div>

              <p>
                Building secure REST APIs and scalable server-side
                applications using Laravel and PHP.
              </p>

            </div>

            <div className="tech-tags">
              <span>Laravel</span>
              <span>PHP</span>
              <span>REST API</span>
            </div>

          </div>

          {/* Database */}
          <div className="tech-card tech-card--database">

            <div className="tech-card__top">

              <div className="tech-card__title">
                <Database size={20} />
                <h3>Database</h3>
              </div>

            </div>

            <div className="tech-tags">
              <span>MySQL</span>
              <span>PostgreSQL</span>
            </div>

          </div>

          {/* Deployment */}
          <div className="tech-card tech-card--deployment">

            <div className="tech-card__top">

              <div className="tech-card__title">
                <Rocket size={20} />
                <h3>Deployment</h3>
              </div>

            </div>

            <div className="tech-tags">
              <span>Git</span>
              <span>GitHub</span>
              <span>Vercel</span>
            </div>

          </div>

          {/* UI / UX */}
          <div className="tech-card tech-card--design">

            <div className="tech-card__top">

              <div className="tech-card__title">
                <Palette size={20} />
                <h3>UI / UX Design</h3>
              </div>

              <p>
                Designing clean, modern and user-friendly interfaces
                with a focus on usability and consistency.
              </p>

            </div>

            <div className="tech-tags">
              <span>Figma</span>
              <span>Design System</span>
              <span>Responsive Design</span>
              <span>Prototype</span>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default TechStack;