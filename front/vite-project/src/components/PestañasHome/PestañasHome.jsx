import React, { useState } from 'react';
import styles from './PestañasHome.module.css';

const PestañasHome = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        <li
          className={`${styles.tab} ${activeTab === 0 ? styles.active : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Precios
        </li>
        <li
          className={`${styles.tab} ${activeTab === 1 ? styles.active : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Horarios
        </li>
        <li
          className={`${styles.tab} ${activeTab === 2 ? styles.active : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Dirección
        </li>
        <li
          className={`${styles.tab} ${activeTab === 3 ? styles.active : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Torneos
        </li>
      </ul>

      <div className={styles.contents}>
        {activeTab === 0 && (
          <div className={`${styles.box} ${styles.show}`}>
            <img
              src="https://rekoveryclinic.com/wp-content/uploads/2023/06/jugadoras-de-padel-practicando-deporte.jpg"
              alt=""
            />
            <div>
            <div className={styles.titulos}><h3>Lorem ipsum dolor</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
              </p>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className={`${styles.box} ${styles.show}`}>
            <img
              src="https://www.vallparc.com/wp-content/uploads/2023/04/3.jpg"
              alt=""
            />
            <div>
            <div className={styles.titulos}><h3>Lorem ipsum dolor</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
              </p>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className={`${styles.box} ${styles.show}`}>
            <img
              src="http://elpinopadelyfutbol.com/wp-content/uploads/2019/08/padel-1.jpg"
              alt=""
            />
            <div>
            <div className={styles.titulos}><h3>Lorem ipsum dolor</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
              </p>
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className={`${styles.box} ${styles.show}`}>
            <img
              src="https://www.teknon.es/blog/es/salud-az/lesiones-tenis-padel-similitudes-diferencias.ficheros/3315801-Lesiones%20pa%CC%81del%20y%20tenis%20teknon.jpeg?width=1200&height=678&aspectRatio=true"
              alt=""
            />
            <div>
            <div className={styles.titulos}><h3>Lorem ipsum dolor</h3></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                accusantium itaque amet ducimus, magni iure a repudiandae
                molestias nemo voluptatibus voluptas earum excepturi architecto,
                iusto necessitatibus sequi perferendis veritatis! Voluptatem?
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PestañasHome;
