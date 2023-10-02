import React from "react";
import styles from "./BlogPost.module.css";
import gustavo from "../../../assets/gustavo.jpg";
export default function BlogPost() {
  return (
    <article className={styles.container}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut tellus
        vel augue semper iaculis sed eget urna. Aliquam tortor neque, hendrerit
        eu nunc vel, tempus feugiat sapien. Sed viverra auctor scelerisque.
        Etiam fringilla erat enim, eu egestas leo vulputate vitae. Nulla vitae
        enim eu sem iaculis hendrerit a sed ipsum. Aenean eu magna ligula.
        Nullam nec fringilla dolor. Quisque ac sem vitae dolor porttitor
        aliquet. In iaculis lectus dolor, sed ultrices dolor ultricies quis.
        Mauris venenatis erat id purus sodales ullamcorper vitae a nulla.
      </p>
      <p>
        Mauris dapibus augue sit amet dui fermentum, vitae interdum orci
        maximus. Quisque luctus imperdiet sem eget vulputate. Quisque egestas
        neque vel dui accumsan, vitae commodo nisi egestas. Nullam blandit nisl
        sit amet ante finibus cursus. Aliquam vitae dolor id tortor malesuada
        tristique. Vivamus eleifend, arcu a malesuada egestas, nunc velit
        egestas ipsum, a volutpat enim mauris semper odio. Duis sagittis neque
        id turpis venenatis suscipit. Mauris nec dignissim elit. Vestibulum
        hendrerit mi lectus, eget gravida sem pharetra nec. Cras et odio id ante
        suscipit tristique. Nam ultricies ullamcorper felis, eu placerat mi
        aliquet non. Etiam eu dui facilisis, congue enim a, fringilla mi. Nam ut
        lorem et lorem dictum blandit sed vitae purus. Sed eu euismod sem, id
        posuere urna.
      </p>
      <a href="#" id="btn-twtr" target="_b">
        Continuar leyendo
      </a>
      <div className={styles.postFooter}>
        <div>
          <img src={gustavo} alt="author" className={styles.postImg} />
          <p>por Gustavo Sanchez</p>
        </div>
      </div>
    </article>
  );
}
