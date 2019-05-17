<template>
  <b-container>
    <b-row>
      <div class="page-header">
        <h2 class="page-header-title">Mitgliederverwaltung</h2>
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
                <form-wizard>
                  <form-wizard-tab-content tabId="personal-data" title="Persönliche Daten & Kontakt">
                    <PersonalData />
                  </form-wizard-tab-content>
                  <form-wizard-tab-content tabId="departments" title="Abteilungen">
                    <Department />
                  </form-wizard-tab-content>
                  <form-wizard-tab-content tabId="membership-fee" title="Mitgliedsbeitrag / Zahlungsdaten">
                    <MembershipFee />
                  </form-wizard-tab-content>
                </form-wizard>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import Department from "~/components/members/create/Department";
  import MembershipFee from "~/components/members/create/MembershipFee";
  import PersonalData from "~/components/members/create/PersonalData";
  import FormWizard from '~/components/form/FormWizard';
  import FormWizardTabContent from '~/components/form/FormWizardTabContent';

  export default {
    components: {
      Department,
      MembershipFee,
      PersonalData,
      FormWizard,
      FormWizardTabContent
    },
    data() {
      return {
        tabIndex: 0
      };
    },
    methods: {
      createMember() {
      }
    }
  };
</script>

<style>
</style>
