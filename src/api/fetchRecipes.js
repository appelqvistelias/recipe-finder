const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;
const USER_ID = import.meta.env.VITE_USER_ID;

export async function fetchRecipes(query) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(
    query
  )}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Edamam-Account-User": USER_ID.trim(),
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error response:", errorText);
      throw new Error(`API Error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    return data.hits?.map((hit) => hit.recipe) || [];
  } catch (error) {
    console.error("Fetch Error:", error);
    return [];
  }
}
