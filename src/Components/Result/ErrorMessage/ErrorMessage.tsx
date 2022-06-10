import { Link } from 'react-router-dom';
import Style from './ErrorMessage.module.css';

const ErrorMessage = ({ forceUpdate }: any) => {
  return (
    <div className={Style.Error_message}>
      <p>Упс... Кажется, данные не загрузились</p>
      <Link to='/'>
        <button className={Style.Refresh_button}>Попробовать ещё раз</button>
      </Link>
    </div>
  );
};

export default ErrorMessage;