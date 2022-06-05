import { useState } from 'react';
import Style from './App.module.css';
import Header from './Header/Header';
const App = () => {
  const [labelValue, setLabelValue] = useState('');

  const labelChange = (e: any) => {
    setLabelValue(e.target.value);
  } 

  return (
    <div className={Style.AppWrapper}>
      <Header />
      <div className={Style.Start_page}>
        <p className={Style.h1}>Добро пожаловать на стартовую страницу поисковика по серивису StackOverflow!</p>
        <p className={Style.h2}>Для начала работы напишите что-нибудь в поиске и нажмите кнопку "Поиск"</p>
        <input className={Style.search_field} type='text' placeholder='Введите для поиска' onChange={labelChange} value={labelValue}/>
        <button className={Style.search_button} type='submit' onClick={() => console.log(labelValue)}>Поиск</button>
      </div>
    </div>
  )
}

export default App;
