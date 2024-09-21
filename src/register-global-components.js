import { register } from "riot";

const basename = (path, extension = "") =>
  path.split("/").reverse()[0].replace(extension, "");
const componentsContext = import.meta.glob("./components/**/*.riot", {
  eager: true,
});

export default () => {
  Object.entries(componentsContext).map(([path, component]) => {
    const name = basename(path, ".riot");

    register(name, component.default || component);

    return {
      name,
      component,
    };
  });
};
