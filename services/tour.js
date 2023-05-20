export class TourService {
    static async getTours(req, res) {
      try {
        // TODO - filters
        const tours = await Tour.find({}).exec();
        res.status(200).json(tours);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async createTour(req, res) {
      try {
        const tour = new Tour(req.body);
        await tour.save();
        res.sendStatus(200);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async getOneTour(req, res) {
      try {
        const id = req.params.id;
        const tour = await Tour.findById(id).exec();
        res.status(200).json(tour);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async updateTour(req, res) {
      try {
        const id = req.params.id;
        const tour = await Tour.findByIdAndUpdate(id, req.body).exec();
  
        if (!tour) {
          throw Error("Update failed for id " + id);
        }
  
        res.status(200).json(tour);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  
    static async deleteTour(req, res) {
      try {
        const id = req.params.id;
        const tour = await Tour.findByIdAndRemove(id).exec();
  
        if (!tour) {
          throw Error("Delete failed for id " + id);
        }
  
        res.status(200).json(tour);
      } catch (e) {
        console.error(e);
        res.sendStatus(500);
      }
    }
  }
  