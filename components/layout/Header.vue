<template>
  <header class="header">
    <div class="container">
      <b-navbar>
        <div class="search-box">
          <button class="dismiss">
            <i class="ion-close-round"/>
          </button>
          <form
            id="searchForm"
            action="#"
            role="search">
            <b-input class="form-control"/>
          </form>
        </div>

        <div
          class="navbar-holder d-flex align-items-center align-middle justify-content-between"
        >
          <div class="navbar-header">
            <b-navbar-brand href="#">
              <div class="brand-image brand-big">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  style="width: 70px;"
                  class="logo-big"
                >
              </div>
              <div class="brand-image brand-small">
                <img
                  src="/img/logo.png"
                  alt="logo"
                  class="logo-small" >
              </div>
            </b-navbar-brand>
          </div>

          <b-navbar-nav
            class="nav-menu list-unstyled d-flex flex-md-row align-items-md-center pull-right"
          >
            <b-nav-item
              class="d-flex-align-items-center"
              link-classes="">
              <i class="la la-search"/>
            </b-nav-item>

            <b-nav-item-dropdown
              no-caret
              menu-class="notification">
              <template slot="button-content">
                <i class="la la-bell animated infinite swing"/>
                <span class="badge-pulse"/>
              </template>

              <b-dropdown-header
                tag="div"
                class="notifications-header">
                <div class="title">Notifications (4)</div>
                <div class="notifications-overlay"/>
                <img
                  src="/img/notifications/01.jpg"
                  alt="..."
                  class="img-fluid"
                >
              </b-dropdown-header>

              <b-dropdown-item>
                <div class="message-icon">
                  <i class="la la-user"/>
                </div>
                <div class="message-body">
                  <div class="message-body-heading">New user registered</div>
                  <span class="date">2 hours ago</span>
                </div>
              </b-dropdown-item>
              <b-dropdown-item>
                <div class="message-icon">
                  <i class="la la-calendar-check-o"/>
                </div>
                <div class="message-body">
                  <div class="message-body-heading">New event added</div>
                  <span class="date">7 hours ago</span>
                </div>
              </b-dropdown-item>

              <b-dropdown-item
                href="#"
                class="all-notifications text-center">
                View All Notifications
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown
              no-caret
              menu-class="user-size">
              <template slot="button-content">
                <img
                  src="/img/avatar/avatar-01.jpg"
                  alt="avatar"
                  class="avatar rounded-circle"
                >
              </template>

              <b-dropdown-item class="welcome">
                <a
                  href="#"
                  class="edit-profil">
                  <i class="la la-gear"/>
                </a>
                <img
                  src="/img/avatar/avatar-01.jpg"
                  alt="..."
                  class="rounded-circle"
                >
              </b-dropdown-item>

              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>

              <b-dropdown-item href="#">
                Messages
              </b-dropdown-item>

              <b-dropdown-item href="#">
                Settings
              </b-dropdown-item>

              <b-dropdown-divider
                tag="li"
                class="separator"/>

              <b-dropdown-item class="text-center pb-3 no-padding-top">
                Logout
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style></style>
