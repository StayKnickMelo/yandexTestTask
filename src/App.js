import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';


import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <BookList />

      </div>
    </Provider>

  );
}

export default App;
