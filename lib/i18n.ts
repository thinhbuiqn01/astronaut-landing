export type Locale = 'en' | 'vi'

export const locales: Locale[] = ['en', 'vi']
export const defaultLocale: Locale = 'en'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      getStarted: 'Get Started',
    },
    hero: {
      title: 'Explore the',
      titleHighlight: 'Universe',
      titleSuffix: 'Online',
      description:
        'View planets, stars, black holes, and experience space travel from the comfort of your home. Discover the cosmos in stunning detail.',
      getStarted: 'Get Started',
      learnMore: 'Learn More',
    },
    features: {
      title: 'Explore the Cosmos',
      description:
        'Journey through space and time with our immersive platform for viewing planets, stars, black holes, and space travel experiences.',
      viewPlanets: {
        title: 'View Planets',
        description:
          'Explore planets in our solar system and beyond with stunning 3D models, real-time data, and detailed information about each celestial body.',
      },
      discoverStars: {
        title: 'Discover Stars',
        description:
          'Navigate through constellations, learn about different star types, and witness the beauty of distant suns with high-resolution imagery.',
      },
      blackHoles: {
        title: 'Black Holes & Space Travel',
        description:
          'Experience the mysteries of black holes through interactive simulations and embark on virtual space travel journeys across the galaxy.',
      },
    },
    testimonials: {
      title: 'What Astronauts Say',
      description:
        'Join thousands of space enthusiasts, astronomers, and curious minds exploring the universe with our platform.',
      testimonial1: {
        name: 'Dr. Sarah Johnson',
        role: 'Astrophysicist, Space Research Institute',
        content:
          'This platform has revolutionized how I explore the universe. The detailed views of planets and stars are breathtaking, and the black hole simulations are incredibly educational.',
      },
      testimonial2: {
        name: 'Michael Chen',
        role: 'Space Enthusiast & Educator',
        content:
          'As a teacher, this platform has made space exploration accessible to my students. They love the interactive space travel experiences and learning about distant stars.',
      },
      testimonial3: {
        name: 'Emily Rodriguez',
        role: 'Amateur Astronomer',
        content:
          'The ability to view planets and stars in such detail from my computer is amazing. The virtual space travel feature lets me explore places I could only dream of visiting.',
      },
    },
    pricing: {
      title: 'Choose Your Space Journey',
      description:
        'Select the perfect plan for your cosmic exploration. All plans include a 14-day free trial to explore the universe.',
      stargazer: {
        name: 'Stargazer',
        description: 'Perfect for casual space enthusiasts',
        features: [
          'View 10 planets',
          'Basic star catalog',
          'Mobile access',
          'Email support',
          'HD quality viewing',
        ],
        cta: 'Start Exploring',
      },
      astronomer: {
        name: 'Astronomer',
        description: 'Ideal for serious Astronauts',
        features: [
          'All planets & moons',
          'Full star database',
          'Black hole simulations',
          'Virtual space travel',
          'Priority support',
          '4K quality viewing',
        ],
        cta: 'Start Exploring',
        popular: 'Most Popular',
      },
      cosmicExplorer: {
        name: 'Cosmic Explorer',
        description: 'For researchers and institutions',
        features: [
          'Unlimited access',
          'Advanced simulations',
          'Real-time data feeds',
          'Dedicated support',
          'API access',
          'Custom research tools',
        ],
        cta: 'Contact Sales',
      },
    },
    cta: {
      title: 'Ready to Explore the Universe?',
      description:
        'Join thousands of space enthusiasts discovering planets, stars, black holes, and experiencing virtual space travel.',
      startTrial: 'Start Free Trial',
      exploreNow: 'Explore Now',
    },
    footer: {
      description:
        'Explore the universe online - view planets, stars, black holes, and experience virtual space travel from anywhere.',
      product: 'Product',
      company: 'Company',
      legal: 'Legal',
      about: 'About',
      blog: 'Blog',
      careers: 'Careers',
      privacy: 'Privacy',
      terms: 'Terms',
      cookiePolicy: 'Cookie Policy',
      rights: 'All rights reserved.',
    },
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      features: 'Tính năng',
      testimonials: 'Đánh giá',
      pricing: 'Giá',
      getStarted: 'Bắt đầu',
    },
    hero: {
      title: 'Khám phá',
      titleHighlight: 'Vũ trụ',
      titleSuffix: 'Trực tuyến',
      description:
        'Xem các hành tinh, ngôi sao, hố đen và trải nghiệm du hành vũ trụ từ sự thoải mái của ngôi nhà bạn. Khám phá vũ trụ với độ chi tiết tuyệt đẹp.',
      getStarted: 'Bắt đầu',
      learnMore: 'Tìm hiểu thêm',
    },
    features: {
      title: 'Khám phá Vũ trụ',
      description:
        'Du hành qua không gian và thời gian với nền tảng đắm chìm của chúng tôi để xem các hành tinh, ngôi sao, hố đen và trải nghiệm du hành vũ trụ.',
      viewPlanets: {
        title: 'Xem Hành tinh',
        description:
          'Khám phá các hành tinh trong hệ mặt trời và xa hơn với các mô hình 3D tuyệt đẹp, dữ liệu thời gian thực và thông tin chi tiết về mỗi thiên thể.',
      },
      discoverStars: {
        title: 'Khám phá Ngôi sao',
        description:
          'Điều hướng qua các chòm sao, tìm hiểu về các loại sao khác nhau và chứng kiến vẻ đẹp của những mặt trời xa xôi với hình ảnh độ phân giải cao.',
      },
      blackHoles: {
        title: 'Hố đen & Du hành Vũ trụ',
        description:
          'Trải nghiệm những bí ẩn của hố đen thông qua các mô phỏng tương tác và bắt đầu các hành trình du hành vũ trụ ảo qua thiên hà.',
      },
    },
    testimonials: {
      title: 'Những gì Nhà thám hiểm Vũ trụ nói',
      description:
        'Tham gia cùng hàng nghìn người đam mê vũ trụ, nhà thiên văn học và những tâm trí tò mò đang khám phá vũ trụ với nền tảng của chúng tôi.',
      testimonial1: {
        name: 'Tiến sĩ Sarah Johnson',
        role: 'Nhà vật lý thiên văn, Viện Nghiên cứu Vũ trụ',
        content:
          'Nền tảng này đã cách mạng hóa cách tôi khám phá vũ trụ. Các góc nhìn chi tiết về các hành tinh và ngôi sao thật ngoạn mục, và các mô phỏng hố đen cực kỳ giáo dục.',
      },
      testimonial2: {
        name: 'Michael Chen',
        role: 'Người đam mê Vũ trụ & Nhà giáo dục',
        content:
          'Là một giáo viên, nền tảng này đã làm cho việc khám phá vũ trụ trở nên dễ tiếp cận với học sinh của tôi. Các em yêu thích các trải nghiệm du hành vũ trụ tương tác và học về các ngôi sao xa xôi.',
      },
      testimonial3: {
        name: 'Emily Rodriguez',
        role: 'Nhà thiên văn nghiệp dư',
        content:
          'Khả năng xem các hành tinh và ngôi sao với độ chi tiết như vậy từ máy tính của tôi thật tuyệt vời. Tính năng du hành vũ trụ ảo cho phép tôi khám phá những nơi mà tôi chỉ có thể mơ ước được đến thăm.',
      },
    },
    pricing: {
      title: 'Chọn Hành trình Vũ trụ của Bạn',
      description:
        'Chọn gói hoàn hảo cho cuộc khám phá vũ trụ của bạn. Tất cả các gói đều bao gồm bản dùng thử miễn phí 14 ngày để khám phá vũ trụ.',
      stargazer: {
        name: 'Người quan sát sao',
        description: 'Hoàn hảo cho những người đam mê vũ trụ thông thường',
        features: [
          'Xem 10 hành tinh',
          'Danh mục sao cơ bản',
          'Truy cập di động',
          'Hỗ trợ email',
          'Xem chất lượng HD',
        ],
        cta: 'Bắt đầu Khám phá',
      },
      astronomer: {
        name: 'Nhà thiên văn',
        description: 'Lý tưởng cho những nhà thám hiểm vũ trụ nghiêm túc',
        features: [
          'Tất cả hành tinh & mặt trăng',
          'Cơ sở dữ liệu sao đầy đủ',
          'Mô phỏng hố đen',
          'Du hành vũ trụ ảo',
          'Hỗ trợ ưu tiên',
          'Xem chất lượng 4K',
        ],
        cta: 'Bắt đầu Khám phá',
        popular: 'Phổ biến nhất',
      },
      cosmicExplorer: {
        name: 'Nhà thám hiểm Vũ trụ',
        description: 'Dành cho các nhà nghiên cứu và tổ chức',
        features: [
          'Truy cập không giới hạn',
          'Mô phỏng nâng cao',
          'Luồng dữ liệu thời gian thực',
          'Hỗ trợ chuyên dụng',
          'Truy cập API',
          'Công cụ nghiên cứu tùy chỉnh',
        ],
        cta: 'Liên hệ Bán hàng',
      },
    },
    cta: {
      title: 'Sẵn sàng Khám phá Vũ trụ?',
      description:
        'Tham gia cùng hàng nghìn người đam mê vũ trụ khám phá các hành tinh, ngôi sao, hố đen và trải nghiệm du hành vũ trụ ảo.',
      startTrial: 'Bắt đầu Dùng thử Miễn phí',
      exploreNow: 'Khám phá Ngay',
    },
    footer: {
      description:
        'Khám phá vũ trụ trực tuyến - xem các hành tinh, ngôi sao, hố đen và trải nghiệm du hành vũ trụ ảo từ bất cứ đâu.',
      product: 'Sản phẩm',
      company: 'Công ty',
      legal: 'Pháp lý',
      about: 'Về chúng tôi',
      blog: 'Blog',
      careers: 'Tuyển dụng',
      privacy: 'Quyền riêng tư',
      terms: 'Điều khoản',
      cookiePolicy: 'Chính sách Cookie',
      rights: 'Bảo lưu mọi quyền.',
    },
  },
} as const

export function getTranslations(locale: Locale) {
  return translations[locale]
}
