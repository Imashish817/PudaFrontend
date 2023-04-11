import "./App.css";
import { MyProvider } from "./Storage/Storage.tsx";
import Loader from "./Components/Controller/Loader.tsx";

export default function App() {
  return (
    <MyProvider>
      <Loader />
    </MyProvider>
  );
}
