import * as actions from './actions';

export const changeIdOperator = ({
  dispatch,
}: {
  dispatch: (action: {type: string}) => any;
}) => (id: string) => {
  dispatch(actions.storybookChangeId(id));
};
