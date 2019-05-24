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
              <b-form-input
                required
                trim
                placeholder="Max"
                id="inputFirstName"
              ></b-form-input>
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
              <b-form-input
                trim
                placeholder="Mustermann"
                id="inputLastName"
              ></b-form-input>
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
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="3">
            <b-form-group
              label-for="inputHouseNo"
              label-class="form-control-label"
              label="Hausnr."
            >
              <b-form-input placeholder="5" id="inputHouseNo"></b-form-input>
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
              <b-form-input placeholder="12345" id="inputPostcode" />
            </b-form-group>
          </b-col>

          <b-col sm="8">
            <b-form-group
              label-class="form-control-label"
              label-for="inputCity"
              label="Wohnort"
            >
              <b-form-input placeholder="Musterstadt" id="inputCity" />
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
                    <b-form-input
                      placeholder="16"
                      class="text-center"
                      id="inputDateOfBirthDay"
                    ></b-form-input>
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
                    <b-form-input
                      placeholder="06"
                      class="text-center"
                      id="inputDateOfBirthMonth"
                    />
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
                    <b-form-input
                      placeholder="1988"
                      class="text-center"
                      id="inputDateOfBirthYear"
                    />
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
              <b-form-input
                placeholder="0561123456"
                id="inputPhoneNumber"
              ></b-form-input>
            </b-form-group>
          </b-col>

          <b-col cols="6">
            <b-form-group
              label="Email"
              label-class="form-control-label"
              label-for="inputEmail"
            >
              <b-form-input placeholder="me@example.com" id="inputEmail" />
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "personal-data-tab-content"
};
</script>

