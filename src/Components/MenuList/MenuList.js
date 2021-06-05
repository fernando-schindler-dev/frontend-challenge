import React from 'react';
import styles from './MenuList.module.css';

import { ReactComponent as Loupe } from '../../Assets/loupe.svg';
import { ReactComponent as User } from '../../Assets/user.svg';
import { ReactComponent as Calendar } from '../../Assets/calendar.svg';
import { ReactComponent as Tag } from '../../Assets/tag.svg';
import { ReactComponent as Leaves } from '../../Assets/leaves.svg';
import { ReactComponent as Money } from '../../Assets/money.svg';
import { ReactComponent as Box } from '../../Assets/box.svg';
import { ReactComponent as Document } from '../../Assets/document.svg';
import { ReactComponent as Graphic } from '../../Assets/graphic.svg';
import { ReactComponent as Cash } from '../../Assets/cash.svg';
import { ReactComponent as Gps } from '../../Assets/gps.svg';
import { ReactComponent as Grid } from '../../Assets/grid.svg';
import { ReactComponent as MedicalReport } from '../../Assets/medical-report.svg';
import { ReactComponent as MovingBox } from '../../Assets/moving-box.svg';
import { ReactComponent as Gear } from '../../Assets/gear.svg';
import { ReactComponent as Group } from '../../Assets/group.svg';

const MenuList = () => {
  const [open, setOpen] = React.useState(false);
  const result = open ? styles.active : '';

  return (
    <nav className={`${styles.container} ${result}`}>
      <button className={styles.menu} onClick={() => setOpen(!open)}>
        <span className={styles.line}></span>
      </button>

      <div className={styles.menuList}>
        <a href="#">
          <p>Pesquisar</p>
          <Loupe />
        </a>
        <a href="#" className={styles.active}>
          <p>Informações gerais</p>
          <User />
        </a>
        <a href="#">
          <p>Agenda</p>
          <Calendar />
        </a>
        <a href="#">
          <p>Vendas</p>
          <Tag />
        </a>
        <a href="#">
          <p>Serviço</p>
          <Leaves />
        </a>
        <a href="#">
          <p>Financeiro</p>
          <Money />
        </a>
        <a href="#">
          <p>Produto</p>
          <Box />
        </a>
        <a href="#">
          <p>Documentos</p>
          <Document />
        </a>
        <a href="#">
          <p>Gráficos</p>
          <Graphic />
        </a>
        <a href="#">
          <p>Contas</p>
          <Cash />
        </a>
        <a href="#">
          <p>Planejamento</p>
          <Gps />
        </a>
        <a href="#">
          <p>Administrativo</p>
          <Grid />
        </a>
        <a href="#">
          <p>Saúde</p>
          <MedicalReport />
        </a>
        <a href="#">
          <p>Trabalhos</p>
          <MovingBox />
        </a>
        <a href="#">
          <p>Configurações</p>
          <Gear />
        </a>
        <a href="#">
          <p>Contas</p>
          <Group />
        </a>
      </div>
    </nav>
  );
};

export default MenuList;
