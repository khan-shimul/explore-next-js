import Head from 'next/head';
import React from 'react';

const about = () => {
    return (
        <>
            <Head>
                <title>Next Js | About</title>
                <meta name='keywords' content='Next Js' />
            </Head>
            <div>
                <h2>This is about page</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat neque vel voluptas ab. Dolorem impedit iste, obcaecati et ex neque in quam repellat? Laborum adipisci iusto eveniet, delectus inventore sunt.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat neque vel voluptas ab. Dolorem impedit iste, obcaecati et ex neque in quam repellat? Laborum adipisci iusto eveniet, delectus inventore sunt.</p>
            </div>
        </>
    );
};

export default about;