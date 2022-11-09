import logo from './logo.svg';
import './App.css';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { WalletConnectProvider } from './components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Home from './pages/Home';
import './styles/global.css'

function App() {
  return (
    <div >
      <WalletConnectProvider>
      <Home/>
      </WalletConnectProvider>
     
    </div>
  );
}  

export default App;
