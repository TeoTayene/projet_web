import Router from "express-promise-router";
import {addOrder, deleteOrderById, getAllOrders, getOrderById, updateOrder} from "../controller/order.js";

const router = Router();

router.post("/", addOrder);
router.patch("/", updateOrder);
router.get("/all", getAllOrders);
router.get("/:id", getOrderById);
router.delete("/:id", deleteOrderById);

export default router;