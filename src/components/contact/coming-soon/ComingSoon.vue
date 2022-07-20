<template>
  <h4 class="coming-soon q-mt-sm">Coming soon - {{ title }}</h4>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: "" });
</script>
