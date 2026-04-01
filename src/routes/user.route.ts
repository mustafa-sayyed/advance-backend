import { Router } from "express";
import {
  createuser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../controllers/user.controller.js";

const router: Router = Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/", createuser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
