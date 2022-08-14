const { useReducer, useCallback } = require("react");

const initialState = {
  loading: false,
  data: [],
  error: false,
  sendRequest: null,
};

const httpReducer = (prevState, action) => {
  switch (action.type) {
    case "SEND":
      return {
        loading: true,
        error: false,
        data: [],
      };
    case "RESPONSE":
      return {
        ...prevState,
        loading: false,
        error: false,
        data: action.responseData,
      };
    case "CLEAR":
      return initialState;
    case "ERROR":
      return { ...prevState, loading: false, error: action.errorMessage };
    default:
      throw new Error("How did you get here?");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const clear = useCallback(() => {
    dispatchHttp({ type: "CLEAR" });
  }, [dispatchHttp]);
  const sendRequest = useCallback((url, body) => {
    dispatchHttp({ type: "SEND" });
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        if (responseData.error) {
          dispatchHttp({ type: "ERROR", errorMessage: responseData.message });
        } else {
          dispatchHttp({
            type: "RESPONSE",
            responseData: responseData.users,
          });
        }
      })
      .catch((e) => {
        dispatchHttp({
          type: "ERROR",
          errorMessage: e.message,
        });
      });
  }, []);
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest,
    clear,
  };
};

export default useHttp;
