import React from 'react';
import ReactDOM from "react-dom/client";
import Callback from './hooks/callback';
import Memo from './hooks/memo';

const App = ()=>(<div id='container'>
<Memo/>
</div>);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);