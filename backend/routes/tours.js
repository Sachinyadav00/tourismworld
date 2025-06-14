import express from 'express'
import { createTour, deleteTour, 
    getAllTour, getSingleTour, 
    updateTour,getTourBySearch,
    getFeaturedTour, getTourCount

    } 
    from '../controllers/tourController.js';

import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router()

// create new tour
router.post('/', verifyAdmin,createTour);

// update new tour
router.put('/:id',verifyAdmin, updateTour);

// delete new tour
router.delete('/:id',verifyAdmin, deleteTour);

// getSingle tour
router.get('/:id', getSingleTour);

// create new tour
router.get('/', getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);



export default router;


// 14.42