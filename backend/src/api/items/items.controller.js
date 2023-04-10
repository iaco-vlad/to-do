const itemsService = require('./items.service');

exports.getAllItems = async (req, res) => {
    try {
        const items = await itemsService.getAllItems();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getItem = async (req, res) => {
    try {
        const id = req.params.id;
        const item = await itemsService.getItem(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = await itemsService.createItem(req.body);
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedItem = await itemsService.updateItem(id, req.body);
        if (updatedItem) {
            res.status(200).json(updatedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.removeItem = async (req, res) => {
    try {
        const id = req.params.id;
        const removedItem = await itemsService.removeItem(id);
        if (removedItem) {
            res.status(200).json(removedItem);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getSelectedItem = async (req, res) => {
    try {
        const selectedItem = await itemsService.getSelectedItem();
        res.status(200).json(selectedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.selectItem = async (req, res) => {
    try {
        const id = req.body.id;
        const selectedItem = await itemsService.selectItem(id);
        res.status(200).json(selectedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

