import React from 'react';
import './App.css';
import Hero from './components/Hero'
import Banner from './components/Banner'
import Layout from './components/Layout'
// import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Layout>
<Hero>
<Banner title="Hi, I'm Ashley" info="FRONT END DEVELOPER/ WEB DEVELOPER">
</Banner>
</Hero>
{/* <Contact/> */}
</Layout>
    </div>

  );
}

export default App;
