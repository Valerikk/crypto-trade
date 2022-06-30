import { PageWrapper } from "../components/global.styles";
import LoginForm from "../components/LoginForm";

const Register = () => {
  return (
    <PageWrapper>
      <LoginForm isRegister={true} />
    </PageWrapper>
  );
};

export default Register;
