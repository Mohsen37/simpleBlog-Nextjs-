import styles from "../styles/About.module.css";
import Head from "next/head";

function about() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ninjalist | About</title>
      </Head>
      <h1 className={styles.title}>About Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quis
        minima ea aliquam natus unde labore, aperiam, quaerat iusto eos aliquid
        atque nostrum corrupti repudiandae? Incidunt dicta quos rerum aliquid?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error earum
        nobis totam. Similique vitae sequi, at optio quia voluptatem veniam
        doloremque reiciendis repellat consectetur hic possimus dolore rerum
        necessitatibus officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, molestias
        laborum? Voluptate magni vero voluptatum maiores odio doloribus nesciunt
        nulla. Nostrum nam doloremque odit tenetur unde laboriosam similique.
        Velit dolorem odio deserunt pariatur eveniet animi modi corporis placeat
        a. Aspernatur vel laborum a eius amet reprehenderit repudiandae,
        voluptates quidem quos repellat consectetur voluptatem necessitatibus
        similique! Magni, consequatur earum. Beatae enim praesentium,
        reprehenderit voluptatum incidunt aut eius? Eos ad repellendus,
        temporibus quos velit inventore adipisci aliquid itaque perspiciatis id
        ipsum doloribus hic fuga doloremque laborum minima necessitatibus iure
        dignissimos optio exercitationem dolorem odit! Dignissimos similique non
        totam labore dolores natus ipsa.
      </p>
    </div>
  );
}

export default about;
