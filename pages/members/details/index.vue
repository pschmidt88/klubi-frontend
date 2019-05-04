<template>
  <div class="fadeIn animated">    
    <b-form>
      <b-row>
        <b-col sm="8">
          <b-card
            title="Allgemein"
            sub-title="Allgemeine Infos, wie Name und die Adresse des Mitglieds"
          >
            <b-card-text class="mt-4">
              <b-row>
                <b-col>
                  <b-form-group label="Vorname">
                    <b-form-input v-model="firstName" trim placeholder="Max"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col>
                  <b-form-group label="Nachname">
                    <b-form-input v-model="lastName" trim placeholder="Mustermann"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="9">
                  <b-form-group label="Adresse">
                    <b-form-input v-model="address.street" placeholder="Musterstraße"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="3">
                  <b-form-group label="Hausnr">
                    <b-form-input v-model="address.number" placeholder="5"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="4">
                  <b-form-group label="Postleitzahl">
                    <b-form-input v-model="address.postcode" placeholder="12345"></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col sm="8">
                  <b-form-group label="Ort">
                    <b-form-input v-model="address.city" placeholder="Musterstadt"></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col cols="12" lg="6">
                  <b-form-group label="Geburtstag">
                    <b-row align-h="between">
                      <b-col>
                        <b-form-group label="Tag" label-size="sm" label-align="center">
                          <b-form-input v-model="birthday.day" placeholder="16" class="text-center"></b-form-input>
                        </b-form-group>
                      </b-col>

                      <b-col>
                        <b-form-group label="Monat" label-size="sm" label-align="center">
                          <b-form-input
                            v-model="birthday.month"
                            placeholder="06"
                            class="text-center"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>

                      <b-col>
                        <b-form-group label="Jahr" label-size="sm" label-align="center">
                          <b-form-input
                            v-model="birthday.year"
                            placeholder="1988"
                            class="text-center"
                          ></b-form-input>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>

          <b-card title="Mitgliedschaft" sub-title="Erklärungstext zu Mitgliedschaft">
            <b-card-text class="mt-4">
              <b-row>
                <b-col sm="6">
                  <b-form-group label="Mitglied seit">
                    <b-form-input v-model="membership.since" type="date"></b-form-input>
                  </b-form-group>
                </b-col>

                <b-col sm="6">
                  <b-form-group label="Status">
                    <b-form-radio-group v-model="membership.status" class="mt-1">
                      <b-form-radio value="active">Aktiv</b-form-radio>
                      <b-form-radio value="Passive">Passiv</b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col sm="4">
          <b-card title="Profilbild" sub-title="Hochladen eines Profilbilds">
            <b-card-text class="mt-4">
              <b-img src="/img/avatars/paul.jpg" fluid-grow thumbnail rounded></b-img>
            </b-card-text>
            <b-card-text>
              <b-form-file placeholder="Neues Bild hochladen" drop-placeholder="Drop file here..."></b-form-file>
            </b-card-text>
          </b-card>

          <b-card title="Kontaktdaten" sub-title="Email, Telefon usw.">
            <b-card-text class="mt-4">
              <b-form-group label="Telefon / Mobil">
                <b-form-input placeholder="017176937196"></b-form-input>
              </b-form-group>

              <b-form-group label="Email">
                <b-form-input placeholder="mustermann.m@example.com"></b-form-input>
              </b-form-group>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-card>
        <b-card-text>
          <b-button variant="primary">Speichern</b-button>
        </b-card-text>
      </b-card>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Paul",
      lastName: "Schmidt",
      address: {
        street: "Aschrottstraße",
        number: "4",
        postcode: "34119",
        city: "Kassel"
      },
      membership: {},
      birthday: {
        day: "16",
        month: "06",
        year: "1988"
      }
    };
  }
};
</script>

<style scoped>
.sticky-fix {
  align-self: flex-start;
}

</style>

