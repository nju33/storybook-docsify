import * as types from './types';
import {Actions} from './actions';

export interface State {
  id?: string;
}
export const initialState = ({} as unknown) as State;

export const reducer: (state: State, action: Actions) => State = (
  state,
  action,
) => {
  const {type} = action;

  switch (type) {
    case types.STORYBOOK_CHANGE_ID: {
      if (state.id === action.payload.id) {
        return state;
      }

      return {...state, id: action.payload.id};
    }

    default: {
      throw new Error(`invalid action: ${type}`);
    }
  }
};
