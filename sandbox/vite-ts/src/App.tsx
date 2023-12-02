import { Stack, styled } from '../styled-system/jsx'
import { buttonRecipe, testRecipex } from '../styled-system/recipes'

const Button = styled('button', buttonRecipe)
const ButtonRecipe = styled('button', buttonRecipe)

const Test = styled('button', testRecipex)
const TestRecipe = styled('button', testRecipex)
const TestRecipex = styled('button', testRecipex)

function App() {
  return (
    <Stack p="2">
      <Button>ButtonRecipe</Button>
      <ButtonRecipe>ButtonRecipe</ButtonRecipe>

      <Test>Test</Test>
      <TestRecipe>TestRecipe</TestRecipe>
      <TestRecipex>TestRecipex</TestRecipex>
    </Stack>
  )
}

export default App
