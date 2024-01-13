<<<<<<< Updated upstream
import React, { useContext } from 'react';
import { useColorScheme, StatusBar, ColorSchemeName } from 'react-native';
import { Colors, AppThemeKey, Theme } from './models';
import { useSelector } from 'react-redux';
import { colors as colorTheme } from '@metamask/design-tokens';
import Device from '../device';
=======
import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  useColorScheme,
  StatusBar,
  ColorSchemeName,
  Appearance,
  Platform,
} from 'react-native';
import { throttle } from 'lodash';
import { AppThemeKey, Theme } from './models';
import { useSelector } from 'react-redux';
import { lightTheme, darkTheme } from '@metamask/design-tokens';
import Device from '../device';
import brandColors from './temp-tokens/brandColors';
>>>>>>> Stashed changes

/**
 * This is needed to make our unit tests pass since Enzyme doesn't support contextType
 * TODO: Convert classes into functional components and remove contextType
 */
<<<<<<< Updated upstream
export const mockTheme = { colors: colorTheme.light, themeAppearance: 'light' };
=======
export const mockTheme = {
  colors: lightTheme.colors,
  themeAppearance: 'light' as AppThemeKey.light,
  typography: lightTheme.typography,
  shadows: lightTheme.shadows,
  brandColors,
};
>>>>>>> Stashed changes

export const ThemeContext = React.createContext<any>(undefined);

/**
 * Utility function for getting asset from theme (Class components)
 *
 * @param appTheme Theme from app
 * @param osColorScheme Theme from OS
 * @param light Light asset
 * @param dark Dark asset
 * @returns
 */
export const getAssetFromTheme = (
  appTheme: AppThemeKey,
  osColorScheme: ColorSchemeName,
  light: any,
  dark: any,
) => {
  let asset = light;
  switch (appTheme) {
    case AppThemeKey.light:
      asset = light;
      break;
    case AppThemeKey.dark:
      asset = dark;
      break;
    case AppThemeKey.os:
      asset = osColorScheme === 'dark' ? dark : light;
      break;
    default:
      asset = light;
  }
  return asset;
};

<<<<<<< Updated upstream
export const useAppTheme = (): Theme => {
  const osThemeName = useColorScheme();
=======
/**
 * Custom useColorScheme hook that throttles updating the system theme color.
 * Replaces RN's useColorScheme hook, which has a bug where it resolves briefly to the wrong color.
 * https://github.com/expo/expo/issues/10815#issuecomment-719113200
 * This only affects iOS so we apply 0 delay on Android.
 *
 * @param delay - Optional delay for throttling setting the system theme.
 * @returns - The system's theme, light or dark.
 */
/* eslint-disable */
const useColorSchemeCustom = (
  delay = Platform.select({ android: 0, ios: 350 }),
) => {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const onColorSchemeChange = useCallback(
    throttle(
      ({ colorScheme }) => {
        setColorScheme(colorScheme);
      },
      delay,
      {
        leading: false,
      },
    ),
    [],
  );
  useEffect(() => {
    const appearanceStateListener =
      Appearance.addChangeListener(onColorSchemeChange);
    return () => {
      onColorSchemeChange.cancel();
      appearanceStateListener?.remove();
    };
  }, []);
  return colorScheme;
};
/* eslint-enable */

export const useAppTheme = (): Theme => {
  const osThemeName = useColorSchemeCustom();
>>>>>>> Stashed changes
  const appTheme: AppThemeKey = useSelector(
    (state: any) => state.user.appTheme,
  );
  const themeAppearance = getAssetFromTheme(
    appTheme,
    osThemeName,
    AppThemeKey.light,
    AppThemeKey.dark,
  );
<<<<<<< Updated upstream
  let colors: Colors;
=======
  let colors: Theme['colors'];
  let typography: Theme['typography'];
  let shadows: Theme['shadows'];
>>>>>>> Stashed changes

  const setDarkStatusBar = () => {
    StatusBar.setBarStyle('light-content', true);
    Device.isAndroid() &&
<<<<<<< Updated upstream
      StatusBar.setBackgroundColor(colorTheme.dark.background.default);
=======
      StatusBar.setBackgroundColor(darkTheme.colors.background.default);
>>>>>>> Stashed changes
  };

  const setLightStatusBar = () => {
    StatusBar.setBarStyle('dark-content', true);
    Device.isAndroid() &&
<<<<<<< Updated upstream
      StatusBar.setBackgroundColor(colorTheme.light.background.default);
=======
      StatusBar.setBackgroundColor(lightTheme.colors.background.default);
>>>>>>> Stashed changes
  };

  switch (appTheme) {
    /* eslint-disable no-fallthrough */
    case AppThemeKey.os: {
      if (osThemeName === AppThemeKey.light) {
<<<<<<< Updated upstream
        colors = colorTheme.light;
        setLightStatusBar();
        break;
      } else if (osThemeName === AppThemeKey.dark) {
        colors = colorTheme.dark;
=======
        colors = lightTheme.colors;
        typography = lightTheme.typography;
        shadows = lightTheme.shadows;
        setLightStatusBar();
        break;
      } else if (osThemeName === AppThemeKey.dark) {
        colors = darkTheme.colors;
        typography = darkTheme.typography;
        shadows = darkTheme.shadows;
>>>>>>> Stashed changes
        setDarkStatusBar();
        break;
      } else {
        // Cover cases where OS returns undefined
<<<<<<< Updated upstream
        colors = colorTheme.light;
=======
        colors = lightTheme.colors;
        typography = lightTheme.typography;
        shadows = lightTheme.shadows;
>>>>>>> Stashed changes
        setLightStatusBar();
      }
    }
    case AppThemeKey.light:
<<<<<<< Updated upstream
      colors = colorTheme.light;
      setLightStatusBar();
      break;
    case AppThemeKey.dark:
      colors = colorTheme.dark;
=======
      colors = lightTheme.colors;
      typography = lightTheme.typography;
      shadows = lightTheme.shadows;
      setLightStatusBar();
      break;
    case AppThemeKey.dark:
      colors = darkTheme.colors;
      typography = darkTheme.typography;
      shadows = darkTheme.shadows;
>>>>>>> Stashed changes
      setDarkStatusBar();
      break;
    default:
      // Default uses light theme
<<<<<<< Updated upstream
      colors = colorTheme.light;
      setLightStatusBar();
  }

  return { colors, themeAppearance };
=======
      colors = lightTheme.colors;
      typography = lightTheme.typography;
      shadows = lightTheme.shadows;
      setLightStatusBar();
  }

  return { colors, themeAppearance, typography, shadows, brandColors };
>>>>>>> Stashed changes
};

export const useAppThemeFromContext = (): Theme => {
  const theme = useContext<Theme>(ThemeContext);
  return theme;
};

export const useTheme = (): Theme => {
  const theme = useAppThemeFromContext() || mockTheme;
  return theme;
};

/**
 * Hook that returns asset based on theme (Functional components)
 *
 * @param light Light asset
 * @param dark Dark asset
 * @returns Asset based on theme
 */
export const useAssetFromTheme = (light: any, dark: any) => {
  const osColorScheme = useColorScheme();
  const appTheme = useSelector((state: any) => state.user.appTheme);
  const asset = getAssetFromTheme(appTheme, osColorScheme, light, dark);

  return asset;
};
