import { print } from "./print";
import styleToCss from "style-object-to-css-string";

export const header = (settings, title = "RRBE Print", isPrint = true) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <title>${title}</title>
    </head>
    <body style='${styleToCss(settings)}'>
    ${isPrint ? print(title) : ""}
  `;
