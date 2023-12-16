import ParallaxHero from "./components/ParallaxHero/ParallaxHero";
import ParallaxWrapper from "./components/ParallaxWrapper";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <ParallaxWrapper>
        <ParallaxHero />
      </ParallaxWrapper>
      <div className={styles.wrapper}>
        <h1>
          This is a recreation of the hero page at{" "}
          <a href="https://moco.supercell.com/" target="_blank">
            moco.supercell.com
          </a>{" "}
          It is a NextJs application using{" "}
          <a
            href="https://www.npmjs.com/package/react-scroll-parallax"
            target="_blank"
          >
            react-scroll-parallax
          </a>{" "}
          for parallax effect and smooth scroll using{" "}
          <a href="https://lenis.studiofreight.com/" target="_blank">
            Lenis
          </a>
          . This web page is made by{" "}
          <a href="https://warlockja.ru" target="_blank">
            WarlockJa
          </a>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nostrum
          aspernatur nesciunt rem, officiis atque deserunt architecto excepturi
          ducimus consectetur suscipit dolore sed tempora, assumenda corporis
          eius quasi quas pariatur.
        </p>
        <p>
          Sed minus alias quidem error fuga sint temporibus, accusamus totam!
          Voluptates, deserunt? Dolore nulla iure asperiores quibusdam officia
          pariatur deleniti aspernatur, assumenda numquam blanditiis cumque
          voluptatem deserunt nesciunt, ea atque!
        </p>
        <p>
          Dolor tenetur error similique, voluptatibus blanditiis deleniti
          distinctio! Officia a, porro nobis provident illum deleniti nulla
          consequuntur voluptatum enim repellat, architecto quas mollitia
          consectetur assumenda rem magnam maiores ad nostrum.
        </p>
        <p>
          Sequi laudantium quaerat necessitatibus voluptates voluptatem maiores
          animi asperiores tempore error dolore minima autem modi esse sed et
          pariatur quas, beatae fugit, earum eligendi tenetur! Doloremque
          consequuntur voluptatem ratione fugiat.
        </p>
        <p>
          Facilis voluptates necessitatibus, aspernatur deleniti nostrum porro
          consequatur veniam eius aut nihil ut error quam, expedita ipsam dolore
          ratione. Consequuntur culpa quasi quisquam quos magnam quibusdam vitae
          asperiores eveniet quam.
        </p>
        <p>
          Illo fuga, facilis cupiditate omnis, consequuntur quae maiores iure ab
          perferendis obcaecati adipisci voluptatem hic nobis officiis fugit ut
          voluptas enim? Distinctio, iusto aperiam. Aliquam vitae nobis eos ad
          perspiciatis?
        </p>
        <p>
          Recusandae quis vitae modi architecto magni error distinctio officiis
          molestiae mollitia veniam! Cum qui provident sint laudantium
          voluptatum accusantium debitis repudiandae? Sint laboriosam quis
          veniam eum amet nesciunt earum perspiciatis?
        </p>
      </div>
    </main>
  );
}
