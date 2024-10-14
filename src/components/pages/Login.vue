<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md">
      <h2 class="text-center text-2xl mb-4">Login</h2>
      <form @submit.prevent="login">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="border p-2 rounded w-full mb-4"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="border p-2 rounded w-full mb-4"
        />
        <button type="submit" class="bg-blue-600 text-white p-2 rounded w-full">
          Login
        </button>
      </form>
      <p class="text-center mt-4">
        Don't have an account?
        <router-link to="/register">Register here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const login = async () => {
  try {
    // You can make an API call here for login
    // Assuming login is successful, redirect to dashboard
    router.push("/");
  } catch (error) {
    console.error("Login failed", error);
  }
};
</script>
