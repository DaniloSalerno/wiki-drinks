import { useGlobalContext } from './context'
function App() {
  const prova = useGlobalContext()
  console.log(prova);
  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
