import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $postStore, getSearchDataFx } from '../../Stores/MainStore';
import $states from '../../Stores/StateStore';
import AuthorQuestions from './AuthorQuestions/AuthorQuestions';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import Loader from './Loader/Loader';
import PopularTags from './PopularTags/PopularTags';
import Post from './Post/Post';
import Style from './Result.module.css';

const Result = ({searchValue}: any) => {
  const searchResults = useStore($postStore);
  const states = useStore($states);
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [, forceUpdate] = useState();
  const [userId, setUserId] = useState(0);
  
  useEffect(() => {
    getSearchDataFx(searchValue).finally(() => {
      if (searchResults.items) {
        setIsDone(true);
        setIsLoaded(true);
      }
      else {
        setIsLoaded(true);
      }
    });
  }, []);

  return (
    <div className={Style.Adaptive_wrapper}>
      <div className={Style.Result_page_wrapper}>
        {!isLoaded ? <Loader /> :
          isDone ? searchResults?.items?.map((post: any) => ( 
            <div key={post?.creation_date}>
              <Post 
                post={post} 
                forceUpdate={forceUpdate}
                setUserId={setUserId}/>
              </div> 
              )) : <ErrorMessage reload={forceUpdate}/>}
      </div>
      {states?.isActiveAuthorQuestions ? <AuthorQuestions userId={userId}/> : states?.isActivePopularTags ? <PopularTags /> : null}
    </div>
  )
};

export default Result;

// Страница резульаттов (постов) после поиска по сайту