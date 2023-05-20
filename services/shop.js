export class ShopService {
    static async getShops(req, res) {
      try {
        // TODO - filters
        const shops = await Shop.find({}).exec();
        res.status(200).json(shops);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async createShop(req, res) {
      try {
        const shop = new Shop(req.body);
        await shop.save();
        res.sendStatus(200);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async getOneShop(req, res) {
      try {
        const id = req.params.id;
        const shop = await Shop.findById(id).exec();
        res.status(200).json(shop);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async updateShop(req, res) {
      try {
        const id = req.params.id;
        const shop = await Shop.findByIdAndUpdate(id, req.body).exec();
  
        if (!shop) {
          throw Error("Update failed for id " + id);
        }
  
        res.status(200).json(shop);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async deleteShop(req, res) {
      try {
        const id = req.params.id;
        const shop = await Shop.findByIdAndRemove(id).exec();
  
        if (!shop) {
          throw Error("Delete failed for id " + id);
        }
  
        res.status(200).json(shop);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  }
  