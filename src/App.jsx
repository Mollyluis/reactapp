
import "./App.css";
import TheHeader from "./components/TheHeader.jsx";
import TheFooter from "./components/TheFooter.jsx"; 
import MainBanner from "./components/MainBanner.jsx";
import RecipeGenerator from "./components/RecipeGenerator.jsx";
import QuotesApp from "./components/QuotesApp.jsx";
import ToDo from  "./components/ToDo.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import MoodSelector from "./components/MoodSelector.jsx";
import Stopwatch from "./components/StopWatch.jsx";


function App() {
  return (
    <>
      <TheHeader />
      <MainBanner />
      <div className="appContainer mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="bg-light p-4 border">
              <ImageSlider />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-light p-4 border">
              <QuotesApp />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="bg-light p-4 border">
            <ToDo/>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="bg-light p-4 border">
            <Stopwatch />
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="bg-light p-4 border">
           <MoodSelector /> 
            </div>
          </div>
          <div className="col-md-12 mb-4">
            <div className="bg-light p-4 border">
              <RecipeGenerator/>
            </div>
          </div>
        </div>
      </div>
      <TheFooter />
    </>
  );
}

export default App;
