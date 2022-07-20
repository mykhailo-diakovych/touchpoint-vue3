<template>
  <div class="tag-btn">
    {{ title }}
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: "" });
</script>
