import { Router } from "express";
import { anunciosDB } from "../../front-end/databases/anuncios-db.js";

export const router = Router();


//Home Page
router.get('/', (req, res)=>{

    const topic = req.query.topic || null;
    const area = req.query.area || null;
    const cat = req.query.cat || null;


    res.render('home' , { topic, area, cat, anunciosData: anunciosDB });


});


//Home Page
router.get('/city/:cityCode?', (req, res)=>{

    const topic = req.query.topic || null;
    const area = req.query.area || null;
    const cat = req.query.cat || null;

    res.render('city' , { cityCode: req.params.cityCode, topic, area, cat, anunciosData: anunciosDB });


});

router.get('/query/:query?', (req,res)=>{

    const query = req.params.query;

    res.render('query', {query});

});

router.get('/results', (req,res)=>{

    const text = req.query.text || null;
    const cityCode = req.query.cityCode || null;
    const topic = req.query.topic || null;
    const area = req.query.area || null;
    const cat = req.query.cat || null;

    res.render('results', {
        text,
        cityCode,
        topic,
        area,
        cat,
    });

});

router.get('/new_anuncio/:id?', (req, res)=>{


    res.render('new_anuncio', {id: req.params.id}); 

});

router.get('/profile', (req,res)=>{
    res.render('profile');
});


