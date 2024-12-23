import { useEffect } from "react";
import {HashRouter, Route, RouterProvider, Routes} from "react-router-dom";
import { router } from "./Router/Router.jsx";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home.jsx";
import Root from "./Layouts/Root.jsx";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.jsx";
import Blog from "./Components/Blogs/Blog.jsx";
import Blogs from "./Components/Blogs/Blogs.jsx";
import AllBlogs from "./Pages/AllBlogs/AllBlogs.jsx";

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
                  </Route>
              </Route>
          </Routes>
      </HashRouter>

  );
};

export default App;
