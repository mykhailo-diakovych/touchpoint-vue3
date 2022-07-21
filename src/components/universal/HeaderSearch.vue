<template>
  <div class="input-row row items-center no-wrap q-ml-lg">
    <span class="icon-search q-px-sm"></span>
    <input
      class="action-input"
      placeholder="Search TextMagic workspace"
      v-model="searchQuery"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchQuery = ref<string>("");
</script>
