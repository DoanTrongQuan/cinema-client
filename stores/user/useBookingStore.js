
import { defineStore } from "pinia";
import { getAllSeat } from '~/repositories/cinema/bookingRepo';
import { useCinemaStore } from "@/stores/user/useCinemaStore.js";


export const useBookingStore = defineStore({
  id: "bookingStore",
  state: () => ({
    seats:[]

  }),
  getters: {},
  actions: {
    async getAllSeat(data){
        try {
          const res = await getAllSeat(data)
          this.seats = res.data;

        } catch (error) {  
          console.log(error);
        }
    },
  }
});
