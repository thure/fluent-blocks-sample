import { ViewContent } from '@fluent-blocks/react'

export default function Home() {
  return (
    <ViewContent
      main={{
        title: 'Home',
        abstract: 'Inluding the hero and all that jazz.',
      }}
      sidebar={{
        items: [
          {
            actionId: 'navL1',
            label: 'Nav',
            menu: [
              {
                action: { actionId: 'navL1:home', icon: 'home', label: 'Home' },
              },
              {
                action: { actionId: 'navL1:apps', icon: 'apps', label: 'Apps' },
              },
              {
                action: {
                  actionId: 'navL1:tools',
                  icon: 'wrench',
                  label: 'Tools',
                },
              },
            ],
          },
        ],
      }}
    />
  )
}
