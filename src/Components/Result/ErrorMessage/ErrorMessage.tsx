import Style from './ErrorMessage.module.css';

const ErrorMessage = ({ reload }: any) => {
  return (
    <div className={Style.Error_message}>
      <p>Упс... Кажется, данные не загрузились</p>
      <button className={Style.Refresh_button} onClick={reload}>Попробовать ещё раз</button>
    </div>
  );
};

export default ErrorMessage;