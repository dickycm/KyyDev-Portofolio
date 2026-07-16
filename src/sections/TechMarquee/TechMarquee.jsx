import "./TechMarquee.scss";

const technologies = [
  "React",
  "Laravel",
  "PHP",
  "JavaScript",
  "Python",
  "Flutter",
  "JQuery",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
];

function TechMarquee() {
  return (
    <section className="tech-marquee">
      <div className="tech-marquee__track">
        {technologies.concat(technologies).map((tech, index) => (
          <span key={index} className="tech-marquee__item">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;