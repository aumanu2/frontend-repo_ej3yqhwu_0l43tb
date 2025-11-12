const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

export async function fetchJSON(path, opts = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

export const api = {
  listProducts: (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return fetchJSON(`/products${query ? `?${query}` : ''}`);
  },
  getProduct: (id) => fetchJSON(`/products/${id}`),
  featured: () => fetchJSON(`/featured`),
  newArrivals: () => fetchJSON(`/new-arrivals`),
  newsletter: (email) => fetchJSON(`/newsletter`, { method: 'POST', body: JSON.stringify({ email }) }),
  contact: (payload) => fetchJSON(`/contact`, { method: 'POST', body: JSON.stringify(payload) }),
  checkout: (payload) => fetchJSON(`/checkout`, { method: 'POST', body: JSON.stringify(payload) }),
};

export default api;
