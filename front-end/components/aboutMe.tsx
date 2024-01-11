export default function AboutMe() {
  const problemWord = (
    <span
      key="problem"
      className="inline-block
      -rotate-2"
    >
      problem
    </span>
  );

  const aboutMeContent = {
    title: ["Low profile ", problemWord, " solver."],
  };

  return (
    <section
      className="about-me
        flex
        flex-col
        items-center
        justify-center
        mb-3
        md:mb-10"
    >
      <h2
        className="title
          font-bold
          text-2xl
          text-white
          md:text-4xl"
      >
        {aboutMeContent.title}
      </h2>
    </section>
  );
}
