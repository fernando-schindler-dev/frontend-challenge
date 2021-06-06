import React from 'react';
import styles from './AddActivity.module.css';
import { ReactComponent as Clipboard } from '../../Assets/clipboard.svg';
import Radio from '../../Assistents/Form/Radio/Radio';
import Input from '../../Assistents/Form/Input/Input';
import Button from '../../Assistents/Form/Button/Button';

const AddActivity = () => {
  const [open, setOpen] = React.useState(false);

  const [typeOfActivity, setTypeOfActivity] = React.useState('');
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = (event) => event.preventDefault();

  return (
    <>
      <section className={styles.container} onClick={() => setOpen(!open)}>
        <Clipboard />
      </section>

      <form
        className={`${styles.form} ${open ? styles.active : ''}`}
        onSubmit={handleSubmit}
      >
        <Radio
          title="Selecione o tipo de atividade"
          options={['Agenda', 'E-mail', 'Ligação', 'Reunião']}
          value={typeOfActivity}
          setValue={setTypeOfActivity}
        />

        <Input
          id="name"
          label="Nome"
          type="text"
          value={name}
          setValue={setName}
        />

        <Input
          id="date"
          label="Data"
          type="date"
          value={date}
          setValue={setDate}
        />

        <Button text="ADICIONAR" setOpen={setOpen} />
      </form>

      <div
        className={`${styles.background} ${open ? styles.active : ''}`}
      ></div>
    </>
  );
};

export default AddActivity;
