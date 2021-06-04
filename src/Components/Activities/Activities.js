import React from 'react';
import styles from './Activities.module.css';

import { ReactComponent as Loupe } from '../../Assets/loupe.svg';
import { ReactComponent as Phone } from '../../Assets/phone.svg';
import { ReactComponent as People } from '../../Assets/people.svg';
import { ReactComponent as Email } from '../../Assets/email.svg';
import { ReactComponent as CalendarAlert } from '../../Assets/calendar-alert.svg';

import InformationWithNumber from '../../Assistents/InformationWithNumber/InformationWithNumber';
import ActivitiesTitle from '../../Assistents/ActivitiesTitle/ActivitiesTitle';
import ActivityItem from '../../Assistents/ActivityItem/ActivityItem';

const Activities = () => (
  <section className={`${styles.container} item`}>
    <h2>Atividades</h2>

    <div className={styles.search}>
      <Loupe />
      <input type="text" placeholder="Pesquisar..." />
    </div>

    <div className={styles.activiesMenu}>
      <InformationWithNumber color="#424242" number="25" main="Total" />
      <InformationWithNumber color="#C62828" number="1" main="Em atraso" />
      <InformationWithNumber color="#1976D2" number="0" main="Em andamento" />
      <InformationWithNumber color="#F9A825" number="3" main="Previstas" />
      <InformationWithNumber color="#2E7D32" number="21" main="Concluídas" />
    </div>

    <div className={styles.activiesList}>
      <ActivitiesTitle color="#C62828" title="Atividades em atraso" />

      <ActivityItem
        image={<Phone style={{ fill: '#C62828' }} />}
        title="Ligação de agendamento da reunião"
        name="Erica Collins"
        date="Em atraso por 04 dias"
      />

      <ActivitiesTitle color="#F9A825" title="Atividades previstas" />

      <ActivityItem
        image={<People style={{ fill: '#F9A825' }} />}
        title="Reunião orçamento"
        name="Abigail Fisher"
        date="Hoje às 15h"
      />

      <ActivityItem
        image={<Email style={{ fill: '#F9A825' }} />}
        title="Email documentação"
        name="Jeffery King"
        date="Amanhã às 9:45"
      />

      <ActivityItem
        image={<CalendarAlert style={{ fill: '#F9A825' }} />}
        title="Almoço coorporativo"
        name="Lawrence Kelly"
        date="Amanhã às 15h"
      />

      <ActivitiesTitle color="#2E7D32" title="Atividades concluídas" />

      <ActivityItem
        image={<CalendarAlert style={{ fill: '#2E7D32' }} />}
        title="Apresentação feira agrícola"
        name="Caroline Diaz"
        date="Segunda-feira (17/09/2018) às 08h"
      />

      <ActivityItem
        image={<Email style={{ fill: '#2E7D32' }} />}
        title="Email orçamento"
        name="Arthur Clark"
        date="Terça-feira (18/09/2018) às 13h"
      />

      <ActivityItem
        image={<Email style={{ fill: '#2E7D32' }} />}
        title="Email contrato"
        name="Frieda Howard"
        date="Quarta-feira (19/09/2018) às 10h"
      />

      <ActivityItem
        image={<Phone style={{ fill: '#2E7D32' }} />}
        title="Ligação de agendamento da reunião"
        name="Dylan Watsor"
        date="Quarta-feira (19/09/2018) às 13h"
      />
    </div>
  </section>
);

export default Activities;
