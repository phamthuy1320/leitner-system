import { NewCycle } from "./components/templates/NewCycle";
import { WordContextProvider } from "./context/useWordContext";

function App() {
  return (
    <WordContextProvider>
      <NewCycle />
    </WordContextProvider>
  );
}

export default App;
