export default function (timestamp, showTime = false) {
  const date = new Date(+timestamp);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = (date.getDate() + 1).toString().padStart(2, "0");
  let result = `${date.getFullYear()}-${month}-${day}`;
  if (showTime) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    result += ` ${hour}:${minutes}:${seconds}`;
  }
  return result;
}
