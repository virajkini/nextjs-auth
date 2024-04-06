import { getAuth, signOut } from "firebase/auth";

const TOKEN_REFRESH_TIME = 5 * 60 * 1000; // 5 minutes
const IDLE_TIMER = 30 * 60 * 1000; // half hour
const SESSION_EXPIRY = 60 * 60 * 1000; // 1 hour

class AuthManager {
  private auth;
  private idleTimer: any;
  private sessionTimer: any;
  private tokenRefreshInterval: any;

  constructor() {
    this.auth = getAuth();
    this.idleTimer = null;
    this.sessionTimer = null;
    this.tokenRefreshInterval = null;
  }

  init() {
    this.setupTokenRefresh();
    this.setupIdleTimeout();
    this.setupSessionExpiry();
  }

  setupTokenRefresh() {
    // Refresh token every 5 minutes
    this.tokenRefreshInterval = setInterval(async () => {
      const user = this.auth.currentUser;
      if (user) {
        await user.getIdToken(true);
      }
    }, TOKEN_REFRESH_TIME);
  }

  handleUserActivity = () => {
    this.resetIdleTimer();
  };

  setupIdleTimeout() {
    document.addEventListener("mousemove", this.handleUserActivity);
    document.addEventListener("keypress", this.handleUserActivity);
  }

  resetIdleTimer() {
    // Log out user after 30 minutes of inactivity
    clearTimeout(this.idleTimer);
    this.idleTimer = setTimeout(() => {
      this.logout();
      alert("You are logged out! Please re-login to continue");
    }, IDLE_TIMER);
  }

  setupSessionExpiry() {
    this.startSessionTimer();
  }

  startSessionTimer() {
    // Prompt user to re-authenticate after 1 hour of continuous usage
    this.sessionTimer = setTimeout(() => {
      this.logout();
      alert("You are logged out! Please re-login to continue");
    }, SESSION_EXPIRY);
  }

  resetSessionTimer() {
    clearTimeout(this.sessionTimer);
    this.startSessionTimer();
  }

  logout() {
    // Clear timers
    clearTimeout(this.idleTimer);
    clearTimeout(this.sessionTimer);
    clearInterval(this.tokenRefreshInterval);
    document.removeEventListener("mousemove", this.handleUserActivity);
    document.removeEventListener("keypress", this.handleUserActivity);

    //signout
    signOut(this.auth);
  }
}

export default new AuthManager();
