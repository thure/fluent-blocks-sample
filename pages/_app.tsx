import { FluentBlocksProvider } from '@fluent-blocks/react'

const _globals = require('../styles/globals.css')

function MyApp({ Component, pageProps }) {
  return (
    <FluentBlocksProvider
      themeName="light"
      accentScheme="teams"
      iconSpriteUrl="https://cdn.jsdelivr.net/npm/@fluent-blocks/basic-icons@9.1.2/basic-icons.svg"
    >
      <Component {...pageProps} />
    </FluentBlocksProvider>
  )
}

export default MyApp
