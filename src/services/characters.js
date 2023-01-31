const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function apiFetching() {
  try {
    const response = await fetch(`${BASE_URL}`);
    const responsed = await response.json();
    return responsed;
  } catch (error) {
    return alert(error);
  }
}
