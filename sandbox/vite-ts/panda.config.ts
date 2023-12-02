import { defineConfig } from '@pandacss/dev'
import { buttonRecipe } from './src/recipes/button.recipe'
import { testRecipex } from './src/recipes/test.recipex'

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{tsx,jsx}'],
  exclude: [],
  outdir: 'styled-system',
  jsxFramework: 'react',
  theme: {
    recipes: {
      buttonRecipe,
      testRecipex,
    },
  },
})
