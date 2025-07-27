// interfaces/index.ts

export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on roles used
}
