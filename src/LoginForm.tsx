import AuthDivider from "./components/AuthDivider";
import EmailForm from "./components/EmailForm";
import LoginFormHeader from "./components/LoginFormHeader";
import LoginFormText from "./components/LoginFormText";
import SocialButtons from "./components/SocialButtons";

const LoginForm = () => {
  return (
    <div className="bg-white flex flex-col rounded-[30px] border border-gray-200 drop-shadow-sm shadow-sm w-[450px] mx-6 h-fit ">
      <LoginFormHeader />
      <div className="flex flex-col gap-6 w-full p-10 ">
        <LoginFormText />
        <EmailForm />
        <AuthDivider />
        <SocialButtons />
      </div>
    </div>
  );
};

export default LoginForm;
