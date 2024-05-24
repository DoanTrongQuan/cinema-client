
import { defineStore } from "pinia";

import { createToast } from "~/utils/toast";
import { getAllPromotion } from "~/repositories/cinema/promotionRepo";
import { useMovieStore } from "./useMovieStore";

export const usePromotionStore = defineStore({
  id: "promotionStore",
  state: () => ({
    isShowLoading: false,
    events:[]

  }),
  getters: {},
  actions: {
    async getAllPromotion() {
      try {
        useMovieStore().isShowLoading = true;
        const res = await getAllPromotion()
        this.events = res.data
      } catch (error) {
        
      }finally {
        useMovieStore().isShowLoading = false;
      }
    },

  }
});
