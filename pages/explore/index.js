import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Explore.module.css';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return {
        props: { users }
    }
}

const Explore = ({ users }) => {
    return (
        <>
            <Head>
                <title>Next Js | Explore</title>
                <meta name='keywords' content='Next Js' />
            </Head>
            <div>
                <h2 className={styles.title}>Explore All</h2>
                <h5>Users: {users?.length}</h5>
                {
                    users?.map(user => (
                        <Link href={`/explore/${user.id}`} key={user.id}>
                            <a>
                                <h3 className={styles.single}>{user?.name}</h3>
                            </a>
                        </Link>
                    ))
                }
            </div>
        </>
    );
};

export default Explore;