import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import NoPage from "./pages/noPage";

import UseStateExample from "./components/useState/useState";
import UseEffectExample from "./components/useEffect/useEffect";
import UseContextExample from "./components/useContext/useContext";
import UseRefExample from "./components/useRef/useRef";
import UseReducerExample from "./components/useReducer/useReducer";
import BasicListComponent from "./components/basicListComponent/basicListComponent";
import WeatherInfo from "./components/weatherExample/weatherExample";

function App() {
  let items = ["USA", "Canada", "France", "Germany", "India"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="use-reducer" element={<UseReducerExample />} /> 
            <Route path="use-state" element={<UseStateExample />} />
            <Route path="use-effect" element={<UseEffectExample />} />
            <Route path="use-context" element={<UseContextExample />} />
            <Route path="use-ref" element={<UseRefExample />} />
            <Route path="basic-list" element={<BasicListComponent items={items} heading="Country" onSelectItem={handleSelectItem} />} />
            <Route path="weather" element={<WeatherInfo />} />  
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
