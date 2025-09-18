import PageHeader from "./components/pageheader/pageHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css';
import PageContent from "./components/pageContent/pageContent";
import MovieSlider  from "./components/movieSlider/movieSlider";
import MoreReasons from "./components/moreReasons/moreReasons";
function App() {

  return (
    <div className="pageApp">
      <div className="container">
        <PageHeader />
        <PageContent />       
        <MovieSlider />
        <MoreReasons />
      </div>
    </div>
  )
}

export default App
