const localStorage = require('../../utils/localstorage.util');

exports.getAllItems = async () => {
    return localStorage.getItems();
};

exports.getItem = async (id) => {
    return localStorage.getItemById(id);
};

exports.createItem = async (itemData) => {
    return localStorage.createItem(itemData);
};

exports.updateItem = async (id, itemData) => {
    return localStorage.updateItemById(id, itemData);
};

exports.removeItem = async (id) => {
    return localStorage.removeItemById(id);
};

exports.getSelectedItem = async () => {
    return localStorage.getSelectedItem();
};

exports.selectItem = async (id) => {
    return localStorage.selectItem(id);
};
