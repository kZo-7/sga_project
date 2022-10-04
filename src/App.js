import "./App.css"//Ποια ειναι η σειρα των import???
import { useEffect } from "react";
// import toast, { Toaster } from "react-hot-toast";
import { ArticleMenu, Navbar, ScrollToTop } from "./components";
import { Header, Body, Footer } from "./containers";

export default function App() {
  //const App = () => { 
    
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'})
    }, []);

  return (
    <div className="App">
      <ScrollToTop />    
      {/* <Toaster />   */}
      <Navbar />
      <Header />
      <ArticleMenu />
      <Body />
      <Footer />
    </div>
  )
}
//export default App; //export me to onoma tou