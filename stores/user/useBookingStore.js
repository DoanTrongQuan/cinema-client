
import { defineStore } from "pinia";
import { getAllSeat, updateSeatStatus, 
  createBill, resetSeatStatus,getMovie,
  getAllFood,getAllPromotionByUser,chooseFood,getDiscountAmount,submitOrder, 
  getTotalMoney } from '~/repositories/cinema/bookingRepo';
import { useCinemaStore } from "@/stores/user/useCinemaStore.js";
import { useMovieStore } from "./useMovieStore";

export const useBookingStore = defineStore({
  id: "bookingStore",
  state: () => ({
    seats:[],
    seatNormal:{},
    seatVip:{},
    seatDouble:{},
    totalMoney:0,
    movie:{},
    seatSelected:[],
    foods:[],
    promotions:[],
    finalAmount:0,
    discountAmount:0,
    paymentLink:'',
    

  }),
  getters: {},
  actions: {
    async getAllSeat(data){
        try {

          const res = await getAllSeat(data)
          this.seats = res.data;

        } catch (error) {  
          console.log(error);
        }finally{

        }
    },

    async updateSeatStatus(data) {
      try {
        const res = await updateSeatStatus(data);
        if(res.data.seatType == 1){
          this.seatNormal = res.data
        } else if (res.data.seatType == 2){
          this.seatVip = res.data;
        } else if (res.data.seatType == 3){
          this.seatDouble = res.data
        }
        this.totalMoney = res.data.totalMoney;
        this.seatSelected = res.data.seatSelected;
      } catch (error) {
        alert(error.response.data);
      }
    },
    updateLocalSeat(newValue){
      for (let seat of this.seats) {
          if (seat.id === newValue.seatId ) {
            seat.seatStatus = newValue.status;
            seat.userId = newValue.userId;
            break;
          }
        }
    },
    resetTotalMoney(){
        this.seatDouble = {},
        this.seatNormal = {},
        this.seatVip = {},
        this.totalMoney = 0
    },
    async getTotalMoney(user){
      try {
        const res = await getTotalMoney(user);
        this.totalMoney = res.data;
      } catch (error) {
        alert(error.response.data)
      }
    },
    async resetSeatStatus(scheduleId){
      try {
        const res = await resetSeatStatus(scheduleId)
        // console.log(data)
        for (let seat of res.data) {
          for(let s of this.seats){
            if (s.id === seat.id ) {
            s.seatStatus = seat.seatStatus;
            s.userId = seat.userId;
          }
          }
        }
        this.totalMoney = 0,
        this.seatDouble = {},
        this.seatNormal = {},
        this.seatVip = {}
      } catch (error) {
        alert(error.response.data)
      }
    },
    async createBill () {
      try {
        const res = await createBill();
        
      } catch (error) {
        alert(error.response.data)
      }
    },
    async getMovie(schedule) {
      try {
        useMovieStore().isShowLoading = true;
        const res = await getMovie(schedule);
        
        this.movie = res.data;
      
      } catch (error) {
        alert(error.response.data)
      }finally{
        useMovieStore().isShowLoading = false;
      }
    },
    async getAllFood() {
      try {
        const res = await getAllFood();
        this.foods = res.data
    
      } catch (error) {
        alert(error.response.data)
      }
    },
    async getAllPromotionByUser () {
      try {
        const res = await getAllPromotionByUser();
        this.promotions = res.data;
      } catch (error) {
        alert(error.response.data)
      }
    },

    async chooseFood (data) {
      try {
        const res = await chooseFood(data);
        this.totalMoney = res.data.totalMoney;
        this.discountAmount = res.data.discountAmount;
        this.finalAmount = res.data.finalAmount;
      } catch (error) {
        alert(error.response.data)
      }
    },
    
    async getDiscountAmount (data) {
      try {
        const res = await getDiscountAmount(data);
        this.finalAmount = res.data.finalAmount;
        this.discountAmount = res.data.discountAmount;
        this.totalMoney = res.data.totalMoney;
      } catch (error) {
        alert(error.response.data)
      }
    },

    async submitOrder (amount,user,schedule) {
      try {
        const res = await submitOrder(amount,user,schedule);
        this.paymentLink = res.data
        window.location.href = res.data;
      } catch (error) {
        alert(error.response.data.message);
      }
    },

    clear() {
      this.$reset()
    }
  }
});


  