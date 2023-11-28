import { useContext } from "react";
import { AppContext } from "./Context";
import Email from "./Email";
import Subscribed from "./Subscribed";
function App() {
  const { isEmailGiven } = useContext(AppContext);
  return <main>{isEmailGiven ? <Subscribed /> : <Email />}</main>;
}

export default App;
