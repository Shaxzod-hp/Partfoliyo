import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    lang: localStorage.getItem('lang') || 'uz',
    theme: localStorage.getItem('theme') || 'dark',
  }),
  actions: {
    setLanguage(lang) {
      this.lang = lang;
      localStorage.setItem('lang', lang);
    },
    toggleTheme() {
      this.theme = this.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
    applyTheme() {
      if (this.theme === 'light') {
        document.documentElement.classList.add('light-mode');
      } else {
        document.documentElement.classList.remove('light-mode');
      }
    }
  }
});
