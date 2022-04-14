import React from "react";
import {
  UserAddIcon,
  UsersIcon,
  LibraryIcon,
  ViewGridAddIcon,
  InboxInIcon,
  TableIcon,
  ChartPieIcon,
} from "@heroicons/react/solid";
const dynamicIcons = {
  UserAddIcon: UserAddIcon,
  UsersIcon: UsersIcon,
  LibraryIcon: LibraryIcon,
  ViewGridAddIcon: ViewGridAddIcon,
  InboxInIcon: InboxInIcon,
  TableIcon: TableIcon,
  ChartPieIcon: ChartPieIcon,
};
function DashboardLinks({ text, link, linkIcon }) {
  const DynamicIcon = dynamicIcons[linkIcon];

  return (
    <li>
      <a
        href={link}
        className="flex items-center p-2 text-base font-normal hover:text-blue-600 rounded-lg dark:text-white hover:bg-white text-white dark:hover:bg-gray-700"
      >
        <DynamicIcon
          className="flex-shrink-0 w-6 h-6  transition duration-75 dark:text-gray-400 group-hover:text-gray-900  dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        />
        <span className="flex-1 ml-3 whitespace-nowrap  ">{text}</span>
      </a>
    </li>
  );
}

export default DashboardLinks;
