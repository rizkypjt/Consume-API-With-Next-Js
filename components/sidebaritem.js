import { useState, useEffect } from "react";
import Link from "next/link";
import { withRouter } from "next/router";

const _activeLink = (url, pathname) =>
  url === "/"
    ? url === pathname
      ? "active"
      : undefined
    : (pathname + "/").startsWith(url + "/")
    ? "active"
    : undefined;

const SidebarItem = ({ href, label, icon, router }) => (
  <li className={_activeLink(href, router.pathname)}>
    <Link href={href} prefetch={false}>
      <a>
        <i className={icon} /> <span>{label}</span>
      </a>
    </Link>
  </li>
);

export default withRouter(SidebarItem);
