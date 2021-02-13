export const parseWork = (work) => {
  const frameworks = [
    ".NET",
    "Qt",
    "jQuery",
    "AngularJS",
    "Bootstrap",
    "React",
    "Node.js",
    "Socket.io",
    "Redux",
    "Next.js",
    "GraphQL",
    "Serverless",
    "React Native",
    "Expo",
  ];

  const languages = [
    "C#",
    "Java",
    "C++",
    "Python",
    "JavaScript",
    "CSS",
    "HTML",
    "TypeScript",
  ];

  const layers = ["Frontend", "Backend"];

  const types = ["Mobile app", "Desktop app", "Web app"];

  const platforms = ["Android", "Symbian OS", "Windows Phone"];

  const database = ["MongoDB", "MySQL", "MSSQL"];

  const companies = [
    "M-Active",
    "ZyLab",
    "AnnTac",
    "Staples",
    "Thomson Reuters",
    "LSE",
    "Imperial College",
    "PwC",
  ];

  const others = [
    "Software competition",
    "School project",
    "IEEE",
    "Publication",
    "Design system",
    "Chatbot",
    "Silverlight",
  ];

  const getTags = (work) => {
    return work.data.keywords.split(", ").map((text) => {
      return {
        text,
        type: frameworks.includes(text)
          ? "Framework"
          : languages.includes(text)
          ? "Language"
          : layers.includes(text)
          ? "Layer"
          : types.includes(text)
          ? "App type"
          : platforms.includes(text)
          ? "Platform"
          : companies.includes(text)
          ? "Company"
          : database.includes(text)
          ? "Database"
          : "Other",
      };
    });
  };

  const [title, subtitle] = work.data.title.split(" - ");
  return {
    slug: work.path.split("/").pop().replace(".mdx", ""),
    title,
    subtitle: subtitle || null,
    description: work.data.description,
    year: work.data.publishedTime?.toJSON().split("-")[0] || null,
    tags: getTags(work),
  };
};

export const parseThought = (thought) => {
  return {
    slug: thought.path.split("/").slice(-2).join("/").replace(".mdx", ""),
    ...thought.data,
    publishedTime: thought.data.publishedTime?.toJSON(),
  };
};

export const parsePhoto = (photo) => {
  return {
    slug: photo.path.split("/").pop().replace(".jpeg", ""),
    ...photo,
  };
};
