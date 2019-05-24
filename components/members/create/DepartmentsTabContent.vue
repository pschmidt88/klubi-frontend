<template>
  <b-container fluid>
    <b-card
      class="mb-5"
      border-variant="light"
    >
      <department-row name="Fußball (Senioren)" action="remove" action-label="Entfernen">
        <template v-slot:icon>
          <icon-football/>
        </template>
      </department-row>
    </b-card>

    <b-card header="Weitere Abteilungen" class="mt-5" border-variant="light">
      <department-row name="Gymnastik" action="add" action-label="Hinzufügen">
        <template v-slot:icon>
          <icon-gymnastics/>
        </template>
      </department-row>

      <department-row name="Laufen">
        <template v-slot:icon>
          <icon-running/>
        </template>
      </department-row>

      <department-row name="Taekwondo">
        <template v-slot:icon>
          <icon-taekwondo/>
        </template>
      </department-row>
    </b-card>
  </b-container>
</template>

<script>
import DepartmentRow from "./DepartmentRow";
import IconGymnastics from "~/components/icons/IconGymnastics";
import IconFootball from "~/components/icons/IconFootball";
import IconRunning from "~/components/icons/IconRunning";
import IconTaekwondo from "~/components/icons/IconTaekwondo";

export default {
  name: "department-tab-content",
  components: {
    DepartmentRow,
    IconGymnastics,
    IconFootball,
    IconRunning,
    IconTaekwondo
  },
  data() {
    return {
      entry_date: "2019-05-24"
    };
  }
};
</script>
