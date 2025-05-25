export interface Links {
  home: string;
  programs: string;
  pricing: string;
  booking: string;
  contact: string;
  email: string;
  phone: string;
  linkedin: string;
}

export const links: Links = {
  home: "/",
  programs: "/programs",
  pricing: "/pricing",
  booking: "/booking",
  contact: "/contact",
  email: "mailto:RoboRangersCamp@gmail.com",
  phone: "tel:6476198189",
  linkedin: "https://www.linkedin.com/company/roborangers",
};

export const campInfo = {
  name: "RoboRangers",
  tagline: "Ignite Your Child's Curiosity with STEM!",
  firstClassFree: true,
  price: "$40 Per Class",
  schedule: "Monday - Friday, July - August",
  ages: "ALL AGES WELCOME",
  scholarships: true,
  contact: {
    email: "RoboRangersCamp@gmail.com",
    phone: "647-619-8189"
  }
};

export const programs = [
  {
    title: "LEGO Ev3 Coding",
    description: "Learn to program LEGO Mindstorms EV3 robots with block-based coding. Build amazing robots that can navigate mazes, solve problems and complete challenges!",
    icon: "robot",
    ageGroups: ["8-12", "13-16"]
  },
  {
    title: "Robo Building",
    description: "Design and build your own robots using various materials and components. Learn about mechanics, electronics, and how to bring your creations to life!",
    icon: "tool",
    ageGroups: ["10-14", "15-18"]
  },  
  {
    title: "Python Coding",
    description: "Learn Python programming basics through fun, hands-on projects. Create games, solve puzzles, and develop problem-solving skills that last a lifetime!",
    icon: "code",
    ageGroups: ["12-16", "17+"]
  },
  {
    title: "Java Coding",
    description: "Build applications and games while learning Java programming fundamentals. Create interactive projects and understand object-oriented principles!",
    icon: "coffee",
    ageGroups: ["14-18"]
  },
  {
    title: "3D Printing",
    description: "Design 3D models and watch them come to life with our 3D printers. Learn CAD software and create your own toys, gadgets, and mechanical parts!",
    icon: "printer",
    ageGroups: ["12+"]
  },
  {
    title: "Game Design",
    description: "Begin with Scratch to learn the basics, then advance to Unity for 2D/3D game development. From simple interactive games to advanced projects with C#, animations, and game physics!",
    icon: "game",
    ageGroups: ["8-12", "13-18"]
  }
];

export const pricing = {
  regularPrice: 40,
  currency: "CAD",
  perClass: true,
  firstClassFree: true,
  duration: "July - August",
  schedule: "Monday - Friday",
  scholarshipsAvailable: true
};
