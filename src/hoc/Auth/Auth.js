import axios from 'axios';

// timer to clear authentication after x minutes
export const AuthSetTimeout = (expirationTime) => {
  setTimeout(() => {
    // logoutHandler();
    AuthClearLocalState();
  }, expirationTime * 60000);
};

// DEMO authenticate and store response token, id, userType, and expiration
export const DemoAuthenticate = (userId, password) => {
  const authData = {
    userId: userId,
    password: password
  };
  let url = 'https://localhost:3001';
  if (process.env.HOST_URL) {
    url = process.env.HOST_URL
  }
  console.log('Demo localstorage setup')
  // get expiration time
  const expirationDate = new Date(new Date().getTime() + 10 * 1000)
  // set localstorage
  localStorage.setItem('token', 'demo bearer token');
  localStorage.setItem('expirationDate', expirationDate);
  localStorage.setItem('userId', userId);
  localStorage.setItem('userType', '1');
  // set timer for user logout
  AuthSetTimeout(10);
}

// authenticate and store response token, id, userType, and expiration
export const Authenticate = (userId, password) => {
  const authData = {
    userId: userId,
    password: password
  };
  let url = 'https://localhost:3001';
  if (process.env.HOST_URL) {
    url = process.env.HOST_URL
  }
  axios.post(url, authData)
    .then(response => {
      // get expiration time
      const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)
      // set localstorage
      localStorage.setItem('token', response.data.idToken);
      localStorage.setItem('expirationDate', expirationDate);
      localStorage.setItem('userId', response.data.localId);
      localStorage.setItem('userType', response.data.userType);
      // set timer for user logout
      AuthSetTimeout(response.data.expiresIn);
    })
    .catch(error => {
      console.log(error.response.data.error);
    })
}

// clear local state
export const AuthClearLocalState = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  localStorage.removeItem('userType');
}

// check authentication state and updated token and front end timeout timer
export const AuthCheckState = () => {
  const token = localStorage.getItem('token')
  // if no
  if (!token) {
    // logoutHandler();
    AuthClearLocalState();
  } else {
    const expirationDate = new Date(localStorage.getItem('expirationDate'));
    if (expirationDate <= new Date()) {
      // logoutHandler();
      AuthClearLocalState();
    } else {
      // const userId = localStorage.getItem('userId')
      // get new token and update backend authentication timeout
      // authUpdateToken(userId, token)
      // reset frontend expiration timer to logout user
      AuthSetTimeout((expirationDate.getTime() - new Date().getTime()) / 60000 );
    }
  }
};
