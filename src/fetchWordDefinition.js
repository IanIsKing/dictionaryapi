// Fetch the definition of a word from the Merriam-Webster Dictionary API

export async function fetchWordDefinition(word, apiKey) {
  const response = await fetch(
    `https://www.dictionaryapi.com/api/v3/references/sd4/json/${word}?key=${apiKey}`
  );
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
