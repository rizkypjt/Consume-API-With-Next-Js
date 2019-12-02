import { useEffect, useState } from "react";
import { withRouter } from "next/router";
import Link from "next/link";

import SidebarTree from "./sidebartree";
import SidebarItem from "./sidebaritem";

const Sidebar = ({ router }) => {
  return (
    <aside className="main-sidebar">
      <section className="sidebar">
        <ul className="sidebar-menu" data-widget="tree">
          {/*  */}
          <li className="header">NETWORK MONITORING</li>
          {/*  */}
          <SidebarItem href="/" label="Dashboard" icon="fa fa-dashboard" />
          {/*  */}
          <SidebarTree icon="fa fa-cog" label="SLA Config">
            <SidebarItem
              href="/client"
              label="[DEBUG] Nagios Client"
              icon="fa fa-warning"
            />
            <SidebarItem
              href="/stop-clock"
              label="Stop Clock"
              icon="fa fa-clock-o"
            />
          </SidebarTree>
          {/*  */}
          <li className="header">PREVENTIVE MANAGEMENT</li>
          {/*  */}
          <SidebarTree icon="fa fa-television" label="Remotes">
            <SidebarItem
              href="/remote"
              label="List Remotes"
              icon="fa fa-laptop"
            />
            <SidebarItem
              href="/remote/distance"
              label="Remotes Distance"
              icon="fa fa-map-o"
            />
            <SidebarItem
              href="/remote/offline"
              label="Offline"
              icon="fa fa-minus-circle"
            />
            <SidebarItem
              href="/remote/offline/history"
              label="Offline History"
              icon="fa fa-history"
            />
            <SidebarItem
              href="/remote/ping"
              label="Status Agents PING"
              icon="fa fa-cog"
            />
            <SidebarItem
              href="/remote-offline/snmp"
              label="Failed SNMP"
              icon="fa fa-cog"
            />
          </SidebarTree>
          {/*  */}
          <SidebarTree icon="fa fa-link" label="Backhaul">
            <SidebarItem
              href="/backhaul"
              label="List Backhaul"
              icon="fa fa-list"
            />
            <SidebarItem
              href="/backhaul/chart"
              label="Chart All"
              icon="fa fa-area-chart"
            />
            <SidebarItem
              href="/backhaul/network"
              label="Network Map"
              icon="fa fa-map-o"
            />
          </SidebarTree>
          {/*  */}
          <SidebarTree icon="fa fa-tasks" label="Task Project">
            <SidebarItem href="/task" label="Task" icon="fa fa-list" />
          </SidebarTree>
          {/*  */}
          <li className="header">CORRECTIVE MANAGEMENT</li>
          {/*  */}
          <SidebarTree icon="fa fa-ticket" label="Ticket">
            <SidebarItem
              href="/ticket"
              label="Trouble Ticket"
              icon="fa fa-ticket"
            />
            <SidebarItem
              href="/ticket/summary"
              label="Ticket Work Result"
              icon="fa fa-newspaper-o"
            />
            <SidebarItem
              href="/ticket/dashboard"
              label="Progress"
              icon="fa fa-dashboard"
            />
            <SidebarItem
              href="/ticket/done"
              label="Ticket Done"
              icon="fa fa-check"
            />
          </SidebarTree>
          {/*  */}
          <SidebarTree icon="fa fa-file-o" label="Report">
            <SidebarItem
              href="/report/availability"
              label="Availability"
              icon="fa fa-list"
            />
            <SidebarItem href="/report/mttr" label="MTTR" icon="fa fa-list" />
            <SidebarItem
              href="/report/reliability"
              label="Reliability"
              icon="fa fa-list"
            />
            <SidebarItem
              href="/report/survey"
              label="Survey"
              icon="fa fa-list"
            />
            <SidebarItem
              href="/report/installation"
              label="Installation"
              icon="fa fa-list"
            />
            <SidebarItem href="/report/cm" label="CM" icon="fa fa-list" />
            <SidebarItem href="/report/pm" label="PM" icon="fa fa-list" />
            <SidebarItem
              href="/report/relocation"
              label="Relocation"
              icon="fa fa-list"
            />
            <SidebarItem
              href="/report/dismantle"
              label="Dismantle"
              icon="fa fa-list"
            />
          </SidebarTree>
          {/*  */}
          <SidebarItem href="/manual" label="Manual/SOP" icon="fa fa-book" />
        </ul>
      </section>
    </aside>
  );
};

export default withRouter(Sidebar);
