export type Locale = 'en' | 'vi'

export const locales: Locale[] = ['en', 'vi']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      profile: 'About',
      experiences: 'Experiences',
      projects: 'Projects',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      getStarted: 'Get Started',
    },
    hero: {
      title: 'Discover',
      titleHighlight: 'Tony Bui Portfolio',
      titleSuffix: 'Software Engineer',
      description:
        'View my projects and experience my work in software engineering and full stack development.',
      getStarted: 'Get Started',
      learnMore: 'Experiences',
    },
    experiences: {
      title: 'My Experience',
      description:
        'View my projects and experience my work in software engineering and full stack development.',
      nextjs: {
        title: 'Next.js',
        description: 'Building web applications using Next.js, Tanstack Query, and Tailwind CSS.',
      },
      nodejs: {
        title: 'Node.js',
        description: 'Building server-side applications and APIs using Node.js and Express.',
      },
      nestjs: {
        title: 'NestJS',
        description: 'Building scalable backend applications using NestJS framework with TypeScript.',
      },
      rxjs: {
        title: 'RxJS',
        description: 'Working with reactive programming using RxJS for handling asynchronous operations.',
      },
      angular: {
        title: 'Angular',
        description: 'Building web applications using Angular, RxJs, and Bootstrap.',
      },
      react: {
        title: 'React',
        description: 'Building web applications using React, Tanstack Query, and Tailwind CSS.',
      },
      vscode: {
        title: 'VS Code',
        description: 'Using Visual Studio Code as my primary code editor for development.',
      },
      cursor: {
        title: 'Cursor AI',
        description: 'Leveraging Cursor AI for enhanced coding productivity and intelligent assistance.',
      },
    },
    testimonials: {
      title: 'What Companies I Have Worked With',
      description:
        'View the projects I have worked on and the work I have done in software engineering and full stack development.',
      testimonial1: {
        name: 'Shapee Cloud Company',
        role: 'Full Stack Developer',
        content:
          'Developing custom APIs and user interfaces for projects involving insurance systems, import–export inventory management, and related business operations.',
      },
      testimonial2: {
        name: 'Chiichouse Company',
        role: 'Frontend Developer',
        content:
          'Developing custom user interfaces and features for projects involving booking, sales tracking, and customer relationship management.',
      },
    },
    projects: {
      title: 'My Projects',
      description:
        'Explore my portfolio of web applications and software projects built with modern technologies.',
      project1: {
        title: 'Chiichouse Booking',
        description: 'User interface for the Chiichouse booking application.',
        technologies: [
          'Next.js',
          'TypeScript',
          'React@tanstack',
          'Tailwind CSS',
          'NextAuth',
          'Shadcn/UI',
        ],
        link: 'https://chiichouse.com/',
      },
      project2: {
        title: 'Chiichouse CRM',
        description: 'User interface for the Chiichouse CRM application.',
        technologies: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'NextAuth',
          'Shadcn/UI',
          'TypeORM',
          'PostgreSQL',
          'NestJs',
          'Mailer',
        ],
        link: '#',
      },
      project3: {
        title: 'Huegatex',
        description:
          "Website for managing equipment and materials, purchasing requirements at Huegatex's factory.",
        technologies: [
          'React.js',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        link: '#',
      },
      project4: {
        title: 'Clothing Store',
        description: 'Website for ordering clothing products.',
        technologies: ['Angular', 'RxJs', 'Bootstrap', 'Material UI'],
        link: '#',
      },
      project5: {
        title: 'Quantum Insurance',
        description: 'Website for ordering insurance products for a insurance company.',
        technologies: [
          'Angular',
          'RxJs',
          'Bootstrap',
          '.Net Core',
          'Entity Framework Core',
          'SQL Server',
          'Mailer',
        ],
        link: '#',
      },
    },
    pricing: {
      title: 'Choose Your Project Journey',
      description:
        'Select the perfect plan for your project showcase. All plans include a 14-day free trial to showcase your work.',
      stargazer: {
        name: 'Software Engineer',
        description: 'For software engineers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Experiences',
      },
      astronomer: {
        name: 'Software Engineer',
        description: 'For software engineers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Experiences',
        popular: 'Featured',
      },
      cosmicExplorer: {
        name: 'Full Stack Developer',
        description: 'For full stack developers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Experiences',
      },
    },
    cta: {
      title: 'Ready to View Projects?',
      description: 'View projects from software engineers and full stack developers.',
      startTrial: 'View Projects',
      exploreNow: 'View Experiences',
    },
    profile: {
      title: 'About Me',
      name: 'Bui Viet Thinh',
      role: 'Software Engineer',
      description: 'Get in touch with me through the following contact information.',
      email: 'buithinh.qng.01@gmail.com',
      emailLabel: 'Email',
      phone: '027134092',
      phoneLabel: 'Phone',
      socialLabel: 'Follow me on',
      github: 'https://github.com/thinhbuiqn01',
      gitlab: 'https://gitlab.com/thinhbuiqng01',
      facebook: 'https://www.facebook.com/buithinh.01',
      image: '/assets/images/profile.png',
      link: 'https://www.linkedin.com/in/buithinh01/',
    },
    footer: {
      description: 'View projects from software engineers and full stack developers.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      profile: 'Về tôi',
      experiences: 'Kinh nghiệm',
      projects: 'Dự án',
      testimonials: 'Đánh giá',
      pricing: 'Giá',
      getStarted: 'Bắt đầu',
    },
    hero: {
      title: 'Khám phá',
      titleHighlight: "Tony Bui's Portfolio",
      titleSuffix: 'Kỹ sư phần mềm',
      description:
        'Xem các dự án của tôi và trải nghiệm công việc của tôi trong lĩnh vực kỹ thuật phần mềm và phát triển web.',
      getStarted: 'Xem dự án',
      learnMore: 'Tìm hiểu thêm',
    },
    experiences: {
      title: 'Kinh nghiệm của tôi',
      description:
        'Xem các dự án của tôi và trải nghiệm công việc của tôi trong lĩnh vực kỹ thuật phần mềm và phát triển web.',
      nextjs: {
        title: 'Next.js',
        description: 'Xây dựng ứng dụng web bằng Next.js và Tailwind CSS.',
      },
      nodejs: {
        title: 'Node.js',
        description: 'Xây dựng ứng dụng phía server và API bằng Node.js và Express.',
      },
      nestjs: {
        title: 'NestJS',
        description: 'Xây dựng ứng dụng backend có thể mở rộng bằng framework NestJS với TypeScript.',
      },
      rxjs: {
        title: 'RxJS',
        description: 'Làm việc với lập trình phản ứng sử dụng RxJS để xử lý các thao tác bất đồng bộ.',
      },
      angular: {
        title: 'Angular',
        description: 'Xây dựng ứng dụng web bằng Angular và Bootstrap.',
      },
      react: {
        title: 'React',
        description: 'Xây dựng ứng dụng web bằng React và Tailwind CSS.',
      },
      vscode: {
        title: 'VS Code',
        description: 'Sử dụng Visual Studio Code làm trình soạn thảo mã chính cho phát triển.',
      },
      cursor: {
        title: 'Cursor AI',
        description: 'Tận dụng Cursor AI để tăng năng suất lập trình và hỗ trợ thông minh.',
      },
    },
    testimonials: {
      title: 'Những công ty tôi đã và đang làm việc',
      description:
        'Xem các dự án của tôi và trải nghiệm công việc của tôi trong lĩnh vực kỹ thuật phần mềm và phát triển web.',
      testimonial1: {
        name: 'Shapee Cloud Company',
        role: 'Full Stack Developer',
        content:
          'Xây dựng các API và giao diện người dùng cho các dự án liên quan đến hệ thống bảo hiểm, quản lý kho hàng nhập–xuất, và các hoạt động kinh doanh liên quan.',
      },
      testimonial2: {
        name: 'Chiichouse Company',
        role: 'Frontend Developer',
        content:
          'Xây dựng các giao diện người dùng và tính năng cho các dự án liên quan đến quản lý booking, theo dõi doanh số bán hàng, và quản lý quan hệ khách hàng.',
      },
    },
    projects: {
      title: 'Dự án của tôi',
      description:
        'Khám phá portfolio các ứng dụng web và dự án phần mềm của tôi được xây dựng bằng các công nghệ hiện đại.',
      project1: {
        title: 'Chiichouse Booking',
        description: 'Giao diện người dùng cho ứng dụng web đặt phòng khách sạn của Chiichouse.',
        technologies: [
          'Next.js',
          'TypeScript',
          'React@tanstack',
          'Tailwind CSS',
          'NextAuth',
          'Shadcn/UI',
        ],
        link: 'https://chiichouse.com/',
      },
      project2: {
        title: 'Chiichouse CRM',
        description:
          'Quản lý khách hàng và đặt phòng cho ứng dụng web đặt phòng khách sạn của Chiichouse.',
        technologies: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'NextAuth',
          'Shadcn/UI',
          'TypeORM',
          'PostgreSQL',
          'NestJs',
          'Mailer',
        ],
        link: '#',
      },
      project3: {
        title: 'Huegatex',
        description: 'Website quản lý thiết bị vật tư, yêu cầu mua sắm tại nhà xưởng của Huegatex.',
        technologies: [
          'React.js',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        link: '#',
      },
      project4: {
        title: 'Clothing Store',
        description: 'Website for ordering clothing products for a clothing store.',
        technologies: ['Angular', 'RxJs', 'Bootstrap', 'Material UI'],
        link: '#',
      },
      project5: {
        title: 'Quantum Insurance',
        description: 'Website for ordering insurance products for a insurance company.',
        technologies: [
          'Angular',
          'RxJs',
          'Bootstrap',
          '.Net Core',
          'Entity Framework Core',
          'SQL Server',
          'Mailer',
        ],
        link: '#',
      },
    },
    pricing: {
      title: 'Chọn dự án của bạn',
      description:
        'Chọn dự án hoàn hảo cho cuộc khám phá vũ trụ của bạn. Tất cả các dự án đều bao gồm bản dùng thử miễn phí 14 ngày để khám phá vũ trụ.',
      stargazer: {
        name: 'Software Engineer',
        description: 'For software engineers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Projects',
      },
      astronomer: {
        name: 'Software Engineer',
        description: 'For full stack developers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Projects',
        popular: 'Phổ biến nhất',
      },
      cosmicExplorer: {
        name: 'Full Stack Developer',
        description: 'For full stack developers looking to showcase their work',
        experiences: [
          'Next.js',
          'Angular',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'Prisma',
          'PostgreSQL',
          'Docker',
          'Shadcn/UI',
        ],
        cta: 'View Projects',
      },
    },
    cta: {
      title: 'Ready to View Projects?',
      description: 'View projects from software engineers and full stack developers.',
      startTrial: 'View Projects',
      exploreNow: 'View Projects',
    },
    profile: {
      title: 'Về tôi',
      name: 'Bui Viet Thinh',
      role: 'Kỹ sư phần mềm',
      description: 'Liên hệ với tôi qua thông tin liên lạc sau.',
      email: 'buithinh.qng.01@gmail.com',
      emailLabel: 'Email',
      phone: '027134092',
      phoneLabel: 'Điện thoại',
      socialLabel: 'Theo dõi tôi trên',
      github: 'https://github.com/thinhbuiqn01',
      gitlab: 'https://gitlab.com/thinhbuiqng01',
      facebook: 'https://www.facebook.com/buithinh.01',
      image: '/assets/images/profile.png',
      link: 'https://www.linkedin.com/in/buithinh01/',
    },
    footer: {
      description: 'View projects from software engineers and full stack developers.',
      product: 'Sản phẩm',
      company: 'Company',
      legal: 'Legal',
      about: 'About',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.',
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
