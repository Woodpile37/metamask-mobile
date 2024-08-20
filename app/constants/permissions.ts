<<<<<<< HEAD
/* eslint-disable import/prefer-default-export */
///: BEGIN:ONLY_INCLUDE_IF(snaps)
export const EndowmentPermissions = Object.freeze({
  'endowment:network-access': 'endowment:network-access',
  'endowment:transaction-insight': 'endowment:transaction-insight',
  'endowment:cronjob': 'endowment:cronjob',
  'endowment:ethereum-provider': 'endowment:ethereum-provider',
  'endowment:rpc': 'endowment:rpc',
} as const);
///: END:ONLY_INCLUDE_IF

export enum USER_INTENT {
=======
enum USER_INTENT {
>>>>>>> upstream/testflight/4754-permission-system
  None,
  Create,
  CreateMultiple,
  Confirm,
  Cancel,
  Import,
  ConnectHW,
}
<<<<<<< HEAD
=======

export default USER_INTENT;
>>>>>>> upstream/testflight/4754-permission-system
