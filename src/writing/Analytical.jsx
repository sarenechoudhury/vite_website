import { Link } from 'react-router-dom';
import Layout from '../Layout';

export default function Analytical() {
  return (
    <Layout>
      <section className="space-y-6">
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/kant" className="hover:underline">Unfolding Order in Cosmopolitan Progress</Link>
          </h2>
          <p className="italic">"Idea for a Universal History with a Cosmopolitan Purpose" & "The Major Political Writings of Jean-Jacques Rousseau" - Books</p>
          <p>December, 2024.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/rousseau" className="hover:underline">From Savage Liberty to Civic Unity</Link>
          </h2>
          <p className="italic">"The Major Political Writings of Jean-Jacques Rousseau" - Book</p>
          <p>November, 2024.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/leviathan" className="hover:underline">The Soul of the Commonwealth: Hobbesian Sovereignty as Reason and Nurture</Link>
          </h2>
          <p className="italic">"Leviathan" - Book</p>
          <p>November, 2024.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/whipping" className="hover:underline">Memory, Time, and the Psychology of Abuse</Link>
          </h2>
          <p className="italic">"The Whipping" - Poem</p>
          <p>November, 2023.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/catcher" className="hover:underline">False Maturity, Exploration, and Conviction in Teenage Authenticity</Link>
          </h2>
          <p className="italic">"Catcher in the Rye" & "Persepolis" - Novels</p>
          <p>January, 2023.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/vertigo" className="hover:underline">Screen Memory and Obsession in Achieving Absolution</Link>
          </h2>
          <p className="italic">"Vertigo" & "Memento" - Films</p>
          <p>December, 2022.</p>
        </div>
        <div className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-bold text-sky-700">
          <Link to="/writing/chinatown" className="hover:underline">The Disquieting Reality of Chinatown, One Comparable to Our Own</Link>
          </h2>
          <p className="italic">"Chinatown" - Film</p>
          <p>October, 2022.</p>
        </div>
      </section>
    </Layout>
  );
}