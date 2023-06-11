export default function getImage(src: string) {
  return process.env.REACT_APP_BASE_IMAGE + src;
}
