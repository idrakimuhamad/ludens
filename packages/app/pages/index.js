import Head from 'next/head';
import { Button, Text } from '@ludens/ui';
import styles from '../styles/Home.module.css';

export default function Home() {
  function handleClick() {
    console.log('click from button');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text as="h1" color="indigo-700" className={styles.title}>
          Welcome to{' '}
          <Text as="a" href="https://nextjs.org">
            Next.js!
          </Text>
        </Text>
        <Button onClick={handleClick}>
          Here is the button from UI component
        </Button>

        <Text color="red-600" className={styles.description}>
          Get started by editing{' '}
          <Text family="mono" as="code" className={styles.code}>
            pages/index.js
          </Text>
        </Text>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <Text as="h3" color="yellow-700">
              Documentation &rarr;
            </Text>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}>
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
