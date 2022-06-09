import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { $authorQuestionsStore, getAuthorQuestionsFx } from '../../../Stores/MainStore';
import Style from './AuthorQuestions.module.css';

const AuthorQuestions = ({ userId }: any) =>  {
  const authorQuestions = useStore($authorQuestionsStore);
  useEffect(() => {
    getAuthorQuestionsFx(userId);
  }, [])

  return (
    <div className={Style.Author_questions_wrapper}>
      
      {authorQuestions?.items.map((question: any) => (
        <div className={Style.Question_post} key={question?.question_id}>
          <Link to={question?.link}>
            <p className={Style.Question_title}>
              {question?.title}
            </p>
          </Link>
        </div>
      ))}

    </div>
  )
}

export default AuthorQuestions;

// Компонент для отображения популярных вопросов автора