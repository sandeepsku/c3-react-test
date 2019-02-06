const fakeData ={ data: [{
    id: 4,
    first_name: "Eve",
    last_name: "Holt",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  }],
  page: 1,
  per_page: 1,
  total: 12,
  total_pages: 2
  }
  export default  async () => {
    const response = await new Promise((resolve) => {
      resolve(fakeData)
    })
    return response;
  }
  