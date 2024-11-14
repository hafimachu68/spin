import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="cover-container d-flex text-center text-bg-dark">
      <header className="mb-auto">
        
      </header>

      <main className="px-3 " style={{marginTop:'10rem'}}>
        <p className="lead">
          <a href="/spin" className="btn btn-lg btn-light fw-bold border-white bg-white">START</a>
        </p>
      </main>

      <footer className="mt-auto text-white-50">
      </footer>
    </div>
  );
}

export default Home;
