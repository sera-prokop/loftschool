import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

import "./components/header/header";
import "./components/hero/hero";
import "./components/skills/skills";
import "./components/reviews/reviews";
import "./components/works/works";
import "./components/contact/contact";


