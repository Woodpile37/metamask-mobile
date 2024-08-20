/**
 * Constants
 */
export const SET_CURRENT_ROUTE = 'SET_CURRENT_ROUTE';
export const SET_CURRENT_BOTTOM_NAV_ROUTE = 'SET_CURRENT_TAB_BAR_ROUTE';

/**
 * Reducers
 */
interface InitialState {
  currentRoute: string;
  currentBottomNavRoute: string;
}

const initialState: InitialState = {
  currentRoute: 'WalletView',
  currentBottomNavRoute: 'Wallet',
};

const navigationReducer = (state = initialState, action: any = {}) => {
  switch (action.type) {
    case SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: action.payload.route,
      };
    case SET_CURRENT_BOTTOM_NAV_ROUTE:
      return {
        ...state,
        currentBottomNavRoute: action.payload.route,
      };
    default:
      return state;
  }
<<<<<<< Updated upstream
	currentRoute: string;
}

const initialState: InitialState = {
	currentRoute: 'WalletView',
};

const navigationReducer = (state = initialState, action: any = {}) => {
	switch (action.type) {
		case SET_CURRENT_ROUTE:
			return {
				...state,
				currentRoute: action.payload.route,
			};
		default:
			return state;
	}
=======
>>>>>>> Stashed changes
};

/**
 * Selectors
 */
<<<<<<< HEAD
=======
export const getCurrentRoute = (state: any) => state.navigation.currentRoute;
export const getCurrentBottomNavRoute = (state: any) =>
  state.navigation.currentBottomNavRoute;
>>>>>>> upstream/testflight/4754-permission-system

export default navigationReducer;
