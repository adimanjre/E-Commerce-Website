import React from "react";
import Input from "../UI/Input";
import Container from "../Layout/Container";
import { Link } from "react-router";
import Button from "../UI/Button";

const Login = () => {
  return (
    <Container>
      <div className="p-10 rounded-2xl shadow-xl mx-auto my-20 max-w-[500px] ">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-medium mb-2">Login</h2>
          <p className="text-gray-500">
            Pleae login using account details below
          </p>
        </div>
        <form>
          <div className="space-y-5">
            <Input
              type={"text"}
              placeholder={"Email Address"}
              classes={"w-full"}
            />
            <Input
              type={"Password"}
              placeholder={"Password"}
              classes={"w-full"}
            />
            <Link className="text-purple-500" to="/">
              Forgot Password?
            </Link>
            <div className="mt-5">
              <Button text={"Sign In"} classes={"w-full"} />
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
