<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md">
      <h2 class="text-center text-2xl mb-4">Register</h2>
      <form @submit.prevent="register">
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          class="border p-2 rounded w-full mb-4"
        />
        <button type="submit" class="bg-blue-600 text-white p-2 rounded w-full">
          Register
        </button>
      </form>
      <p class="text-center mt-4">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter();

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords don't match");
    return;
  }
  try {
    // API call for registration
    router.push("/login");
  } catch (error) {
    console.error("Registration failed", error);
  }
};
</script>
