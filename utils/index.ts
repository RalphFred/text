// const encodedParams = new URLSearchParams();
// encodedParams.set('source_language', 'en');
// encodedParams.set('target_language', 'id');
// encodedParams.set('text', 'What is your name?');

// const url = 'https://text-translator2.p.rapidapi.com/translate';
// const options = {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'X-RapidAPI-Key': '3088144f5cmsh2ecbf9657015e88p145729jsnaa0931a6397e',
//     'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
//   },
//   body: encodedParams
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


export async function fetchTranslation() {

  const encodedParams = new URLSearchParams();

  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': '3088144f5cmsh2ecbf9657015e88p145729jsnaa0931a6397e',
    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
  }

  const response = await fetch('https://text-translator2.p.rapidapi.com/translate', {
    headers: headers,
  })

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  const result = await response.json();

  return result;
}