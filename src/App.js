import "./App.css"
import { useEffect } from "react";
import { ArticleMenu, Navbar } from "./components";
import { Header, Body, Footer } from "./containers";

export default function App() {
  //const App = () => { 
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

  return (
    <div className="App">
      <Navbar />
      <Header />
      <ArticleMenu />
      <Body />
      <Footer />
    </div>
  )
}
//export default App; //export me to onoma tou -- TEST