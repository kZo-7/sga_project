//Σειρά των import: πρώτα τα πιο βαριά (react κτλ και έπειτα components και .css
import { useEffect } from "react";
import { ArticleMenu, Navbar, ScrollToTop } from "./components";
import { Header, Body, Footer } from "./containers";
import "./App.css"

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