import { useStore } from 'effector-react';
import { useEffect, useState } from 'react';
import { $store, fetchDataFx } from '../../Stores/MainStore';
import Post from './Post/Post';
import Style from './Result.module.css';

const Result = ({searchValue}: any) => {
  const searchResults = useStore($store);
  const [isVisibleAuthorQuestions, setIsVisibleAuthorQuestions] = useState(false);
  const [isVisiblePopularTags, setIsVisiblePopularTags] = useState(false);
  
  useEffect(() => {
    fetchDataFx(`http://api.stackexchange.com/2.3/search?site=stackoverflow&intitle=${searchValue}`);
  }, [])

  const [ isLoaded ] = useState(searchResults.items.length > 0 ? true : false);

  const showAuthorQuestions = () => {
    setIsVisiblePopularTags(false);
    setIsVisibleAuthorQuestions(!isVisibleAuthorQuestions);
    console.log('asd')
  }

  const showPopularTags = () => {
    console.log('asd')
  }

  return (
    <div className={Style.Result_page_wrapper}>
      {/* { isLoaded ? searchResults?.items?.map( post => <Post post={ post } />) : (
        <div>Загрузка ...</div>
      )} */}
      {searchResults?.items?.map((post: any) => ( 
        <div key={post?.creation_date}>
          <Post 
            post={post} 
            showPopularTags={showPopularTags} 
            showAuthorQuestions={() => showAuthorQuestions}/>
        </div> 
        )
      )}
    </div>
  )
};

export default Result;