<template>
<div>

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
</div>
</template>

<script>
export default {
  name: "personal-data-tab-content"
};
</script>

