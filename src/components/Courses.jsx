const courses = [
  {
    title: "Introduction to web development",
    description:
      "Build a strong foundation in the core technologies behind the web: HTML, CSS, and JavaScript.",
    href: "https://github.com/sameerahmedkhan-2026/intro-to-web-development-v1",
    action: "View course",
  },
  {
    title: "Complete Intro to React",
    description:
      "Learn the fundamentals of React and start building maintainable, interactive user interfaces.",
    action: "Coming soon",
  },
  {
    title: "Web Storage & PWAs",
    description:
      "Explore browser storage, offline-first patterns, and the building blocks of progressive web apps.",
    action: "Coming soon",
  },
];

export default function Courses() {
  return (
    <main className="courses-page">
      <header className="courses-header">
        <p className="eyebrow">Learn with me</p>
        <h1>Courses</h1>
        <p>
          Practical courses for building a stronger understanding of modern web
          development.
        </p>
      </header>

      <section className="course-list" aria-label="Available courses">
        {courses.map((course, index) => (
          <article className="course-card" key={course.title}>
            <span className="course-number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="course-card-content">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              {course.href ? (
                <a href={course.href} target="_blank" rel="noreferrer">
                  {course.action} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="course-coming-soon">{course.action}</span>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
