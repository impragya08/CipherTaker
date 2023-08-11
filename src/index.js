import { createRoot } from 'react-dom/client'; // Correct API endpoint
import App from './App'; // Importing the app component

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
