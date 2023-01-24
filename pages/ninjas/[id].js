import styles from "../../styles/Ninjalist.module.css";

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
}

function Detaile(props) {
  return (
    <div className={styles.card}>
      <h1>{props.ninja.name}</h1>
      <hr />
      <p>
        <strong>Email : </strong>
        {props.ninja.email}
      </p>
      <p>
        <strong>Website : </strong>
        {props.ninja.website}
      </p>
      <p>
        <strong>Location : </strong>
        {props.ninja.address.city} | {props.ninja.address.street}
      </p>
    </div>
  );
}

export default Detaile;
