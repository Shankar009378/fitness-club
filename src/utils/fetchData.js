export const exerciseOptions  = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b94ce5d010msh79e9ee5948e3579p183b65jsn8937ebd67bfd',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
};