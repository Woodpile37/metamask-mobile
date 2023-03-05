import { Theme as DesignTokenTheme } from '@metamask/design-tokens';

export enum AppThemeKey {
  os = 'os',
  light = 'light',
  dark = 'dark',
}
export interface Theme extends DesignTokenTheme {
  themeAppearance: AppThemeKey.light | AppThemeKey.dark;
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
