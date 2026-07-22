import "./ProjectCard.scss";

function ProjectCard() {
  return (
    <article className="project-card">

      <div className="project-card__image">

        <div className="project-card__browser">

          <span></span>
          <span></span>
          <span></span>

        </div>

        <div className="project-card__preview">

          Project Preview

        </div>

      </div>

      <div className="project-card__content">

        <div className="project-card__tags">

          <span>Laravel</span>
          <span>MySQL</span>

        </div>

        <h3 className="project-card__title">
          Employee Management System
        </h3>

        <p className="project-card__description">
          A modern employee management platform featuring authentication,
          role-based access control, employee CRUD, attendance,
          and dashboard analytics.
        </p>

        <div className="project-card__buttons">

          <button className="btn-primary">
            Live Demo
          </button>

          <button className="btn-secondary">
            GitHub
          </button>

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;