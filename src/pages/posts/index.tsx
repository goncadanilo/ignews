import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              vero consequuntur? Unde sed ipsam numquam porro distinctio,
              corporis est aspernatur sit consequatur provident doloremque
              placeat rem aliquam delectus suscipit nisi.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              vero consequuntur? Unde sed ipsam numquam porro distinctio,
              corporis est aspernatur sit consequatur provident doloremque
              placeat rem aliquam delectus suscipit nisi.
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2022</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
              vero consequuntur? Unde sed ipsam numquam porro distinctio,
              corporis est aspernatur sit consequatur provident doloremque
              placeat rem aliquam delectus suscipit nisi.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
