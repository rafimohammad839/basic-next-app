import Head from "next/head";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          exercitationem rerum cumque deleniti quia quas placeat amet
          voluptatem, earum at cupiditate, esse suscipit dolorem eos assumenda a
          quisquam quibusdam labore
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          exercitationem rerum cumque deleniti quia quas placeat amet
          voluptatem, earum at cupiditate, esse suscipit dolorem eos assumenda a
          quisquam quibusdam labore
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
``