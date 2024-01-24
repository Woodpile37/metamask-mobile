// Third party dependencies.
import { ImageSourcePropType } from 'react-native';

// External dependencies.
import { AccountConnectScreens } from '../AccountConnect.types';
import { Account } from '../../../hooks/useAccounts';
<<<<<<< HEAD
import { IconName } from '../../../../component-library/components/Icons/Icon';
import { USER_INTENT } from '../../../../constants/permissions';
=======
import { IconName } from '../../../../component-library/components/Icon';
import USER_INTENT from '../../../../constants/permissions';
>>>>>>> upstream/testflight/4754-permission-system

/**
 * AccountConnectSingle props.
 */
export interface AccountConnectSingleProps {
  defaultSelectedAccount: Account | undefined;
  isLoading?: boolean;
  onUserAction: React.Dispatch<React.SetStateAction<USER_INTENT>>;
  onSetScreen: (screen: AccountConnectScreens) => void;
  onSetSelectedAddresses: (addresses: string[]) => void;
<<<<<<< HEAD
  urlWithProtocol: string;
=======
  hostname: string;
>>>>>>> upstream/testflight/4754-permission-system
  favicon: ImageSourcePropType;
  secureIcon: IconName;
}
