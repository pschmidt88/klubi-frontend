<template>
  <div class="animated fadeIn">
    <b-card header="Neues Mitglied hinzufügen">
      <b-container>
        <b-row class="mt-5">
          <b-col>
            <b-tabs v-model="tabIndex" pills justified content-class="border-transparent mt-5">
              <b-tab title="Persönliche Daten" active>
                <b-container fluid>
                  <b-row>
                    <b-col>
                      <b-card-title>Persönliche Daten</b-card-title>
                      <b-card-sub-title>Name, Anschrift und Kontaktdaten des neuen Mitglieds</b-card-sub-title>

                      <b-card-text class="mt-5">
                        <b-row>
                          <b-col>
                            <b-form-group label="Vorname">
                              <b-form-input trim placeholder="Max"></b-form-input>
                            </b-form-group>
                          </b-col>

                          <b-col>
                            <b-form-group label="Nachname">
                              <b-form-input trim placeholder="Mustermann"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col>
                            <b-form-group label="Adresse">
                              <b-row>
                                <b-col cols="9">
                                  <b-form-group label="Straße" label-size="sm">
                                    <b-form-input placeholder="Musterstraße"></b-form-input>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="3">
                                  <b-form-group label="Hausnr." label-size="sm">
                                    <b-form-input placeholder="5"></b-form-input>
                                  </b-form-group>
                                </b-col>
                              </b-row>
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col sm="4">
                            <b-form-group label="Postleitzahl">
                              <b-form-input placeholder="12345"></b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col sm="8">
                            <b-form-group label="Ort">
                              <b-form-input placeholder="Musterstadt"></b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>

                        <b-row>
                          <b-col cols="12" lg="6">
                            <b-form-group label="Geburtstag">
                              <b-row align-h="between">
                                <b-col>
                                  <b-form-group label="Tag" label-size="sm" label-align="center">
                                    <b-form-input placeholder="16" class="text-center"></b-form-input>
                                  </b-form-group>
                                </b-col>

                                <b-col>
                                  <b-form-group label="Monat" label-size="sm" label-align="center">
                                    <b-form-input placeholder="06" class="text-center"></b-form-input>
                                  </b-form-group>
                                </b-col>

                                <b-col>
                                  <b-form-group label="Jahr" label-size="sm" label-align="center">
                                    <b-form-input placeholder="1988" class="text-center"></b-form-input>
                                  </b-form-group>
                                </b-col>
                              </b-row>
                            </b-form-group>
                          </b-col>
                        </b-row>
                      </b-card-text>
                    </b-col>
                  </b-row>

                  <b-row align-h="end">
                    <b-button variant="primary" @click="nextTab">Weiter</b-button>
                  </b-row>
                </b-container>
              </b-tab>

              <b-tab title="Abteilung">
                <b-container>
                  <b-row>
                    <Department/>
                  </b-row>
                  <b-row align-h="between">
                    <b-button variant="outline-primary" @click="previousTab">Zurück</b-button>
                    <b-button variant="primary" @click="nextTab">Weiter</b-button>
                  </b-row>
                </b-container>
              </b-tab>

              <b-tab title="Mitgliedsbeitrag">
                <b-container>
                  <b-row>
                    <MembershipFee/>
                  </b-row>
                  <b-row align-h="between">
                    <b-button variant="outline-primary" @click="previousTab">zurück</b-button>
                    <b-button variant="primary" @click="createMember">Weiter</b-button>
                  </b-row>
                </b-container>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </b-card>
  </div>
</template>

<script>
import Department from "~/components/members/create/Department";
import MembershipFee from "~/components/members/create/MembershipFee";
import PersonalData from "~/components/members/create/PersonalData";

export default {
  components: {
    Department,
    MembershipFee,
    PersonalData
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  methods: {
    previousTab(event) {
      this.tabIndex--;
    },
    nextTab(event) {
      this.tabIndex++;
    },
    createMember() {}
  }
};
</script>

<style>
.border-transparent {
  border: 0;
}
</style>
