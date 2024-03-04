const HeaderComponents = () => {
  return (
    <div>
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          <div className="navbar-header">
            {/* <!-- This is for the sidebar toggle which is visible on mobile only --> */}
            <a
              className="nav-toggler waves-effect waves-light d-block d-md-none"
              href="javascript:void(0)"
            >
              <i className="ri-close-line fs-6 ri-menu-2-line"></i>
            </a>
            {/* <!-- -------------------------------------------------------------- -->
          <!-- Logo -->
          <!-- -------------------------------------------------------------- --> */}
            <a className="navbar-brand d-none" href="index.html">
              {/* <!-- Logo text --> */}
              <span className="logo-text">
                {/* <!-- dark Logo text --> */}
                <img
                  src="assets/images/logo-light-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* <!-- Light Logo text --> */}
                <img
                  src="assets/images/logo-dark-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>

            <a className="navbar-brand" href="index.html">
              {/* <!-- Logo icon --> */}
              <b className="logo-icon">
                {/* <!--You can put here icon as well // <i className="wi wi-sunset"></i> //--> */}
                {/* <!-- Dark Logo icon --> */}
                <img
                  src="assets/images/logo-icon-light.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* <!-- Light Logo icon --> */}
                <img
                  src="assets/images/logo-icon-dark.png"
                  alt="homepage"
                  className="light-logo"
                />
              </b>
              {/* <!--End Logo icon -->
            <!-- Logo text --> */}
              <span className="logo-text">
                {/* <!-- dark Logo text --> */}
                <img
                  src="assets/images/logo-light-text.png"
                  alt="homepage"
                  className="dark-logo"
                />
                {/* <!-- Light Logo text --> */}
                <img
                  src="assets/images/logo-dark-text.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>
            </a>
            {/* <!-- -------------------------------------------------------------- -->
          <!-- End Logo -->
          <!-- -------------------------------------------------------------- -->
          <!-- -------------------------------------------------------------- -->
          <!-- Toggle which is visible on mobile only -->
          <!-- -------------------------------------------------------------- --> */}
            <a
              className="topbartoggler d-block d-md-none waves-effect waves-light"
              href="javascript:void(0)"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i data-feather="more-horizontal" className="feather-sm"></i>
            </a>
          </div>
          {/* 
        <!-- -------------------------------------------------------------- -->
        <!-- End Logo -->
        <!-- -------------------------------------------------------------- --> */}
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              {/* <!-- This is  --> */}
              <li className="nav-item">
                <a
                  className="nav-link sidebartoggler sidebar-toggle d-none d-md-block waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i data-feather="menu" className="feather-sm"></i>
                </a>
              </li>
            </ul>
            <div className="top-search-box mb-0">
              <form className="search-form" action="">
                <div className="input-group">
                  <button
                    type="submit"
                    className="btn input-group-text"
                    id="basic-addon1"
                  >
                    <i data-feather="search" className="feather-sm"></i>
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </form>
            </div>
            {/* <!-- -------------------------------------------------------------- -->
          <!-- toggle and nav items -->
          <!-- -------------------------------------------------------------- -->

          <!-- -------------------------------------------------------------- -->
          <!-- Right side toggle and nav items -->
          <!-- -------------------------------------------------------------- --> */}
            <ul className="navbar-nav justify-content-end align-items-center w-100">
              {/* <!-- -------------------------------------------------------------- -->
            <!-- Mood -->
            <!-- -------------------------------------------------------------- --> */}

              <li className="nav-item">
                <button
                  className="theme-switcher gray-circle-btn waves-effect waves-dark"
                  id="btnSwitch"
                  type="button"
                  title="Switch theme"
                >
                  <span className="sr-only">Switch theme</span>
                  <i
                    className="sun-icon"
                    data-feather="sun"
                    aria-hidden="true"
                  ></i>
                  <i
                    className="moon-icon"
                    data-feather="moon"
                    aria-hidden="true"
                  ></i>
                </button>
              </li>
              {/* <!-- -------------------------------------------------------------- -->
            <!-- Comment -->
            <!-- -------------------------------------------------------------- --> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i data-feather="bell"></i>
                  <div className="notify">
                    <span className="heartbit"></span>{" "}
                    <span className="point"></span>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-end mailbox animated flipInY">
                  <ul className="list-style-none">
                    <li>
                      <div className="border-bottom rounded-top py-3 px-4">
                        <div className="mb-0 font-weight-medium fs-4">
                          Notifications
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="message-center notifications position-relative h-auto">
                        {/* <!-- Message --> */}
                        <a
                          href="javascript:void(0)"
                          className="message-item d-flex align-items-center border-bottom px-3 py-2"
                        >
                          <span className="btn btn-light-danger text-danger btn-circle">
                            <i
                              data-feather="link"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Luanch Admin
                            </h5>
                            <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                              Just see the my new admin!
                            </span>
                            <span className="fs-2 text-nowrap d-block subtext text-muted">
                              9:30 AM
                            </span>
                          </div>
                        </a>
                        {/* <!-- Message --> */}
                        <a
                          href="javascript:void(0)"
                          className="message-item d-flex align-items-center border-bottom px-3 py-2"
                        >
                          <span className="btn btn-light-success text-success btn-circle">
                            <i
                              data-feather="calendar"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Event today
                            </h5>
                            <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                              Just a reminder that you have event
                            </span>
                            <span className="fs-2 text-nowrap d-block subtext text-muted">
                              9:10 AM
                            </span>
                          </div>
                        </a>
                        {/* <!-- Message --> */}
                        <a
                          href="javascript:void(0)"
                          className="message-item d-flex align-items-center border-bottom px-3 py-2"
                        >
                          <span className="btn btn-light-info text-info btn-circle">
                            <i
                              data-feather="settings"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Settings
                            </h5>
                            <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                              You can customize this template as you want
                            </span>
                            <span className="fs-2 text-nowrap d-block subtext text-muted">
                              9:08 AM
                            </span>
                          </div>
                        </a>
                        {/* <!-- Message --> */}
                        <a
                          href="javascript:void(0)"
                          className="message-item d-flex align-items-center border-bottom px-3 py-2"
                        >
                          <span className="btn btn-light-primary text-primary btn-circle">
                            <i
                              data-feather="users"
                              className="feather-sm fill-white"
                            ></i>
                          </span>
                          <div className="w-75 d-inline-block v-middle ps-3">
                            <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">
                              Pavan kumar
                            </h5>
                            <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">
                              Just see the my admin!
                            </span>
                            <span className="fs-2 text-nowrap d-block subtext text-muted">
                              9:02 AM
                            </span>
                          </div>
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        className="nav-link border-top text-center text-dark pt-3"
                        href="javascript:void(0);"
                      >
                        <strong>Check all notifications</strong>
                        <i
                          data-feather="chevron-right"
                          className="feather-sm"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <!-- -------------------------------------------------------------- -->
            <!-- End Comment -->
            <!-- -------------------------------------------------------------- -->
            <!-- -------------------------------------------------------------- -->
            <!-- Profile -->
            <!-- -------------------------------------------------------------- --> */}
              <li className="nav-item dropdown user-dropdown">
                <a
                  className="nav-link dropdown-toggle waves-effect waves-dark user-pic justify-content-between"
                  href="#"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="author-pic w-100">
                    <img
                      src="assets/images/users/1.jpg"
                      alt="user"
                      width="34"
                      className="profile-pic rounded-circle"
                    />
                    <span>Tamim Tanvir</span>
                  </div>
                  <i data-feather="chevron-down" className="feather-sm"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-top animated flipInY pb-0">
                  {/* <!-- <div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
                                    <div className=""><img src="assets/images/users/1.jpg" alt="user" className="rounded-circle" width="60"></div>
                                    <div className="ms-2">
                                        <h4 className="mb-0 text-white">Steave Jobs</h4>
                                        <p className=" mb-0">varun@gmail.com</p>
                                    </div>
                                </div> --> */}
                  <a className="dropdown-item" href="#">
                    <i
                      data-feather="user"
                      className="feather-sm text-info me-1 ms-1"
                    ></i>
                    My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i
                      data-feather="credit-card"
                      className="feather-sm text-primary me-1 ms-1"
                    ></i>
                    My Task
                  </a>
                  <div className="dropdown-divider"></div>
                  {/* <!-- <a className="dropdown-item" href="#"><i data-feather="settings" className="feather-sm text-warning me-1 ms-1"></i>
                                    Account Setting</a> --> */}
                  <a
                    className="dropdown-item"
                    id="accounts-Billing"
                    href="javascript:void(0);"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/icon/credit_card.png"
                      alt="credit_card"
                      className="img-fluid icon-img"
                      width="24"
                      height="24"
                    />
                    <img
                      src="assets/images/icon/credit_card1.png"
                      alt="credit_card"
                      className="img-fluid hover-img"
                      width="24"
                      height="24"
                    />
                    <span className="hide-menu">Accounts Billing</span>
                  </a>
                  <a
                    className="dropdown-item"
                    id="consulting"
                    href="javascript:void(0);"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/icon/person.png"
                      alt="person"
                      className="img-fluid icon-img"
                      width="24"
                      height="24"
                    />
                    <img
                      src="assets/images/icon/person1.png"
                      alt="person"
                      className="img-fluid hover-img"
                      width="24"
                      height="24"
                    />
                    <span className="hide-menu">Consulting services</span>
                  </a>
                  <a
                    className="dropdown-item"
                    id="support"
                    href="javascript:void(0);"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/icon/support_agent.png"
                      alt="support_agent"
                      className="img-fluid icon-img"
                      width="24"
                      height="24"
                    />
                    <img
                      src="assets/images/icon/support_agent1.png"
                      alt="support_agent"
                      className="img-fluid hover-img"
                      width="24"
                      height="24"
                    />
                    <span className="hide-menu">Support</span>
                  </a>
                  <a
                    className="dropdown-item"
                    id="knowledge"
                    href="javascript:void(0);"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/images/icon/import_contacts.png"
                      alt="import_contacts"
                      className="img-fluid icon-img"
                      width="24"
                      height="24"
                    />
                    <img
                      src="assets/images/icon/import_contacts1.png"
                      alt="import_contacts"
                      className="img-fluid hover-img"
                      width="24"
                      height="24"
                    />
                    <span className="hide-menu">Knowledge Base</span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    <i
                      data-feather="log-out"
                      className="feather-sm text-danger me-1 ms-1"
                    ></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponents;
