import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/homeView";
import UserListView from "../views/userlistView";
import UserProfileView from "../views/userprofileView";
import LoginView from "../views/loginView";
import RegisterView from "../views/registerView";
import NotFoundView from "../views/notfoundView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/userlist",
    name: "userlist",
    component: UserListView,
  },
  {
    path: "/userprofile",
    name: "userprofile",
    component: UserProfileView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
  {
    path: "/404",
    name: "404",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
