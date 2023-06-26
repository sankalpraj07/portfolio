// Action Types
export const SET_THEME = 'SET_THEME';
export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

// Action Creators
export const setTheme = (theme) => {
  return {
    type: SET_THEME,
    payload: theme,
  };
};

export const toggleNavigation = () => {
  return {
    type: TOGGLE_NAVIGATION,
  };
};

export const setActiveSection = (section) => {
  return {
    type: SET_ACTIVE_SECTION,
    payload: section,
  };
};
