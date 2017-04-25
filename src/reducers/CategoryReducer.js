/**
 * Created by ck on 20/04/2017.
 */
export default function CategoryReducer(state = {categorys: []}, action) {
    switch (action.type) {
        case 'CATEGORY_LOAD':
            let categorys = action.payload.data;
            return {categorys: categorys};
        default:
            return state;
    }
}