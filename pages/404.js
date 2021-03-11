import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1);
            router.push('/');
        }, 3000);
    }, [])


    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <p>Go to <Link href="/"><a>Home Page</a></Link></p>
        </div>
    );
}

export default NotFound;