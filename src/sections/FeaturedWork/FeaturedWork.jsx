import "./FeaturedWork.scss";
import Container from "../../components/common/Container";
import ProjectCard from "../../components/ui/ProjectCard";

function FeaturedWork() {
  return (
    <section className="featured-work" id="projects">
      <Container>

        <div className="featured-work__header">

          <span className="featured-work__subtitle">
            MY PROJECTS
          </span>

          <h2 className="featured-work__title">
            Featured Work
          </h2>

          <p className="featured-work__description">
            Selected projects demonstrating full-stack capabilities,
            clean architecture, and problem-solving.
          </p>

        </div>

        <div className="featured-work__content">

          <ProjectCard />

        </div>

      </Container>
    </section>
  );
}

export default FeaturedWork;