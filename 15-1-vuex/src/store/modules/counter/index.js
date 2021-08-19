import counterMutations from "./mutations";
import CounterActions from "./actions";
import CounterGetters from "./getters";

export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        };
    },
    mutations: counterMutations,
    actions: CounterActions,
    getters: CounterGetters
};