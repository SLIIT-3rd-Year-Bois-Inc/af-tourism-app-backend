export class RoomService {
    static async getRooms(req, res) {
      try {
        // TODO - filters
        const rooms = await Room.find({}).exec();
        res.status(200).json(rooms);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async createRoom(req, res) {
      try {
        const room = new Room(req.body);
        await room.save();
        res.sendStatus(200);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async getOneRoom(req, res) {
      try {
        const id = req.params.id;
        const room = await Room.findById(id).exec();
        res.status(200).json(room);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async updateRoom(req, res) {
      try {
        const id = req.params.id;
        const room = await Room.findByIdAndUpdate(id, req.body).exec();
  
        if (!room) {
          throw Error("Update failed for id " + id);
        }
  
        res.status(200).json(room);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async deleteRoom(req, res) {
      try {
        const id = req.params.id;
        const room = await Room.findByIdAndRemove(id).exec();
  
        if (!room) {
          throw Error("Delete failed for id " + id);
        }
  
        res.status(200).json(room);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  }
  