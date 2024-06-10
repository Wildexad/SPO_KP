exports.GetAllProviders = async (req, res) => {
    try {
        const r = await req.db.pool.query("SELECT * FROM providers ORDER BY id ASC")
        res.status(200).json({err: '', providers: r.rows });
    } catch(e) {
        console.error(e);
        res.status(200).json({err: e.message, providers: []});
    }
}

exports.GetProviderById = async (req, res) => {
    if (!req.uid) {
      res.status(401).send('Авторизуйтесь');
      return;
    }
    
    try {
      const r = await req.db.pool.query("SELECT * FROM providers WHERE id = $1", [req.id]);
      if (r.rows?.length) {
        res.json({err: '', provider: r.rows[0]});
        return;
      }
      res.status(404).send('Не найден');
    } catch(e) {
      res.status(500).send(e.message);
    }
}

exports.CreateProvider = async (req, res) => {
    try {
        if (!req.body.name || !req.body.address || !req.body.email) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }
        let r = await req.db.pool.query(`
            INSERT INTO providers (name, address, email)
            VALUES ($1, $2, $3)
        `, [req.body.name, req.body.address, req.body.email]);
        if (r.rowCount > 0) {
            r = await req.db.pool.query(`
                SELECT * FROM providers WHERE id = $1 ORDER BY id DESC LIMIT 1
            `, [r.rows[0].id]);
            if (r.rows.length > 0) {
                res.json({ err: '', provider: r.rows[0] });
                return;
            }
        }
        res.json({ err: 'Error inserting', provider: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.UpdateProvider = async (req, res) => {
    try {
        if (!req.body.id || !req.body.name || !req.body.address || !req.body.email) {
            res.status(400).send('Invalid post data: {id:..., name:..., address:..., email:...}');
            return;
        }
        let r = await req.db.pool.query(`
            SELECT id FROM providers
            WHERE id = $1
        `, [req.body.id]);
        if (r.rows.length > 0) {
            r = await req.db.pool.query(`
                UPDATE providers
                SET
                    name = $1,
                    address = $2,
                    email = $3
                WHERE
                    id = $4
            `, [req.body.name, req.body.address, req.body.email, req.body.id]);
            if (r.rowCount > 0) {
                res.json({ err: '', provider: {
                    id: req.body.id,
                    name: req.body.name,
                    address: req.body.address,
                    email: req.body.email
                }});
                return;
            }
        }
        res.json({ err: 'Error updating', provider: {} });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}

exports.DeleteProvider = async (req, res) => {
    try {
        if (!req.body.id) {
            res.status(400).send({ err: 'Invalid post data' });
            return;
        }
        const r = await req.db.pool.query(`
            DELETE FROM providers
            WHERE id = $1
        `, [req.body.id]);
        res.status(200).json({ err: '', status: 'success' });
    } catch (e) {
        console.error(e);
        res.status(500).send(e.message);
    }
}