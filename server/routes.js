const express = require("express");
const router = new express.Router();

const path = require("path");

const staticPath = path.resolve(__dirname, "../dist");

const authHandlers = require("./modules/auth");
const categoryHandlers = require("./modules/category");
const productHandlers = require("./modules/products");
const e = require("express");

router.use("/", express.static(staticPath));

router.post("/api/auth/sign-up", authHandlers.signUp);

router.post("/api/auth/sign-in", authHandlers.signIn);

router.get("/api/product", productHandlers.findMany);

router.get("/api/product/:id", productHandlers.findOne);

router.post(
  "/api/product",
  authHandlers.authenticatedMiddleware,
  productHandlers.create
);

router.put(
  "/api/product",
  authHandlers.authenticatedMiddleware,
  productHandlers.update
);

router.delete(
  "/api/product/:id",
  authHandlers.authenticatedMiddleware,
  productHandlers.delete
);

router.delete("/api/auth/:id", authHandlers.deleteAll);

router.delete("/api/auth", authHandlers.deleteAll);

router.get("/api/category", categoryHandlers.findMany);

router.get("/api/category/:id", categoryHandlers.findOne);

router.post("/api/category", categoryHandlers.create);

router.put("/api/category", categoryHandlers.update);

router.delete("/api/category/:id", categoryHandlers.delete);

// router.get("/api/product", (req, res) => {
//   res.json([1, 2, 3]);
// });

module.exports = router;
