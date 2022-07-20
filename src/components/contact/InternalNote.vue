<template>
  <div class="contact-create-new-card__textarea">
    <textarea :placeholder="`Click to add ${title}`" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: "note" });
</script>
