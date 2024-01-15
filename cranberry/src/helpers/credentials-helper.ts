// Helper functions for getting, setting, and removing
// user credentials (JWT and User Id) with local browser storage

export const getCredentials = (): { token: string | null, userId: string | null } => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('user');
  
  return { token, userId }
}

export const removeCredentials = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}

export const setCredentials = (token: string, userId: string): void => {
  localStorage.setItem('token', token);
  localStorage.setItem('user', userId);
}