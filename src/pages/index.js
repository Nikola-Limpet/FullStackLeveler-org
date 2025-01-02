import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import TechStackDisplay from '../components/TechStackDisplay';
import Quote from '../components/Quote';
import Card from '../components/Cards';

function HomepageHeader() {
  return (
    <header
      className={clsx('min-h-screen flex items-center', styles.pageBackground)}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto text-center">
          <Heading
            as="h1"
            className={clsx(
              'text-6xl md:text-6xl font-bold m-12 animate-fade-in',
              styles.spaceMonoBoldItalic,
              styles.head
            )}
          >
            This is FullStack Leveler
          </Heading>
          <div
            className={clsx(
              'prose prose-lg md:prose-lg mx-auto mt-10 mb-2 space-y-4',
              styles.akayaKanadakaRegular,
              styles.headerText
            )}
          >
            <h3 className="text-sm md:text-xl ">
              An open source learning platform for university students
              passionate about FullStack technology.
            </h3>

            <h3 className="text-base md:text-lg ">
              Learn and practice through project-based learning with React,
              NodeJS, Express, and MongoDB.
            </h3>
          </div>
          <div className={styles.buttonContainer}>
            <Link to="/docs/intro">
              <button
                className={clsx(styles.button, 'transition-all duration-400')}
              >
                Get Started
                <span className="ml-2">→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn FullStack Development through practical projects"
    >
      <HomepageHeader />
      <main
        className={clsx(
          'container  px-0 py-0',
          styles.body,
          styles.pageBackground
        )}
      >
        <TechStackDisplay />
        <HomepageFeatures />
        <Card />
        <Quote />
      </main>
    </Layout>
  );
}
