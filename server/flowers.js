exports.GetAllFlowers = async (req, res) => {
    try {
        const r = await req.db.pool.query("SELECT * FROM flowers ORDER BY id ASC")
        res.status(200).json({err: '', flowers: r.rows });
    } catch(e) {
        console.error(e);
        res.status(200).json({err: e.message, flowers: []});
    }
}

exports.GetAllFlowers = async (req, res) => {
    try {
        const r = await req.db.pool.query("SELECT * FROM flowers ORDER BY id ASC")
        res.status(200).json({err: '', flowers: r.rows });
    } catch(e) {
        console.error(e);
        res.status(200).json({err: e.message, flowers: []});
    }
}

exports.GetFlowerById = async (req, res) => {
    if (!req.params.id) {
        res.status(400).send('Некорректный идентификатор цветка');
        return;
    }
    if (!req.uid) {
      res.status(401).send('Авторизуйтесь');
      return;
    }
    
    try {
        const r = await req.db.pool.query("SELECT * FROM flowers WHERE id = $1", [Number(req.params.id)]);
        if (r.rows?.length) {
            res.json({err: '', flower: r.rows[0]});
            return;
        }
        res.status(404).send('Не найден');
    } catch(e) {
      res.status(500).send(e.message);
    }
}

exports.CreateFlower = async (req, res) => {
    try {
        if (!req.body.name || !req.body.view || !req.body.country || !req.body.season || !req.body.variety || !req.body.price || !req.body.provider_id || !req.body.vendor_id) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }
        let r = await req.db.pool.query(`
            INSERT INTO flowers (name, view, country, season, variety, price, provider_id, vendor_id)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `, [req.body.name, req.body.view, req.body.country, req.body.season, req.body.variety, req.body.price, req.body.provider_id, req.body.vendor_id]);
        if (r.rowCount > 0) {
            r = await req.db.pool.query(`
                SELECT * FROM flowers WHERE id = $1 ORDER BY id DESC LIMIT 1
            `, [r.rows[0].id]);
            if (r.rows.length > 0) {
                res.json({ err: '', flower: r.rows[0] });
                return;
            }
        }
        res.json({ err: 'Error inserting', flower: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.UpdateFlower = async (req, res) => {
    try {
        if (!req.body.id || !req.body.name || !req.body.view || !req.body.country || !req.body.season || !req.body.variety || !req.body.price || !req.body.provider_id || !req.body.vendor_id) {
            res.status(400).send('Invalid post data: {id:..., name:..., view:..., country:..., season:..., variety:..., price:..., provider_id:..., vendor_id:...}');
            return;
        }
        let r = await req.db.pool.query(`
            SELECT id FROM flowers
            WHERE id = $1
        `, [req.body.id]);
        if (r.rows.length > 0) {
            r = await req.db.pool.query(`
                UPDATE flowers
                SET
                    name = $1,
                    view = $2,
                    country = $3,
                    season = $4,
                    variety = $5,
                    price = $6,
                    provider_id = $7,
                    vendor_id = $8
                WHERE
                    id = $9
            `, [req.body.name, req.body.view, req.body.country, req.body.season, req.body.variety, req.body.price, req.body.provider_id, req.body.vendor_id, req.body.id]);
            if (r.rowCount > 0) {
                res.json({ err: '', flower: {
                    id: req.body.id,
                    name: req.body.name,
                    view: req.body.view,
                    country: req.body.country,
                    season: req.body.season,
                    variety: req.body.variety,
                    price: req.body.price,
                    provider_id: req.body.provider_id,
                    vendor_id: req.body.vendor_id
                }});
                return;
            }
        }
        res.json({ err: 'Error updating', flower: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.DeleteFlower = async (req, res) => {
    try {
        if (!req.body.id) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }

        const r = await req.db.pool.query(`DELETE FROM flowers WHERE id = $1`, [req.body.id]);
        res.status(200).json({ err: '', status: 'success' });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}