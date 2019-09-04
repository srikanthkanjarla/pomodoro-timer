// JSONP to get quote from API
const randomNum = Math.round(10000 * Math.random());
const END_POINT = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=';
export const callbackMethodName = `cb_${randomNum}`;

// JSONP function to get data from API
export default function getJsonp() {
  const script = document.createElement('script');
  script.id = `script_${callbackMethodName}`;
  script.src = END_POINT + callbackMethodName;
  document.body.appendChild(script);
  document.getElementById(script.id).remove();
}
