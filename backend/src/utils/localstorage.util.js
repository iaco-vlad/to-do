const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');
const { v4: uuidv4 } = require('uuid');
const config = require('../config/localstorage.config');

exports.getItems = () => {
    const items = JSON.parse(localStorage.getItem(config.localStorageKey));
    if (!items) {
        const defaultItem = {
            id: uuidv4(),
            text: 'Write my to-do list'
        };
        localStorage.setItem(config.localStorageKey, JSON.stringify([defaultItem]));
        return [defaultItem];
    }
    return items;
};

exports.getItemById = (id) => {
    const items = exports.getItems();
    return items.find(item => item.id === id);
};

exports.createItem = (itemData) => {
    const items = exports.getItems();
    const newItem = {
        id: uuidv4(),
        text: itemData.text
    };
    items.push(newItem);
    localStorage.setItem(config.localStorageKey, JSON.stringify(items));
    return newItem;
};

exports.updateItemById = (id, itemData) => {
    const items = exports.getItems();
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) return null;
    items[itemIndex] = { ...items[itemIndex], ...itemData };
    localStorage.setItem(config.localStorageKey, JSON.stringify(items));
    return items[itemIndex];
};

exports.removeItemById = (id) => {
    const items = exports.getItems();
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) return null;
    const removedItem = items.splice(itemIndex, 1)[0];
    localStorage.setItem(config.localStorageKey, JSON.stringify(items));
    return removedItem;
};

exports.getSelectedItem = () => {
    return {id: localStorage.getItem(config.selectedItemKey)};
};

exports.selectItem = (id) => {
    localStorage.setItem(config.selectedItemKey, id);
    return id;
};
