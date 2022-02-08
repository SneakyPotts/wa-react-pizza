const API_URL = process.env.REACT_APP_API_URL

class DataService {
  static async fetchData() {
    const response = await fetch(`${API_URL}/data`);
    const data = await response.json();

    return data;
  }
}

export default DataService