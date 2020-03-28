
import Head from 'next/head';
import Link from 'next/link';
import NameSearch from '../components/NameSearch';
import styles from '../components/stylesPage/styles.module.css';

const Name= ()=>{
    return(
        <center>
        <div>
        <h1 className={styles.title}>Search for a Pokemon</h1>
            <Head>
                <title>NameSearch</title>
            </Head>
            <Link href="/id">
                <a className={styles.a}>Search by ID</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>
            
            <NameSearch/>
            <div className={styles.result} id="reportingArea">

            </div>
        </div>
        </center>
    )
}

export default Name;