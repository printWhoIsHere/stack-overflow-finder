import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $authorQuestionsStore, getAuthorQuestionsFx } from '../../../Stores/MainStore';
import Style from '../../../Styles/MainStyle.module.css';

const AuthorQuestions = ({ userId }: any) =>  {
  const authorQuestions = useStore($authorQuestionsStore);
  useEffect(() => {
    getAuthorQuestionsFx(userId);
  }, [])

  return (
    <div className={Style.Wrapper}>
      
      {authorQuestions?.items.map((question: any) => (
        <div className={Style.Post} key={question?.question_id}>
          <a href={question?.link} target='_blank'>
            <p className={Style.Post_title}>
              {question?.title}
            </p>
          </a>
        </div>
      ))}

    </div>
  )
}

export default AuthorQuestions;

// Компонент для отображения популярных вопросов автора