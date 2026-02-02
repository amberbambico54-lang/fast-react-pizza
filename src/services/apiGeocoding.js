export async function getAddress({ latitude, longitude }) {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
  );
  if (!res.ok) throw new Error("Failed getting address");

  const data = await res.json();
  return data;
}
