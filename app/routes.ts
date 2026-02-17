import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("products", "routes/products.tsx"),
  route("quality", "routes/quality.tsx"),
  route("blog", "routes/blog.tsx"),
  route("careers", "routes/careers.tsx"),
  route("contact", "routes/contact.tsx"),
] satisfies RouteConfig;
