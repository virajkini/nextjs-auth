import { redirect } from 'next/navigation'
import { UserAuth } from "../../context/AuthContext";


const withAuth = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const { user, loading }: any = UserAuth();

    if (!loading && !user) {
        redirect("/");
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
