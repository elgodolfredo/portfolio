import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  globalCss: {
    'body': {
      bg: { base: '#f0e7bd', _dark: '#202023' },
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "'M PLUS Rounded 1c', sans-serif" },
        body: { value: "'M PLUS Rounded 1c', sans-serif" },
      },
      colors: {
        glassTeal: { value: '#88ccca' },
      },
    },
    recipes: {
      heading: {
        variants: {
          'section-title': {
            textDecoration: 'underline',
            fontSize: '20px',
            textUnderlineOffset: '6px',
            textDecorationColor: '#525252',
            textDecorationThickness: '4px',
            marginTop: '3',
            marginBottom: '4',
          }
        }
      },
      link: {
        base: {
          textUnderlineOffset: '3px',
          color: { base: '#3d7aed', _dark: '#ff63c3' },
        }
      }
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
export default system;