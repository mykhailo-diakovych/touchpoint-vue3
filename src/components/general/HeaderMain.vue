<template>
  <q-header class="header">
    <q-toolbar class="header__toolbar bg-white row no-wrap justify-between">
      <div class="header__action row no-wrap items-center">
        <ActionCreate />

        <HeaderSearch />
      </div>
      <div class="header__profile row no-wrap justify-between">
        <ProfileStatus />

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

        <ProfileSettings />
      </div>
    </q-toolbar>
  </q-header>
</template>
<script lang="ts" setup>
import ProfileStatus from "@/components/universal/profile/ProfileStatus.vue";
import ProfileSettings from "@/components/universal/profile/ProfileSettings.vue";
import ActionCreate from "@/components/universal/ActionCreate.vue";
import HeaderSearch from "@/components/universal/HeaderSearch.vue";
</script>
