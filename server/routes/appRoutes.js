import  express  from "express";
import appControllers from "../controllers/appControllers.js";

const router = express.Router()

router.route('/').get(appControllers.getAllContacts)
router.route('/addcontact').post(appControllers.addContact)
router.route('/deletecontact').delete(appControllers.deleteContact)
router.route('/updatecontact').patch(appControllers.updateContact)
// router.route('/searchcontact').post(appControllers.searchContacts)
router.route('/searchcontact').get(appControllers.searchContacts)


export default router