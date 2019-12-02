import { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

// import Api from "@app/cms/api";
// import Utils from "@app/cms/utils/auth";

const Navbar = () => {
  const [isLoading, setLoading] = useState(false);
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const _fetch = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await Api.request(`${process.env.AUTH_URL}/user/info`, {
  //         headers: { Authorization: Utils.getToken() }
  //       });
  //       setUser(res);
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("FETCH USER", err);
  //       setLoading(false);
  //     }
  //   };

  //   _fetch();
  // }, []);

  // const _logout = () => {
  //   Utils.logout();

  //   Router.push("/error", "/");
  // };

  return (
    <header className="main-header">
      <Link href="/" prefetch={false}>
        <a className="logo">
          <span className="logo-mini">
            <b>NMS</b>
          </span>
          <span className="logo-lg">
            <b>NMS</b> Satkomindo
          </span>
        </a>
      </Link>
      <nav className="navbar navbar-static-top">
        <a
          href="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </a>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            {isLoading && (
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <div className="label pull-right" style={{ marginTop: 10 }}>
                    <i className="fa fa-spinner fa-pulse fa-lg" />
                  </div>
                </a>
              </li>
            )}
            {/* {user && (
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img src={`${user.profilePicture}`} className="user-image" />
                  <span className="hidden-xs">{user.fullname}</span>
                </a>
                <ul className="dropdown-menu" style={{ width: 100 }}>
                  <li className="user-footer">
                    <a
                      href={`${process.env.SSO_URL}/profile`}
                      className="btn btn-default"
                      style={{
                        border: 0,
                        textAlign: "start",
                        background: "#F9F9F9"
                      }}
                    >
                      Profile
                    </a>
                    <a
                      href="#"
                      onClick={_logout}
                      className="btn btn-default"
                      style={{
                        border: 0,
                        textAlign: "start",
                        background: "#F9F9F9"
                      }}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            )} */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
