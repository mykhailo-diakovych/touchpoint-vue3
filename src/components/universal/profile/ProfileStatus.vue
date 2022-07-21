<template>
  <q-btn-dropdown no-caps class="profile-status">
    <template v-slot:label>
      <div class="row no-wrap items-center">
        <span class="status-green" />
        <p>Online</p>
      </div>
    </template>
    <q-list>
      <q-item class="status-item q-pa-none q-px-md" clickable v-close-popup>
        <button
          class="status-item-wrapper bg-transparent row no-wrap items-center cursor-pointer"
        >
          <span class="status-green" />
          <span>Online</span>
        </button>
      </q-item>
      <q-item
        class="status-item small q-pa-none q-px-md"
        clickable
        v-close-popup
      >
        <div class="status-item-wrapper row justify-between items-center">
          <span class="q-pr-lg q-pl-lg">Accept calls</span>
          <q-toggle
            class="toggle"
            size="sm"
            v-model="statusSwitch.acceptCalls"
            val="sm"
          />
        </div>
      </q-item>
      <q-item
        class="status-item small q-pa-none q-px-md"
        clickable
        v-close-popup
      >
        <div
          class="status-item-wrapper status-item row justify-between items-center"
        >
          <span class="q-pr-lg q-pl-lg">Accept chats</span>
          <q-toggle
            class="toggle"
            size="sm"
            v-model="statusSwitch.acceptChats"
            val="sm"
          />
        </div>
      </q-item>
      <q-item
        v-for="(item, index) in statusType"
        :key="index"
        class="status-item q-pa-none q-px-md"
        clickable
        v-close-popup
      >
        <button
          class="status-item-wrapper bg-transparent row no-wrap items-center cursor-pointer"
        >
          <span :class="'status-' + item.type" />
          <span>{{ item.title }}</span>
        </button>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface StatusSwitch {
  acceptCalls: boolean;
  acceptChats: boolean;
}

interface StatusTypeItem {
  type: string;
  title: string;
}

const statusSwitch = ref<StatusSwitch>({
  acceptCalls: false,
  acceptChats: false,
});

const statusType = ref<StatusTypeItem[]>([
  { type: "away", title: "Away" },
  { type: "do-not-disturb", title: "Do not disturb" },
  { type: "offline", title: "Offline" },
]);
</script>
