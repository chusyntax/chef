<template>
  <div class="p-4">
    <h1 class="text-2xl mb-4">Food Inventory Dashboard</h1>
    <ul>
      <li v-for="(item, index) in foodItems" :key="index" class="mb-2">
        {{ item.name }} - {{ item.quantity }}
        <button @click="deleteFood(index)" class="ml-2 text-red-600">
          Delete
        </button>
        <button @click="editFood(index)" class="ml-2 text-blue-600">
          Edit
        </button>
      </li>
    </ul>
    <form @submit.prevent="addFood" class="mt-4">
      <input
        v-model="newItem.name"
        placeholder="Food name"
        required
        class="border p-2 rounded mr-2"
      />
      <input
        v-model="newItem.quantity"
        placeholder="Quantity"
        type="number"
        required
        class="border p-2 rounded"
      />
      <button type="submit" class="ml-2 bg-green-600 text-white p-2 rounded">
        Add Food
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useFoodStore } from "../store/food";

const store = useFoodStore();
const foodItems = store.foodItems;
const newItem = ref({ name: "", quantity: 0 });

const addFood = () => {
  store.addFood(newItem.value);
  newItem.value = { name: "", quantity: 0 };
};

const deleteFood = (index) => {
  store.deleteFood(index);
};

const editFood = (index) => {
  const item = foodItems[index];
  newItem.value = { name: item.name, quantity: item.quantity };
  store.deleteFood(index); // Edit means removing and adding the updated food
};
</script>
