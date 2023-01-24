import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import hearoImage from "../public/office-workplace.svg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employeelist | Home</title>
      </Head>
      {/* <h1 className={styles.title}>Home Page of Ninjalist</h1> */}
      <Image
        className={styles.heroImage}
        alt="Some image"
        src={hearoImage}
        width={720}
        height={640}
      />
      <Link href="/ninjas">
        <a className={styles.btn}>See Employee Listing</a>
      </Link>
    </div>
  );
}
