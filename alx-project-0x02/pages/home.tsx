import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const Home = () => {
  return (
    <>
      <Header />
      <main className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Welcome!" content="This is the home page of our app." />
        <Card title="Features" content="Reusable components make your code clean and efficient." />
        <Card title="Get Started" content="Explore the About and Posts pages using the header links." />
      </main>
    </>
  );
};

export default Home;
