import { authenticate } from "../utils/client";

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-96">
        <h1>Sign in</h1>
        <button
          className="btn gap-2"
          onClick={() => {
            authenticate("discord");
          }}
        >
          Discord
        </button>
      </div>
    </div>
  );
}
