
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { ChevronDown } from 'lucide-react';

interface LanguageSelectorProps {
  variant?: 'desktop' | 'mobile';
}

const LanguageSelector = ({ variant = 'desktop' }: LanguageSelectorProps) => {
  const { currentLanguage, changeLanguage, flags, languageNames } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  const languages = ['fr', 'en', 'zh'];

  if (variant === 'mobile') {
    return (
      <div className="px-3 py-2 border-t border-gray-200">
        <div className="text-sm text-gray-500 mb-2">Langue</div>
        <div className="flex space-x-3">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={`flex items-center space-x-1 ${
                currentLanguage === lang 
                  ? 'text-blue-600 font-semibold' 
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              <span>{flags[lang]}</span>
              <span className="text-sm">{lang.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-blue-700"
      >
        <span className="text-lg">{flags[currentLanguage]}</span>
        <span className="text-sm font-medium">{currentLanguage.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2 first:rounded-t-lg last:rounded-b-lg"
            >
              <span className="text-sm">{flags[lang]}</span>
              <span className="text-sm">{languageNames[lang]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
