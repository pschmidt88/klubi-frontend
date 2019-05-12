<template>
  <div class="page db-modern">
    <!-- Begin Header -->
    <AppHeader />
    <!-- End Header -->
    <!-- Begin Page Content -->
    <div class="page-content">
      <!-- Begin Navigation -->
      <div class="horizontal-menu">
        <div class="container">
          <div class="row">
            <b-navbar type="light" toggleable="lg" class="main-menu">
              <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>

              <b-collapse id="navbarSupportedContent" is-nav>
                <b-navbar-nav class="mr-auto">
                  <b-nav-item-dropdown text="Dashboard">
                    <b-dropdown-item href="#">Default</b-dropdown-item>
                    <b-dropdown-item href="#">Modern</b-dropdown-item>
                  </b-nav-item-dropdown>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>

            <!--<nav class="navbar navbar-light navbar-expand-lg main-menu">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="dashboard"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Dashboard</a>
                    <ul class="dropdown-menu" aria-labelledby="dashboard">
                      <li>
                        <a href="db-default.html">Default</a>
                      </li>
                      <li>
                        <a href="db-clean.html">Clean</a>
                      </li>
                      <li>
                        <a href="db-compact.html">Compact</a>
                      </li>
                      <li>
                        <a href="db-modern.html">Modern</a>
                      </li>
                      <li>
                        <a href="db-social.html">Social</a>
                      </li>
                      <li>
                        <a href="db-smarthome.html">Smarthome</a>
                      </li>
                      <li>
                        <a href="db-all.html">All</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="applications"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Applications</a>
                    <ul class="dropdown-menu" aria-labelledby="applications">
                      <li>
                        <a href="app-calendar.html">Calendar</a>
                      </li>
                      <li>
                        <a href="app-chat.html">Chat</a>
                      </li>
                      <li>
                        <a href="app-mail.html">Mail</a>
                      </li>
                      <li>
                        <a href="app-contact.html">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="components"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Components</a>
                    <ul class="dropdown-menu" aria-labelledby="components">
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="elements"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-share-alt"></i>UI Elements
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="elements">
                          <li>
                            <a href="components-buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="components-alerts.html">Alerts</a>
                          </li>
                          <li>
                            <a href="components-modal.html">Modal</a>
                          </li>
                          <li>
                            <a href="components-notifications.html">Noty</a>
                          </li>
                          <li>
                            <a href="components-timeline.html">Timeline</a>
                          </li>
                          <li>
                            <a href="components-progress.html">Progress</a>
                          </li>
                          <li>
                            <a href="components-tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="charts-chartjs.html">Chart Js</a>
                          </li>
                          <li>
                            <a href="components-accordion.html">Accordion</a>
                          </li>
                          <li>
                            <a href="components-popover.html">Popover</a>
                          </li>
                          <li>
                            <a href="components-tooltip.html">Tooltip</a>
                          </li>
                          <li>
                            <a href="components-scrollable.html">Scrollable</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="icons"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-font"></i>Icons
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="icons">
                          <li>
                            <a href="icons-lineawesome.html">Line Awesome</a>
                          </li>
                          <li>
                            <a href="icons-themify.html">Themify</a>
                          </li>
                          <li>
                            <a href="icons-ionicons.html">Ionicons</a>
                          </li>
                          <li>
                            <a href="icons-meteocons.html">Meteocons</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="forms"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-list-alt"></i>Forms
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="forms">
                          <li>
                            <a href="forms-basic.html">Form Basic</a>
                          </li>
                          <li>
                            <a href="forms-validation.html">Form Validation</a>
                          </li>
                          <li>
                            <a href="forms-wizard.html">Form Wizard</a>
                          </li>
                          <li>
                            <a href="forms-select.html">Bootstrap Select</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          id="tables"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-th-large"></i>
                          <span>Tables</span>
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="tables">
                          <li>
                            <a href="tables-basic.html">Basic</a>
                          </li>
                          <li>
                            <a href="tables-datatables.html">Datatables</a>
                          </li>
                          <li>
                            <a href="tables-tabledit.html">Tabledit</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      id="pages"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >Pages</a>
                    <ul class="dropdown-menu" aria-labelledby="pages">
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="authentication"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-lock"></i>Authentication
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="authentication">
                          <li>
                            <a href="pages-login.html">Login</a>
                          </li>
                          <li>
                            <a href="pages-login-02.html">Login 02</a>
                          </li>
                          <li>
                            <a href="pages-register.html">Register</a>
                          </li>
                          <li>
                            <a href="pages-forgot-password.html">Forgot Password</a>
                          </li>
                          <li>
                            <a href="pages-lock-screen.html">Lock Screen</a>
                          </li>
                          <li>
                            <a href="pages-mail-confirm.html">Mail Confirmation</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="social"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-comments"></i>Social
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="social">
                          <li>
                            <a href="pages-newsfeed.html">Newsfeed</a>
                          </li>
                          <li>
                            <a href="pages-about.html">About</a>
                          </li>
                          <li>
                            <a href="pages-events.html">Events</a>
                          </li>
                          <li>
                            <a href="pages-friends.html">Friends</a>
                          </li>
                          <li>
                            <a href="pages-groups.html">Groups</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="email"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-at"></i>Email
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="email">
                          <li>
                            <a href="email-welcome.html">Welcome</a>
                          </li>
                          <li>
                            <a href="email-password.html">Reset Password</a>
                          </li>
                          <li>
                            <a href="email-order.html">Order Confirmation</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="errors"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-exclamation-triangle"></i>Errors
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="errors">
                          <li>
                            <a href="pages-404-01.html">Style 01</a>
                          </li>
                          <li>
                            <a href="pages-404-02.html">Style 02</a>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown">
                        <a
                          class="dropdown-toggle"
                          href="#"
                          id="pricing"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i class="la la-usd"></i>Pricing
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="pricing">
                          <li>
                            <a href="pages-pricing-tables-01.html">Style 01</a>
                          </li>
                          <li>
                            <a href="pages-pricing-tables-02.html">Style 02</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="pages-coming-soon.html">
                          <i class="la la-rocket"></i>Coming Soon
                        </a>
                      </li>
                      <li>
                        <a href="pages-profile.html">
                          <i class="la la-user"></i>Profile
                        </a>
                      </li>
                      <li>
                        <a href="pages-invoice.html">
                          <i class="la la-clipboard"></i>Invoice
                        </a>
                      </li>
                      <li>
                        <a href="pages-search.html">
                          <i class="la la-search"></i>Search
                        </a>
                      </li>
                      <li>
                        <a href="pages-faq.html">
                          <i class="la la-question-circle"></i>FAQ
                        </a>
                      </li>
                      <li>
                        <a href="pages-blank.html">
                          <i class="la la-edit"></i>Blank
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="maps-leaflet.html">Maps</a>
                  </li>
                  <li>
                    <a href="components-widgets.html">Widgets</a>
                  </li>
                </ul>
              </div>
            </nav>-->
          </div>
        </div>
      </div>
      <!-- End Navigation -->
      <div class="content-inner boxed mt-4 w-100">
        <nuxt/>
        <!-- End Container -->
        <!-- Begin Page Footer-->
        <footer class="main-footer">
          <div class="container">
            <div class="row">
              <div
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-center"
              >
                <p class="text-gradient-02">Design By Saerox</p>
              </div>
              <div
                class="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-center"
              >
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link" href="documentation.html">Documentation</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="changelog.html">Changelog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <!-- End Page Footer -->
        <a href="#" class="go-top">
          <i class="la la-arrow-up"></i>
        </a>
        <!-- Offcanvas Sidebar -->
        <div class="off-sidebar from-right">
          <div class="off-sidebar-container">
            <header class="off-sidebar-header">
              <ul class="button-nav nav nav-tabs mt-3 mb-3 ml-3" role="tablist" id="weather-tab">
                <li>
                  <a
                    class="active"
                    data-toggle="tab"
                    href="#messenger"
                    role="tab"
                    id="messenger-tab"
                  >Messages</a>
                </li>
                <li>
                  <a data-toggle="tab" href="#today" role="tab" id="today-tab">Today</a>
                </li>
              </ul>
              <a href="#off-canvas" class="off-sidebar-close"></a>
            </header>
            <div class="off-sidebar-content offcanvas-scroll auto-scroll">
              <div class="tab-content">
                <!-- Begin Messenger -->
                <div
                  role="tabpanel"
                  class="tab-pane show active fade"
                  id="messenger"
                  aria-labelledby="messenger-tab"
                >
                  <!-- Begin Chat Message -->
                  <span class="date">Today</span>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="/img/avatar/avatar-02.jpg"
                      alt="..."
                    >
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>
                          <span class="mb-2">Brandon wrote</span>
                          Hi David, what's up?
                        </p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localization font-size-small">2 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Hi Brandon, fine and you?</p>
                        <p>I'm working on the next update of Elisyam</p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localisation font-size-small">3 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="/img/avatar/avatar-02.jpg"
                      alt="..."
                    >
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>
                          <span class="mb-2">Brandon wrote</span>
                          I can't wait to see
                        </p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localization font-size-small">5 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>I'm almost done</p>
                      </div>
                      <div class="messenger-details">
                        <span class="messenger-message-localisation font-size-small">10 minutes ago</span>
                      </div>
                    </div>
                  </div>
                  <span class="date">Yesterday</span>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="/img/avatar/avatar-05.jpg"
                      alt="..."
                    >
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>I updated the server tonight</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Didn't you have any problems?</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-sender">
                    <img
                      class="messenger-image messenger-image-default"
                      src="/img/avatar/avatar-05.jpg"
                      alt="..."
                    >
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>No!</p>
                      </div>
                    </div>
                  </div>
                  <div class="messenger-message messenger-message-recipient">
                    <div class="messenger-message-wrapper">
                      <div class="messenger-message-content">
                        <p>Great!</p>
                        <p>See you later!</p>
                      </div>
                    </div>
                  </div>
                  <!-- End Chat Message -->
                  <!-- Begin Message Form -->
                  <div class="enter-message">
                    <div class="enter-message-form">
                      <input type="text" placeholder="Enter your message...">
                    </div>
                    <div class="enter-message-button">
                      <a href="#" class="send">
                        <i class="ion-paper-airplane"></i>
                      </a>
                    </div>
                  </div>
                  <!-- End Message Form -->
                </div>
                <!-- End Messenger -->
                <!-- Begin Today -->
                <div role="tabpanel" class="tab-pane fade" id="today" aria-labelledby="today-tab">
                  <!-- Begin Today Stats -->
                  <div class="sidebar-heading pt-0">Today</div>
                  <div class="today-stats mt-3 mb-3">
                    <div class="row">
                      <div class="col-4 text-center">
                        <i class="la la-users"></i>
                        <div class="counter">264</div>
                        <div class="heading">Clients</div>
                      </div>
                      <div class="col-4 text-center">
                        <i class="la la-cart-arrow-down"></i>
                        <div class="counter">360</div>
                        <div class="heading">Sales</div>
                      </div>
                      <div class="col-4 text-center">
                        <i class="la la-money"></i>
                        <div class="counter">$ 4,565</div>
                        <div class="heading">Earnings</div>
                      </div>
                    </div>
                  </div>
                  <!-- End Today Stats -->
                  <!-- Begin Friends -->
                  <div class="sidebar-heading">Friends</div>
                  <div class="quick-friends mt-3 mb-3">
                    <ul class="list-group w-100">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="/img/avatar/avatar-02.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style="width: 35px;"
                            >
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Brandon Smith</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="/img/avatar/avatar-03.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style="width: 35px;"
                            >
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Louis Henry</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="/img/avatar/avatar-04.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style="width: 35px;"
                            >
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Nathan Hunter</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="/img/avatar/avatar-05.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style="width: 35px;"
                            >
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Megan Duncan</a>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-left align-self-center mr-3">
                            <img
                              src="/img/avatar/avatar-06.jpg"
                              alt="..."
                              class="img-fluid rounded-circle"
                              style="width: 35px;"
                            >
                          </div>
                          <div class="media-body align-self-center">
                            <a href="javascript:void(0);">Beverly Oliver</a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!-- End Friends -->
                  <!-- Begin Settings -->
                  <div class="sidebar-heading">Settings</div>
                  <div class="quick-settings mt-3 mb-3">
                    <ul class="list-group w-100">
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Notifications Email</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input class="toggle-checkbox" type="checkbox" checked>
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Notifications Sound</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input class="toggle-checkbox" type="checkbox">
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li class="list-group-item">
                        <div class="media">
                          <div class="media-body align-self-center">
                            <p class="text-dark">Chat Message Sound</p>
                          </div>
                          <div class="media-right align-self-center">
                            <label>
                              <input class="toggle-checkbox" type="checkbox" checked>
                              <span>
                                <span></span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <!-- End Settings -->
                </div>
                <!-- End Today -->
              </div>
            </div>
            <!-- End Offcanvas Container -->
          </div>
          <!-- End Offsidebar Container -->
        </div>
        <!-- End Offcanvas Sidebar -->
      </div>
      <!-- End Content -->
    </div>
    <!-- End Page Content -->
  </div>
</template>

<script>
  import AppHeader from "~/components/Header"

  export default {
    name: "modern",
    computed: {
      name() {
        return this.$route.name;
      }
    },
    components: {
      AppHeader
    }
  };
</script>
