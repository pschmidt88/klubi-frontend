<template>
  <b-row align-v="center">
    <b-col>
      <div style="max-width: 52px;">
        <component :is="icon" />
      </div>
    </b-col>

    <b-col>{{ name }}</b-col>

    <b-col v-if="assigned">
      <b-form-group
        label="Eintrittsdatum"
        label-for="input-entry-date"
      >
        <b-form-input
          id="input-entry-date"
          v-model="entry_date"
          type="date"
        />
      </b-form-group>
    </b-col>

    <b-col v-if="assigned">
      <b-form-row>
        <b-col cols="12">
          <label class="form-control-label">Mitgliedstatus</label>
        </b-col>

        <b-col cols="6">
          <div class="custom-control custom-radio styled-radio mb-3">
            <input
              :name="memberStatusIdentifier"
              v-model="memberStatus"
              :id="activeOptionIdentifier"
              class="custom-control-input"
              type="radio"
              value="active"
              required
            >
            <label
              :for="activeOptionIdentifier"
              class="custom-control-descfeedback"
            >Aktiv</label>
            <div class="invalid-feedback">Toggle this custom radio</div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="custom-control custom-radio styled-radio mb-3">
            <input
              :name="memberStatusIdentifier"
              v-model="memberStatus"
              :id="passiveOptionIdentifier"
              class="custom-control-input"
              type="radio"
              value="passive"
              required
            >
            <label
              :for="passiveOptionIdentifier"
              class="custom-control-descfeedback"
            >Passiv</label>
            <div class="invalid-feedback">Or toggle this other custom radio</div>
          </div>
        </b-col>
      </b-form-row>
    </b-col>

    <b-col class="text-right">
      <b-button
        :variant="buttonVariant "
        @click="emitActionButtonPressed"
      >
        {{ actionButtonLabel }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import uuid4 from "uuid/v4"
export default {
  name: "DepartmentRow",
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "none"
    },
    assigned: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: uuid4(),
      memberStatus: this.action == "remove" ? "active" : null,
      entry_date: new Date().toISOString().split("T")[0]
    }
  },
  computed: {
    buttonVariant() {
      return this.assigned ? "outline-danger" : "outline-success"
    },
    actionButtonLabel() {
      return this.assigned ? "Entfernen" : "Zuweisen"
    },
    activeOptionIdentifier() {
      return "member-status-opt-active-" + this.id
    },
    passiveOptionIdentifier() {
      return "member-status-opt-passive" + this.id
    },
    memberStatusIdentifier() {
      return "member-status-" + this.id
    },
    today() {
      return new Date().toISOString().split("T")[0]
    }
  },
  methods: {
    emitActionButtonPressed() {
      console.log("emitting the fucking event")
      this.$emit("action-button-pressed", { name: this.name, icon: this.icon })
    }
  }
}
</script>
