export type Position = 'analyst' | 'android' | 'designer' | 'ios' | 'manager';

export type Employee = {
  id: string;
  name: string;
  position: Position;
  birthDate: number;
  phone: string;
  avatar: string;
  tag: string;
  email: string;
};
