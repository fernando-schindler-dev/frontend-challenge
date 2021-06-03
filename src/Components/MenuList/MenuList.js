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

const MenuList = () => (
  <nav className={styles.container}>
    <button className={styles.menu}>
      <span className={styles.line}></span>
    </button>
    <a href="#">
      <Loupe />
    </a>
    <a href="#" className={styles.active}>
      <User />
    </a>
    <a href="#">
      <Calendar />
    </a>
    <a href="#">
      <Tag />
    </a>
    <a href="#">
      <Leaves />
    </a>
    <a href="#">
      <Money />
    </a>
    <a href="#">
      <Box />
    </a>
    <a href="#">
      <Document />
    </a>
    <a href="#">
      <Graphic />
    </a>
    <a href="#">
      <Cash />
    </a>
    <a href="#">
      <Gps />
    </a>
    <a href="#">
      <Grid />
    </a>
    <a href="#">
      <MedicalReport />
    </a>
    <a href="#">
      <MovingBox />
    </a>
    <a href="#">
      <Gear />
    </a>
    <a href="#">
      <Group />
    </a>
  </nav>
);

export default MenuList;
