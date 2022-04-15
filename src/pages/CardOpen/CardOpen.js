import React from "react";
import "./CardOpen.scss";
import Img4 from "../../assets/img/blog-img.jpeg";

export default function CardOpen() {
  return (
    <div className="container">
      <div className="card-open">
        <div className="card-open__holder">
          <img
            className="card-open__holder-img"
            src={Img4}
            alt="opened card img"
            width="550"
            height="600"
          />
        </div>
        <div className="card-open__info card-info">
          <div className="card-info__head">
            <h3 className="card-info__head-title">Бересклет Японский</h3>
            <span className="card-info__head-price">65.00 $</span>
          </div>
          <div className="card-info__detail card-detail">
            <h3 className="card-detail__title">Описание</h3>
            <p className="card-detail__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              tempore neque quaerat atque id rem ipsam. Similique, minus eius,
              quis quisquam fugit assumenda animi facilis voluptas aperiam
              praesentium voluptate debitis omnis eveniet iusto officia!
              Perspiciatis eaque exercitationem iure excepturi pariatur modi
              sequi, porro officiis totam, ea, harum ipsam quas odio tenetur
              voluptas sit enim dolores nemo. Nobis esse placeat id ducimus
              eligendi odio nam, illo temporibus culpa in doloremque omnis
              consectetur libero facilis, nihil ea eum natus veritatis nisi
              aperiam alias, deserunt officia voluptatum commodi? Non
              perferendis porro voluptate vero ex quam et blanditiis ipsum sit,
              aut culpa magni corporis officia eveniet repellat quidem rerum
              eius autem asperiores dolores! Vitae ducimus ipsum deleniti
              commodi nostrum aliquam harum, doloremque magni voluptatem magnam
              neque eveniet. Fuga placeat quod sed voluptatem neque maiores
              corporis. Commodi consequuntur quia atque blanditiis reprehenderit
              saepe rem. Mollitia, odit unde. Accusamus assumenda molestias
              quidem, iusto dolor maiores nihil. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Modi iure fugiat dicta, voluptate
              fugit odio minima possimus maxime rem ullam suscipit eaque dolorem
              voluptatem. Rerum quisquam cupiditate alias fugiat repudiandae
              quasi saepe iste, mollitia exercitationem eos, fugit animi totam
              delectus sint, consequuntur perspiciatis distinctio beatae nemo.
              Error a sint repudiandae eligendi, non expedita, nesciunt ad at
              quo, qui numquam cupiditate recusandae dolor harum rem soluta
              commodi impedit. Quae, autem nulla. Voluptatibus id est, eligendi
              unde odit, minima culpa porro explicabo ipsum, distinctio
              doloribus optio excepturi cupiditate corporis molestiae quos neque
              repudiandae dolorum molestias nostrum esse! Tempore vero
              repellendus quibusdam architecto. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ratione perspiciatis adipisci
              blanditiis tempora officiis repudiandae sint id beatae animi
              delectus quia facere, necessitatibus tenetur. Inventore voluptates
              laboriosam quas quod numquam dicta adipisci pariatur, consectetur
              ratione vitae, ab reiciendis? Magni suscipit excepturi molestias
              eius obcaecati quas magnam fugit eligendi. Nesciunt reiciendis
              praesentium ipsum molestias commodi, unde, veritatis eaque
              voluptatem itaque vero distinctio. Sunt laudantium illo voluptatem
              voluptatibus animi quos consectetur ab vitae quae officia,
              adipisci aut voluptas. Nesciunt similique recusandae, rerum quos
              incidunt fuga excepturi harum reprehenderit perspiciatis rem earum
              alias sint optio quasi praesentium esse enim quo illo animi nisi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
