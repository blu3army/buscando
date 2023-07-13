import { Router } from "express";
export const router = Router();
//Init Page
router.get('/', (req, res) => {
    res.render('init', { name: 'Nikolaiiii' });
});
//Home Page
router.get('/home/:cityCode?', (req, res) => {
    const topic = req.query.topic || null;
    const subtopic = req.query.subtopic || null;
    const cat = req.query.cat || null;
    res.render('home', { cityCode: req.params.cityCode, topic, subtopic, cat });
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
