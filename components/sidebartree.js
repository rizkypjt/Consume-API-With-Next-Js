import { withRouter } from "next/router";

const _activeTree = (pathname, urls) => {
  let active = false;
  urls.forEach(url => {
    if (pathname.startsWith(url)) {
      active = true;
      return;
    }
  });

  return active ? "active treeview menu-open" : "treeview";
};

const SidebarTree = ({ icon, label, children, router }) => (
  <li
    className={_activeTree(
      router.pathname,
      Array.isArray(children)
        ? children.map(c => c.props.href)
        : [children.props.href]
    )}
    style={{ height: "auto" }}
  >
    <a href="#">
      <i className={icon}></i> <span>{label}</span>
      <span className="pull-right-container">
        <i className="fa fa-angle-left pull-right"></i>
      </span>
    </a>
    <ul className="treeview-menu">{children}</ul>
  </li>
);

export default withRouter(SidebarTree);
