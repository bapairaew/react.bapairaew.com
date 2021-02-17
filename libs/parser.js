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
    keywords: work.data.keywords,
    year: work.data.publishedTime?.toJSON().split("-")[0] || null,
    tags: getTags(work),
  };
};

export const parsePost = (post) => {
  return {
    slug: post.path.split("/").pop().replace(".mdx", ""),
    title: post.data.title,
    description: post.data.description,
    keywords: post.data.keywords,
    publishedTime: post.data.publishedTime?.toJSON(),
    modifiedTime: post.data.modifiedTime?.toJSON(),
  };
};

export const parsePhoto = (photo) => {
  const parts = photo.data.ImageDescription.split(", ");
  return {
    slug: photo.path.split("/").pop().replace(".jpeg", ""),
    place: [parts[0], parts.pop()].join(", "),
    date:
      photo.data.DateTimeOriginal?.toJSON() ||
      photo.data.CreateDate?.toJSON() ||
      null,
    camera: photo.data.Model ? [photo.data.Model] : null,
  };
};
