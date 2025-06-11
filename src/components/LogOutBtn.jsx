function LogOutBtn() {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      };

  return (
    <button
      className="logout-btn"
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
}
export default LogOutBtn;