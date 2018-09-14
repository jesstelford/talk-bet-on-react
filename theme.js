import React from 'react-dom'
import { swiss as theme } from 'mdx-deck/themes'
import Provider from './components/Provider'
import components from './components/components'

export default {
  components,
  ...theme,
  colors: {
    ...theme.colors,
    border: theme.colors.link,
  },
  Provider,
}
