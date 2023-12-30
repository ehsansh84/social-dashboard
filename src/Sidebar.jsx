import {
  Cog6ToothIcon,
  FolderIcon,
  PresentationChartLineIcon,
  UserIcon,
  DocumentIcon,
  UserCircleIcon
} from "@heroicons/react/24/outline"

import { NavLink } from "react-router-dom"
import { ThemeToggle } from "./components/ThemeToggle"

const navigation = [
  { name: "Dashboard", href: "/", icon: PresentationChartLineIcon },
  { name: "Users", href: "users", icon: UserIcon },
  { name: "Posts", href: "posts", icon: DocumentIcon },
  { name: "Sources", href: "sources", icon: FolderIcon },
  { name: "Accounts", href: "accounts", icon: UserCircleIcon },
  { name: "Settings", href: "settings", icon: Cog6ToothIcon },
]

export function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-e border-border bg-bg px-6 dark:border-none dark:ring-1 dark:ring-white/10">
      <div className="flex h-16 shrink-0 items-center">
        <img className="h-16 w-auto" src="/logo.svg" alt="Your Company" />
      </div>
      <ThemeToggle />
      <nav className="flex flex-1 flex-col">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.href}
                    className={(navData) =>
                      navData.isActive
                        ? "group flex gap-x-3 rounded-md bg-gray-100 p-2 text-sm font-semibold leading-6 text-primary-600 hover:bg-bg-hover hover:text-primary-600 dark:bg-gray-800"
                        : "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-bg-hover hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
                    }
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="google.com"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-text hover:bg-bg-hover"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
