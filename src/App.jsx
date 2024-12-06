import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/CartContext";
import UserCOntextProvider from "./store/UserProgressContext";

function App() {
  return (
    <>
    <UserCOntextProvider>
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
    </UserCOntextProvider>
    </>
  );
}

export default App;
