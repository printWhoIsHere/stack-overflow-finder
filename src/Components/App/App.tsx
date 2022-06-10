import Style from './App.module.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Start from '../Start/Start';
import Result from '../Result/Result';
import PostInfo from '../PostInfo/PostInfo';

const App = () => {
  const [labelValue, setLabelValue] = useState('');
  const [questionId, setQuestionId] = useState(null);

  const labelChange = (e: any) => {
    setLabelValue(e.target.value);
  }

  return (
    <div className={Style.AppWrapper}>
      <div className={Style.Header_wrapper}>
        <Link to='/' className={Style.logo}>StackOverflow - Finder</Link>
        <div>
          <input className={Style.search_field} type='text' placeholder='Введите для поиска' onChange={labelChange} value={labelValue}/>
          <Link to={`/results`}>
            <button className={Style.search_button}>
              Поиск
            </button> 
          </Link>
        </div>
      </div>
      
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/results' element={<Result setQuestionId={setQuestionId} searchValue={labelValue} />} />
        <Route path='/post-info' element={<PostInfo questionId={questionId}/>} />
      </Routes>

    </div>
  )
}

export default App;

// Общий компонент
