import axios from "axios";
//import { useNavigate } from "react-router";

function Register() {
  //const navigate = useNavigate();

  return (
    <>
      <form
        name="register"
        onSubmit={async (e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const username = formData.get("username");
          const password = formData.get("password");
          const email = formData.get("email");

          try {
            const res = await axios.post("http://localhost:3000/register", {
              username,
              password,
              email
            });

            localStorage.setItem("token", res.data);

            //navigate("/");
          } catch {
            console.error("something went worng...");
          }
        }}
      >
        <div className="inputdiv">
          <label htmlFor=""></label>
          <input type="text" name="username" placeholder="username" required />
        </div>
        <div className="inputdiv">
          <label htmlFor=""></label>
          <input type="text" name="password" placeholder="password" required />
        </div>
        <div className="inputdiv">
          <label htmlFor=""></label>
          <input type="email" name="email" placeholder="email" required />
        </div>
      </form>
    </>
  );
}

export default Register;
