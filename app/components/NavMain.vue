<script setup lang="ts">
import { type LucideIcon } from "lucide-vue-next";

defineProps<{
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}>();
</script>

<template>
  <SidebarGroup>
    <SidebarMenu>
      <SidebarMenuItem v-for="item in items" :key="item.title">
        <SidebarMenuButton
          :tooltip="item.title"
          asChild
          :is-active="item.isActive"
        >
          <a :href="item.url">
            <component :is="item.icon" v-if="item.icon" />
            <span>{{ item.title }}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarGroup>
</template>
