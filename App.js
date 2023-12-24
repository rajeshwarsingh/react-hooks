import React from 'react';
import ReactDOM from "react-dom/client";
import Callback from './hooks/callback'

const App = ()=>(<div id='container'>
<Callback/>
</div>);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);