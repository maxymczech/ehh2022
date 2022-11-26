import './LanguagePicker.scss';
import React, {useCallback} from 'react';
import {useSessionContext} from '../../contexts/SessionContext';

export default function LanguagePicker() {
  const {currentLocale, setLanguageModalOpen} = useSessionContext();

  const handleClick = useCallback(() => {
    setLanguageModalOpen(true);
  }, [setLanguageModalOpen]);

  return (
    <button
      className={`language-picker ${currentLocale}`}
      onClick={handleClick}
    />
  );
}
