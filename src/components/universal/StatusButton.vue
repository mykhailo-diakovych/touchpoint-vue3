<template>
  <div
    class="status-tag"
    :style="`color:${color};background-color:${bgColor};border-color:${borderColor}`"
  >
    {{ title }}
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string;
    color?: string;
    bgColor?: string;
    borderColor?: string;
  }>(),
  {
    title: "",
    color: "",
    bgColor: "",
    borderColor: "",
  }
);
</script>
