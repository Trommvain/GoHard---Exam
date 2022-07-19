import * as types from './types';

export const setKeyCode: types.BaseContact<number> = (state, action) => {
    if (state.keyCode.length > 1) {
        state.keyCode = [ ...state.keyCode, action.payload ].filter((k) => k !== action.payload);
    }
    state.keyCode = [ ...state.keyCode, action.payload ];
};

export const setKeyDefault: types.BaseContact<number> = (state, action) => {
    const filteredKeyCodes = state.keyCode?.filter((key) => key !== action.payload);

    state.keyCode = filteredKeyCodes;
};
