import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}
async function BlogPost({ params }) {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src={data.img}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.title}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatem officiis cum rerum at quibusdam illum fugit nulla, optio,
          rem harum! Perspiciatis, repellat natus vitae, a officiis eos maiores
          ex quae eveniet nesciunt, reprehenderit inventore veniam placeat
          praesentium tempora fugiat. Maiores fugit sed aliquid explicabo
          perspiciatis. Sequi cupiditate nostrum ex sint in nesciunt eligendi
          aut earum necessitatibus tempora placeat saepe modi nam culpa quis
          neque, fuga eius quaerat iste. In deserunt soluta optio libero quaerat
          praesentium iure? Veritatis maiores corrupti maxime neque. Vel impedit
          dolores velit laborum voluptatibus doloribus eos atque beatae nihil.
          <br />
          Error corrupti nihil maiores magni aut incidunt, accusantium itaque
          aspernatur neque cumque quod in obcaecati sint voluptas, consequatur
          nisi necessitatibus velit, dolores culpa veniam dicta qui! Doloribus
          et maiores corrupti! Assumenda numquam beatae vel enim ratione
          impedit, maxime, nam harum a libero ex perspiciatis blanditiis, sint
          ipsam iusto nobis deserunt doloribus! Impedit unde, laborum, porro
          possimus laboriosam ipsum tempore nemo, ea eligendi quidem quod
          asperiores esse alias dolore sit consequuntur hic. Doloremque nostrum
          quam aliquid placeat repudiandae nulla ratione minus eos delectus,
          ullam qui ut fuga soluta accusantium odit pariatur magni porro labore!
          Dolorum unde temporibus amet voluptatum alias. Commodi autem nam,
          veritatis illum dolor molestias distinctio.
        </p>
      </div>
    </div>
  );
}

export default BlogPost;
