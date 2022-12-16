import { Router } from "express";
import CompaniesRoutes from "../routes/companies.routes";
import UsersRoutes from "../routes/users.routes";
import PostsRoutes from "../routes/posts.routes";

const routerApp = Router();

routerApp.use("/users", UsersRoutes);
routerApp.use("/companies", CompaniesRoutes);
routerApp.use("/posts", PostsRoutes);

export { routerApp };
