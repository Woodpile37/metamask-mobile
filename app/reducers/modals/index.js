const initialState = {
  networkModalVisible: false,
  shouldNetworkSwitchPopToWallet: true,
  collectibleContractModalVisible: false,
  receiveModalVisible: false,
  receiveAsset: undefined,
  dappTransactionModalVisible: false,

  signMessageModalVisible: true,
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_NETWORK_MODAL':
      return {
        ...state,
        networkModalVisible: !state.networkModalVisible,
        shouldNetworkSwitchPopToWallet: action.shouldNetworkSwitchPopToWallet,
      };
    case 'TOGGLE_RECEIVE_MODAL': {
      return {
        ...state,
        receiveModalVisible: !state.receiveModalVisible,
        receiveAsset: action.asset,
      };
    }
    case 'TOGGLE_COLLECTIBLE_CONTRACT_MODAL':
      return {
        ...state,
        collectibleContractModalVisible: !state.collectibleContractModalVisible,
      };
    case 'TOGGLE_DAPP_TRANSACTION_MODAL':
      if (action.show === false) {
        return {
          ...state,
          dappTransactionModalVisible: false,
        };
      }
      return {
        ...state,
        dappTransactionModalVisible:
          action.show === null
            ? !state.dappTransactionModalVisible
            : action.show,
      };
    case 'TOGGLE_INFO_NETWORK_MODAL':
      if (action.show === false) {
        return {
          ...state,
          infoNetworkModalVisible: false,
        };
      }
      return {
        ...state,
        infoNetworkModalVisible: !state.infoNetworkModalVisible,
      };
    case 'TOGGLE_SIGN_MODAL':
      if (action.show === false) {
        return {
          ...state,
          signMessageModalVisible: false,
        };
      }
      return {
        ...state,
        signMessageModalVisible: !state.signMessageModalVisible,
      };
    default:
      return state;
  }
<<<<<<< Updated upstream
	switch (action.type) {
		case 'TOGGLE_NETWORK_MODAL':
			return {
				...state,
				networkModalVisible: !state.networkModalVisible,
			};
		case 'TOGGLE_RECEIVE_MODAL': {
			return {
				...state,
				receiveModalVisible: !state.receiveModalVisible,
				receiveAsset: action.asset,
			};
		}
		case 'TOGGLE_ACCOUNT_MODAL':
			return {
				...state,
				accountsModalVisible: !state.accountsModalVisible,
			};
		case 'TOGGLE_COLLECTIBLE_CONTRACT_MODAL':
			return {
				...state,
				collectibleContractModalVisible: !state.collectibleContractModalVisible,
			};
		case 'TOGGLE_DAPP_TRANSACTION_MODAL':
			if (action.show === false) {
				return {
					...state,
					dappTransactionModalVisible: false,
				};
			}
			return {
				...state,
				dappTransactionModalVisible: action.show === null ? !state.dappTransactionModalVisible : action.show,
			};
		case 'TOGGLE_APPROVE_MODAL':
			if (action.show === false) {
				return {
					...state,
					approveModalVisible: false,
				};
			}
			return {
				...state,
				approveModalVisible: !state.approveModalVisible,
			};
		default:
			return state;
	}
=======
>>>>>>> Stashed changes
};
export default modalsReducer;
