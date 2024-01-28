export const GetClient = async api => {
  try {
    const response = await fetch(api);
    return response.json();
  } catch (error) {
    console.error('Error fetching trade data:', error);
    throw error;
  }
};
