import { createRoot } from 'react-dom/client';
import { Layout } from './Layout';

const App = () => {
  return <Layout />;
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('no container to render to');
}

const root = createRoot(container);
root.render(<App />);
