import './App.css';
import Header from './components/Header/Header';
import Metrics from './components/Metrics/Metrics';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import CountryComp from './components/CountryComp/CountryComp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Metrics />} />
          <Route path="country" element={<CountryComp />} >
            <Route path=":id" element={<CountryComp />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
