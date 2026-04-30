const API = {
  get: async (url) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`http://localhost:5000${url}`, {
      method: "GET",
      headers,
    });
    if (!response.ok) {
      throw new Error(`Request failed ${response.status}`);
    }
    const data = await response.json();
    return { data };
  },
  post: async (url, body) => {
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const response = await fetch(`http://localhost:5000${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return { data };
  },
};

export default API;