import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const translations = {
  uz: {
    title: "Frontend Dasturchi",
    theme: "Tema",
    extra: "Ma'lumot",
    aboutTitle: "Men haqimda",
    aboutText: "Men Frontend dasturchiman va zamonaviy web texnologiyalari bilan ishlashni yaxshi ko'raman. Yangi narsalarni o'rganish va muammolarni hal qilish mening asosiy qiziqishlarimdan biridir.",
    educationTitle: "Ta'lim",
    tatu: "Toshkent Axborot Texnologiyalari Universitetida tahsil olmoqda",
    najot: "Frontend dasturlash kursi",
    mohir: "Zamonaviy web texnologiyalari kursi",
    educationText: "U Najot Ta'lim va MohirDev kurslarida ham o'qib, o'z bilim va tajribasini yanada oshirib bormoqda",
    portfolio: "Portfolio",
    portfolioAlert: "Portfolio sahifasi ochildi!",
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    twitter: "Twitter",
    whatsapp: "WhatsApp",
    discord: "Discord",
    codepen: "CodePen",
    dribbble: "Dribbble",
    behance: "Behance",
    tiktok: "TikTok",
    emailSub: "Elektron pochta",
    phoneSub: "Mobil telefon",
    locationMain: "O'zbekiston",
    locationSub: "Davlat",
    emailBtn: "Email yuborish",
    callBtn: "Qo'ng'iroq qilish",
    mapBtn: "Xaritada ko'rsatish",
    contactBtn: "Aloqa",
    modalTitle: "Menga xabar yuboring",
    nameLabel: "Ismingiz",
    emailLabel: "Elektron pochtangiz",
    subjectLabel: "Mavzu",
    messageLabel: "Xabaringiz",
    submitBtn: "Xabarni yuborish",
    namePlaceholder: "Ismingizni kiriting",
    emailPlaceholder: "Elektron pochtangizni kiriting",
    subjectPlaceholder: "Mavzuni kiriting",
    messagePlaceholder: "Xabaringizni kiriting",
    emailOpened: "✉️ Email dasturi ochildi",
    calling: "📞 Qo'ng'iroq qilinmoqda...",
    locationAlert: "🗺️ O'zbekiston xaritasi ochilmoqda...",
    messageSent: "✅ Xabaringiz muvaffaqiyatli yuborildi!",
    viewAll: "Barchasini ko'rish",
    connectWithMe: "Men bilan bog'laning",
    skills: "Ko'nikmalar",
    experience: "Tajriba",
    projects: "Loyihalar",
    followers: "Obunachilar",
    following: "Kuzatilmoqda",
    posts: "Postlar",
  },
  ru: {
    title: "Frontend Разработчик",
    theme: "Тема",
    extra: "Информация",
    aboutTitle: "Обо мне",
    aboutText: "Я Frontend разработчик и люблю работать с современными веб-технологиями. Изучение новых вещей и решение проблем - одна из моих основных интересов.",
    educationTitle: "Образование",
    tatu: "Учусь в Ташкентском университете информационных технологий",
    najot: "Курс Frontend разработки",
    mohir: "Курс современных веб-технологий",
    educationText: "Он также учится на курсах Najot Ta'lim и MohirDev, продолжая повышать свои знания и опыт",
    portfolio: "Портфолио",
    portfolioAlert: "Страница портфолио открыта!",
    github: "ГитХаб",
    linkedin: "ЛинкедИн",
    telegram: "Телеграм",
    instagram: "Инстаграм",
    facebook: "Фейсбук",
    youtube: "Ютуб",
    twitter: "Твиттер",
    whatsapp: "Ватсап",
    discord: "Дискорд",
    codepen: "КодПен",
    dribbble: "Дриббл",
    behance: "Биханс",
    tiktok: "ТикТок",
    emailSub: "Электронная почта",
    phoneSub: "Мобильный телефон",
    locationMain: "Узбекистан",
    locationSub: "Государство",
    emailBtn: "Отправить Email",
    callBtn: "Позвонить",
    mapBtn: "Показать на карте",
    contactBtn: "Контакт",
    modalTitle: "Отправить мне сообщение",
    nameLabel: "Ваше имя",
    emailLabel: "Ваш email",
    subjectLabel: "Тема",
    messageLabel: "Ваше сообщение",
    submitBtn: "Отправить сообщение",
    namePlaceholder: "Введите ваше имя",
    emailPlaceholder: "Введите ваш email",
    subjectPlaceholder: "Введите тему",
    messagePlaceholder: "Введите ваше сообщение",
    emailOpened: "✉️ Почтовое приложение открыто",
    calling: "📞 Звонок осуществляется...",
    locationAlert: "🗺️ Открывается карта Узбекистана...",
    messageSent: "✅ Ваше сообщение успешно отправлено!",
    viewAll: "Посмотреть все",
    connectWithMe: "Связаться со мной",
    skills: "Навыки",
    experience: "Опыт",
    projects: "Проекты",
    followers: "Подписчики",
    following: "Подписки",
    posts: "Посты",
  },
  en: {
    title: "Frontend Developer",
    theme: "Theme",
    extra: "Information",
    aboutTitle: "About Me",
    aboutText: "I am a Frontend developer and I enjoy working with modern web technologies. Learning new things and solving problems is one of my main interests.",
    educationTitle: "Education",
    tatu: "Studying at Tashkent University of Information Technologies",
    najot: "Frontend development course",
    mohir: "Modern web technologies course",
    educationText: "He is also studying at Najot Ta'lim and MohirDev courses, continuing to improve his knowledge and experience",
    portfolio: "Portfolio",
    portfolioAlert: "Portfolio page opened!",
    github: "GitHub",
    linkedin: "LinkedIn",
    telegram: "Telegram",
    instagram: "Instagram",
    facebook: "Facebook",
    youtube: "YouTube",
    twitter: "Twitter",
    whatsapp: "WhatsApp",
    discord: "Discord",
    codepen: "CodePen",
    dribbble: "Dribbble",
    behance: "Behance",
    tiktok: "TikTok",
    emailSub: "Email",
    phoneSub: "Mobile Phone",
    locationMain: "Uzbekistan",
    locationSub: "Country",
    emailBtn: "Send Email",
    callBtn: "Make Call",
    mapBtn: "Show on Map",
    contactBtn: "Contact",
    modalTitle: "Send me a message",
    nameLabel: "Your Name",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Your Message",
    submitBtn: "Send Message",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    subjectPlaceholder: "Enter subject",
    messagePlaceholder: "Enter your message",
    emailOpened: "✉️ Email app opened",
    calling: "📞 Calling...",
    locationAlert: "🗺️ Opening Uzbekistan map...",
    messageSent: "✅ Your message has been sent successfully!",
    viewAll: "View All",
    connectWithMe: "Connect with Me",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    followers: "Followers",
    following: "Following",
    posts: "Posts",
  },
};

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [language, setLanguage] = useState('uz');
  const [showInfoPanel, setShowInfoPanel] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [notification, setNotification] = useState(null);
  const socialGridRef = useRef(null);

  // Barcha ijtimoiy tarmoqlar
  const socialLinks = [
    {
      id: 'portfolio',
      name: 'Portfolio',
      icon: 'fas fa-briefcase',
      color: '#6366f1',
      url: 'https://azizjondev-alpha.vercel.app/',
      description: 'My Projects',
      bgColor: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      category: 'portfolio',
      stats: { projects: 24 }
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: 'fab fa-github',
      color: '#333333',
      url: 'https://github.com/NorimboyevAzizjon',
      description: 'Code & Repositories',
      bgColor: 'linear-gradient(135deg, #333333 0%, #666666 100%)',
      category: 'coding',
      stats: { repos: 47, stars: 128 }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      color: '#0077b5',
      url: 'https://www.linkedin.com/in/azizjon-norimboyev-dev',
      description: 'Professional Network',
      bgColor: 'linear-gradient(135deg, #0077b5 0%, #00a0dc 100%)',
      category: 'professional',
      stats: { connections: 500 }
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: 'fab fa-telegram',
      color: '#0088cc',
      url: 'https://t.me/AzizjonNorimboyev',
      description: 'Direct Messages',
      bgColor: 'linear-gradient(135deg, #0088cc 0%, #33b7f6 100%)',
      category: 'messaging',
      stats: { subscribers: 150 }
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: 'fab fa-instagram',
      color: '#e1306c',
      url: 'https://instagram.com/azizjondev_',
      description: 'Photos & Stories',
      bgColor: 'linear-gradient(135deg, #e1306c 0%, #f77737 100%)',
      category: 'social',
      stats: { followers: 1200, posts: 86 }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: 'fab fa-facebook',
      color: '#1877f2',
      url: 'https://facebook.com/azizjondev_',
      description: 'Social Network',
      bgColor: 'linear-gradient(135deg, #1877f2 0%, #3b5998 100%)',
      category: 'social',
      stats: { friends: 850 }
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: 'fab fa-youtube',
      color: '#ff0000',
      url: 'https://www.youtube.com/channel/UCW37ULgmMZpaMD3uc1B6HiA',
      description: 'Video Tutorials',
      bgColor: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
      category: 'video',
      stats: { subscribers: 320, videos: 15 }
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      color: '#25d366',
      url: 'https://wa.me/998933642030',
      description: 'Instant Chat',
      bgColor: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
      category: 'messaging',
      stats: { online: true }
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: 'fab fa-twitter',
      color: '#1da1f2',
      url: 'https://twitter.com',
      description: 'Thoughts & News',
      bgColor: 'linear-gradient(135deg, #1da1f2 0%, #1a91da 100%)',
      category: 'social',
      stats: { tweets: 240, followers: 350 }
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: 'fab fa-discord',
      color: '#7289da',
      url: 'https://discord.com',
      description: 'Community & Chat',
      bgColor: 'linear-gradient(135deg, #7289da 0%, #99aab5 100%)',
      category: 'community',
      stats: { servers: 5 }
    },
    {
      id: 'codepen',
      name: 'CodePen',
      icon: 'fab fa-codepen',
      color: '#000000',
      url: 'https://codepen.io',
      description: 'Code Playground',
      bgColor: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      category: 'coding',
      stats: { pens: 12 }
    },
    {
      id: 'dribbble',
      name: 'Dribbble',
      icon: 'fab fa-dribbble',
      color: '#ea4c89',
      url: 'https://dribbble.com',
      description: 'Design Showcase',
      bgColor: 'linear-gradient(135deg, #ea4c89 0%, #c32361 100%)',
      category: 'design',
      stats: { shots: 8, likes: 240 }
    },
    {
      id: 'behance',
      name: 'Behance',
      icon: 'fab fa-behance',
      color: '#1769ff',
      url: 'https://behance.net',
      description: 'Creative Portfolio',
      bgColor: 'linear-gradient(135deg, #1769ff 0%, #0057ff 100%)',
      category: 'design',
      stats: { projects: 6 }
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: 'fab fa-tiktok',
      color: '#000000',
      url: 'https://tiktok.com',
      description: 'Short Videos',
      bgColor: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
      category: 'video',
      stats: { followers: 5000, likes: 25000 }
    },
    {
      id: 'reddit',
      name: 'Reddit',
      icon: 'fab fa-reddit',
      color: '#ff4500',
      url: 'https://reddit.com',
      description: 'Communities',
      bgColor: 'linear-gradient(135deg, #ff4500 0%, #ff5700 100%)',
      category: 'community',
      stats: { karma: 1200 }
    },
    {
      id: 'spotify',
      name: 'Spotify',
      icon: 'fab fa-spotify',
      color: '#1db954',
      url: 'https://open.spotify.com',
      description: 'Music Playlists',
      bgColor: 'linear-gradient(135deg, #1db954 0%, #1ed760 100%)',
      category: 'entertainment',
      stats: { playlists: 8 }
    }
  ];

  const userData = {
    name: "Azizjon Norimboyev",
    email: "norimboyevazizjon29@gmail.com",
    phone: "+998933642030",
    location: "O'zbekiston",
    locationUrl: "https://www.google.com/maps/place/Uzbekistan",
    stats: {
      experience: "2+ Years",
      projects: "24+",
      clients: "15+",
      skills: "12+"
    }
  };

  const categories = [
    { id: 'all', name: 'All', icon: 'fas fa-globe', count: socialLinks.length },
    { id: 'coding', name: 'Coding', icon: 'fas fa-code', count: socialLinks.filter(s => s.category === 'coding').length },
    { id: 'social', name: 'Social', icon: 'fas fa-users', count: socialLinks.filter(s => s.category === 'social').length },
    { id: 'design', name: 'Design', icon: 'fas fa-paint-brush', count: socialLinks.filter(s => s.category === 'design').length },
    { id: 'messaging', name: 'Messaging', icon: 'fas fa-comments', count: socialLinks.filter(s => s.category === 'messaging').length },
    { id: 'video', name: 'Video', icon: 'fas fa-video', count: socialLinks.filter(s => s.category === 'video').length }
  ];

  const filteredLinks = activeCategory === 'all' 
    ? socialLinks 
    : socialLinks.filter(link => link.category === activeCategory);

  const t = translations[language] || translations['uz'];

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    showNotification(darkTheme ? "☀️ Yorug' tema yoqildi" : "🌙 Qorong'u tema yoqildi", "success");
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    const langNames = { uz: "O'zbek", ru: "Русский", en: "English" };
    showNotification(`🌐 ${langNames[lang]} tiliga o'zgartirildi`, "success");
  };

  const sendEmail = () => {
    window.location.href = `mailto:${userData.email}`;
    showNotification(t.emailOpened, "success");
  };

  const makeCall = () => {
    window.location.href = `tel:${userData.phone}`;
    showNotification(t.calling, "success");
  };

  const showLocation = () => {
    showNotification(t.locationAlert, "success");
    setTimeout(() => {
      window.open(userData.locationUrl, "_blank");
    }, 1000);
  };

  const openLink = (url, name) => {
    if (url === '#' || url === '') {
      showNotification(`🚧 ${name} tez orada qo'shiladi!`, "warning");
    } else {
      window.open(url, '_blank');
      showNotification(`🔗 ${name} ochildi!`, "success");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showNotification(t.messageSent, "success");
    setShowModal(false);
  };

  useEffect(() => {
    document.title = `Azizjon Norimboyev | ${t.title}`;
    
    // Parallax effect for background
    const handleMouseMove = (e) => {
      const moveX = (e.clientX * -0.01);
      const moveY = (e.clientY * -0.01);
      document.documentElement.style.setProperty('--mouse-x', `${moveX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${moveY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [t.title]);

  return (
    <div className={`app ${darkTheme ? 'dark-theme' : ''}`}>
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Main Container */}
      <div className="main-container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-code"></i>
              <span className="logo-text">AzizjonDev</span>
            </div>
            
            <div className="header-actions">
              <div className="theme-switcher" onClick={toggleTheme}>
                <div className={`switch-track ${darkTheme ? 'dark' : ''}`}>
                  <div className="switch-thumb">
                    <i className={`fas ${darkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
                  </div>
                </div>
              </div>
              
              <div className="language-selector">
                {['uz', 'ru', 'en'].map((lang) => (
                  <button
                    key={lang}
                    className={`lang-btn ${language === lang ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang)}
                    title={lang === 'uz' ? "O'zbek" : lang === 'ru' ? "Русский" : "English"}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Profile Section */}
        <section className="profile-section">
          <div className="profile-card">
            <div className="avatar-container">
              <div className="avatar-wrapper">
                <img
                  src="/images/Norimboyev__Azizjon.JPG"
                  alt="Azizjon Norimboyev"
                  className="avatar"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  }}
                />
                <div className="avatar-status online"></div>
                <div className="avatar-ring"></div>
              </div>
              
              <div className="profile-info">
                <h1 className="profile-name">{userData.name}</h1>
                <p className="profile-title">
                  <i className="fas fa-laptop-code"></i>
                  {t.title}
                </p>
                <p className="profile-location">
                  <i className="fas fa-map-marker-alt"></i>
                  {t.locationMain}
                </p>
              </div>
            </div>
            
            <div className="profile-stats">
              <div className="stat">
                <div className="stat-value">{userData.stats.experience}</div>
                <div className="stat-label">{t.experience}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{userData.stats.projects}</div>
                <div className="stat-label">{t.projects}</div>
              </div>
              <div className="stat">
                <div className="stat-value">{userData.stats.clients}</div>
                <div className="stat-label">Mijozlar</div>
              </div>
              <div className="stat">
                <div className="stat-value">{userData.stats.skills}</div>
                <div className="stat-label">{t.skills}</div>
              </div>
            </div>
            
            <div className="profile-actions">
              <button className="btn-primary" onClick={() => setShowInfoPanel(!showInfoPanel)}>
                <i className="fas fa-user"></i>
                {t.extra}
              </button>
              <button className="btn-secondary" onClick={() => setShowModal(true)}>
                <i className="fas fa-envelope"></i>
                {t.contactBtn}
              </button>
            </div>
          </div>
        </section>

        {/* Info Panel */}
        {showInfoPanel && (
          <section className="info-section">
            <div className="info-grid">
              <div className="info-card">
                <h3 className="info-title">
                  <i className="fas fa-user-graduate"></i>
                  {t.aboutTitle}
                </h3>
                <p className="info-text">{t.aboutText}</p>
              </div>
              
              <div className="info-card">
                <h3 className="info-title">
                  <i className="fas fa-university"></i>
                  {t.educationTitle}
                </h3>
                <ul className="education-list">
                  <li>
                    <i className="fas fa-graduation-cap"></i>
                    <strong>TATU</strong> - {t.tatu}
                  </li>
                  <li>
                    <i className="fas fa-book"></i>
                    <strong>Najot Ta'lim</strong> - {t.najot}
                  </li>
                  <li>
                    <i className="fas fa-laptop"></i>
                    <strong>MohirDev</strong> - {t.mohir}
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Social Links Section */}
        <section className="social-section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-share-alt"></i>
              {t.connectWithMe}
            </h2>
            <p className="section-subtitle">Barcha ijtimoiy tarmoqlarim</p>
          </div>
          
          {/* Categories */}
          <div className="categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <i className={category.icon}></i>
                <span>{category.name}</span>
                <span className="category-count">{category.count}</span>
              </button>
            ))}
          </div>
          
          {/* Social Grid */}
          <div className="social-grid" ref={socialGridRef}>
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                className="social-card"
                style={{ '--card-color': link.color }}
                onClick={() => openLink(link.url, link.name)}
              >
                <div className="card-header">
                  <div className="card-icon" style={{ background: link.bgColor }}>
                    <i className={link.icon}></i>
                  </div>
                  <div className="card-title">
                    <h3>{t[link.id] || link.name}</h3>
                    <p>{link.description}</p>
                  </div>
                </div>
                
                <div className="card-stats">
                  {Object.entries(link.stats || {}).map(([key, value]) => (
                    <div key={key} className="stat-item">
                      <span className="stat-value">
                        {typeof value === 'boolean' ? 
                          (value ? <i className="fas fa-circle online"></i> : <i className="fas fa-circle offline"></i>) 
                          : value}
                      </span>
                      <span className="stat-key">
                        {key === 'projects' && t.projects}
                        {key === 'followers' && t.followers}
                        {key === 'posts' && t.posts}
                        {key === 'repos' && 'Repos'}
                        {key === 'stars' && 'Stars'}
                        {key === 'connections' && 'Connections'}
                        {key === 'subscribers' && 'Subscribers'}
                        {key === 'friends' && 'Friends'}
                        {key === 'videos' && 'Videos'}
                        {key === 'online' && 'Status'}
                        {key === 'tweets' && 'Tweets'}
                        {key === 'servers' && 'Servers'}
                        {key === 'pens' && 'Pens'}
                        {key === 'shots' && 'Shots'}
                        {key === 'likes' && 'Likes'}
                        {key === 'karma' && 'Karma'}
                        {key === 'playlists' && 'Playlists'}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="card-footer">
                  <button className="card-btn">
                    <i className="fas fa-external-link-alt"></i>
                    Visit
                  </button>
                </div>
                
                <div className="card-hover">
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon email">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h3>{t.emailSub}</h3>
                <p>{userData.email}</p>
                <button className="contact-btn" onClick={sendEmail}>
                  <i className="fas fa-paper-plane"></i>
                  {t.emailBtn}
                </button>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon phone">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <h3>{t.phoneSub}</h3>
                <p>{userData.phone}</p>
                <button className="contact-btn" onClick={makeCall}>
                  <i className="fas fa-phone-alt"></i>
                  {t.callBtn}
                </button>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon location">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-content">
                <h3>{t.locationSub}</h3>
                <p>{t.locationMain}</p>
                <button className="contact-btn" onClick={showLocation}>
                  <i className="fas fa-map-marked-alt"></i>
                  {t.mapBtn}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p className="copyright">
            © {new Date().getFullYear()} Azizjon Norimboyev. All rights reserved.
          </p>
          <p className="footer-text">
            Made with <i className="fas fa-heart"></i> and <i className="fas fa-code"></i>
          </p>
        </footer>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>
                <i className="fas fa-paper-plane"></i>
                {t.modalTitle}
              </h2>
              <button className="modal-close" onClick={() => setShowModal(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <i className="fas fa-user"></i>
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder={t.namePlaceholder}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">
                  <i className="fas fa-envelope"></i>
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">
                  <i className="fas fa-tag"></i>
                  {t.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder={t.subjectPlaceholder}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">
                  <i className="fas fa-comment"></i>
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  placeholder={t.messagePlaceholder}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                <i className="fas fa-paper-plane"></i>
                {t.submitBtn}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
          <span>{notification.message}</span>
        </div>
      )}
    </div>
  );
}

export default App;