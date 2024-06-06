class AuthService {
    constructor() {
      const user = JSON.parse(localStorage.getItem('user'));
      this.isLoggedIn =!!user;
      this.user = user;
    }
  
    login(username, password) {
      // Simulated login logic - replace with actual authentication logic
      // For demonstration, we'll just set isLoggedIn to true and store the username
      this.isLoggedIn = true;
      localStorage.setItem('user', JSON.stringify({ username }));
      return Promise.resolve(true); // Indicate successful login
    }
    
    logout() {
      // Clear the user from local storage
      localStorage.removeItem('user');
      this.isLoggedIn = false;
      this.user = null;
    }
  
    isAuthenticated() {
      // Check if there's a user in local storage
      return this.isLoggedIn;
    }
  
    getUser() {
      return this.user;
    }
  }
  
  export default new AuthService();
  