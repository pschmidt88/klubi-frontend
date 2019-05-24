<template>
  <b-row align-v="center">
    <b-col cols="1">
      <slot name="icon">No icon provided</slot>
    </b-col>

    <b-col>{{ name }}</b-col>

    <b-col>
      <b-form-group label="Eintrittsdatum" label-for="input-entry-date">
        <b-form-input id="input-entry-date" type="date" v-model="entry_date"></b-form-input>
      </b-form-group>
    </b-col>

    <b-col>
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
    </b-col>

    <b-col class="text-right">
      <b-button variant="outline-danger" v-if="action == 'remove'">{{ actionLabel }}</b-button>
      <b-button variant="outline-success" v-else>{{ actionLabel }}</b-button>
    </b-col>
  </b-row>
</template>

<script>
import uuid4 from 'uuid/v4'

export default {
  name: "DepartmentRow",
  props: {
    name: String,
    action: String,
    'action-label': {
      type: String,
      default: 'Hinzufügen'
    }
  },
  data () {
    return {
      id: uuid4(),
      entry_date: new Date().toISOString().split('T')[0]
    }
  },
  computed: {
    activeOptionIdentifier () {
      return 'member-status-opt-active-' + this.id
    },
    passiveOptionIdentifier () {
      return 'member-status-opt-passive' + this.id
    },
    memberStatusIdentifier () {
      return 'member-status-' + this.id
    },
    today() {
      return new Date().toISOString().split('T')[0]
    }
  }
};
</script>
