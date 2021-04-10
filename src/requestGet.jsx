import axios from 'axios';

const requestGet = async (url) => {
  const headers = {
    'Content-Type': 'application/json',
    crossDomain: true
  }

  return await axios.get(url, headers)
}

export default requestGet