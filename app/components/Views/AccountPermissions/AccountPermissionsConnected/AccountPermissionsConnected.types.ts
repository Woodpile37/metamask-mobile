// Third party dependencies.
import { ImageSourcePropType } from 'react-native';

// External dependencies.
import { UseAccounts } from '../../../hooks/useAccounts';
import { AccountPermissionsScreens } from '../AccountPermissions.types';
<<<<<<< HEAD
import { IconName } from '../../../../component-library/components/Icons/Icon';
import { AvatarAccountType } from '../../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
=======
import { IconName } from '../../../../component-library/components/Icon';
import { AvatarAccountType } from '../../../../component-library/components/Avatars/AvatarAccount';
>>>>>>> upstream/testflight/4754-permission-system

/**
 * AccountPermissionsConnected props.
 */
export interface AccountPermissionsConnectedProps extends UseAccounts {
  isLoading?: boolean;
  selectedAddresses: string[];
  onSetSelectedAddresses: (addresses: string[]) => void;
  onSetPermissionsScreen: (screen: AccountPermissionsScreens) => void;
  onDismissSheet: () => void;
  hostname: string;
<<<<<<< HEAD
  urlWithProtocol: string;
=======
>>>>>>> upstream/testflight/4754-permission-system
  favicon: ImageSourcePropType;
  secureIcon: IconName;
  accountAvatarType: AvatarAccountType;
}
