// Third party dependencies.
import { ImageSourcePropType } from 'react-native';

// External dependencies.
<<<<<<< HEAD
import { IconName } from '../../../../component-library/components/Icons/Icon';
import { UseAccounts } from '../../../hooks/useAccounts';
import { AccountPermissionsScreens } from '../AccountPermissions.types';
import { AvatarAccountType } from '../../../../component-library/components/Avatars/Avatar/variants/AvatarAccount';
=======
import { IconName } from '../../../../component-library/components/Icon';
import { UseAccounts } from '../../../hooks/useAccounts';
import { AccountPermissionsScreens } from '../AccountPermissions.types';
import { AvatarAccountType } from '../../../../component-library/components/Avatars/AvatarAccount';
>>>>>>> upstream/testflight/4754-permission-system

/**
 * AccountPermissionsRevoke props.
 */
export interface AccountPermissionsRevokeProps extends UseAccounts {
  isLoading?: boolean;
  permittedAddresses: string[];
  onSetPermissionsScreen: (screen: AccountPermissionsScreens) => void;
  hostname: string;
<<<<<<< HEAD
  urlWithProtocol: string;
=======
>>>>>>> upstream/testflight/4754-permission-system
  favicon: ImageSourcePropType;
  secureIcon: IconName;
  accountAvatarType: AvatarAccountType;
}
