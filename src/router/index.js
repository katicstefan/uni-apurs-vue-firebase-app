import { createRouter, createWebHistory } from "vue-router";
// Views
import Home from "../views/Home.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

import Faculties from "../views/Faculties.vue";
import FacultyCreate from "../views/FacultyCreate.vue";

import Departments from "../views/Departments.vue";
import DepartmentCreate from "../views/DepartmentCreate.vue";

import Syllabuses from "../views/Syllabuses.vue";
import SyllabusCreate from "../views/SyllabusCreate.vue";

import Courses from "../views/Courses.vue";
import CourseCreate from "../views/CourseCreate.vue";

import Classrooms from "../views/Classrooms.vue";
import ClassroomCreate from "../views/ClassroomCreate.vue";

import TakesPlaceIns from "../views/TakesPlaceIns.vue";
import TakesPlaceInCreate from "../views/TakesPlaceInCreate.vue";

import Students from "../views/Students.vue";
import StudentCreate from "../views/StudentCreate.vue";

import Professors from "../views/Professors.vue";
import ProfessorCreate from "../views/ProfessorCreate.vue";

// firebase
import { projectAuth } from '../firebase/config'

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('current user in auth guard: ', user)
  if (!user) {
    next({ name: 'Home' })
  } else {
    next()
  }
}

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
    path: "/faculties/create",
    name: "FacultyCreate",
    component: FacultyCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/departments",
    name: "Departments",
    component: Departments,
  },
  {
    path: "/departments/create",
    name: "DepartmentCreate",
    component: DepartmentCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/syllabuses",
    name: "Syllabuses",
    component: Syllabuses,
  },
  {
    path: "/syllabuses/create",
    name: "SyllabusCreate",
    component: SyllabusCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/courses/create",
    name: "CourseCreate",
    component: CourseCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/classrooms",
    name: "Classrooms",
    component: Classrooms,
  },
  {
    path: "/classrooms/create",
    name: "ClassroomCreate",
    component: ClassroomCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/terms",
    name: "TakesPlaceIns",
    component: TakesPlaceIns,
  },
  
  {
    path: "/terms/create",
    name: "TakesPlaceInCreate",
    component: TakesPlaceInCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/students",
    name: "Students",
    component: Students,
  },
  {
    path: "/students/create",
    name: "StudentCreate",
    component: StudentCreate,
    beforeEnter: requireAuth
  },
  {
    path: "/professors",
    name: "Professors",
    component: Professors,
  },
  {
    path: "/professors/create",
    name: "ProfessorCreate",
    component: ProfessorCreate,
    beforeEnter: requireAuth
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
