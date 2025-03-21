export enum UserRoles {
  Student = 'Student',
  Teacher = 'Teacher',
  Secretary = 'Secretary',
  LabTechnician = 'LabTechnician',
  Executive = 'Executive',
  Administrative = 'Administrative',
}

export interface SignUp {
  name: string;
  lastname: string;
  dob: Date;
  phone: string;
  email: string;
  username: string;
  role: string;
  password: string;
}

export interface SignInResponse {
  user: User;
  access_token: string;
  token_type: string;
}

export interface User {
  id: number;
  user_type: UserRoles;
  last_name: string;
  email: string;
  phone_number: string;
  registration_date: Date;
  first_name: string;
  middle_name: string;
  username: string;
  password: string;
  status: string;
  update_date: Date;
}

export interface CreateUser {
  user_type: string;
  last_name: string;
  email: string;
  phone_number: string;
  registration_date: Date;
  first_name: string;
  middle_name: string;
  username: string;
  password: string;
  status: string;
}

export interface UpdatePassword {
  newPassword: string;
  password: string;
}

export interface Session {
  _id: string;
  user: string;
  device: string;
  location: string;
  enabled: boolean;
  refreshToken: string;
  loginTime: Date;
  createdAt: Date;
  updatedAt: Date;
}
