import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Faculties from "../views/Faculties.vue";
import Departments from "../views/Departments.vue";
import Syllabuses from "../views/Syllabuses.vue";
import Courses from "../views/Courses.vue";
import Classrooms from "../views/Classrooms.vue";
import TakesPlaceIns from "../views/TakesPlaceIns.vue";
import Students from "../views/Students.vue";
import Professors from "../views/Professors.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/faculties",
    name: "Faculties",
    component: Faculties,
  },
  {
    path: "/departments",
    name: "Departments",
    component: Departments,
  },
  {
    path: "/syllabuses",
    name: "Syllabuses",
    component: Syllabuses,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/classrooms",
    name: "Classrooms",
    component: Classrooms,
  },
  {
    path: "/terms",
    name: "TakesPlaceIns",
    component: TakesPlaceIns,
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
  },
  {
    path: "/professors",
    name: "Professors",
    component: Professors,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
