import { defineConfig, defineRecipe, RecipeConfig } from '@pandacss/dev'
import codegenPreset from './preset'
import { RecipeConfig as CodegenRecipeConfig, RecipeVariantRecord } from './styled-system-strict/types'

declare module '@pandacss/dev' {
  export interface StyledRecipeConfig<T extends RecipeVariantRecord = RecipeVariantRecord>
    extends CodegenRecipeConfig<T> {}
}

defineRecipe({ className: 'x', base: { fontSize: '2xlx' } })
defineRecipe({ className: 'x', base: { borderRaidus: 'md' } })
defineRecipe({ className: 'x', base: { borderRadius: 'md' } })

export function defineSaferRecipe<T extends RecipeVariantRecord>(config: CodegenRecipeConfig<T>): RecipeConfig {
  return config as RecipeConfig
}

defineSaferRecipe({ className: 'x', base: { fontSize: '2xl' } });
defineSaferRecipe({ className: 'x', base: { fontZise: '2xl' } });
defineSaferRecipe({ className: 'x', base: { fontSize: '2xlx' } });

export default defineConfig({
  presets: ['@pandacss/dev/presets', codegenPreset],
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: 'styled-system-strict',

  // The JSX framework to use
  jsxFramework: 'react',
  strictTokens: true,
})
