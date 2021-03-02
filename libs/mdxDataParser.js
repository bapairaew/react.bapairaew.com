/*
 These functions cannot reside in ~/libs/mdx because they are being used in 
 next-mdx-enhanced Layout which would unintentionally try to import server-side 
 libraries e.g. fs into client side which subsequently cause an expection
*/

export const parseProject = (project) => {
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
    "React Native Web",
    "Expo",
    "Serverless",
    "SWR",
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

  const platforms = ["iOS", "Android", "Symbian", "Windows Phone", "Windows"];

  const database = ["MongoDB", "MySQL", "MSSQL"];

  const companies = [
    "Chulalongkorn University",
    "Microsoft",
    "Nokia",
    "SAMART",
    "M-Active",
    "ZyLab",
    "AnnTac",
    "Staples",
    "Thomson Reuters",
    "LSE",
    "Imperial College London",
    "PwC",
    "Oddle",
    "Argile",
  ];

  const others = [
    "Software competition",
    "School project",
    "IEEE",
    "Publication",
    "Design system",
    "Chatbot",
    "Silverlight",
    "AWS",
  ];

  const getTags = (project) => {
    return project.data.keywords.split(", ").map((text) => {
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

  const [title, subtitle] = project.data.title.split(" - ");
  return {
    slug: project.path.split("/").pop().replace(".mdx", ""),
    title,
    subtitle: subtitle || null,
    description: project.data.description,
    keywords: project.data.keywords,
    year: project.data.publishedTime?.toJSON().split("-")[0] || null,
    tags: getTags(project),
  };
};

export const parsePost = (post) => {
  return {
    slug: post.path.split("/").pop().replace(".mdx", ""),
    title: post.data.title,
    description: post.data.description,
    keywords: post.data.keywords,
    publishedTime: post.data.publishedTime?.toJSON() || null,
    modifiedTime: post.data.modifiedTime?.toJSON() || null,
  };
};
