import React from 'react';
import styles from './GeneralInformation.module.css';

import profile from '../../Assets/profile.png';
import { ReactComponent as Phone } from '../../Assets/phone.svg';
import { ReactComponent as Email } from '../../Assets/email.svg';
import { ReactComponent as WhatsApp } from '../../Assets/whatsapp.svg';
import { ReactComponent as Facebook } from '../../Assets/facebook.svg';
import { ReactComponent as Instagram } from '../../Assets/instagram.svg';
import { ReactComponent as Twitter } from '../../Assets/twitter.svg';
import { ReactComponent as LinkedIn } from '../../Assets/linkedin.svg';

import InformationWithImage from '../../Assistents/InformationWithImage/InformationWithImage';

const GeneralInformation = () => (
  <section className={`${styles.container} item`}>
    <h2>Informações gerais</h2>

    <div className={styles.profile}>
      <img src={profile} alt="Foto de perfil" className={styles.image} />

      <div className={styles.informations}>
        <p>Justine Robinson</p>
        <p>Acme inc</p>

        <p className={styles.status}>Ativo</p>
      </div>
    </div>

    <InformationWithImage
      image={<Phone />}
      main="45 9 9555 5555"
      complement="Celular"
    />

    <InformationWithImage
      image={<Email />}
      main="justine@email.com"
      complement="Trabalho"
    />

    <div className={styles.social}>
      <a href="#">
        <WhatsApp />
      </a>

      <a href="#">
        <Facebook />
      </a>

      <a href="#">
        <Instagram />
      </a>

      <a href="#">
        <Twitter />
      </a>

      <a href="#">
        <LinkedIn />
      </a>
    </div>
  </section>
);

export default GeneralInformation;
