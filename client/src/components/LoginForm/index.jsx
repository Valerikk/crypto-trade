import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import {
  Form,
  Input,
  Label,
  Link,
  SubmitButton,
  Text,
  Title,
  Wrapper,
} from "./index.styles";

const LoginForm = ({ isRegister = false }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      if (isRegister) {
        axios.post("/signup", values).then((res) => {
          navigate("/login");
        });
        return;
      }
      axios.post("/login", values).then((res) => {
        if (res.data) {
          console.log(res.data);
          localStorage.setItem("userId", res.data.User.userId);
          navigate("/");
        }
      });
    },
  });
  return (
    <Wrapper>
      <Title>{isRegister ? "Create an account" : "Crypto"}</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label htmlFor="firstName">Nickname</Label>
        <Input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {!isRegister && <Link href="/register">Do not have an account?</Link>}
        <SubmitButton type="submit">
          {isRegister ? "Sign Up" : "Login"}
        </SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default LoginForm;
