import Head from 'next/head';
import Link from 'next/link';
import styles from '../components/stylesPage/styles.module.css';
import IdSearch from '../components/IdSearch';

const ID= ()=>{
    return(
    <center>
        <div>
        <h1 className={styles.title}>Search for a Pokemon</h1>
            <Head>
                <title>IdSearch</title>
            </Head>
            <Link href="/name">
                <a className={styles.a}>Search by name</a>
            </Link>

            <br/>

            <Link href="/type">
                <a className={styles.a}>Search by type</a>
            </Link>

            <br/>
            
            <IdSearch/>
            <div className={styles.result} id="reportingArea">

            </div>
        </div>
        </center>
    )
}

export default ID;