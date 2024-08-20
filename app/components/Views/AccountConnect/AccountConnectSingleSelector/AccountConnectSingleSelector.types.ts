// External dependencies.
import { UseAccounts } from '../../../hooks/useAccounts';
<<<<<<< HEAD
import { USER_INTENT } from '../../../../constants/permissions';
=======
import USER_INTENT from '../../../../constants/permissions';
>>>>>>> upstream/testflight/4754-permission-system
import { AccountConnectScreens } from '../AccountConnect.types';

/**
 * AccountConnectSingleSelector props.
 */
export interface AccountConnectSingleSelectorProps extends UseAccounts {
  selectedAddresses: string[];
  isLoading?: boolean;
  onSetScreen: (screen: AccountConnectScreens) => void;
  onSetSelectedAddresses: (addresses: string[]) => void;
  onUserAction: React.Dispatch<React.SetStateAction<USER_INTENT>>;
}
