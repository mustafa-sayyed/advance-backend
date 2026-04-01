import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserService,
  updateUserService,
} from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import type { Request, Response, NextFunction } from "express";

const getAllUsers = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await getAllUserService();
    res.status(200).json(users);
  },
);

const getUserById = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await getUserService(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  },
);

const createuser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email } = req.body;
    const user = await createUserService(name, email);

    if (!user) {
      return res.status(400).json({ message: "Failed to create user" });
    }

    res.status(201).json(user);
  },
);

const updateUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await updateUserService(id, name, email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  },
);

const deleteUser = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const user = await deleteUserService(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  },
);

export { getUserById, createuser, updateUser, deleteUser, getAllUsers };
