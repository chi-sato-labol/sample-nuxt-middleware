<template>
  <div>
    <h1 class="text-xl bold">Member Page</h1>
    <p>このページはメンバーのみが閲覧できます。</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
</script>