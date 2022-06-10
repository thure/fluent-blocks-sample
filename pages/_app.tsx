import { FluentBlocksProvider } from '@fluent-blocks/react'

const _globals = require('../styles/globals.css')

function FluentBlocksSampleApp({ Component, pageProps }) {
  return (
    <FluentBlocksProvider
      themeName="light"
      accentScheme="teams"
      iconSpriteUrl="/basic-icons.svg"
    >
      <Component {...pageProps} />
    </FluentBlocksProvider>
  )
}

export default FluentBlocksSampleApp
