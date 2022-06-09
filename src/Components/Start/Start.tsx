import Style from './Start.module.css';

const Start = () => {

  return (
    <div className={Style.Start_page_wrapper}>
      <p className={Style.h1}>Добро пожаловать на стартовую страницу поисковика по сервису StackOverflow!</p>
      <p className={Style.h2}>Для начала работы напишите что-нибудь в поиске и нажмите кнопку "Поиск"</p>
    </div>
  );
};

export default Start;