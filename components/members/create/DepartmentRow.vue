<template>
  <b-row align-v="center">
    <b-col>
      <component :is="icon"></component>
    </b-col>

    <b-col>{{ name }}</b-col>

    <!-- <b-col>
      <b-form-group label="Eintrittsdatum" label-for="input-entry-date">
        <b-form-input id="input-entry-date" type="date" v-model="entry_date"></b-form-input>
      </b-form-group>
    </b-col>-->

    <!-- <b-col>
      <b-form-row>
        <b-col cols="12">
          <label class="form-control-label">Mitgliedstatus</label>
        </b-col>

        <b-col cols="6">
          <div class="custom-control custom-radio styled-radio mb-3">
            <input
              class="custom-control-input"
              type="radio"
              :name="memberStatusIdentifier"
              v-model="memberStatus"
              value="active"
              :id="activeOptionIdentifier"
              required
            >
            <label class="custom-control-descfeedback" :for="activeOptionIdentifier">Aktiv</label>
            <div class="invalid-feedback">Toggle this custom radio</div>
          </div>
        </b-col>
        <b-col cols="6">
          <div class="custom-control custom-radio styled-radio mb-3">
            <input
              class="custom-control-input"
              type="radio"
              :name="memberStatusIdentifier"
              v-model="memberStatus"
              value="passive"
              :id="passiveOptionIdentifier"
              required
            >
            <label class="custom-control-descfeedback" :for="passiveOptionIdentifier">Passiv</label>
            <div class="invalid-feedback">Or toggle this other custom radio</div>
          </div>
        </b-col>
      </b-form-row>
    </b-col>-->

    <b-col class="text-right">
      <b-button v-if="action == 'remove'" variant="outline-danger">
        {{ actionLabel }}
      </b-button>
      <b-button v-else variant="outline-success">{{ actionLabel }}</b-button>
    </b-col>
  </b-row>
</template>

<script>
import uuid4 from "uuid/v4";

export default {
  name: "DepartmentRow",
  props: {
    name: {
      type: String,
      required: true
    },
    action: {
      type: String,
      default: "add"
    },
    icon: {
      type: String,
      default: "none"
    },
    "action-label": {
      type: String,
      default: "Zuweisen"
    }
  },
  data() {
    return {
      id: uuid4(),
      memberStatus: this.action == "remove" ? "active" : null,
      entry_date: new Date().toISOString().split("T")[0]
    };
  },
  computed: {
    activeOptionIdentifier() {
      return "member-status-opt-active-" + this.id;
    },
    passiveOptionIdentifier() {
      return "member-status-opt-passive" + this.id;
    },
    memberStatusIdentifier() {
      return "member-status-" + this.id;
    },
    today() {
      return new Date().toISOString().split("T")[0];
    }
  }
};
</script>
