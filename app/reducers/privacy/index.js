const initialState = {
  approvedHosts: {},
<<<<<<< HEAD
=======
  thirdPartyApiMode: true,
>>>>>>> upstream/testflight/4754-permission-system
  revealSRPTimestamps: [],
};

const privacyReducer = (state = initialState, action) => {
  const newHosts = { ...state.approvedHosts };
  switch (action.type) {
    case 'APPROVE_HOST':
      return {
        ...state,
        approvedHosts: {
          ...state.approvedHosts,
          [action.hostname]: true,
        },
      };
    case 'REJECT_HOST':
      delete newHosts[action.hostname];
      return {
        ...state,
        approvedHosts: newHosts,
      };
    case 'CLEAR_HOSTS':
      return {
        ...state,
        approvedHosts: {},
      };
<<<<<<< HEAD
=======
    case 'SET_THIRD_PARTY_API_MODE':
      return {
        ...state,
        thirdPartyApiMode: action.enabled,
      };
>>>>>>> upstream/testflight/4754-permission-system
    case 'RECORD_SRP_REVEAL_TIMESTAMP':
      return {
        ...state,
        revealSRPTimestamps: [...state.revealSRPTimestamps, action.timestamp],
      };
    default:
      return state;
  }
};

export default privacyReducer;
