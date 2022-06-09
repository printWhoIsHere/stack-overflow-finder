import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $store, fetchDataFx } from '../../Stores/MainStore';
import $states from '../../Stores/StateStore';
import AuthorQuestions from './AuthorQuestions/AuthorQuestions';
import PopularTags from './PopularTags/PopularTags';
import Post from './Post/Post';
import Style from './Result.module.css';

const Result = ({searchValue}: any) => {
  const searchResults = useStore($store);
  const states = useStore($states);
  const [ isLoaded ] = useState(searchResults.items.length > 0 ? true : false);
  const [, forceUpdate] = useState();
  const [userId, setUserId] = useState(0);
  
  useEffect(() => {
    fetchDataFx(`http://api.stackexchange.com/2.3/search?site=stackoverflow&intitle=${searchValue}`);
  }, [searchResults.items.length]);

  return (
    <div className={Style.Adaptive_wrapper}>
      <div className={Style.Result_page_wrapper}>
        {isLoaded ? searchResults?.items?.map((post: any) => ( 
          <div key={post?.creation_date}>
            <Post 
              post={post} 
              forceUpdate={forceUpdate}
              setUserId={setUserId}/>
          </div> 
          )
          ) : (
            <div className={Style.Loader}>Загрузка...</div>
            )}
      </div>
      {states?.isActiveAuthorQuestions ? <AuthorQuestions userId={userId}/> : states?.isActivePopularTags ? <PopularTags /> : null}
    </div>
  )
};

export default Result;