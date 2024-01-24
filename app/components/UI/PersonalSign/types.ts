<<<<<<< HEAD
import { MessageParams, PageMeta } from '../SignatureRequest/types';

export interface PersonalSignProps {
  /**
   * Callback triggered when this message signature is rejected
   */
  onReject: () => void;
=======
export interface PersonalSignProps {
  /**
   * A string that represents the selected address
   */
  selectedAddress: string;
  /**
   * Callback triggered when this message signature is rejected
   */
  onCancel: () => void;
>>>>>>> upstream/testflight/4754-permission-system
  /**
   * Callback triggered when this message signature is approved
   */
  onConfirm: () => void;
  /**
   * Personal message to be displayed to the user
   */
<<<<<<< HEAD
  messageParams: MessageParams;
  /**
   * Object containing current page title and url
   */
  currentPageInformation: PageMeta;
=======
  messageParams: {
    origin: string;
    data: string;
    from: string;
    metamaskId: string;
  };
  /**
   * Object containing current page title and url
   */
  currentPageInformation: {
    analytics?: {
      request_platform: string;
      request_source: string;
    };
    icon?: string;
    title: string;
    url: string;
  };
>>>>>>> upstream/testflight/4754-permission-system
  /**
   * Hides or shows the expanded signing message
   */
  toggleExpandedMessage?: () => void;
  /**
   * Indicated whether or not the expanded message is shown
   */
  showExpandedMessage?: boolean;
}
