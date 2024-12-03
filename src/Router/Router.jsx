import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import AllServices from "../Pages/AllServices";
import ServiceDetails from "../Pages/ServiceDetails";
import Contact from "../Pages/Contact/Contact";
import AllBlogs from "../Pages/AllBlogs/AllBlogs";
import BlogDetails from "../Pages/BlogDetails/BlogDetails";
import Protfolio from "../Pages/Protfolio/Protfolio";
import ProtfolioDetails from "../Pages/ProtfolioDetails/ProtfolioDetails";

export const router = createBrowserRouter([
  {
    path: "/ActDigitalNativeAgency/",
    element: <Root />,
    children: [
      {
        path: "/ActDigitalNativeAgency/",
        element: <Home />,
      },
      {
        path: "/ActDigitalNativeAgency/all-services",
        element: <AllServices />,
      },
      {
        path: "/ActDigitalNativeAgency/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/ActDigitalNativeAgency/all-blog",
        element: <AllBlogs />,
      },
      {
        path: "/ActDigitalNativeAgency/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/ActDigitalNativeAgency/contact",
        element: <Contact />,
      },
      {
        path: "/ActDigitalNativeAgency/protfolio",
        element: <Protfolio />,
      },
      {
        path: "/ActDigitalNativeAgency/protfolio-details",
        element: <ProtfolioDetails />,
      },
    ],
  },
]);
