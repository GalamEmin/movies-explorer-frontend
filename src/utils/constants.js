const SHOW_MORE_DESKTOP = 4;
const SHOW_MORE_DESKTOP_BREAKPOINT = 1180;
const SHOW_MORE_TABLET = 3;
const SHOW_MORE_TABLET_BREAKPOINT = 1023;
const SHOW_MORE_MOBILE = 2;
const SHOW_MORE_MOBILE_BREAKPOINT = 800;
const SHORTS = 40;
// eslint-disable-next-line no-useless-escape
const EMAIL_REGEX =
  "^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|.(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$";
const USER_NAME_REGEX = '^[A-Za-zА-Яа-яЁё /s -]+$';

export {
  SHOW_MORE_DESKTOP,
  SHOW_MORE_DESKTOP_BREAKPOINT,
  SHOW_MORE_TABLET,
  SHOW_MORE_TABLET_BREAKPOINT,
  SHOW_MORE_MOBILE,
  SHOW_MORE_MOBILE_BREAKPOINT,
  SHORTS,
  EMAIL_REGEX,
  USER_NAME_REGEX,
};
