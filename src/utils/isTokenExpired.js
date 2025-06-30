export default function isTokenExpired(token){
  if(!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.exp*1000<Date.now(); // Token expired if exp < now
  } catch (error) {
    return true; // Invalid token
    
  }
}