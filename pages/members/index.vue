<template>
  <div class="animated fadeIn">
    <b-row class="form-group" align-h="center">
      <b-col cols="6">
        <b-input-group>
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-button variant="primary">Suche</b-button>
          </b-input-group-append>
        </b-input-group>
        <b-list-group class="mt-1">
          <b-list-group-item href="/members/details" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Paul Schmidt</h5>
              <small>16.06.1988</small>
            </div>
            <p class="mb-1">
              Aschrottstraße 4, 34119 Kassel
            </p>
            <small>Fußball (Senioren)</small>
          </b-list-group-item>
          <b-list-group-item href="/members/details" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Daniel Matzdorf</h5>
              <small class="text-muted">15.12.1986</small>
            </div>
            <p class="mb-1">
              Willi Allee irgendwo, 34117 Kassel
            </p>
            <small class="text-muted">Fußball (Senioren)</small>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBusy: false,
      currentPage: 3,
      fields: [
        { key: "id", sortable: true, label: "Mitgliedsnummer" },
        { key: "name", label: "Name" },
        { key: "address", label: "Adresse" },
        { key: "city", label: "Wohnort" },
        { key: "birthday", label: "Geburtstag" },
        { key: "contact", label: "Kontakt" }
      ],
      items: [
        {
          id: 1134,
          name: "Angelika Mehler",
          address: "Buelowstrasse 87",
          city: "Stockhausen-Illfurth",
          birthday: "25.10.1996",
          contact: "Tel.: 02661 31 53 35"
        },
        {
          id: 1135,
          name: "Heike Gersten",
          address: "Anhalter Strasse 2",
          city: "Dielkirchen",
          birthday: "02.05.1966",
          contact: "Tel.: 06361 14 64 67"
        },
        {
          id: 1136,
          name: "Jan Fleischer",
          address: "An der Alster 18",
          city: "Barkow",
          birthday: "08.11.1998",
          contact: "Mail: JanFleischer@einrot.com"
        },
        {
          id: 1137,
          name: "Tim Schultheiss",
          address: "Knesebeckstrasse 97",
          city: "Marienhausen",
          birthday: "10.01.19676",
          contact: "Tel.: 02689 49 33 67"
        },
        {
          id: 1138,
          name: "Angelika Mehler",
          address: "Buelowstrasse 87",
          city: "Stockhausen-Illfurth",
          birthday: "25.10.1996",
          contact: "Tel.: 02661 31 53 35"
        },
        {
          id: 1139,
          name: "Heike Gersten",
          address: "Anhalter Strasse 2",
          city: "Dielkirchen",
          birthday: "02.05.1966",
          contact: "Tel.: 06361 14 64 67"
        },
        {
          id: 1140,
          name: "Jan Fleischer",
          address: "An der Alster 18",
          city: "Barkow",
          birthday: "08.11.1998",
          contact: "Mail: JanFleischer@einrot.com"
        },
        {
          id: 1141,
          name: "Tim Schultheiss",
          address: "Knesebeckstrasse 97",
          city: "Marienhausen",
          birthday: "10.01.19676",
          contact: "Tel.: 02689 49 33 67"
        },
        {
          id: 1142,
          name: "Angelika Mehler",
          address: "Buelowstrasse 87",
          city: "Stockhausen-Illfurth",
          birthday: "25.10.1996",
          contact: "Tel.: 02661 31 53 35"
        },
        {
          id: 1143,
          name: "Heike Gersten",
          address: "Anhalter Strasse 2",
          city: "Dielkirchen",
          birthday: "02.05.1966",
          contact: "Tel.: 06361 14 64 67"
        },
        {
          id: 1144,
          name: "Jan Fleischer",
          address: "An der Alster 18",
          city: "Barkow",
          birthday: "08.11.1998",
          contact: "Mail: JanFleischer@einrot.com"
        },
        {
          id: 1145,
          name: "Tim Schultheiss",
          address: "Knesebeckstrasse 97",
          city: "Marienhausen",
          birthday: "10.01.19676",
          contact: "Tel.: 02689 49 33 67"
        }
      ]
    };
  }
};
</script>
