<template>
  <div>
    <h1 class="text-xl bold">Admin Page</h1>
    <p>このページは管理者のみが閲覧できます。</p>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
});
</script>