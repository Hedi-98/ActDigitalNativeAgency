import { useEffect } from "react";
import {HashRouter, Route, Routes} from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home.jsx";
import Root from "./Layouts/Root.jsx";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import BlogDetails2 from "./Pages/BlogDetails/BlogDetails2.jsx";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Root />}>
                  <Route index element={<Home />} />
                  <Route path="blog/" element={<Blogs />}>
                      <Route path="ia-moteur-de-la-nouvelle-revolution-industrielle" element={<BlogDetails />} />
                      <Route path="ia-avenir-de-la-publicite-digitale" element={<BlogDetails2 />} />
                  </Route>
              </Route>
          </Routes>
      </HashRouter>

  );
};

export default App;
