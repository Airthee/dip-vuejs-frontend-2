import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  getters: {
    count: state => state.todos.length,
    todos: state => state.todos,
  },
  mutations: {
    POPULATE_TODOS(state, todos) {
      state.todos = todos;
    },
    DELETE_TODO(state, id) {
      state.todos.forEach((val) => {
        if (val.id === id) {
          state.todos.splice(id, 1);
          return false;
        }
        return true;
      });
    },
  },
  actions: {
    getTodos(context) {
      api.get(`/todos`)
        .then((response) => {
          context.commit(`POPULATE_TODOS`, response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    removeTodo(context, todoId) {
      api.delete(`/todos/${todoId}`)
        .then(() => {
          context.commit(`DELETE_TODOS`, todoId);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  methods: {
    onRemove() {
      this.errors.push(`ICI`);
    },
  },
});
