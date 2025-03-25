import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sathish Reddy",
  initials: "SR",
  url: "https://sathish.vercel.com",
  location: "Hyderabad, India",
  locationLink: "https://www.google.com/maps/place/hyderabad",
  description:
    "Aspiring Software Engineer and Tech Enthusiast.",
  summary:
    "I am a third-year Computer Science student at MLR Institute of Technology, aspiring to become a skilled software developer. I am passionate about mastering emerging technologies and solving real-world challenges through innovative solutions. With a strong focus on building responsive, user-centric applications, I thrive in dynamic environments that demand continuous learning and technical excellence."

,
  avatarUrl: "/me.jpg",
  skills: [
    "Java",
    "Python",
    "C",
    "C++",
    "Javascript",
    "HTML",
    "CSS",
    "ReactJS",
    "Spring Boot",
    "Hibernate",
    "SQL",
    "Bootstrap",
    "REST APIs",
    "DSA",
    
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sathishreddy045@gmail.com",
    tel: "+91 9948312963",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sathishreddy045",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sathishreddykattula/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/SathishReddyyy",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@sathishreddy6058",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Oasis Infobyte",
      href: "https://oasisinfobyte.com/#",
      badges: [],
      location: "Remote",
      title: "Web Developer",
      logoUrl: "/oib.jpg",
      start: "Oct 2024",
      end: "Nov 2024",
      description:
        "Developed and maintained responsive web applications using modern frontend technologies, Designed and implemented a secure login authentication system using Spring Boot, Spring Security and MySQL, integrated Spring Data JPA for database operations, Thymeleaf for dynamic rendering, and Postman for API testing, ensuring robust security and efficient user management.",
    },
  ],
  education: [
    {
      school: "MLR Institute of Technology",
      href: "https://mlrit.ac.in/",
      degree: "Bachelor of Technology in Computer Science",
      logoUrl: "/mlritlogo.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "TS Model School & Junior Collage",
      href: "https://telanganams.cgg.gov.in",
      degree: "Intermediate and SSC",
      logoUrl: "/telanganalogo.png",
      start: "2017",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Speech to Text Transcription WebApp",
      href: "https://web-project-1-ashy.vercel.app/",
      dates: "Jan 2023",
      active: true,
      description:
        "Developed a real-time speech-to-text transcription web app using modern frontend technologies and the Web Speech API, ensuring accurate voice-to-text conversion with accessibility enhancements for an inclusive and seamless user experience.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "Web Speech API",
      ],
      links: [
        {
          type: "Website",
          href: "https://web-project-1-ashy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/project1.png",
      video:
        "",
    },
    {
      title: "NikeVerse - E-Commerce store",
      href: "https://nike-verse.vercel.app/",
      dates: "Oct 2024",
      active: true,
      description:
        "Developed a fully functional e-commerce store  with a user-friendly interface for seamless browsing and purchasing, Implemented an organized collection of shoes with intuitive navigation and responsive design using frontend technologies.",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://nike-verse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sathishreddy045/NikeVerse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/nikeverse.png",
      video: "",
    },
    {
      title: "Recipe Maker",
      href: "",
      dates: "June 2024",
      active: true,
      description:
        "Built an intelligent recipe generation system that reduces user effort by 50\% by dynamically suggesting recipes based on user-input ingredients using Edamam API and YouTube API for instructional videos. Optimized API calls and database queries to improve response efficiency by 30\%, enabling faster recipe retrieval and video rendering while enhancing user engagement with real-time ingredient suggestions and embedded tutorials.",
      technologies: [
        "PHP",
        "MySQL",
        "HTML",
        "CSS",
        "Javascript",
        "Edamam API",
        "Youtube API",
        "Postman",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recipemaker.png",
      video: "",
    },
  ],
} as const;
