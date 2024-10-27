export const token = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('token');
  }
  return null;
};

export const student = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('student'));
  }
  return null;
};