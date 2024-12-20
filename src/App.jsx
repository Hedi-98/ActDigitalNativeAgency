import { useEffect } from "react";
import {HashRouter, Route, RouterProvider, Routes} from "react-router-dom";
import { router } from "./Router/Router.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home.jsx";
import Root from "./Layouts/Root.jsx";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.jsx";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogDetails />} />
          </Route>
        </Routes>
      </HashRouter>
  );
};

export default App;
