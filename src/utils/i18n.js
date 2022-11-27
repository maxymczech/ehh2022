import locales from '../locales';

export default {
  t: path => {
    const currentLocale = localStorage.getItem('currentLocale') || 'en';
    if (!(currentLocale in locales)) {
      return path;
    }
    const keys = path.split('.');
    let obj = locales[currentLocale];
    for (const key of keys) {
      if (key in obj) {
        obj = obj[key];
      } else {
        return path;
      }
    }
    return typeof obj === 'string' ? obj : path;
  }
}
