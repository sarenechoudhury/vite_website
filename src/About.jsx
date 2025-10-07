import React from 'react';
import Layout from './Layout';

export default function About() {
  return (
    <Layout>
      <section className="bg-white shadow-md rounded-xl p-6 border">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">About Me</h1>
        <p>
          I'm Sarene, a creative technologist studying Computer Science and Cinema at UChicago. This is the about page!
        </p>
      </section>
    </Layout>
  );
}

