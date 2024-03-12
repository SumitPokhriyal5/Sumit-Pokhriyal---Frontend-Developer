import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig } from './config/wagmi.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <WagmiProvider config={wagmiConfig}>
    <App />
  </WagmiProvider>
)
