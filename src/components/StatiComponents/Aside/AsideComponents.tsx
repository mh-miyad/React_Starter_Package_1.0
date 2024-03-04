const AsideComponents = () => {
  return (
    <div>
      <aside className="left-sidebar">
        {/* <!-- Sidebar scroll--> */}
        <div className="scroll-sidebar">
          {/* <!-- Sidebar navigation--> */}
          <nav className="sidebar-nav">
            <ul className="sidebar-user-nav sidebarnav w-100">
              <li className="sidebar-item nav-item dropend user-profile mb-0">
                <a
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                  className="nav-link dropdown-toggle sidebar-link has-arrow waves-effect waves-dark user-box"
                  href="javascript:void(0)"
                >
                  {/* <!-- <img src="assets/images/users/profile.png" alt="user" className="m-0"> --> */}
                  <div className="highlight">
                    <span>R</span>
                  </div>
                  <div className="hide-menu user-name">
                    <h3 className="hide-menu">Account Name Here</h3>
                  </div>
                  <div className="hide-menu icon-hide-menu">
                    <img
                      src="assets/images/icon/settings_ethernet.png"
                      alt="settings_ethernet"
                      className="img-fluid w-auto h-auto settings_ethernet"
                    />
                    <img
                      src="assets/images/icon/settings_ethernet_dark.png"
                      alt="settings_ethernet"
                      className="img-fluid w-auto h-auto settings_ethernet_hover"
                    />
                    <img
                      src="assets/images/icon/settings_ethernet_dark.png"
                      alt="settings_ethernet"
                      className="img-fluid w-auto h-auto settings_ethernet_dark"
                    />
                  </div>
                </a>
                <div
                  role="menu"
                  className="dropdown-menu sidenav-dropdown dropdown-menu-end custom-scrollbar-css"
                >
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                  <a href="dashboard.html" className="dropdown-item">
                    <div className="task-name">
                      <div className="left-box">
                        <span className="name">K</span>
                        <div className="activity-rate">
                          <h4>teambuiding.ae</h4>
                          <p>Project | teambuiding.ae</p>
                        </div>
                      </div>
                      <div className="arrow">
                        <i className="bi bi-box-arrow-up-right"></i>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
            <ul
              id="sidebarnav"
              className="sidebarnav w-100 custom-scrollbar-css"
            >
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/dashboard.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/dashboard_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/dashboard_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Dashboard</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> User Entry List </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Entry Name</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Add New Entry</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/operation.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/operation_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/operation_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Operation </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Booking </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> POS</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Scanning</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/events.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/events_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/events_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Event Setup</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Activity</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Activity Schedules</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Venue</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Event Waiver</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">
                        Event Terms and Conditions
                      </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Event FAQs</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/tickets.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/tickets_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/tickets_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Tickets</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Ticket Types</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Ticket Printing</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Seating and Arena</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Ticket Scanning</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Footfall Reports</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Promocode</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/registration.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/registration_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/registration_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Registration</span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Visitors</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> VIP</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Entertainer</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Vendor</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Speaker</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Sponsor</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Contract</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Complimentary Ticket</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/reports.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/reports_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/reports_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Reports </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> User Entry List </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Entry Name</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu"> Add New Entry</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/marketing.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/marketing_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/marketing_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Marketing </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Message Template</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Push Notification</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Email Message</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Pre Event Survey</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Post Event Survey</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Polls during the Events</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/merchandise.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/merchandise_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/merchandise_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Merchandise </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Order</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Inventory</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/support.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/support_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/support_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Support </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">FAQ </span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Visitor feedback</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Survey</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/content.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/content_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/content_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Content </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Web Content</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Mobile Content</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">News</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Blog</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Gallery</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <a
                  className="sidebar-link has-arrow waves-effect waves-dark"
                  href="javascript:void(0)"
                  aria-expanded="false"
                >
                  <img
                    src="assets/images/events-menu-icon/settings1.png"
                    alt="home"
                    className="img-fluid dark-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/settings1_active.png"
                    alt="home"
                    className="img-fluid active-img"
                  />
                  <img
                    src="assets/images/events-menu-icon/settings1_dark.png"
                    alt="home"
                    className="img-fluid light-img"
                  />
                  <span className="hide-menu">Settings </span>
                </a>
                <ul aria-expanded="false" className="collapse first-level">
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Web Content</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Mobile Content</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">News</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Blog</span>
                    </a>
                  </li>
                  <li className="sidebar-item">
                    <a href="#" className="sidebar-link">
                      <i
                        data-feather="chevron-right"
                        className="feather-sm"
                      ></i>
                      <span className="hide-menu">Gallery</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <ul id="sidebarnav2" className="sidebarnav2 d-none w-100">
              {/* <!-- <li className="sidebar-item"> 
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><img src="assets/images/icon/credit_card.png" alt="credit_card" className="img-fluid">
                                <span className="hide-menu">Accounts Billing</span>
                            </a>
                        </li>
                        <li className="sidebar-item"> 
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><img src="assets/images/icon/person.png" alt="person" className="img-fluid">
                                <span className="hide-menu">Consulting services</span>
                            </a>
                        </li>
                        <li className="sidebar-item"> 
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><img src="assets/images/icon/support_agent.png" alt="support_agent" className="img-fluid">
                                <span className="hide-menu">Support</span>
                            </a>
                        </li>
                        <li className="sidebar-item"> 
                            <a className="sidebar-link waves-effect waves-dark sidebar-link" href="#" aria-expanded="false"><img src="assets/images/icon/import_contacts.png" alt="import_contacts" className="img-fluid">
                                <span className="hide-menu">Knowledge Base</span>
                            </a>
                        </li> --> */}
              <li className="sidebar-item">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="#"
                  aria-expanded="false"
                >
                  <div className="powered-by">
                    <span className="hide-menu">Powered by</span>
                    <img
                      src="assets/images/royex-logo.png"
                      alt="royex-logo"
                      className="img-fluid royex-logo"
                    />
                    <img
                      src="assets/images/royex-logo-dark.png"
                      alt="royex-logo-dark"
                      className="img-fluid royex-logo-dark"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </nav>

          {/* <!-- End Sidebar navigation --> */}
        </div>
        {/* <!-- End Sidebar scroll--> */}
      </aside>
    </div>
  );
};

export default AsideComponents;
