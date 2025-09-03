const heading = React.createElement(
  "div",
  { className: "heading" }, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hi I'm an h1 tag"),
    React.createElement("h2", {}, "Hi I'm an h2 tag"),
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "Hi I'm an h1 tag"),
    React.createElement("h2", {}, "Hi I'm an h2 tag"),
  ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
