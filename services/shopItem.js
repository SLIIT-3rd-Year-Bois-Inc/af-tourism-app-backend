export class ShopItemService {
    static async getShopItems(req, res) {
      try {
        // TODO - filters
        const shopItems = await ShopItem.find({}).exec();
        res.status(200).json(shopItems);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async createShopItem(req, res) {
      try {
        const shopItem = new ShopItem(req.body);
        await shopItem.save();
        res.sendStatus(200);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async getOneShopItem(req, res) {
      try {
        const id = req.params.id;
        const shopItem = await ShopItem.findById(id).exec();
        res.status(200).json(shopItem);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async updateShopItem(req, res) {
      try {
        const id = req.params.id;
        const shopItem = await ShopItem.findByIdAndUpdate(id, req.body).exec();
  
        if (!shopItem) {
          throw Error("Update failed for id " + id);
        }
  
        res.status(200).json(shopItem);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async deleteShopItem(req, res) {
      try {
        const id = req.params.id;
        const shopItem = await ShopItem.findByIdAndRemove(id).exec();
  
        if (!shopItem) {
          throw Error("Delete failed for id " + id);
        }
  
        res.status(200).json(shopItem);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  }
  