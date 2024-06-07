import { defineStore } from "pinia";

export const apiStore = defineStore("api", {
  state: () => ({
    address: "http://5.34.195.173:8000/",
  }),
  actions: {},
});
