import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";

import {headerScroll} from "./components/header/header";

headerScroll();
