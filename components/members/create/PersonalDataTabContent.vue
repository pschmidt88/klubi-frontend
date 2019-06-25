<template>
  <b-container fluid>
    <b-row align-h="center">
      <b-col cols="8">
        <b-row>
          <b-col>
            <b-form-group
              label-for="inputFirstName"
              label="Vorname"
              label-class="form-control-label"
            >
              <b-form-input required trim placeholder="Max" id="inputFirstName" v-model="firstName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group
              label-for="inputLastName"
              label="Nachname"
              label-class="form-control-label"
            >
              <b-form-input trim placeholder="Mustermann" id="inputLastName" v-model="lastName"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="9">
            <b-form-group
              label-for="inputStreetAddress"
              label-class="form-control-label"
              label="Straße"
            >
              <b-form-input
                id="inputStreetAddress"
                placeholder="Musterstraße"
                v-model="streetAddress"
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group label-for="inputHouseNo" label-class="form-control-label" label="Hausnr.">
              <b-form-input placeholder="5" id="inputHouseNo" v-model="houseNumber"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col sm="4">
            <b-form-group
              label-class="form-control-label"
              label-for="inputPostcode"
              label="Postleitzahl"
            >
              <b-form-input placeholder="12345" id="inputPostcode" v-model="postCode"/>
            </b-form-group>
          </b-col>

          <b-col sm="8">
            <b-form-group label-class="form-control-label" label-for="inputCity" label="Wohnort">
              <b-form-input placeholder="Musterstadt" id="inputCity" v-model="city"/>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="12" lg="12">
            <b-form-group label="Geburtstag" label-class="form-control-label">
              <b-row align-h="between">
                <b-col>
                  <b-form-group
                    label-for="inputDateOfBirthDay"
                    label="Tag"
                    label-class="form-control-label"
                    label-size="sm"
                    label-align="center"
                  >
                    <b-form-input placeholder="16" class="text-center" id="inputDateOfBirthDay" v-model="dateOfBirthDay"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group
                    label="Monat"
                    label-for="inputDateOfBirhtMonth"
                    label-size="sm"
                    label-class="form-control-label"
                    label-align="center"
                  >
                    <b-form-input placeholder="06" class="text-center" id="inputDateOfBirthMonth" v-model="dateOfBirthMonth"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group
                    label="Jahr"
                    label-size="sm"
                    label-for="inputDateOfBirthYear"
                    label-class="form-control-label"
                    label-align="center"
                  >
                    <b-form-input placeholder="1988" class="text-center" id="inputDateOfBirthYear" v-model="dateOfBirthYear"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col cols="6">
            <b-form-group
              label="Telefon"
              label-class="form-control-label"
              label-for="inputPhoneNumber"
            >
              <b-form-input placeholder="0561123456" id="inputPhoneNumber" v-model="phone"></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group label="Email" label-class="form-control-label" label-for="inputEmail">
              <b-form-input placeholder="me@example.com" id="inputEmail" v-model="email"/>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "personal-data-tab-content",
  data() {
    return {
      dateOfBirthDay: null,
      dateOfBirthMonth: null,
      dateOfBirthYear: null
    }
  },
  watch: {
    birthday (newValue, oldValue) {
      if (!isNaN(newValue) ) {
        this.$store.commit('members/registration/updateBirthday', { birthday: newValue })
      }
    }
  },
  computed: {
    firstName: {
      get() {
        return this.$store.state.members.registration.first_name;
      },
      set(value) {
        this.$store.commit("members/registration/updateFirstName", {
          first_name: value
        });
      }
    },
    lastName: {
      get() {
        return this.$store.state.members.registration.last_name;
      },
      set(value) {
        this.$store.commit({
          type: "members/registration/updateLastName",
          last_name: value
        });
      }
    },
    streetAddress: {
      get() {
        return this.$store.state.members.registration.street_address;
      },
      set(value) {
        this.$store.commit("members/registration/updateStreetAddress", {
          street_address: value
        });
      }
    },
    houseNumber: {
      get() {
        return this.$store.state.members.registration.street_number;
      },
      set(value) {
        this.$store.commit("members/registration/updateStreetNumber", {
          street_number: value
        });
      }
    },
    postCode: {
      get() {
        return this.$store.state.members.registration.post_code;
      },
      set(value) {
        this.$store.commit("members/registration/updatePostCode", {
          post_code: value
        });
      }
    },
    city: {
      get() {
        return this.$store.state.members.registration.city;
      },
      set(value) {
        this.$store.commit("members/registration/updateCity", { city: value });
      }
    },
    phone: {
      get() {
        return this.$store.state.members.registration.phone;
      },
      set(value) {
        this.$store.commit("members/registration/updatePhone", {
          phone: value
        });
      }
    },
    email: {
      get() {
        return this.$store.state.members.registration.email;
      },
      set(value) {
        this.$store.commit("members/registration/updateEmail", {
          email: value
        });
      }
    },
    birthday() {
      if (this.dateOfBirthDay == null || this.dateOfBirthMonth == null || this.dateOfBirthYear == null) {
        return null
      }

      return Date.parse(`${this.dateOfBirthYear}-${this.dateOfBirthMonth}-${this.dateOfBirthDay}`)
    }
  }
};
</script>

