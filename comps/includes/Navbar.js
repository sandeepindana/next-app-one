import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                {/* <h1>MV Creations</h1> */}
                <Image src="/vlcsnap-161.png" width={128} height={77} />
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/projects"><a>Projects</a></Link>
        </nav>
    );
}

export default Navbar;