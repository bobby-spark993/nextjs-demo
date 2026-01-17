function Login() {
  return (
    <div className="h-[62dvh]">
      <div>
        <h1>Login</h1>
        <div>
          <form className="flex-col justify-center items-center items-center">
            <div>
              <label>Email:</label>
              <input type="text" name="email" placeholder="enter email" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="password" placeholder="enter" />
            </div>

            <input type="submit" name="Save" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
