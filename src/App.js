import LineItem from './components/LineItem';
import Header from './components/Header';
import './my.css';

function App() {
  return (
    <div>
      <Header />
      <LineItem name="Edmonton, AB" content="DevOps Engineer at Bazaarvoice" icon="work" />
      <LineItem name="Email" content="zhongyi.fu@bazaarvoice.com" icon="email" isEmail />
      <LineItem name="Mobile" content="8252885204" icon="local_phone" isPhone />
      <LineItem
        name="Macquarie University"
        content="Master of Internetworking and Cybersecurity"
        icon="school"
      />
      <LineItem name="Bow Valley College" content="Cloud Computing" icon="school" />
    </div>
  );
}

export default App;
