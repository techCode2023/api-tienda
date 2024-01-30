import express from 'express';
import { allProductos } from '../controllers/productos.js';
const { Router } = express;


const router = Router();

// GET all Employees
router.get("/allproductos", allProductos);


export default router;
