const router = require("express").Router();
const inventoryController = require("../controllers/inventoryController");

router
    .route("/")
    .get(inventoryController.index)
    .post(inventoryController.addInventoryItem);

router
  .route("/:id")
  .get(inventoryController.singleInventoryItem)
  .put(inventoryController.updateInventoryItem)
  .delete(inventoryController.deleteInventoryItem);

module.exports = router;