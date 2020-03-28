import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/stylesPage/styles.module.css';

const Home = () => (
  <center>
  <div className="container">
    <Head>
      <title>Home page</title>
    </Head>
    <br/>
    <h1 className={styles.title}>Search for a Pokemon</h1>
    <br/>
    <Link href="/name">
      <a className={styles.home}>Search by name</a>
    </Link>

    <br/>

    <Link href="/id">
      <a className={styles.home}>Search by ID</a>
    </Link>

    <br/>
    
    <Link href="/type">
      <a className={styles.home}>Search by type</a>
    </Link>
  </div>
  </center>
)

export default Home