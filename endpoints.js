const initializeEndpoints = app => {
  /**
   * @swagger
   *  /foods:
   *    post:
   *      tags:
   *      - Menu
   *      summary: Adds item to menu
   *      description: Adds an item to the system
   *      operationId: addInventory
   *      consumes:
   *      - application/json
   *      - application/xml
   *      produces:
   *      - application/json
   *      - application/xml
   *      parameters:
   *      - in: body
   *        name: inventoryItem
   *        description: Inventory item to add
   *        required: false
   *        schema:
   *          $ref: '#/definitions/InventoryItem'
   *      responses:
   *       201:
   *         description: item created
   *       400:
   *         description: invalid input, object invalid
   *       409:
   *         description: an existing item already exists
   *    put:
   *      tags:
   *      - Menu
   *      summary: Update an existing food
   *      description: ""
   *      operationId: updateMenu
   *      consumes:
   *      - application/json
   *      produces:
   *      - application/json
   *      parameters:
   *      - in: body
   *        name: body
   *        description: Food object that needs to be updated to the store
   *        required: false
   *        schema:
   *          $ref: '#/definitions/InventoryItem'
   *      responses:
   *        200:
   *          description: Updating food successful
   *        400:
   *          description: Invalid ID supplied
   *        404:
   *          description: Food not found
   *        405:
   *          description: Validation exception
   * /menu/{foodId}:
   *    get:
   *      tags:
   *      - Menu
   *      summary: Find food by id
   *      description: filter
   *      operationId: filterMenu
   *      produces:
   *      - application/json
   *      parameters:
   *      - name: foodId
   *        in: path
   *        description: pass an optional integer for looking up menu item
   *        required: true
   *        type: integer
   *        format: int64
   *      responses:
   *        200:
   *          description: search results matching criteria
   *          schema:
   *            type: array
   *            items:
   *              $ref: '#/definitions/InventoryItem'
   *        400:
   *          description: bad input parameter
   *    delete:
   *      tags:
   *      - Menu
   *      summary: Deletes an item from menu
   *      description: ""
   *      operationId: deleteFood
   *      produces:
   *      - application/json
   *      parameters:
   *      - name: foodId
   *        in: path
   *        description: Food id to delete
   *        required: true
   *        type: integer
   *        format: int64
   *      responses:
   *        200:
   *          description: Deleted food successfully
   *        400:
   *          description: Invalid ID supplied
   *        404:
   *          description: Food not found
   *
   * definitions:
   *  InventoryItem:
   *    type: object
   *    required:
   *    - name
   *    - price
   *    properties:
   *      id:
   *        type: integer
   *        format: int64
   *      name:
   *        type: string
   *        example: Cheese Pasta
   *      price:
   *        type: integer
   *        format: int64
   *        example: 5.99
   */

  app.get("/foods", (req, res) =>
    res.end("This returns all foods on the menu")
  );

  app.post("/foods", (req, res) => res.end("Add new food item to the menu"));

  app.put("/foods/:id", (req, res) =>
    res.end(`Update existing food ${req.params.id}`)
  );

  app.delete("/foods/:id", (req, res) =>
    res.end(`Delete existing food ${req.params.id}`)
  );
};

module.exports = initializeEndpoints;
