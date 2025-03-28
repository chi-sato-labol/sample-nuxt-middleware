<template>
  <div class="flex flex-col gap-4">
    <nav class="flex  justify-between bg-gray-100 p-3">
      <ul class="flex gap-4">
        <li><NuxtLink to="/" class="text-blue-700 underline">Public Page</NuxtLink></li>
        <li><NuxtLink to="/admin" class="text-blue-700 underline">Admin Page</NuxtLink></li>
        <li><NuxtLink to="/member" class="text-blue-700 underline">Member Page</NuxtLink></li>
      </ul>
      <p>👤 {{ accountTypeCookie }}ユーザー</p>
    </nav>
    <NuxtPage /> 
  </div>
</template>

<script setup lang="ts">
const accountTypeCookie = useCookie('accountType')
accountTypeCookie.value = 'admin'
</script>
