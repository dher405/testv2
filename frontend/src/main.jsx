import React from 'react'
import ReactDOM from 'react-dom/client'
import DogPictureRotator from './components/DogPictureRotator.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null,
    React.createElement(DogPictureRotator))
)
