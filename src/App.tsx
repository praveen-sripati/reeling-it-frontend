import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';

const App = () => {
  // return <Layout />;
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

const container = document.getElementById('root');

if (!container) {
  throw new Error('no container to render to');
}

const root = createRoot(container);
root.render(<App />);
