<template>
  <b-container fluid>
    <b-card
      class="mb-5"
      title="Abteilungsmitgliedschaften"
    >
      <template v-if="assigned_departments.length > 0">
        <department-row
          v-for="department in assigned_departments"
          :key="department.name"
          :name="department.name"
          :icon="department.icon"
          :assigned="true"
          @action-button-pressed="unassignFromDepartment"
        />

      </template>

      <b-card-text v-else>Noch keiner Abteilung zugewiesen</b-card-text>
    </b-card>

    <b-row align-h="center">
      <b-col cols="6">
        <b-card
          title="Verfügbare Abteilungen"
          class="mt-5"
          border-variant="light"
        >
          <department-row
            v-for="department in available_departments"
            :key="department.name"
            :name="department.name"
            :icon="department.icon"
            @action-button-pressed="assignToDepartment"
          />
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DepartmentRow from "./DepartmentRow"
import IconGymnastics from "~/components/icons/IconGymnastics"
import IconFootball from "~/components/icons/IconFootball"
import IconRunning from "~/components/icons/IconRunning"
import IconTaekwondo from "~/components/icons/IconTaekwondo"

export default {
  name: "DepartmentTabContent",
  components: {
    DepartmentRow,
    IconGymnastics,
    IconFootball,
    IconRunning,
    IconTaekwondo
  },
  data() {
    return {
      entry_date: "2019-05-24",
      assigned_departments: [],
      available_departments: [
        {
          name: "Fußball",
          icon: "icon-football"
        },
        {
          name: "Gymnastik",
          icon: "icon-gymnastics"
        },
        {
          name: "Laufen",
          icon: "icon-running"
        },
        {
          name: "Taekwondo",
          icon: "icon-taekwondo"
        }
      ]
    }
  },
  methods: {
    assignToDepartment(department) {
      this.available_departments.splice(
        this.available_departments.findIndex(element => {
          return element.name === department.name
        }),
        1
      )
      this.assigned_departments.push(department)
    },
    unassignFromDepartment(department) {
      this.assigned_departments.splice(
        this.assigned_departments.findIndex(element => {
          return element.name === department.name
        }),
        1
      )
      this.available_departments.push(department)
    }
  }
}
</script>
