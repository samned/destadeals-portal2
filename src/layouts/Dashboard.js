import React from "react";
import DashboardLinks from "../components/DashboardLinks";

function Dashboard() {
  return (
    <aside className="w-64 " aria-label="Sidebar">
      <div className="overflow-y-auto text-blue-600 py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <a
          href="https://destadeal.com"
          className="flex items-center pl-2.5 mb-16"
        >
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            DestaDeals
          </span>
        </a>
        <ul className="space-y-2">
          <DashboardLinks
            text={"Dashboard"}
            linkIcon={"ChartPieIcon"}
            link={"/"}
          />
          <DashboardLinks text={"Listings"} linkIcon={"TableIcon"} link={""} />
          <DashboardLinks
            text={"Messages"}
            linkIcon={"InboxInIcon"}
            link={"/"}
          />
          <DashboardLinks text={"Users"} linkIcon={"UsersIcon"} link={"/"} />
          <DashboardLinks
            text={"Create User"}
            linkIcon={"UserAddIcon"}
            link={"/users/create"}
          />
          <DashboardLinks
            text={"Companies"}
            linkIcon={"LibraryIcon"}
            link={"/companies"}
          />
          <DashboardLinks
            text={"Add Company"}
            linkIcon={"ViewGridAddIcon"}
            link={"/companies/create"}
          />
        </ul>
      </div>
    </aside>
  );
}

export default Dashboard;
