import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactElement } from "react";
import DefaultLayout from "./components/DefaultLayout/DefaultLayout";
import { publicRoutes } from "./Routes/Routes";
import "./css/App.css";
function App(): ReactElement {
  return (
    <Router>
      <div className="App mx-auto ">
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <route.component />
                </DefaultLayout>
              }
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
