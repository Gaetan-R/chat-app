import React from 'react';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Contact
      name="Dean Sims"
      avatar="https://randomuser.me/api/portraits/men/88.jpg"
      online="online"
      />

      <Contact
      name="Peter Parker"
      avatar="https://pickaface.net/gallery/avatar/unr_peterparker_161110_0847_9mp2l9.png"
      online=""
      />

      <Contact
      name="Son Goku"
      avatar="https://lh3.googleusercontent.com/proxy/o2rVLi3Qydg5mlFQJtI1ZRbT7nNAXIXMWkQYqIjWaUsQ68OZXxwnKF90P-qRuqGvQepUJTtI-P92AW7Kk48hSSGKct2nviwhJgAppJ14Zf65L02VegLdM9-iu3-nSOfFOVorMuQ63lIEfCT2AbI41o_I7Hj1IH3x"
      online="online"
      />
    </div>
  );
}

export default App;
