import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import RecommenderPage from './page';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
{/* <Route exact path="/" render={() => <RecommenderPage />} key={'/'} /> */}
root.render(
    <Router forceRefresh={true}>
        <Routes>
          <Route path="/" element={<RecommenderPage/>}/>
        </Routes>
    </Router>,
);
