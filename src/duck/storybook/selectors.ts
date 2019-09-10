import {State} from './reducers';

export const getPath = (state: State) => {
  if (state.id === undefined) {
    return '/';
  }

  return state.id.replace(/--/g, '/');
};
