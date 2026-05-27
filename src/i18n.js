import en from '../locales/en.json'
import it from '../locales/it.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import de from '../locales/de.json'

const translations = { en, it, es, fr, de }
const defaultLanguage = 'en'

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'it', label: 'Italiano' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
]

export function getCurrentLanguage() {
  const storedLanguage = window.localStorage.getItem('language')
  return translations[storedLanguage] ? storedLanguage : defaultLanguage
}

export function t(key) {
  const language = getCurrentLanguage()
  return key.split('.').reduce((value, part) => value?.[part], translations[language]) ?? key.split('.').reduce((value, part) => value?.[part], en) ?? key
}

export function setLanguage(language) {
  if (!translations[language]) return
  window.localStorage.setItem('language', language)
  window.location.reload()
}
