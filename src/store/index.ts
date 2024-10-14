import { defineStore } from "pinia";

export const useFoodStore = defineStore("food", {
  state: () => ({
    foodItems: [],
  }),
  actions: {
    addFood(item) {
      this.foodItems.push(item);
    },
    updateFood(index, newItem) {
      this.foodItems[index] = newItem;
    },
    deleteFood(index) {
      this.foodItems.splice(index, 1);
    },
  },
});
