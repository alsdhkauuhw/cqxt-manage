export default {
    state: {
        token: false, // 用户是否登录
        activeMenuItem:'2',//活跃的状态栏
    },
    getters: {
        token: (state) => state.token,
        activeMenuItem: (state) => state.activeMenuItem, 
    },
    mutations: {
        setToken: (state, token) => {
            state.token = token;
        },
        setActiveMenuItem: (state, activeMenuItem) => {
            state.activeMenuItem = activeMenuItem
        },
        clearAll: (state) => {
            state.token = false;
            state.activeMenuItem = '2';
        }
    }
}