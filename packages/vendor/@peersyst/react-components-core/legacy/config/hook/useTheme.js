import useThemes from "./useThemes";
export default function (theme) {
  var themes = useThemes();
  return themes[theme] || themes["default"];
}