import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import AmenitiesContainer from './containers/AmenitiesContainer.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('amenities-root'));

// Add this if working in php storm
// ReactDOM.render(
//     <AmenitiesContainer />,
//     document.getElementById('amenities-root')
// );
registerServiceWorker();