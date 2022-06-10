import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $postStore, getSearchDataFx } from '../../Stores/MainStore';
import $states from '../../Stores/StateStore';
import AuthorQuestions from './AuthorQuestions/AuthorQuestions';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import PopularTags from './PopularTags/PopularTags';
import Post from './Post/Post';
import Style from './Result.module.css';

const Result = ({searchValue, setQuestionId}: any) => {
  const searchResults = useStore($postStore);
  const states = useStore($states);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [, forceUpdate] = useState();
  const [userId, setUserId] = useState(0);
  const [tag, setTag] = useState('');
  
  useEffect(() => {
    getSearchDataFx(searchValue).finally(() => {
      if (searchResults.items && searchResults.items.length > 0) {
        setIsLoaded(true);
        console.log(searchResults)
        setIsDone(true);
      }
      else {
        setIsLoaded(true);
        setIsDone(false);
      }
    })
  }, [isDone]);

  return (
    <div className={Style.Adaptive_wrapper}>
      <div className={Style.Result_page_wrapper}>
        {!isLoaded ? <Loader /> :
          !isDone ? <ErrorMessage /> : 
            searchResults?.items?.map((post: any) => ( 
              <div key={post?.creation_date} >
                <Post 
                  post={post} 
                  forceUpdate={forceUpdate}
                  setUserId={setUserId}
                  setTag={setTag}
                  setQuestionId={setQuestionId}/>
              </div> 
              )
            )}
      </div>
      {states?.isActiveAuthorQuestions ? <AuthorQuestions userId={userId}/> : states?.isActivePopularTags ? <PopularTags tag={tag}/> : null}
    </div>
  )
};

export default Result;

// Страница резульаттов (постов) после поиска по сайту