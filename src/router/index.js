import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView";
import UserListView from "../views/userlistView";
import UserProfileView from "../views/userprofileView";
import LoginView from "../views/loginView";
import RegisterView from "../views/registerView";
import NotFoundView from "../views/notfoundView";

const routes = [
  {
    path: "/myspace/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/myspace/userlist/",
    name: "userlist",
    component: UserListView,
  },
  {
    path: "/myspace/userprofile/:userId/",
    name: "userprofile",
    component: UserProfileView,
  },
  {
    path: "/myspace/login/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/myspace/register/",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/myspace/404/",
    name: "404",
    component: NotFoundView,
  },
  {
    path: "/myspace/:catchAll(.*)",
    redirect: "/myspace/404/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
