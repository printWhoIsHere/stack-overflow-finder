import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { $authorQuestions, getQuestionsFx } from '../../../Stores/AuthorQuestionsStore';
import Style from './AuthorQuestions.module.css';

const AuthorQuestions = ({ userId }: any) =>  {
  const questions = useStore($authorQuestions);
  useEffect(() => {
    getQuestionsFx(`http://api.stackexchange.com/2.3/users/${userId}/questions?site=stackoverflow`);
    console.log(questions)
  }, [])

  return (
    <div className={Style.Author_questions_wrapper}>

        {/* <div className={Style.Question_post} key={question?.id}>
          <Link to={question?.link}>
            <p className={Style.Post_title}>
                {question?.title}
            </p>
          </Link>
        </div>     */}

    </div>
  )
}

export default AuthorQuestions;