<template>
  <q-tabs
    v-model="tabActive"
    active-color="grey"
    indicator-color="blue"
    content-class="nav-tabs"
    active-class="active"
    active-bg-color="transparent"
    no-caps
    class="nav-tabs"
  >
    <q-tab
      v-for="item in items"
      :key="item.id"
      :name="item.id"
      :label="item.title"
    />
  </q-tabs>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import type { TabItem } from "@/constants/types";

const tabActive = ref("");
const emit = defineEmits(["changeTab"]);

watch(
  () => tabActive.value,
  (val) => emit("changeTab", val)
);

const props = withDefaults(
  defineProps<{ items?: TabItem[]; activeTab?: string }>(),
  {
    items: () => [],
    activeTab: "",
  }
);

onMounted(() => {
  tabActive.value = props.activeTab;
});
</script>
