import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="About" description="About FS Leveler">
      <main className="container mx-auto px-4 py-16">
        <h1>About Us</h1>
        <p>Welcome to FS Leveler</p>
      </main>
    </Layout>
  );
}
