import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../lib/store";
import { authActions, authenticateUser } from "../lib/store/auth-slice";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { token, user, isAuthenticated, isLoading, error } = useAppSelector(
    (state) => state.auth
  );

  // Auto-authenticate on app start
  useEffect(() => {
    // First check if we have a token
    dispatch(authActions.initializeAuth());

    // If not authenticated, automatically login
    if (!isAuthenticated && !isLoading) {
      dispatch(authenticateUser());
    }
  }, [dispatch]); // Only depend on dispatch to run once

  // Auto-refresh token logic
  useEffect(() => {
    if (isAuthenticated && token) {
      // Check token expiration every hour
      const interval = setInterval(() => {
        // Check if token exists
        if (!localStorage.getItem("auth_token")) {
          dispatch(authActions.logout());
        }
      }, 60 * 60 * 1000); // Check every hour

      return () => clearInterval(interval);
    }
  }, [isAuthenticated, token, dispatch]);

  return {
    // State
    token,
    user,
    isAuthenticated,
    isLoading,
    error,
  };
};

export default useAuth;
