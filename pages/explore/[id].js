export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map((user) => ({
        params: { id: user.id.toString() },
    }))

    return {
        paths,
        fallback: false
    }
};
// Load Single Detail
export const getStaticProps = async ({ params }) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await res.json();

    return {
        props: { user }
    }
};


const Details = ({ user }) => {
    return (
        <div>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.website}</p>
            <p>{user.address.city}</p>
        </div>
    );
}

export default Details;