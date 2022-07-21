<template>
  <q-header class="header">
    <q-toolbar class="header__toolbar bg-white row no-wrap">
      <div class="header__action row no-wrap items-center">
        <q-btn-dropdown
          no-caps
          class="action-create"
          label="Create"
        >
          <q-list class="action-create-list">
            <q-item
              class="action-create-item row items-center q-pa-none"
              v-for="(item, index) in buttons"
              :key="index"
              clickable
              v-close-popup
            >
              <button
                class="create-icon row no-wrap bg-transparent cursor-pointer"
              >
                <span :class="'icon-' + item.icon" />
                {{ item.title }}
              </button>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <div class="input-row row items-center no-wrap q-ml-lg">
          <span class="icon-search q-px-sm"></span>
          <input
            class="action-input"
            placeholder="Search TextMagic workspace"
            v-model="searchQuery"
          />
        </div>
      </div>
      <div class="header__profile row no-wrap justify-between">
        <q-btn-dropdown
          no-caps
          class="profile-status"
        >
          <template v-slot:label>
            <div class="row no-wrap items-center">
              <span class="status-green" />
              <p>Online</p>
            </div>
          </template>
          <q-list>
            <q-item
              class="status-item q-pa-none q-px-md"
              clickable
              v-close-popup
            >
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
        <div class="q-ml-sm row no-wrap">
          <q-btn flat color="white">
            <span class="icon-calendar header-icon" />
          </q-btn>
          <q-btn flat color="white">
            <span class="icon-bell header-icon" />
          </q-btn>
          <q-btn flat color="white">
            <span class="icon-setting header-icon" />
          </q-btn>
        </div>
        <q-btn-dropdown
          no-caps
          class="profile-setting"
        >
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
              <button
                class="setting-account-manage bg-transparent cursor-pointer"
              >
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
              <button
                class="row no-wrap bg-transparent items-center cursor-pointer"
              >
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
      </div>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const searchQuery = ref("");
const buttons = ref([
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
const statusSwitch = ref({
  acceptCalls: false,
  acceptChats: false,
});

const statusType = ref([
  { type: "away", title: "Away" },
  { type: "do-not-disturb", title: "Do not disturb" },
  { type: "offline", title: "Offline" },
]);

const accountButtons = ref([
  { title: "Settings", icon: "setting" },
  { title: "Workspace", icon: "organizations" },
  { title: "Users", icon: "contacts" },
  { title: "Billing", icon: "billing" },
  { title: "Help center", icon: "help" },
]);
</script>
