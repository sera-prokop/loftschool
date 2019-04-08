export default {
  namespaced: true,
  state: {
    aboutCategories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.aboutCategories = categories;
    },
    ADD_CATEGORIES: (state, newCategories) => {
      state.aboutCategories.push(newCategories);
      state.aboutCategories.reverse()
    },
    REMOVE_CATEGORIES: (state, deleteCatId) => {
      state.aboutCategories = state.aboutCategories.filter(category => category.id !== deleteCatId)
    }
  },
  actions: {
    async addCategories({commit}, categories) {
      try {

        const response = await this.$axios.post('/categories', {
          title: categories
        });
        commit('ADD_CATEGORIES', response.data);

        return response;

      } catch (error) {

        throw new Error(
          error.response.data.error || error.response.data.message
        )

      }
    },
    async getCategories({commit}) {
      try {

        const response = await this.$axios.get('/categories');
        commit('SET_CATEGORIES', response.data);

        return response;

      } catch (error) {

        throw new Error(
          error.response.data.error || error.response.data.message
        )

      }
    },
    async removeCategories({commit}, catId) {
      try {

        const response = await this.$axios.delete(`/categories/${catId}`);
        commit('REMOVE_CATEGORIES', catId);

        return response;

      } catch (error) {

        throw new Error(
          error.response.data.error || error.response.data.message
        )

      }
    }
  }
}
