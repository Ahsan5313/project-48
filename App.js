import React from 'react'
import './App.css';
import About from './Components/About.jsx'

//importing from  here
import Header from './Components/Header.jsx'
import Shop from './Components/Shop';
import Menu from './Components/Menu';
import News from './Components/News';
import Contact from './Components/Contact';
import PizzaMenu from './Components/PizzaMenu';
import PizzaPrice from './Components/PizzaPrice';
import Footer from './Components/Footer';



import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


export default function App() {
  return (


           
    <Router>


    <div className ='App'>


       
      <Header />
      <About/>
      <Shop/>
      <Menu/>
      <News/>
      <Contact />
      <PizzaMenu/>
      <PizzaPrice/>
      <Footer/> 

    

            <Switch>

      <Route path="/about">
        <Link to='/about'/>
        <About />
      </Route>

      <Route path="/shop">
      <Link to='/shop'/>
        <Shop />
      </Route>

      <Route path="/menu">
      <Link to='/menu'/>
        <Menu />
      </Route>

      <Route path="/news">
      <Link to='/news'/>
        <News />
      </Route>
      <Route path="/contact">
      <Link to='/contact'/>
        <Contact />
      </Route>

      </Switch>
   

        
    </div>


    </Router>
  )
}
