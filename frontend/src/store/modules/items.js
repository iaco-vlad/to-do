import axios from 'axios';

const state = {
    items: [],
    selected: null,
};

const getters = {};
const backendBaseUrl = 'http://localhost:3000'

const actions = {
    async getAllItems({ commit }) {
        const response = await axios.get(`${backendBaseUrl}/api/items`);
        commit('setItems', response.data);
    },
    async createItem({ commit }, itemData) {
        const response = await axios.post(`${backendBaseUrl}/api/items`, itemData);
        commit('newItem', response.data);
    },
    async removeItem({ commit }, id) {
        await axios.delete(`${backendBaseUrl}/api/items/${id}`);
        commit('removeItem', id);
    },
    async getSelectedItem({ commit }) {
        const response = await axios.get(`${backendBaseUrl}/api/items/get-selected-item`);
        commit('selectItem', response.data.id);
    },
    async selectItem({ commit }, idData) {
        await axios.post(`${backendBaseUrl}/api/items/select`, idData);
        commit('selectItem', idData.id);
    }
};

const mutations = {
    setItems: (state, items) => (state.items = items),
    newItem: (state, item) => state.items.push(item),
    removeItem: (state, id) =>
        (state.items = state.items.filter(item => item.id !== id)),
    selectItem: (state, id) => {
        state.selected = id
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};
