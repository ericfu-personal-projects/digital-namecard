import LineItem from './components/LineItem';
import Header from './components/Header';
import './my.css';

function App() {
  return (
    <div>
      <Header />
      <LineItem name="Mobile" content="8252885204" icon="local_phone" isPhone />
      <LineItem name="Email" content="zyfu90@gmail.com" icon="email" isEmail />
      <LineItem name="Bow Valley College" content="Cloud Computing" icon="school" />
      <LineItem
        name="Macquarie University"
        content="Master of Internetworking and Cybersecurity"
        icon="school"
      />
    </div>
  );
}

export default App;
