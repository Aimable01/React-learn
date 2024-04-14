import { useContext } from "react";
import { UserContext } from "./ContextA";

export default function ContextD() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component D</h1>
      <h2>{`Bye ${user}`} </h2>
    </div>
  );
}
