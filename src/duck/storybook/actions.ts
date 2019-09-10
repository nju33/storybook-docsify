import * as types from './types';

export const storybookChangeId = (id: string) => {
  return {
    type: types.STORYBOOK_CHANGE_ID,
    payload: {id},
  };
};

export type Actions = ReturnType<typeof storybookChangeId>;
