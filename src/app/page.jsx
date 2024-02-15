import Image from "next/image";
import styles from "./home.module.css";
const Home = () => {
  //throw new Error("Error");
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
          culpa? Dignissimos sit quos inventore, nemo facere culpa aut est
          incidunt vel neque corporis corrupti adipisci, tenetur similique,
          necessitatibus ad magnam.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn</button>
          <button className={styles.button}>More</button>
        </div>
        <div className={styles.brand}>
          <Image src="/brands.png" alt="" fill className={styles.brands} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.hero} />
      </div>
    </div>
  );
};

export default Home;
