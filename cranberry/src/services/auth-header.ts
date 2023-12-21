// ! NOT IMPLEMENTED 
// ! Alternative to Api Interceptor (./api.tsx)

// In the case we need to access protected endpoints,
// the HTTP request will need an Authorization header.

// We'll check client storage for both the userId and token items.
// If there is a logged in user with a token, 
// return the appropriate HTTP Authorization header.
// Otherwise, return an empty object.
export default function authHeader() {
  const userId = localStorage.getItem("user");
  const token = localStorage.getItem("token");

  if (userId && token) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}