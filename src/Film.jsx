import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Film() {
  return (
    <Layout>
      <section className="space-y-6">
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/films/deception" className="hover:underline">An Algorithmic Politics of Deception</Link>
          </h2>
          <p className="italic">A critique on the manner by which social media has diluted activism</p>
          <p>May, 2025.</p>
        </div>
      </section>
    </Layout>
  );
}
