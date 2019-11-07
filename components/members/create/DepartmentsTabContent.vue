<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <b-form-row>
          <b-col>
            <b-form-group
              label-for="selectDepartment"
              label="Abteilung"
              label-class="form-control-label"
            >
              <b-form-select
                id="selectDepartment"
                v-model="department"
                :options="availableDepartments"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col>
            <b-form-group
              label="Eintrittsdatum"
              label-for="inputEntryDate"
              label-class="form-control-label"
            >
              <b-form-input
                id="inputEntryDate"
                v-model="entryDate"
                type="date"
              />
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-row>
          <b-col cols="12">
            <label class="form-control-label">Mitgliedstatus</label>
          </b-col>

          <b-col cols="4">
            <div class="custom-control custom-radio styled-radio mb-3">
              <input
                id="activeOption"
                v-model="status"
                name="memberStatus"
                class="custom-control-input"
                type="radio"
                value="active"
              />
              <label for="activeOption" class="custom-control-descfeedback"
                >Aktiv</label
              >
              <div class="invalid-feedback">Toggle this custom radio</div>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="custom-control custom-radio styled-radio mb-3">
              <input
                id="passiveOption"
                v-model="status"
                name="memberStatus"
                class="custom-control-input"
                type="radio"
                value="passive"
              />
              <label for="passiveOption" class="custom-control-descfeedback"
                >Passiv</label
              >
              <div class="invalid-feedback">
                Or toggle this other custom radio
              </div>
            </div>
          </b-col>
        </b-form-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'DepartmentTabContent',

  data() {
    return {
      availableDepartments: [
        { value: null, text: 'Abteilung wählen' },
        { value: 'football', text: 'Fußball' },
        {
          value: 'gymnastics',
          text: 'Gymnastik'
        },
        {
          value: 'running',
          text: 'Laufen'
        },
        {
          value: 'taekwondo',
          text: 'Taekwondo'
        }
      ]
    }
  },
  computed: {
    status: {
      get() {
        return this.$store.state.members.registration.memberStatus
      },
      set(value) {
        this.$store.commit('members/registration/updateMemberStatus', {
          status: value
        })
      }
    },
    department: {
      get() {
        return this.$store.state.members.registration.department
      },
      set(value) {
        this.$store.commit('members/registration/updateDepartment', {
          department: value
        })
      }
    },
    entryDate: {
      get() {
        return this.$store.state.members.registration.entryDate
      },
      set(value) {
        this.$store.commit('members/registration/updateEntryDate', {
          entryDate: value
        })
      }
    }
  }
}
</script>
