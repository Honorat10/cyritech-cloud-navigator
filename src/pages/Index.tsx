
import { LanguageProvider, useLanguage } from '../hooks/useLanguage';
import Navigation from '../components/Navigation';

const HomeContent = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('welcome.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('welcome.subtitle')}
            </p>
            <div className="space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t('nav.services')}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                {t('nav.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Preview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            {[
              { key: 'audit', icon: '🔍' },
              { key: 'web', icon: '💻' },
              { key: 'digital', icon: '🚀' },
              { key: 'security', icon: '🔒' },
              { key: 'cloud', icon: '☁️' },
              { key: 'support', icon: '🛠️' }
            ].map((service) => (
              <div key={service.key} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t(`service.${service.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`service.${service.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">{t('footer.company')}</h3>
              <p className="text-gray-300 mb-4">
                {t('footer.tagline')}
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t('service.audit.title')}</li>
                <li>{t('service.web.title')}</li>
                <li>{t('service.digital.title')}</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="text-gray-300">
                <p>contact@cyrigroup.com</p>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
};

export default Index;
