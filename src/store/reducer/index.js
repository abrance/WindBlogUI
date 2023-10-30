const initState = {
    app: 'plane', // 初始就是 大图表
    store_manage_system_key: 0,  // 初始值为 0
};

export function appReducer(state = initState, action) {
    switch (action.type) {
        case "UPDATE_APP":
            return {
                ...state,
                app: action.payload
            };
        default:
            return state;
    }
}
