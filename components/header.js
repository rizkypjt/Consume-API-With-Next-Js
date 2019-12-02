import { useRouter } from "next/router";
import Link from "next/link";

const _activeLink = (url, pathname) =>
  (pathname + "/").startsWith(url + "/") ? "active" : undefined;

const Header = () => {
  const router = useRouter();

  return (
    <header className="main-header">
      <nav className="navbar navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">
              <b>Admin</b>LTE
            </a>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar-collapse"
              aria-expanded="false"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>

          <div
            className="navbar-collapse pull-left collapse"
            id="navbar-collapse"
            aria-expanded="false"
            style={{ height: 1 }}
          >
            <ul className="nav navbar-nav">
              <li className={`${_activeLink(router.pathname, "/")}`}>
                <a href="/">Dashboard</a>
              </li>
              <li className={`${_activeLink(router.pathname, "/client")}`}>
                <a href="/client">Client</a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  Dropdown <span className="caret"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="#">Action</a>
                  </li>
                  <li>
                    <a href="#">Another action</a>
                  </li>
                  <li>
                    <a href="#">Something else here</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">Separated link</a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#">One more separated link</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="navbar-search-input"
                  placeholder="Search"
                />
              </div>
            </form>
          </div>
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              <li className="dropdown messages-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-envelope-o"></i>
                  <span className="label label-success">4</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 4 messages</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <h4>
                            Support Team
                            <small>
                              <i className="fa fa-clock-o"></i> 5 mins
                            </small>
                          </h4>
                          <p>Why not buy a new awesome theme?</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">See All Messages</a>
                  </li>
                </ul>
              </li>

              <li className="dropdown notifications-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="label label-warning">10</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 10 notifications</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <i className="fa fa-users text-aqua"></i> 5 new
                          members joined today
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown tasks-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-flag-o"></i>
                  <span className="label label-danger">9</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="header">You have 9 tasks</li>
                  <li>
                    <ul className="menu">
                      <li>
                        <a href="#">
                          <h3>
                            Design some buttons
                            <small className="pull-right">20%</small>
                          </h3>
                          <div className="progress xs">
                            <div
                              className="progress-bar progress-bar-aqua"
                              style={{ width: "20%" }}
                              role="progressbar"
                              aria-valuenow="20"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              <span className="sr-only">20% Complete</span>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="footer">
                    <a href="#">View all tasks</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <span className="hidden-xs">NagiosAdmin</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="user-header">
                    <p>
                      NagiosAdmin - Web Developer
                      <small>Member since Nov. 2012</small>
                    </p>
                  </li>
                  <li className="user-body">
                    <div className="row">
                      <div className="col-xs-4 text-center">
                        <a href="#">Followers</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Sales</a>
                      </div>
                      <div className="col-xs-4 text-center">
                        <a href="#">Friends</a>
                      </div>
                    </div>
                  </li>
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div className="pull-right">
                      <a href="#" className="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
