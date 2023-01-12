
const requestPopular = async (type) => {
  const key = process.env.SECRET_KEY
  const url = `https://api.themoviedb.org/3/${type}/popular?api_key=${key}&language=pt-BR&page=1`
  try { 
    const response = await fetch(url);
    console.log(response)
    const popular = await response.json();
    return popular;
  } catch (error) {
    console.log('Problema encontrado no fetch de Popular items', error.message);
  }
};

export default requestPopular;