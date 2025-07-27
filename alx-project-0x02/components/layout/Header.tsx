// components/layout/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <nav className="flex space-x-4">
        <Link href="/home">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="hover:underline cursor-pointer">About</span>
        </Link>
        <Link href="/posts">
          <span className="hover:underline cursor-pointer">Posts</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

