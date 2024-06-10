exports.GetAllVendors = async (req, res) => {
    try {
        const r = await req.db.pool.query("SELECT * FROM vendors ORDER BY id ASC")
        res.status(200).json({err: '', vendors: r.rows });
    } catch(e) {
        console.error(e);
        res.status(200).json({err: e.message, vendors: []});
    }
}

exports.GetVendorsById = async (req, res) => {
    if (!req.uid) {
      res.status(401).send('Авторизуйтесь');
      return;
    }
    
    try {
      const r = await req.db.pool.query("SELECT * FROM vendors WHERE id = $1", [req.id]);
      if (r.rows?.length) {
        res.json({err: '', vendor: r.rows[0]});
        return;
      }
      res.status(404).send('Не найден');
    } catch(e) {
      res.status(500).send(e.message);
    }
}

exports.CreateVendor = async (req, res) => {
    try {
        if (!req.body.name || !req.body.address) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }
        let r = await req.db.pool.query(`
            INSERT INTO vendors (name, address)
            VALUES ($1, $2)
        `, [req.body.name, req.body.address]);
        if (r.rowCount > 0) {
            r = await req.db.pool.query(`
                SELECT * FROM vendors WHERE id = $1 ORDER BY id DESC LIMIT 1
            `, [r.rows[0].id]);
            if (r.rows.length > 0) {
                res.json({ err: '', vendor: r.rows[0] });
                return;
            }
        }
        res.json({ err: 'Error inserting', vendor: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.UpdateVendor = async (req, res) => {
    try {
        if (!req.body.id || !req.body.name || !req.body.address) {
            res.status(400).send('Invalid post data: {id:..., name:..., address:...}');
            return;
        }
        let r = await req.db.pool.query(`
            SELECT id FROM vendors
            WHERE id = $1
        `, [req.body.id]);
        if (r.rows.length > 0) {
            r = await req.db.pool.query(`
                UPDATE vendors
                SET
                    name = $1,
                    address = $2
                WHERE
                    id = $3
            `, [req.body.name, req.body.address, req.body.id]);
            if (r.rowCount > 0) {
                res.json({ err: '', vendor: {
                    id: req.body.id,
                    name: req.body.name,
                    address: req.body.address
                }});
                return;
            }
        }
        res.json({ err: 'Error updating', vendor: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.DeleteVendor = async (req, res) => {
    try {
        if (!req.body.id) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }
        const r = await req.db.pool.query(`
            DELETE FROM vendors
            WHERE id = $1
        `, [req.body.id]);
        res.status(200).json({ err: '', status: 'success' });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}