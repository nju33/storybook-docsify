import * as React from 'react';
import {FC, useReducer, useMemo, useCallback, useEffect} from 'react';
import {STORY_CHANGED} from '@storybook/core-events';
import addons, {types} from '@storybook/addons';
import {API} from '@storybook/api';
import {
  reducer,
  initialState,
  changeIdOperator,
  getPath,
} from './duck/storybook';

const ADDON_ID = 'docsify' as const;
// const PARAM_KEY = 'docsify' as const;
const PANEL_ID = 'docsify/panel' as const;

export interface DocsifyPanelProps {
  api: API;
  active: boolean;
}

export interface DocsifyPanelParams {
  path?: string;
}

const useOperators = (dispatch: (action: {type: string}) => any) => {
  return {
    changeId: changeIdOperator({dispatch}),
  };
};

export const DocsifyPanel: FC<DocsifyPanelProps> = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {changeId} = useOperators(dispatch as (action: {type: string}) => any);
  const documentPath = useMemo(() => getPath(state), [state]);

  const onStoryChange = useCallback(
    (id: string) => {
      changeId(id);
    },
    [state],
  );

  useEffect(() => {
    const {api} = props;
    const {storyId} = api.getUrlState();

    if (storyId !== undefined) {
      changeId(storyId);
    }

    api.on(STORY_CHANGED, onStoryChange);

    return () => api.off(STORY_CHANGED, onStoryChange);
  }, [state]);

  if (state.id === undefined) {
    return null;
  }

  if (!props.active) {
    return null;
  }

  return (
    <iframe
      src={`/index.html#/${documentPath}`}
      style={{width: '100%', height: '100%', border: 'none'}}
    />
  );
};

addons.register(ADDON_ID, api => {
  const render = ({active}: {active: boolean}) => (
    <DocsifyPanel api={api} active={active} />
  );

  const title = 'Docsify';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render,
  });
});
