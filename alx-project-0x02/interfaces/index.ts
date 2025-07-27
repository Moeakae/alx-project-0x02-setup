// interfaces/index.ts

export interface UserProps {
  id: number;
  name: string;
  email: string;
  avatar: string;
  title: string;
  content: string;
  address: string;
  catchPhrase: string;
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
  CatchPhrase: string;
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
  userId: number;
  body: string;
  CatchPhrase: string;
  role: 'admin' | 'user' | 'guest'; // You can adjust based on role
  
}
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
export interface PostContainerProps {
  posts: PostProps[];
}
const myContainer: PostContainerProps = {
  posts: [
    {id: 1, title: 'Post 1', userId: 1, body: 'content 1', catchPhrase:  } , 
    {id: 2, title: 'Post 2', userId: 2, body: 'Content 2', catchPhrase:  },
  ]
};
myContainer.posts.forEach((post) => {
  console.log(post.title);
}
)
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (post: UserProps) => void;
}

export interface ButtonProps {
  "size", "rounde-sm"
"shape", "rounded-md"
  "small", "medium"
 "rounded-sm", "large"
}
