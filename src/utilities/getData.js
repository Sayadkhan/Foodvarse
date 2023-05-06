// export const getData = async (searchQuery) => {
//   try {
//     setLoading(true);
//     const res = await fetch(
//       `https://forkify-api.herokuapp.com/api/search?q=${searchQuery}`
//     );

//     if (!res.ok) throw new Error("No recipe found");

//     const data = await res.json();
//     console.log(data);
//     setRecipes(data.recipes);
//   } catch (err) {
//     setError(err.message);
//   }
// };