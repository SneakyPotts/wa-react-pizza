const API_URL = process.env.REACT_APP_API_URL

class DataService {
  static async fetchFilters() {
    const response = await fetch(`${API_URL}/filters`);
    const data = await response.json();

    return data;
  }
  static async fetchData({
      tags,
      price,
      title
    }) {
    const response = await fetch(`${API_URL}/data?tags_like=${tags}
      ${price && `&_sort=price&_order=${price}`}
      ${title && `&_sort=title&_order=${title}`}
    `);
    const data = await response.json();

    return data;
  }
  // static async filterData(filter) {
  //   const response = await fetch(`${API_URL}/data?tags_like=${filter}`)
  //   const data = await response.json();

  //   return data;
  // }
}

export default DataService