
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
  flags: { [key: string]: string };
  languageNames: { [key: string]: string };
}

const translations: Translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.audit': 'Audit Gratuit',
    'hero.title': 'Nos Services',
    'hero.subtitle': 'Solutions informatiques complètes pour transformer votre entreprise',
    'services.title': 'Nos Services',
    'service.audit.title': 'Audit Informatique',
    'service.audit.desc': 'Évaluation complète de votre infrastructure IT pour identifier les points d\'amélioration et optimiser vos performances.',
    'service.web.title': 'Développement Web',
    'service.web.desc': 'Création de sites web et applications web modernes, responsive et optimisées pour le référencement.',
    'service.digital.title': 'Transformation Digitale',
    'service.digital.desc': 'Accompagnement stratégique pour moderniser vos processus et adopter les technologies innovantes.',
    'service.security.title': 'Sécurité Informatique',
    'service.security.desc': 'Protection avancée de vos données et systèmes contre les menaces cybernétiques.',
    'service.cloud.title': 'Infrastructure Cloud',
    'service.cloud.desc': 'Migration et gestion d\'infrastructures cloud sécurisées pour optimiser vos coûts et performances.',
    'service.support.title': 'Support Technique',
    'service.support.desc': 'Assistance technique 24/7 pour maintenir vos systèmes opérationnels et résoudre rapidement les incidents.',
    'footer.company': 'CYRI GROUP',
    'footer.tagline': 'Votre partenaire technologique de confiance pour transformer votre entreprise.',
    'footer.services': 'Services',
    'footer.offices': 'Nos Bureaux',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 CYRI GROUP. Tous droits réservés.',
    'welcome.title': 'Bienvenue chez CYRI GROUP',
    'welcome.subtitle': 'Votre partenaire technologique de confiance'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.audit': 'Free Audit',
    'hero.title': 'Our Services',
    'hero.subtitle': 'Complete IT solutions to transform your business',
    'services.title': 'Our Services',
    'service.audit.title': 'IT Audit',
    'service.audit.desc': 'Complete evaluation of your IT infrastructure to identify improvement points and optimize your performance.',
    'service.web.title': 'Web Development',
    'service.web.desc': 'Creation of modern, responsive websites and web applications optimized for SEO.',
    'service.digital.title': 'Digital Transformation',
    'service.digital.desc': 'Strategic support to modernize your processes and adopt innovative technologies.',
    'service.security.title': 'IT Security',
    'service.security.desc': 'Advanced protection of your data and systems against cyber threats.',
    'service.cloud.title': 'Cloud Infrastructure',
    'service.cloud.desc': 'Migration and management of secure cloud infrastructures to optimize your costs and performance.',
    'service.support.title': 'Technical Support',
    'service.support.desc': '24/7 technical assistance to keep your systems operational and quickly resolve incidents.',
    'footer.company': 'CYRI GROUP',
    'footer.tagline': 'Your trusted technology partner to transform your business.',
    'footer.services': 'Services',
    'footer.offices': 'Our Offices',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2024 CYRI GROUP. All rights reserved.',
    'welcome.title': 'Welcome to CYRI GROUP',
    'welcome.subtitle': 'Your trusted technology partner'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我们',
    'nav.services': '服务',
    'nav.contact': '联系我们',
    'nav.audit': '免费审计',
    'hero.title': '我们的服务',
    'hero.subtitle': '完整的IT解决方案，助力企业数字化转型',
    'services.title': '我们的服务',
    'service.audit.title': 'IT审计',
    'service.audit.desc': '全面评估您的IT基础设施，识别改进点并优化性能。',
    'service.web.title': '网站开发',
    'service.web.desc': '创建现代化、响应式网站和网络应用程序，优化SEO。',
    'service.digital.title': '数字化转型',
    'service.digital.desc': '战略性支持，帮助您现代化流程并采用创新技术。',
    'service.security.title': 'IT安全',
    'service.security.desc': '高级数据和系统保护，抵御网络威胁。',
    'service.cloud.title': '云基础设施',
    'service.cloud.desc': '迁移和管理安全的云基础设施，优化成本和性能。',
    'service.support.title': '技术支持',
    'service.support.desc': '24/7技术支持，保持系统运行并快速解决问题。',
    'footer.company': 'CYRI GROUP',
    'footer.tagline': '您值得信赖的技术合作伙伴，助力企业转型。',
    'footer.services': '服务',
    'footer.offices': '我们的办公室',
    'footer.contact': '联系方式',
    'footer.copyright': '© 2024 CYRI GROUP. 版权所有。',
    'welcome.title': '欢迎来到 CYRI GROUP',
    'welcome.subtitle': '您值得信赖的技术合作伙伴'
  }
};

const flags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  zh: '🇨🇳'
};

const languageNames = {
  fr: 'Français',
  en: 'English',
  zh: '中文'
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    return localStorage.getItem('language') || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
  }, [currentLanguage]);

  const changeLanguage = (lang: string) => {
    setCurrentLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      changeLanguage,
      t,
      flags,
      languageNames
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
