<template>
  <q-btn-dropdown no-caps class="profile-setting">
    <template v-slot:label>
      <div class="row no-wrap items-center">
        <p class="q-mb-none">TextMagic</p>
        <q-avatar>
          <img
            class="avatar"
            src="https://cdn.quasar.dev/img/avatar.png"
            alt="avatar"
          />
        </q-avatar>
      </div>
    </template>
    <div
      class="profile-setting-account row no-wrap items-center justify-center"
    >
      <div class="column justify-center items-center">
        <div class="relative-position">
          <img
            class="avatar q-avatar"
            src="https://cdn.quasar.dev/img/avatar.png"
            alt="avatar"
          />
          <span class="setting-account-status" />
        </div>
        <p class="setting-account-name q-mt-sm">Robert Overrit</p>
        <p class="setting-account-email">robert.overrit@textmagic.com</p>
        <button class="setting-account-manage bg-transparent cursor-pointer">
          Manage account
        </button>
      </div>
    </div>
    <div
      class="profile-setting-link q-pa-md row no-wrap items-center justify-between"
    >
      <img src="@/assets/img/components/header/user.svg" alt="user" />
      <div>
        <p class="setting-link-name q-pb-xs">TextMagic</p>
        <p class="setting-link-email">textmagic.touchpoint.com</p>
      </div>
      <button class="setting-link-arrow bg-transparent cursor-pointer">
        <span class="icon-page-path"></span>
      </button>
    </div>
    <q-list>
      <q-item
        class="profile-setting-actions"
        v-for="(item, index) in accountButtons"
        :key="index"
        clickable
        v-close-popup
      >
        <button class="row no-wrap bg-transparent items-center cursor-pointer">
          <span class="icon q-pr-sm" :class="'icon-' + item.icon" />
          {{ item.title }}
        </button>
      </q-item>

      <button
        v-close-popup
        class="setting-actions-log-out q-px-md row no-wrap bg-transparent items-center cursor-pointer"
      >
        <span class="icon q-pr-sm icon-logout" />
        Log out
      </button>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface AccountButton {
  title: string;
  icon: string;
}

const accountButtons = ref<AccountButton[]>([
  { title: "Settings", icon: "setting" },
  { title: "Workspace", icon: "organizations" },
  { title: "Users", icon: "contacts" },
  { title: "Billing", icon: "billing" },
  { title: "Help center", icon: "help" },
]);
</script>
