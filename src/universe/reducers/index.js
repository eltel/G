import * as actions from '../actions';
import _ from 'lodash';

export default function universe(state = {
    realities: {
        byId: {},
        allIds: [],
    },
    hypernodes: {
        byId: {},
        allIds: [],
    },
    fetching: false,
    editing: false,
}, action) {
    switch (action.type) {
        case actions.FETCH_ALL_REALITIES.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_ALL_REALITIES.SUCCESS:
            const items = { byId: {}, allIds: [] };
            _.forEach(action.response.data.allRealities, (item) => {
                items.byId[item._id] = item;
                items.allIds.push(item._id);
            });
            return { ...state, realities: items, fetching: false };
        case actions.FETCH_ALL_REALITIES.FAILURE:
            return { ...state, fetching: false };
        case actions.FETCH_HYPERNODE.REQUEST:
            return { ...state, fetching: true };
        case actions.FETCH_HYPERNODE.SUCCESS:
            const hypernodes = _.cloneDeep(state.hypernodes);
            hypernodes.byId[action.response.data.realitiesInHypernode._id] = action.response.data;
            hypernodes.push(action.response.data.realitiesInHypernode);
            return { ...state, hypernodes, fetching: false };
        case actions.FETCH_HYPERNODE.FAILURE:
            return { ...state, fetching: false };
        case actions.CREATE_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.CREATE_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.CREATE_REALITY.FAILURE:
            return { ...state, editing: false };
        case actions.EDIT_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.EDIT_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.EDIT_REALITY.FAILURE:
            return { ...state, editing: false };
        case actions.DELETE_REALITY.REQUEST:
            return { ...state, editing: true };
        case actions.DELETE_REALITY.SUCCESS:
            return { ...state, editing: false };
        case actions.DELETE_REALITY.FAILURE:
            return { ...state, editing: false };
        default:
            return state;
    }
}
