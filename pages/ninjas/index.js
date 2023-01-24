import Head from "next/head";
import styles from "../../styles/Ninjalist.module.css";
import Link from "next/link";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninja: data },
  };
}

function index(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Employee | List</title>
      </Head>
      <h1>Employee Lists</h1>
      {props.ninja.map((item) => (
        <Link href={"ninjas/" + item.id} key={item.id}>
          <a>
            <h3 className={styles.item}>{item.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default index;
