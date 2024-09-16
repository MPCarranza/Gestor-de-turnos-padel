import routerAppointment from "./appointmentRouter";
import routerUsers from "./usersRouter";
import { Router } from "express";

const indexRouter: Router = Router();

indexRouter.use("/users", routerUsers)
indexRouter.use("/appointments", routerAppointment)

export default indexRouter;
