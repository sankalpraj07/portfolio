import { combineReducers } from 'redux';

// Initial State
const initialThemeState = {
  theme: 'light',
};

const initialNavigationState = {
  isOpen: false,
};

const initialActiveSectionState = {
  activeSection: 'home',
};

// Action Types
const SET_THEME = 'SET_THEME';
const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
const SET_ACTIVE_SECTION = 'SET_ACTIVE_SECTION';

// Theme Reducer
const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

// Navigation Reducer
const navigationReducer = (state = initialNavigationState, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

// Active Section Reducer
const activeSectionReducer = (state = initialActiveSectionState, action) => {
  switch (action.type) {
    case SET_ACTIVE_SECTION:
      return {
        ...state,
        activeSection: action.payload,
      };
    default:
      return state;
  }
};

// Root Reducer
const rootReducer = combineReducers({
  theme: themeReducer,
  navigation: navigationReducer,
  activeSection: activeSectionReducer,
});

export default rootReducer;
