import "./App.css";
import { Heading } from "./components/Heading";
import Status from "./components/Status";
import { Oscar } from "./components/Oscar";
function App() {
  return (
    <div className="App">
      <Status status="loading" />
      <Heading>Hello World</Heading>
    <Oscar>
      <Heading>Oscar goes to Leonardo Dicpario!</Heading>
    </Oscar>
    </div>
  );
}
export default App;

