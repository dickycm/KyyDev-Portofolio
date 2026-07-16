import "./Hero.scss";

import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import Stack from "../../components/ui/Stack";
import FloatingBadge from "../../components/ui/FloatingBadge";

function Hero() {
  return (
    <section className="hero">
      <Container>

        <div className="hero__wrapper">

          {/* LEFT */}
          <div className="hero__left">

            <p className="hero__subtitle">
              👋 Hello, I'm
            </p>

            <h1 className="hero__title">
              Dicky Chandra
            </h1>

            <h2 className="hero__job">
              Junior Web Developer
            </h2>

            <p className="hero__description">
              I build modern, responsive web applications using React, Laravel,
              PHP, JavaScript and PostgreSQL with a focus on clean UI,
              performance and user experience.
            </p>

            <div className="hero__actions">
              <Button>
                View Projects
              </Button>

              <Button>
                Download CV
              </Button>
            </div>

          </div>

          {/* RIGHT */}

          <div className="hero__right">

            <div className="hero__image">

              <Stack />

              <FloatingBadge
                className="badge-javascript"
                text="JavaScript"
                delay={1}
              />

              <FloatingBadge
                className="badge-mysql"
                text="MySQL"
                delay={0.7}
              />

              <FloatingBadge
                className="badge-php"
                text="PHP"
                delay={1.3}
              />

              <FloatingBadge
                className="badge-postgresql"
                text="PostgreSQL"
                delay={2}
              />

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Hero;