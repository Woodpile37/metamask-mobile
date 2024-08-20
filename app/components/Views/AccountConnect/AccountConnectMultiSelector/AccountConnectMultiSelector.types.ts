// Third party dependencies.
import { ImageSourcePropType } from 'react-native';

<<<<<<< HEAD
/**
 * Enum to track states of the account connect multi selector screen.
 */
export enum AccountConnectMultiSelectorScreens {
  AccountMultiSelector = 'AccountMultiSelector',
  AddAccountActions = 'AddAccountActions',
}

// External dependencies.
import { UseAccounts } from '../../../hooks/useAccounts';
import { IconName } from '../../../../component-library/components/Icons/Icon';
import { USER_INTENT } from '../../../../constants/permissions';
=======
// External dependencies.
import { UseAccounts } from '../../../hooks/useAccounts';
import { IconName } from '../../../../component-library/components/Icon';
import USER_INTENT from '../../../../constants/permissions';
>>>>>>> upstream/testflight/4754-permission-system

/**
 * AccountConnectMultiSelector props.
 */
export interface AccountConnectMultiSelectorProps extends UseAccounts {
  selectedAddresses: string[];
  onSelectAddress: (addresses: string[]) => void;
  isLoading?: boolean;
  onUserAction: React.Dispatch<React.SetStateAction<USER_INTENT>>;
<<<<<<< HEAD
  urlWithProtocol: string;
  favicon: ImageSourcePropType;
  secureIcon: IconName;
  isAutoScrollEnabled?: boolean;
  onBack: () => void;
=======
  hostname: string;
  favicon: ImageSourcePropType;
  secureIcon: IconName;
  isAutoScrollEnabled?: boolean;
>>>>>>> upstream/testflight/4754-permission-system
}
