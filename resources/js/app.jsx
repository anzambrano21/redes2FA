import './bootstrap';
import '../css/app.css'

import ReactDOM from 'react-dom/client';
import Home from './Page/Home';
import ExamplecontexProvier, { Exaplecontect } from "./context/contexto"
ReactDOM.createRoot(document.getElementById('app')).render(
    <ExamplecontexProvier>
        <Home />
    </ExamplecontexProvier>

);