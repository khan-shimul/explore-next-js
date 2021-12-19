import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    // Redirect to home page after 3sec
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, []);

    return (
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>The page can not be found</h2>
            <p>Go back to the <Link href="/"><a>Home</a></Link></p>
        </div>
    );
}

export default NotFound;