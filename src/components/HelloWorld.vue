<template>
  <div>
    <h1>Food Inventory</h1>
    <ul>
      <li v-for="(item, index) in foodItems" :key="index">
        {{ item.name }} - {{ item.quantity }}
        <button @click="deleteFood(index)">Delete</button>
        <button @click="editFood(index)">Edit</button>
      </li>
    </ul>
    <form @submit.prevent="addFood">
      <input v-model="newItem.name" placeholder="Food name" required />
      <input
        v-model="newItem.quantity"
        placeholder="Quantity"
        type="number"
        required
      />
      <button type="submit">Add Food</button>
    </form>
  </div>
</template>

<script setup>
import { useFoodStore } from "../store/food";
import { ref } from "vue";

const store = useFoodStore();
const newItem = ref({ name: "", quantity: 0 });

const addFood = () => {
  store.addFood(newItem.value);
  newItem.value = { name: "", quantity: 0 };
};

const deleteFood = (index) => {
  store.deleteFood(index);
};

const editFood = (index) => {
  // implement editing logic
};
</script>
