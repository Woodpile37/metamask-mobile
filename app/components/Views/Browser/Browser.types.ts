import { createNavigationDetails } from '../../../util/navigation/navUtils';
import Routes from '../../../constants/navigation/Routes';

<<<<<<< HEAD
export interface BrowserParams {
=======
interface BrowserParams {
>>>>>>> upstream/testflight/4754-permission-system
  newTabUrl?: string;
  timestamp?: number;
}

const createBrowserNavDetails = createNavigationDetails<BrowserParams>(
  Routes.BROWSER.HOME,
  Routes.BROWSER.VIEW,
);

export default createBrowserNavDetails;
