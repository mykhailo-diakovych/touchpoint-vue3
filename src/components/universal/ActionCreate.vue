<template>
  <q-btn-dropdown no-caps class="action-create" label="Create">
    <q-list class="action-create-list">
      <q-item
        class="action-create-item row items-center q-pa-none"
        v-for="(item, index) in buttons"
        :key="index"
        clickable
        v-close-popup
      >
        <button class="create-icon row no-wrap bg-transparent cursor-pointer">
          <span :class="'icon-' + item.icon" />
          {{ item.title }}
        </button>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Button {
  title: string;
  icon: string;
}

const buttons = ref<Button[]>([
  { title: "Text message", icon: "text" },
  { title: "Email", icon: "tickets" },
  { title: "Call", icon: "phone" },
  { title: "Campaign", icon: "campaigns" },
  { title: "Task", icon: "tasks" },
  { title: "Deal", icon: "deals" },
  { title: "Contact", icon: "contact" },
  { title: "Organization", icon: "organizations" },
  { title: "List", icon: "contacts" },
  { title: "Segment", icon: "segment" },
]);
</script>
