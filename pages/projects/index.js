import Head from 'next/head'
import styles from '../../styles/Projects.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }

}

const Project = ({ users }) => {
    return (
        <div>
            <Head>
                <title>Projects</title>
                <meta name="keywords" content="next.js" />
            </Head>

            <h1>Projects</h1>
            {/* <br />
            <p>This is projects page</p> */}
            <br />

            <h3>List of Pojects</h3>
            {
                users.map(user => (
                    <Link href={'/projects/' + user.id} key={user.id}>
                        <a className={styles.single}>
                            <h4>{user.name}</h4>
                        </a>
                    </Link>
                ))
            }
        </div>
    );
}

export default Project;