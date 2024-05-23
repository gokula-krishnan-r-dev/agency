import React from "react";

const projects = [
  {
    id: 1,
    name: "TubePro",
    logo: "https://via.placeholder.com/150",
    description:
      "TubePro is an AI-based application designed to help YouTubers write video content efficiently. It leverages state-of-the-art natural language processing algorithms to generate engaging scripts, optimize video titles, and enhance video descriptions. TubePro also provides analytics to track the performance of your videos, helping you make data-driven decisions to grow your audience.",
    link: "https://tubepro.co",
    linkText: "Visit TubePro",
  },
  {
    id: 2,
    name: "RankCraft",
    logo: "/rankcraft.svg",
    description:
      "RankCraft helps you rank your website based on specific keywords and provides detailed charts and graphs to monitor your progress. With RankCraft, you can analyze your SEO performance, track keyword rankings, and get actionable insights to improve your site's visibility. The platform also offers competitor analysis, backlink tracking, and customizable reports to help you stay ahead in the digital landscape.",
    link: "https://rankcraft.com",
    linkText: "Visit RankCraft",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen  bg-gray-100">
      <div className="pt-44">
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-3xl">
          <h1 className="text-4xl font-bold text-center mb-12">
            Our Portfolio
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col items-center bg-gray-50 p-6 rounded-3xl shadow-md"
              >
                {project.id === 2 ? (
                  <img
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    className="w-24 h-24 mb-4"
                  />
                ) : (
                  <a
                    href="tubepro.co"
                    className="text-lg w-24 h-24 mb-4 flex items-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full px-2 -ml-2"
                  >
                    <span className="font-bold text-indigo-600">TubePro</span>{" "}
                    <span className="uppercase mt-0.5 leading-none text-[10px] ml-1 font-bold bg-gray-200 text-slate-700 px-2 py-1 rounded-md">
                      PRO
                    </span>{" "}
                  </a>
                )}
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-center text-pretty mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-blue-500 hover:underline"
                >
                  {project.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
