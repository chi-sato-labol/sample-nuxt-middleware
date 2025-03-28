<template>
  <div>
    <nav>
      <ul>
        <li><NuxtLink to="/">Public Page</NuxtLink></li>
        <li><NuxtLink to="/admin">Admin Page</NuxtLink></li>
        <li><NuxtLink to="/member">Member Page</NuxtLink></li>
      </ul>
    </nav>
    <NuxtPage /> 
  </div>
</template>

<script setup lang="ts">
const accountTypeCookie = useCookie('accountType')
accountTypeCookie.value = 'admin'
</script>
