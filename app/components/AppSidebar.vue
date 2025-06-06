<script setup lang="ts">
import { House, Users } from "lucide-vue-next";
import type { SidebarProps } from "./ui/sidebar";
import Sidebar from "./ui/sidebar/Sidebar.vue";
import SidebarContent from "./ui/sidebar/SidebarContent.vue";
import SidebarFooter from "./ui/sidebar/SidebarFooter.vue";
import SidebarRail from "./ui/sidebar/SidebarRail.vue";

const props = withDefaults(defineProps<SidebarProps>(), {
  collapsible: "icon",
});

const data = {
  user: {
    name: "rookian",
    email: "contact@rookian.dev",
    avatar: "https://avatars.githubusercontent.com/u/465359?v=4&size=64",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: House,
      isActive: true,
    },
    {
      title: "Users",
      url: "#",
      icon: Users,
    },
  ],
  teams: [
    {
      name: "Eintracht Frankfurt",
      logo: "https://upload.wikimedia.org/wikipedia/de/9/97/Eintracht_Frankfurt_Logo_77_99.svg",
      plan: "Premium",
    },
    {
      name: "Olympia Kassel",
      logo: "https://olympia1914.de/wp-content/smush-webp/2022/04/Olympia1914-Logo_transp_white-2048x2048.png.webp",
      plan: "Free",
    },
    {
      name: "VfL Kassel",
      logo: "https://www.kassel.de/verzeichnisse/adressverzeichnis/sportvereine/v/verein-fuer-leibesuebungen-kassel-1886-vfl-kassel.php.media/52833/VfL_Logo.jpg.scaled/0eaaf6b180f0585471c8e477986bee31.jpg",
      plan: "Free",
    },
  ],
};
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <NavMain :items="data.navMain" />
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
