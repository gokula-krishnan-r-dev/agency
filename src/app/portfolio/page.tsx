import React from "react";

const projects = [
  {
    id: 1,
    name: "TubePro",
    logo: "https://via.placeholder.com/150",
    htmlLogo: (
      <a
        href="tubepro.co"
        className="text-lg w-24 h-24 mb-4 flex items-center transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 focus-visible:outline-none focus-visible:shadow-outline-indigo rounded-full px-2 -ml-2"
      >
        <span className="font-bold text-indigo-600">TubePro</span>{" "}
        <span className="uppercase mt-0.5 leading-none text-[10px] ml-1 font-bold bg-gray-200 text-slate-700 px-2 py-1 rounded-md">
          PRO
        </span>{" "}
      </a>
    ),
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
  {
    id: 3,
    name: "Bragtime",

    logo: "https://bragtime.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.dee67b9f.png&w=48&q=75",
    description:
      "Bragtime is a social media platform that allows users to share their accomplishments and milestones with friends and family. It provides a space for users to celebrate their achievements, big or small, and connect with like-minded individuals. Bragtime aims to foster a positive and supportive community where users can inspire and motivate each other to reach their goals.",
    link: "https://bragtime.com",
    linkText: "Visit Bragtime",
  },
  {
    id: 4,
    name: "MagicViosr",
    logo: "MagicViosr",
    htmlLogo: (
      <div className="">
        <span className="font-bold text-4xl py-6 text-[#f84d13]">
          MagicViosr
        </span>
      </div>
    ),
    description:
      "MagicVisor is a virtual try-on platform that enables users to visualize eyewear products in real-time. By leveraging augmented reality technology, MagicVisor allows customers to see how glasses look on their face before making a purchase. The platform offers a wide range of eyewear styles and brands to choose from, making it easy for users to find the perfect pair of glasses.",
    link: "https://www.magicvisor.com/",
    linkText: "Visit MagicVisor",
  },
  {
    id: 5,
    name: "Tender Online",
    logo: "https://via.placeholder.com/150",
    htmlLogo: (
      <div className="">
        <span className="font-bold text-4xl py-6 text-black">
          Tender Online
        </span>
      </div>
    ),
    description:
      "Tender Online is a procurement platform that connects buyers and suppliers to streamline the tendering process. It provides a centralized platform for posting tenders, receiving bids, and awarding contracts. Tender Online offers features such as automated notifications, document management, and bid evaluation tools to help organizations manage their procurement activities efficiently.",
    link: "https://tender-online-web.vercel.app/",
  },
  {
    id: 6,
    name: "Student room booking",
    logo: "https://via.placeholder.com/150",
    htmlLogo: (
      <div className="">
        <span className="font-bold text-4xl py-6 text-black">
          Student room booking
        </span>
      </div>
    ),
    description:
      "Student room booking is a web application that allows students to book rooms for their accommodation. It provides a user-friendly interface for students to search for available rooms, view room details, and make reservations. The application also includes features such as room ratings, reviews, and payment processing to enhance the user experience.",
    link: "https://booking-fgtd.vercel.app/",
  },
  {
    id: 7,
    name: "Home Service",
    logo: "https://via.placeholder.com/150",
    htmlLogo: (
      <div className="">
        <span className="font-bold text-4xl py-6 text-black">Home Service</span>
      </div>
    ),
    description:
      "Home Service is an online platform that connects homeowners with service providers for home maintenance and repair services. It offers a wide range of services, including plumbing, electrical work, painting, and carpentry. Home Service provides a convenient way for homeowners to find trusted professionals for their home improvement projects and repairs.",
    link: "https://homeserv-three.vercel.app/",
  },
  {
    id: 8,
    name: "Portfolio",
    logo: "https://via.placeholder.com/150",
    htmlLogo: (
      <div className="">
        <span className="font-bold text-4xl py-6 text-black">Portfolio</span>
      </div>
    ),
    description:
      "This is my personal portfolio website where I showcase my projects, skills, and experience. It provides an overview of my work and allows visitors to learn more about me and my background. The portfolio website also includes a blog section where I share insights, tips, and tutorials on web development and design.",
    link: "https://my-portfolio-pied-gamma-27.vercel.app/",
    linkText: "Visit Portfolio",
  },
  {
    id: 9,
    name: "one Dashboard",
    logo: "https://one-dashboard.vercel.app/_next/static/media/Logo.c48fed6d.svg",
    description:
      "One Dashboard is a business intelligence platform that provides real-time insights and analytics to help companies make data-driven decisions. It offers customizable dashboards, data visualization tools, and reporting features to help organizations monitor key performance indicators and track business metrics. One Dashboard integrates with various data sources and applications to provide a unified view of your business operations.",
    link: "https://one-dashboard.vercel.app/client",
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
                {!project.htmlLogo ? (
                  <img
                    src={project.logo}
                    alt={`${project.name} Logo`}
                    className="w-24 h-24 mb-4"
                  />
                ) : (
                  <div className="">{project.htmlLogo}</div>
                )}
                <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
                <p className="text-center text-pretty mb-4">
                  {project.description}
                </p>
                <a
                  target="_black"
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
