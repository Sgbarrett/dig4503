import Head from 'next/head';
import Link from 'next/link';
import TypeSearch from '../components/TypeSearch';
import styles from '../components/stylesPage/styles.module.css';


const Type= ()=>{
    return(
        <center>
        <div>
        <h1 className={styles.title}>Search for a Pokemon</h1>
            <Head>
                <title>TypeSearch</title>
            </Head>
            <Link href="/name">
                <a className={styles.a} >Search by name</a>
            </Link>

            <br/>

            <Link href="/id">
                <a className={styles.a}>Search by ID</a>
            </Link>

            <br/>
            
            <TypeSearch/>
            <div className={styles.result} id="reportingArea">

            </div>
        </div>
        </center>
    )
}

export default Type;