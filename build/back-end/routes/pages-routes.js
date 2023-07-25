import { Router } from "express";
import { anunciosDB } from "../../front-end/databases/anuncios-db.js";
export const router = Router();
//Init Page
router.get('/', (req, res) => {
    res.render('init', { name: 'Nikolaiiii' });
});
//Home Page
router.get('/home/:cityCode?', (req, res) => {
    const topic = req.query.topic || null;
    const area = req.query.area || null;
    const cat = req.query.cat || null;
    res.render('home', { cityCode: req.params.cityCode, topic, area, cat, anunciosData: anunciosDB });
});
router.get('/results', (req, res) => {
    res.render('results');
});
router.get('/new_anuncio/:id?', (req, res) => {
    res.render('new_anuncio', { id: req.params.id });
});
router.get('/profile', (req, res) => {
    res.render('profile');
});
