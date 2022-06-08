import { Link } from 'react-router-dom';
import Style from './AuthorQuestions.module.css';

const AuthorQuestions = ( questions: any ) =>  {
  return (
    <div className={Style.Author_questions_wrapper}>
      {questions?.questions?.map( (question: any) => (
        <div className={Style.Question_post} key={question?.id}>
          <Link to={question?.link}>
            <p className={Style.Post_title}>
                {question?.title}
            </p>
          </Link>
        </div>    
      ))}

    </div>
  )
}

export default AuthorQuestions;