<template>
  <div class="horizontal-menu">
    <b-container>
      <b-row>
        <b-navbar type="light" toggleable="lg" class="main-menu">
          <b-navbar-toggle target="main-navigation" data-toggle="collapse">
            <span />
            <span />
            <span />
          </b-navbar-toggle>

          <b-collapse id="main-navigation" is-nav>
            <b-navbar-nav class="mr-auto">
              <b-nav-item>Dashboard</b-nav-item>
              <b-nav-item-dropdown text="Mitgliederverwaltung">
                <b-dropdown-item href="/members">Suche</b-dropdown-item>
                <b-dropdown-item href="/members/details"
                  >Details</b-dropdown-item
                >
                <b-dropdown-item href="/members/new"
                  >Mitglied anlegen</b-dropdown-item
                >
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>
