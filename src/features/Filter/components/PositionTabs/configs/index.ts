import { Position } from '../../../../../entities/employee/types';

export const navigationLinks: {
  nav: string;
  param: 'all' | Position;
}[] = [
  { nav: 'All', param: 'all' },
  { nav: 'Designers', param: 'designer' },
  { nav: 'Analysts', param: 'analyst' },
  { nav: 'Managers', param: 'manager' },
  { nav: 'iOS', param: 'ios' },
  { nav: 'Android', param: 'android' },
];
