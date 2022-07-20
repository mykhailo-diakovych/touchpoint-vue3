<template>
  <router-link :to="link" class="row items-center action-button">
    <span :class="`icon-${icon}`"></span>
    <p>{{ title }}</p>
  </router-link>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{ link?: string; icon?: string | null; title?: string }>(),
  {
    link: "/",
    icon: null,
    title: "",
  }
);
</script>
