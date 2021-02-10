import lodash from 'lodash';
import './style.css';
import Icon from './icon.jpg';

function component() {
    const element = document.createElement('div');
    const myIcon = new Image();

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    myIcon.src = Icon;
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());