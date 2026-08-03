import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: localStorage.getItem("pwa-theme") || "light",
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("pwa-theme", this.theme);
      document.documentElement.dataset.theme = this.theme;
    },
    applyTheme() {
      document.documentElement.dataset.theme = this.theme;
    },
  },
});
