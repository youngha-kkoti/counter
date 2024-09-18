import { useEffect } from "react";

function Even() {
  useEffect(() => {
    return () => {
      console.log("Even component unmount");
    };
  }, []);

  return <div>Current count is even</div>;
}

export default Even;
