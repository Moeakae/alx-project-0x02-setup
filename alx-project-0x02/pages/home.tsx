// pages/home.tsx

import Card from '@/components/common/Card';
import Header from '@/components/layout/Header';

const Home = () => {
  return (
    <>
       <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <Card title="Welcome to Our Site" content="Discover amazing properties at the best prices." />
      <Card title="Our Mission" content="To connect travelers with beautiful places around the world." />
      <Card title="Why Choose Us?" content="Over 2 million listings, trusted by travelers globally." />
    </div>
    <main className="p-4">
              <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
    </main>
</>

  );
};

export default Home;

