<template>
  <b-container>
    <b-row>
      <div class="page-header">
        <h2 class="page-header-title">Neues Mitglied</h2>
      </div>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="widget has-shadow">
          <div class="widget-header bordered no-actions">
            <h4>Mitglied anlegen</h4>
          </div>
          <div class="widget-body">
            <b-row class="flex-row" align-h="center">
              <b-col cols="10">
                <div class="section-title mt-5 mb-5">
                  <h4>Allgemeines zur Person</h4>
                </div>

                <b-row>
                  <b-col>
                    <b-form-group label-for="inputFirstName" label="Vorname" label-class="form-control-label">
                      <b-form-input required trim placeholder="Max" id="inputFirstName"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col>
                    <b-form-group label-for="inputLastName" label="Nachname" label-class="form-control-label">
                      <b-form-input trim placeholder="Mustermann" id="inputLastName"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col cols="9">
                    <b-form-group label-for="inputStreetAddress" label-class="form-control-label" label="Straße">
                      <b-form-input id="inputStreetAddress" placeholder="Musterstraße"></b-form-input>
                    </b-form-group>
                  </b-col>
                  <b-col cols="3">
                    <b-form-group label-for="inputHouseNo" label-class="form-control-label" label="Hausnr.">
                      <b-form-input placeholder="5" id="inputHouseNo"></b-form-input>
                    </b-form-group>
                  </b-col>
                </b-row>

                <b-row>
                  <b-col sm="4">
                    <b-form-group label-class="form-control-label" label-for="inputPostcode" label="Postleitzahl">

                    </b-form-group>
                    <label for="postcode" class="form-control-label">Postleitzahl</label>
                      <b-form-input placeholder="12345" id="postcode"></b-form-input>
                  </b-col>
                  <b-col sm="8">
                    <label for="town" class="form-control-label">Wohnort</label>
                      <b-form-input placeholder="Musterstadt" id="town"></b-form-input>
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

                <!--                <div id="wizard">-->
                <!--                  <div class="step-container">-->
                <!--                    <div class="step-wizard">-->
                <!--                      <div class="progress">-->
                <!--                        <div class="progressbar"></div>-->
                <!--                      </div>-->
                <!--                      <ul>-->
                <!--                        <li>-->
                <!--                          <a href="#tab1" data-toggle="tab">-->
                <!--                            <span class="step">1</span>-->
                <!--                            <span class="title">Allgemeines zur Person</span>-->
                <!--                          </a>-->
                <!--                        </li>-->
                <!--                        <li>-->
                <!--                          <a href="#tab2" data-toggle="tab">-->
                <!--                            <span class="step">2</span>-->
                <!--                            <span class="title">Abteilung</span>-->
                <!--                          </a>-->
                <!--                        </li>-->
                <!--                        <li>-->
                <!--                          <a href="#tab3" data-toggle="tab">-->
                <!--                            <span class="step">3</span>-->
                <!--                            <span class="title">Mitgliedsbeitrag / Zahlungsdaten</span>-->
                <!--                          </a>-->
                <!--                        </li>-->
                <!--                      </ul>-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                  <div class="tab-content">-->
                <!--                    <div class="tab-pane" id="tab1">-->
                <!--                      Tab1-->
                <!--                    </div>-->
                <!--                    <div class="tab-pane" id="tab2">-->
                <!--                      Tab2-->
                <!--                    </div>-->
                <!--                    <div class="tab-pane" id="tab3">-->
                <!--                      Tab3-->
                <!--                    </div>-->
                <!--                  </div>-->
                <!--                </div>-->


              </b-col>
            </b-row>
          </div>

        </div>
      </b-col>
      <!--      <b-card header="Neues Mitglied hinzufügen">-->
      <!--        <b-container>-->
      <!--          <b-row class="mt-5">-->
      <!--            <b-col>-->
      <!--              <b-tabs v-model="tabIndex" pills justified content-class="border-transparent mt-5">-->
      <!--                <b-tab title="Persönliche Daten" active>-->
      <!--                  <b-container fluid>-->
      <!--                    <b-row>-->
      <!--                      <b-col>-->
      <!--                        <b-card-title>Persönliche Daten</b-card-title>-->
      <!--                        <b-card-sub-title>Name, Anschrift und Kontaktdaten des neuen Mitglieds</b-card-sub-title>-->

      <!--                        <b-card-text class="mt-5">-->
      <!--                          <b-row>-->
      <!--                            <b-col>-->
      <!--                              <b-form-group label="Vorname">-->
      <!--                                <b-form-input trim placeholder="Max"></b-form-input>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->

      <!--                            <b-col>-->
      <!--                              <b-form-group label="Nachname">-->
      <!--                                <b-form-input trim placeholder="Mustermann"></b-form-input>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->
      <!--                          </b-row>-->

      <!--                          <b-row>-->
      <!--                            <b-col>-->
      <!--                              <b-form-group label="Adresse">-->
      <!--                                <b-row>-->
      <!--                                  <b-col cols="9">-->
      <!--                                    <b-form-group label="Straße" label-size="sm">-->
      <!--                                      <b-form-input placeholder="Musterstraße"></b-form-input>-->
      <!--                                    </b-form-group>-->
      <!--                                  </b-col>-->
      <!--                                  <b-col cols="3">-->
      <!--                                    <b-form-group label="Hausnr." label-size="sm">-->
      <!--                                      <b-form-input placeholder="5"></b-form-input>-->
      <!--                                    </b-form-group>-->
      <!--                                  </b-col>-->
      <!--                                </b-row>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->
      <!--                          </b-row>-->

      <!--                          <b-row>-->
      <!--                            <b-col sm="4">-->
      <!--                              <b-form-group label="Postleitzahl">-->
      <!--                                <b-form-input placeholder="12345"></b-form-input>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->
      <!--                            <b-col sm="8">-->
      <!--                              <b-form-group label="Ort">-->
      <!--                                <b-form-input placeholder="Musterstadt"></b-form-input>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->
      <!--                          </b-row>-->

      <!--                          <b-row>-->
      <!--                            <b-col cols="12" lg="6">-->
      <!--                              <b-form-group label="Geburtstag">-->
      <!--                                <b-row align-h="between">-->
      <!--                                  <b-col>-->
      <!--                                    <b-form-group label="Tag" label-size="sm" label-align="center">-->
      <!--                                      <b-form-input placeholder="16" class="text-center"></b-form-input>-->
      <!--                                    </b-form-group>-->
      <!--                                  </b-col>-->

      <!--                                  <b-col>-->
      <!--                                    <b-form-group label="Monat" label-size="sm" label-align="center">-->
      <!--                                      <b-form-input placeholder="06" class="text-center"></b-form-input>-->
      <!--                                    </b-form-group>-->
      <!--                                  </b-col>-->

      <!--                                  <b-col>-->
      <!--                                    <b-form-group label="Jahr" label-size="sm" label-align="center">-->
      <!--                                      <b-form-input placeholder="1988" class="text-center"></b-form-input>-->
      <!--                                    </b-form-group>-->
      <!--                                  </b-col>-->
      <!--                                </b-row>-->
      <!--                              </b-form-group>-->
      <!--                            </b-col>-->
      <!--                          </b-row>-->
      <!--                        </b-card-text>-->
      <!--                      </b-col>-->
      <!--                    </b-row>-->

      <!--                    <b-row align-h="end">-->
      <!--                      <b-button variant="primary" @click="nextTab">Weiter</b-button>-->
      <!--                    </b-row>-->
      <!--                  </b-container>-->
      <!--                </b-tab>-->

      <!--                <b-tab title="Abteilung">-->
      <!--                  <b-container>-->
      <!--                    <b-row>-->
      <!--                      <Department/>-->
      <!--                    </b-row>-->
      <!--                    <b-row align-h="between">-->
      <!--                      <b-button variant="outline-primary" @click="previousTab">Zurück</b-button>-->
      <!--                      <b-button variant="primary" @click="nextTab">Weiter</b-button>-->
      <!--                    </b-row>-->
      <!--                  </b-container>-->
      <!--                </b-tab>-->

      <!--                <b-tab title="Mitgliedsbeitrag">-->
      <!--                  <b-container>-->
      <!--                    <b-row>-->
      <!--                      <MembershipFee/>-->
      <!--                    </b-row>-->
      <!--                    <b-row align-h="between">-->
      <!--                      <b-button variant="outline-primary" @click="previousTab">zurück</b-button>-->
      <!--                      <b-button variant="primary" @click="createMember">Weiter</b-button>-->
      <!--                    </b-row>-->
      <!--                  </b-container>-->
      <!--                </b-tab>-->
      <!--              </b-tabs>-->
      <!--            </b-col>-->
      <!--          </b-row>-->
      <!--        </b-container>-->
      <!--      </b-card>-->
    </b-row>
  </b-container>
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
      createMember() {
      }
    }
  };
</script>

<style>
  .border-transparent {
    border: 0;
  }
</style>
