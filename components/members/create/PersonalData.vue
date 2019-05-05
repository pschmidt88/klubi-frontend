<template>
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
</template>

<script>
export default {
  name: "personal-data-tab-content"
};
</script>

