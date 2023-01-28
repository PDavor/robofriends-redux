export const apiCall = async <T>(link: string): Promise<T> => {
  const res = await fetch(link);
  return res.json()
}
