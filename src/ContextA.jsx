import { useState, createContext } from "react";
import ContextB from "./ContextB";

export const UserContext = createContext();

export default function ContextA() {
  const [user, setUser] = useState("Aimable");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`} </h2>
      <UserContext.Provider value={user}>
        <ContextB user={user} />
      </UserContext.Provider>
    </div>
  );
}
