import { useState } from 'react';
import Style from './PostInfo.module.css';

const PostInfo = () => {
  const [ isLoaded ] = useState(true);
  const answers = [
    {
      title: 'Какой-то неимоверно огромный ответ, на написание которого по-любому ушло много времени, но мне он нужен чисто проверки ради',
      id: 1
    },
    {
      title: 'Ответ',
      id: 2
    },
    {
      title: 'Ответ',
      id: 3
    },
    {
      title: 'Ответ',
      id: 4
    },
    {
      title: 'Ответ',
      id: 5
    },
    {
      title: 'Ответ',
      id: 6
    },
    {
      title: 'Ответ',
      id: 7
    },
  ]
  return (
    <div className={Style.Post_info_wrapper}>
      {isLoaded ? answers?.map(answer => (
        <div key={answer?.id} className={Style.Answer}>
          <p className={Style.p1}>{answer?.title}</p>
        </div>
      )) : (
        <div className={Style.Loader}>Загрузка...</div>
      )}
    </div>
  )
};

export default PostInfo;