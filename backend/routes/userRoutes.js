import express from "express";

const router = express.Router();
import { authUser,
         registerUser,
         logoutUser,
         getUserProfile,
         updateUserProfile,
         getUsers,
         getUserById,
         deleteUser,
         updateUser } from "../controllers/usersController.js";

router.route("/").post(registerUser).get(getUsers);
router.post("/logout",logoutUser);
router.post("/login",authUser);
router.route("/profile").get(getUserProfile).post(updateUserProfile);
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default router;