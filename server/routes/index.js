import express from "express";
import Data from "../model/index.js";


const userRouter = express.Router();

userRouter.get('/api/getdata', async (req, res) => {
    try {
        const filter = {};
        const { end_year, topic, sector, region, pestle, source, swot, country, city } = req.query;
        if (end_year) filter.end_year = end_year;
        if (topic) filter.topic = topic;
        if (sector) filter.sector = sector;
        if (region) filter.region = region;
        if (pestle) filter.pestle = pestle;
        if (source) filter.source = source;
        if (swot) filter.swot = swot;
        if (country) filter.country = country;
        if (city) filter.city = city;
        const data = await Data.find(filter);
        res.json(data);
    } catch (e) {
        res.status(500).send(e.message);
    }
    

    
});

export default userRouter;


