import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import BookItemModal from './components/BookItemModal';


import { Provider } from 'react-redux';
import store from './store';
import { Fragment } from 'react';
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <div className="container">
          <SearchBar />
          <BookList />
        </div>
        <BookItemModal />
      </Fragment>
    </Provider>

  );
}

export default App;
