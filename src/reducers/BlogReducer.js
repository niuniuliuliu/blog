/**
 * Created by ck on 21/04/2017.
 */
export default function BlogReducer(state = {blogs: [], pageIndex: 1, loadStatus: 0}, action) {
    switch (action.type) {
        case 'HOME_LOAD_START':
            return {blogs: state.blogs, pageIndex: state.pageIndex, loadStatus: 1};
        case 'HOME_LOAD':
            let pageIndex = state.pageIndex + 1;
            let loadStatus = action.payload.data.length === 0 ? 2 : 0;
            let blogs = state.blogs.concat(action.payload.data);
            return {blogs: blogs, pageIndex: pageIndex, loadStatus: loadStatus};
        default:
            return state;
    }
}