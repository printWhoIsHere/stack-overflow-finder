import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $detailPostsStore, getDetailPostsFx } from '../../Stores/MainStore';
import Loader from '../Loader/Loader';
import Style from './PostInfo.module.css';

const PostInfo = ({ questionId }: any) => {
  const answers = useStore($detailPostsStore);
  const [isLoaded] = useState(answers?.items ? true : false);
  const [isDone] = useState(answers?.items.length > 0 ? true : false);
  
  useEffect(() => {
    getDetailPostsFx(questionId);
  }, [isDone]);
  return (
    <div className={Style.Post_info_wrapper} >

        {!isLoaded ? <Loader /> :
          answers?.items.length === 0 ? (
            <div className={Style.No_answers_msg}>На этот вопрос ещё не дали ответ</div>
          ) : 
            answers?.items?.map((answer: any) => (
              <div key={answer?.id} className={Style.Answer}>
                <p className={Style.p1}>
                  ERROR
                </p>
              </div>
            )
          )
        }
    </div>
  )
};

export default PostInfo;

// Компонент для отоюражения детальной информации о конкретном вопросе