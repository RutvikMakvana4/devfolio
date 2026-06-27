export async function getDevToArticles(username) {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${username}&per_page=100`,
      {
        next: { revalidate: 3600 },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch articles");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching Dev.to articles:", error);
    return [];
  }
}
