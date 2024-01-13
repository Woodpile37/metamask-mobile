import { Theme as DesignTokenTheme } from '@metamask/design-tokens';
<<<<<<< Updated upstream
=======
import { default as TempBrandColors } from './temp-tokens/brandColors.types';
>>>>>>> Stashed changes

export enum AppThemeKey {
  os = 'os',
  light = 'light',
  dark = 'dark',
}
export interface Theme extends DesignTokenTheme {
  themeAppearance: AppThemeKey.light | AppThemeKey.dark;
<<<<<<< Updated upstream
}

export type Colors = Theme['colors'];
// TODO: This should probably be defined from @metamask/design-token library
export type Colors = any;

export enum AppThemeKey {
	os = 'os',
	light = 'light',
	dark = 'dark',
}
export interface Theme {
	colors: Colors;
	themeAppearance: AppThemeKey.light | AppThemeKey.dark;
}
=======
  brandColors: BrandColors;
}

export type Colors = Theme['colors'];
export type Shadows = Theme['shadows'];
export type BrandColors = TempBrandColors;
>>>>>>> Stashed changes
