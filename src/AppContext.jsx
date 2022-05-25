import { createContext } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const siteTitle = "CBC Bank";
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     setBooks((await axios.get(bookUrl)).data);
  //   })();
  // }, []);

  return (
    <AppContext.Provider
      value={{
        siteTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
