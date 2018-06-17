export const fakeSignIn = (login, password) => {
  return new Promise((resolve, reject) => {
    if (login === 'apple' && password === '123') {
      localStorage.setItem('signedIn', 1);
      resolve();
    } else {
      reject('Wrong login or password');
    }
  });
};

export const fakeSignOut = () => {
  localStorage.removeItem('signedIn');
};

export const hasToken = () => {
  return !!localStorage.getItem('signedIn');
};
