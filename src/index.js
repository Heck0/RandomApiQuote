import lodash from 'lodash';
import axios from 'axios';
import style from './style.css'

window.onload = async (event) => {
  try {
    console.log(event);
    const element = document.createElement('div');
    const quote = await axios.get('https://random-data-api.com/api/coffee/random_coffee');

    element.innerHTML = quote.data.blend_name;
    element.classList.add('coffee');

    document.body.appendChild(element);
  } catch(e) {
    console.error(e)
  }
};