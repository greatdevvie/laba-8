import { useState } from 'react';
import 'postcss';
import styles from './styles/style.module.css';

export default function App() {
  const [dataContain, setDataContain] = useState({
    name: '',
    date: '',
    phone: '',
    email: '',
    extend: '',
    producer: '',
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (dataContain.name === '' || dataContain.date === '' || dataContain.phone === '' || dataContain.email === '' || dataContain.extend === '' || dataContain.producer === '') {
      alert('Заполните все поля');
    } else {
      function fullBirthday() {
        const realBd = new Date(dataContain.date);
        const day = realBd.toLocaleString('ru', { day: 'numeric' });
        const month = (date = new Date) => ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'][date.getMonth()];
        const year = realBd.toLocaleString('ru', { year: 'numeric' });
        return `${day} ${month(realBd)} ${year} года`;
      }

      function leftToBd() {
        const birthday = new Date(dataContain.date);
        birthday.setFullYear(2024);
        const date = new Date();
        const bdtime = birthday.getTime();
        const todays = date.getTime();

        const oneday = 1000 * 60 * 60 * 24;
        if (todays > bdtime) {
          const math = todays - bdtime;
          const days = Math.floor(math / oneday);

          return `После др прошло ${days} дней`;
        } else {
          const math = bdtime - todays;
          const days = Math.floor(math / oneday);

          return `До др осталось ${days} дней`;
        }
      }

      const dataShow = `Тебя зовут ${dataContain.name}, ты родился ${fullBirthday()}, с тобой можно связаться по номеру ${dataContain.phone}, тебе можно написать на почту ${dataContain.email}, немного о тебе: ${dataContain.extend}, твой любимый продюсер: ${dataContain.producer}, ${leftToBd()}`;
      alert(dataShow);
    }
  }

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1>Форма регистрации</h1>
        <label htmlFor='name'>Введите Ваше имя: <input id='name' type="text" placeholder='Иванов Иван Иванович' onChange={(e) => setDataContain({ ...dataContain, name: e.target.value })} /></label>
        <label htmlFor='date'>Введите Вашу дату рождения: <input id='date' type="date" min="1900-01-01" placeholder='01.01.2000' onChange={(e) => setDataContain({ ...dataContain, date: e.target.value })} /></label>
        <label htmlFor='phone'>Введите Ваш номер телефона: <input id='phone' type="tel" placeholder='+7 (999) 999-99-99' onChange={(e) => setDataContain({ ...dataContain, phone: e.target.value })} /></label>
        <label htmlFor='email'>Введите Ваш email: <input id='email' type="email" placeholder='ivanov@pornhub.com' onChange={(e) => setDataContain({ ...dataContain, email: e.target.value })} /></label>
        <label htmlFor='extend'>Введите дополнительную информацию: <textarea id='extend' placeholder='Дополнительная информация' onChange={(e) => setDataContain({ ...dataContain, extend: e.target.value })} /></label>
        <label htmlFor='producer'>
          Ваш любимый артист:
          <select id='producer' name='producer' onChange={(e) => setDataContain({ ...dataContain, producer: e.currentTarget.value })}>
            <option value='LXRY PXNK'>LXRY PXNK</option>
            <option value='DVRST'>DVRST</option>
            <option value='Kordhell'>Kordhell</option>
            <option value='Send 1'>Send 1</option>
          </select>
        </label>
        <button type='submit'>Отправить</button>
      </form>
    </section>
  )
}
