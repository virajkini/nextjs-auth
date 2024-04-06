"use client";
import Loader from "./components/Loader/Loader";
import { UserAuth } from "./context/AuthContext";
import dynamic from "next/dynamic";

const Login = dynamic(() => import("./components/Login/Login"), { ssr: false });

import "./page.css";

export default function Home() {
  const { user, loading }: any = UserAuth();

  const renderContent = () => {
    return user ? (
      <>
        {user?.displayName && (
          <h2 className="textCenter">{`Welcome ${user?.displayName}!`}</h2>
        )}
        {user?.email && <p className="textCenter">{`Email: ${user?.email}`}</p>}
      </>
    ) : (
      <>
        <h1 className="textCenter">Login</h1>
        <Login />
      </>
    );
  };

  return (
    <main className="main">
      <div>{loading ? <Loader /> : renderContent()}</div>
    </main>
  );
}
