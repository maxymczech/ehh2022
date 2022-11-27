import './LanguageModal.scss';
import React, {useCallback} from 'react';
import locales from '../../locales';
import {useSessionContext} from '../../contexts/SessionContext';

export default function LanguageModal() {
  const {
    languageModalOpen,
    setCurrentLocale,
    setLanguageModalOpen,
  } = useSessionContext();

  const localeKeys = Object.keys(locales);

  const closeModal = useCallback(() => {
    setLanguageModalOpen(false);
  }, [setLanguageModalOpen]);

  const handleClick = useCallback((locale) => {
    try {
      localStorage.setItem('currentLocale', locale);
      setCurrentLocale(locale);
    } catch (e) {
      console.error(e);
    }
  }, [closeModal]);

  return languageModalOpen && (
    <div className="modal language-modal" onClick={closeModal}>
      {localeKeys.map(key => (
        <button
          className={`language-picker ${key}`}
          key={key}
          onClick={() => handleClick(key)}
        />
      ))}
    </div>
  );
}
