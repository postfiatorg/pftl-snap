export default function nullifyEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}