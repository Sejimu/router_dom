import React from "react";
import { useLocation } from "react-router-dom";

function AboutUsPage() {
  const location = useLocation();
  console.log(location);

  return <div>AboutUsPage</div>;
}

export default AboutUsPage;
