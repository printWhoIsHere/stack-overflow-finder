import { useEffect } from 'react';
import Style from './ErrorMessage.module.css';

const ErrorMessage = ({ forceUpdate }: any) => {
  useEffect(forceUpdate, [forceUpdate]);

  return (
    <div className={Style.Error_message}>
      <p>Упс... Кажется, данные не загрузились</p>
      <button className={Style.Refresh_button} onClick={forceUpdate}>Попробовать ещё раз</button>
    </div>
  );
};

export default ErrorMessage;