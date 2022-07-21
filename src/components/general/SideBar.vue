<template>
  <q-drawer
    transition-show="jump-down"
    transition-hide="jump-up"
    show-if-above
    :mini="miniState"
    :width="200"
    :breakpoint="500"
    class="side-bar"
    :class="!miniState && 'open'"
  >
    <div>
      <q-toolbar class="side-bar__logo">
        <span class="icon-logo"></span>
        <img
          v-if="!miniState"
          src="@/assets/img/components/side-bar/logo.svg"
          alt="Logo"
        />
      </q-toolbar>

      <q-list class="nav" padding>
        <router-link
          v-for="item in navList"
          :key="item.id"
          class="nav__item"
          :class="item.active && 'active'"
          :to="item.link"
        >
          <div>
            <span class="nav__icon" :class="`icon-${item.icon}`"></span>

            <div v-if="!miniState" class="nav__title">{{ item.title }}</div>
          </div>

          <div v-if="item.notifications" class="nav__notifications">
            <span>{{ item.notifications }}</span>
          </div>
        </router-link>
      </q-list>
    </div>

    <div @click="drawerClick" class="side-bar__minimize">
      <span v-if="miniState" class="icon-menu-toggle" />
      <span v-else class="icon-minimize-menu" :class="miniState && 'is-mini'" />
      <div class="side-bar__minimize--text" v-if="!miniState">
        Minimize menu
      </div>
    </div>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const miniState = ref(false);

watch(
  () => route.path,
  (val) => changeActiveNavItem(val)
);
const drawerClick = () => (miniState.value = !miniState.value);

interface NavItem {
  id: string;
  title: string;
  link: string;
  icon: string;
  notifications: number;
  active?: boolean;
}

const navList = ref<NavItem[]>([
  { id: "1", title: "Home", link: "/", icon: "home", notifications: 0 },
  {
    id: "2",
    title: "Messenger",
    link: "/messenger",
    icon: "messenger",
    notifications: 5,
  },
  {
    id: "3",
    title: "Tickets",
    link: "/tickets",
    icon: "tickets",
    notifications: 0,
  },
  {
    id: "4",
    title: "Campaigns",
    link: "/campaigns",
    icon: "campaigns",
    notifications: 0,
  },
  {
    id: "5",
    title: "Contacts",
    link: "/contact",
    icon: "contacts",
    notifications: 0,
  },
  { id: "6", title: "Tasks", link: "/tasks", icon: "tasks", notifications: 0 },
  { id: "7", title: "Deals", link: "/deals", icon: "deals", notifications: 0 },
  { id: "8", title: "Files", link: "/files", icon: "files", notifications: 0 },
  {
    id: "9",
    title: "Automations",
    link: "/automations",
    icon: "automations",
    notifications: 0,
  },
  {
    id: "10",
    title: "Reports",
    link: "/reports",
    icon: "reports",
    notifications: 0,
  },
]);

const changeActiveNavItem = (val: string) => {
  navList.value = navList.value.map((item) =>
    item.link === val ? { ...item, active: true } : { ...item, active: false }
  );
};
</script>
