import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';


function App() {
  return (
    <div className="App">
<ContactList/>

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
      avatar="https://cdn.dribbble.com/users/81809/screenshots/3347540/gokussj.jpg?compress=1&resize=400x300"
      online="online"
      />
    </div>
  );
}

export default App;
