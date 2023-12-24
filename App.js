import React from 'react';
import ReactDOM from "react-dom/client";
import Callback from './hooks/callback';
import Memo from './hooks/memo';
import Ref from './hooks/ref2';

const App = ()=>(<div id='container'>
<Ref/>
</div>);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);