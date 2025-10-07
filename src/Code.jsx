import { Link } from 'react-router-dom';
import Layout from './Layout';

export default function Code() {
  return (
    <Layout>
      <section className="space-y-6">
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/coding/python" className="hover:underline">Python</Link>
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/coding/ml" className="hover:underline">Machine Learning</Link>
          </h2>
        </div>

        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
            <Link to="/coding/c" className="hover:underline">C</Link>
          </h2>
        </div>
      </section>
    </Layout>
  );
}

