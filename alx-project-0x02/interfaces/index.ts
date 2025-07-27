// interfaces/index.ts

export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  title: string;
  content: string;
  address: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on roles used
}

// interfaces/index.ts

export interface CardProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  title: string;
  content: string;
  address: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on roles used
}

export interface PostProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  title: string;
  content: string;
  address: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on roles used
}

