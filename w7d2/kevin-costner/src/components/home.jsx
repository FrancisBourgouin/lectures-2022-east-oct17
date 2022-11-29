export default function Home(props) {
  return (
    <div>
      {url === "/home" && <Home />}
      {url === "/dashboard" && <Dashboard />}
      {url === "" && <Login />}
      {url === "" && <Register />}
    </div>
  );
}
