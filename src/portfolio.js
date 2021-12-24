/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Mansi Singh",
  //  title: "About me",
  title2: "Mansi",
  logo_name: "Mansi Singh",
  nickname: "mansi",
  // full_name: "Mansi Singh",
  subTitle:
    [
    " a software developer with a creative mindset and passion for exploring new technologies.",
    " Currently a graduate student at Dalhousie University.",
    " Seeking full-time opportunities for software development roles."
],
  resumeLink:
    "https://drive.google.com/file/d/12vuAcbQDSpBsyxTMj51XqkzkhQvY8R-j/view?usp=sharing",
  mail: "mailto:mansi0910@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/mansi10",
  linkedin: "https://www.linkedin.com/in/mansi-singh-a4373376/",
  gmail: "mansi0910@gmail.com",
  facebook: "https://www.facebook.com/mansi.singh.735/"
};

const skills = {
  data: [
    {
      title: "Technologies & Skills",
      fileName: "FullStackImg",
      skills: [
        "⚡ 5.5 years of professional experience as a Software Developer in a fast-paced Agile environment",
        "⚡ Highly proficient in Java, Spring Boot, Angular, Node.js, and JavaScript with good experience in cloud architecture and microservices",
        "⚡ Experience in Object Oriented Programming (OOP), Design patterns and Test-Driven Development (TDD)",
        "⚡ Demonstrated strong problem-solving skills in innovation challenges and conferences during tenure at SAP India",
        "⚡ Well-versed with cloud platforms (AWS, GCP) and CI/CD tools ",
        "⚡ Self-motivated, strong interpersonal skills and eager to learn new technologies"
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "C#",
        //   fontAwesomeClassname: "simple-icons:csharp",
        //   style: {
        //     backgroundColor: "#FFFFFF",
        //     color: "#F7DF1E",
        //   },
        // },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Neo4J",
          fontAwesomeClassname: "simple-icons:neo4j",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloudplatform",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    }
  //   {
  //     title: "Cloud Platforms",
  //     fileName: "CloudInfraImg",
  //     skills: [
  //       "⚡ Experience working on multiple cloud platforms like AWS and Azure.",
  //       "⚡ Experience hosting and managing websites.",
  //       "⚡ Experience with CI/CD.",
  //     ],
  //     softwareSkills: [
  //       {
  //         skillName: "AWS",
  //         fontAwesomeClassname: "simple-icons:amazonaws",
  //         style: {
  //           color: "#FF9900",
  //         },
  //       },
  //       {
  //         skillName: "Netlify",
  //         fontAwesomeClassname: "simple-icons:netlify",
  //         style: {
  //           color: "#38AFBB",
  //         },
  //       },
  //       {
  //         skillName: "Heroku",
  //         fontAwesomeClassname: "simple-icons:heroku",
  //         style: {
  //           color: "#6863A6",
  //         },
  //       },
  //       {
  //         skillName: "Docker",
  //         fontAwesomeClassname: "simple-icons:docker",
  //         style: {
  //           color: "#1488C6",
  //         },
  //       },
  //       {
  //         skillName: "GitHub Actions",
  //         fontAwesomeClassname: "simple-icons:githubactions",
  //         style: {
  //           color: "#5b77ef",
  //         },
  //       },
  //     ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Dalhousie University",
      subtitle: "Master's in Applied Computer Science",
      logo_path: "dal.png",
      alt_name: "Dal",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Achieved A+ grade in courses such as Web Development, Cloud Computing, Serverless Data Processing, and Software Development.",
        "⚡ Developed web applications implementing cutting-edge technologies with maintainable, robust, and flexible code by following SOLID Principles and Design Patterns ",
        // "⚡ I participated in hackathon oraganised by CGI and TD bank and secured 3rd position.",
      ],
      website_link: "https://www.dal.ca/",
    },
    {
      title: "Indira Gandhi Delhi Technical University for Women",
      subtitle: "Bachelor of Technology in Computer Science (GPA :- 8.92/10)",
      logo_path: "igit.jpeg",
      alt_name: "Dal",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ Studied core computer science subjects such as Object-Oriented Programming, Data Structures and Algorithms, Database Management System, and Networking.",
        "⚡ Served as Class Representative for two consecutive years by establishing effective communication regarding assignments and lectures among professors and students.",
        "⚡ Participated in CodeVita, a coding competition organized by Tata Consultancy Services and was selected in top 5 finalists.",
      ],
      website_link: "https://www.igdtuw.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Master Microservices with Spring Boot and Spring Cloud",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ccdce2c6-7b8c-4aa5-b662-18f6c0cefc44/",
      alt_name: "Udemy",
      color_code: "#2AAFED",
      // color_code: "#E2405F",
    },
    {
      title: "Sequence Models",
      subtitle: "DeepLearning.ai",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-ccdce2c6-7b8c-4aa5-b662-18f6c0cefc44/",
      alt_name: "DeepLearning.ai",
      color_code: "#2AAFED",
      // color_code: "#47A048",
    },
    {
      title: "The Complete 2021 Web Development Bootcamp ",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-bb9871eb-77c2-4e5f-ab12-080b81ca6643/",
      alt_name: "Udemy",
      // color_code: "#F6B808",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const experience = {
  // title: "Where I've worked",
  // subtitle: "Full-Time Work Experience",
  // description: "1 year of work experience.",
  // header_image_path: "experience.svg",
  experiences: [
    {
      title: "Software Engineer",
      company: "SAP",
      website_link: "https://www.sap.com/index.html",
      logo_path: "SAP_logo.png",
      duration: "Jun 2016 - Jan 2021",
      location: "Gurgaon, India",
      descriptions: [
        "⚡ Managed and led a team of 5 to develop end-to-end cloud-native web applications for a supply chain network using in-house technology, currently adopted by 70% of the US’s pharmaceutical companies for their drug traceability and counterfeit prevention",
        "⚡ Executed Software Development Lifecycle (SDLC) by building new features in an activity tracker system for a disaster relief collaboration platform which helped NGOs to plan and share relief activities in disaster-affected areas. Presented this solution to Red Cross Philippines",
        "⚡ Developed scalable microservices using Spring Boot framework to interact with Blockchain and other cloud applications having terabytes of data, resulting in reduced latency by 20%",
        "⚡ Implemented Cloud to Cloud and Cloud to On-Premise integrations using SAP Cloud Platform Integration to ensure seamless data transfer and message transformations across customer systems and SAP environments",
        "⚡ Enforced code-quality standards, performed peer code reviews, and maintained Jenkins CI/CD pipelines, leading to a 25% reduction in defect rate",
        "⚡ Gathered requirements, prepared technical documentation, enhanced product backlogs, and finalized product release scope by collaborating with stakeholders",
        "⚡ Delivered technical trainings on in-house products and technologies to mentor new hires and ramp up customers",
        // "⚡ Led a team of 6 members to build and execute product roadmap by evaluating business needs, resource availability and defining success metrics.",
        // "⚡ Developed SAP Fiori applications using SAPUI5 and SAP Web IDE by deploying them on SAP Cloud Platform (Neo and Cloud Foundry) by configuring SAP Fiori apps on SAP Fiori Launchpad.",
        // "⚡ Implemented REST and OData microservices in Node.js and Spring Boot framework using Cloud Application Programming and SAP HANA DB",
        // "⚡ Designed the integration of external customer systems with SAP Business Suite by developing integration flows using XSLT mappings and Groovy scripts on SAP Cloud Platform Integration",
        // "⚡ Collaborated with Product Owners and conducted Design Thinking sessions to understand product requirements and system architecture, enhancing the backlog quality",
      ],
      color: "#0071C5",
    },
    {
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services (TCS)",
      website_link: "https://www.tcs.com/",
      logo_path: "tcs-color.png",
      duration: "Aug 2015 - Jun 2016",
      location: "Gurgaon, India",
      descriptions: [
        "⚡ Enhanced overall application performance by 30% by resolving and delivering bug-fixes biweekly in an Agile scrum team",
        "⚡ Improved code coverage up to 80% by implementing Mockito framework in JUnit"
        // "⚡ Applied Agile principles in a banking application based on the Spring Boot framework, RESTful services, and Java design patterns.",
        // "⚡ Enhanced the overall application performance by 30% through debugging and resolving bugs",
        // "⚡ Implemented unit, and integration tests using Junit, and Mockito by improving software quality up to 35% ",
        // "⚡ Developed a web app that shows real-time sentiment analysis from Twitter, Reddit, Facebook and Instagram.",
      ],
      color: "#0071C5",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Some things I've built",
  description:
    "I love exploring new technologies and tools, and conceptualizing their real-world implementation. Therefore, I have developed projects that spans across several domains of computer science such as Software Development, Cloud Computing, and Web Development. Below are some of my best works.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Get In Touch",
    profile_image_path: "mansi_photo.jpg",
    description:
      "My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates. ",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    // link: "https://twitter.com/Harikrushn9",
    // avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Student Handbook",
      url: "https://github.com/mansi10/Student-Handbook",
      description: [
        "A responsive web application for supporting Dalhousie international students to become accustomed to the Canadian education culture",
        // "Designed application workflow through task flow diagrams and wireframes created using Balsamiq and Cacoo", 
        // "Engineered RESTful APIs using Node.js and Express.js to handle HTTP requests in MongoDB"
      ],
      languages: [
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
          // style: {
          //   backgroundcolor: "#439743",
          // },
        },
        // {
        //   name: "Express.js",
        //   iconifyClass: "logos-expressjs",
        // },
        {
          name: "Angular",
          iconifyClass: "logos-angular",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",
        },
      ],
    },
    {
      id: "1",
      name: "Canada News Hub",
      url: "https://github.com/mansi10/Canada-News-Hub",
      description:
        "A Software-as-a-Service for e-reading and posting news to a web application by focusing on AWS cloud architecture",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos-angular",
        },
        // {
        //   name: "Express.js",
        //   iconifyClass: "logos-expressjs",
        // },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
          // style: {
          //   color: "#FF9900",
          // },
        },
        {
          name: "Docker",
          iconifyClass: "logos-docker",
        },
      ],
    },
    {
      id: "2",
      name: "EatOUT",
      url: "https://github.com/mansi10/EatOUT",
      description:
        "A Java Spring Boot web application to order food from nearby restaurants using Thymeleaf template engine.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",
        },
        {
          name: "Maven",
          iconifyClass: "logos-maven",
        },
        {
          name: "Jenkins",
          iconifyClass: "logos-jenkins",
        },
      ],
    },
    {
      id: "3",
      name: "Halifax Foodie",
      url: "https://github.com/mansi10/HalifaxFoodie",
      description:
        "a multi-cloud serverless web application for a food ordering system utilizing AWS/GCP services.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "GCP",
          iconifyClass: "logos-gcp",
        },
        {
          name: "Docker",
          iconifyClass: "logos-docker",
        },
      ],
    },
    {
      id: "4",
      name: "DBMS-Simulator",
      url:
        "https://github.com/mansi10/DBMS-Simulator",
      description:
        "A lightweight Database Management System similar to MySQL, that enables users to log in the system and execute queries according to the user input.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Maven",
          iconifyClass: "logos-maven",
        },
      ],
    },
    {
      id: "5",
      name: "ChatApp",
      url: "https://github.com/mansi10/ChatApp",
      description:
        "A web application supporting real time data transfer allowing the user to create a chat room and chat with other users.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
