import { PencilIcon, TrashIcon } from "@heroicons/react/20/solid"

import { classNames } from "../../../utils"

import { socialMediaDictionary } from "../../../components/SocialIcons"

const accounts = [
  {
    name: "Jane Cooper",
    social_media: "instagram",
    token: "Admin",
    description:
      "janecooper@example.com janecooper@example.com janecooper@example.com",
    id: "+ss1-202-5170",
    created_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    updated_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    user_id: "62d7a781d8f8d7627ce212d5",
  },
  {
    name: "Jane Cooper",
    social_media: "reddit",
    token: "Admin",
    description: "janecooper@example.com",
    id: "+1-",
    created_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    updated_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    user_id: "62d7a781d8f8d7627ce212d5",
  },
  {
    name: "Jane Cooper",
    social_media: "telegram",
    token: "Admin",
    description: "janecooper@example.com",
    id: "+1-0170",
    created_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    updated_at:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    user_id: "62d7a781d8f8d7627ce212d5",
  },
]

export function AccountList() {
  const badgeClass = (socialMedia) =>
    classNames(
      "inline-flex",
      "flex-shrink-0",
      "items-center",
      "rounded-full",
      "px-1.5",
      "py-0.5",
      "text-xs",
      "font-medium",
      "ring-1",
      "ring-inset",
      "font-normal",
      "text-" + socialMedia + "-text",
      "bg-" + socialMedia + "-bg",
      "ring-" + socialMedia + "-ring",
    )
  return (
    <ul className="grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {accounts.map((account) => {
        const SocialIcon = socialMediaDictionary[account.social_media].icon
        return (
          <li
            key={account.id}
            className="bg-bg-card col-span-1 divide-y divide-border rounded-lg shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-text">
                    {account.name}
                  </h3>

                  <span className={badgeClass(account.social_media)}>
                    {account.social_media}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-gray-500">
                  {account.description}
                </p>
              </div>
              <div className="group -m-1 p-1 -mt-4">
                <SocialIcon className={`h-8 w-8 fill-${account.social_media}`} />
              </div>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-border">
                <div className="flex w-0 flex-1 hover:bg-bg-hover">
                  <a
                    href={`mailto:${account.token}`}
                    className="relative -me-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-es-lg border border-transparent py-4 text-sm font-semibold text-text"
                  >
                    <PencilIcon
                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                      aria-hidden="true"
                    />
                    Edit Account
                  </a>
                </div>
                <div className="-ms-px flex w-0 flex-1 hover:bg-bg-hover">
                  <a
                    href={`tel:${account.token}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-ee-lg border border-transparent py-4 text-sm font-semibold text-text"
                  >
                    <TrashIcon
                      className="h-5 w-5 text-gray-400 dark:text-gray-600"
                      aria-hidden="true"
                    />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
