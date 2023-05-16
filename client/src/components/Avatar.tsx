import avatar from "../assets/icons/avatar.svg";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { login, logout } from "../store/authSlice";

const provider = new GoogleAuthProvider();

function Avatar() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleAuth = () => {
    if (user) {
      dispatch(logout());
      toast.success(`Logged out succussfully`);
    } else {
      signInWithPopup(auth, provider)
        .then((result) => {
          const { displayName, email, photoURL, uid } = result.user;
          dispatch(login({ displayName, email, photoURL, uid }));
          toast.success(`Logged in as ${displayName}`);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Somethng went wrong!");
        });
    }
  };

  return (
    <div onClick={handleAuth}>
      <img
        src={user ? user.photoURL : avatar}
        alt=""
        className="max-w-fit h-8 w-8 rounded-full cursor-pointer"
        title={user ? "Logout" : "Login"}
      />
    </div>
  );
}

export default Avatar;
