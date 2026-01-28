export const fetchServices = async () => {
  // 🔁 Replace this URL with your real backend endpoint
  const response = await fetch("/api/Components");

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
};
