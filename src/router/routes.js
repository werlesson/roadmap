import Layout from "../layout/Layout.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "about",
        name: "About",
        component: () => import("../views/About.vue"),
      },
    ],
  },

  {
    path: "*",
    redirect: "/",
  },
];

export default routes;
