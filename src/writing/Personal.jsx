import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function Personal() {
  return (
    <Layout>
      <section className="space-y-6">
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/commandments" className="hover:underline">My Ten Commandments</Link>
          </h2>
          <p className="italic">A doctrine formed on the sea</p>
          <p>October, 2022.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/multiverse" className="hover:underline">Self-Worth in the Multiverse</Link>
          </h2>
          <p className="italic">Inspired by the film Everything Everywhere All At Once</p>
          <p>October, 2022.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/trutescu" className="hover:underline">Christina Trutescu Will Never Give Up</Link>
          </h2>
          <p className="italic">Following her career from gymnast to the medical field</p>
          <p>March, 2022.</p>
        </div>
      </section>
    </Layout>
  );
}
  