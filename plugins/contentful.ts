export default defineNuxtPlugin(() => {
  const getEntries = <T = unknown>(entries: object) => {
    const params = new URLSearchParams({ entries: JSON.stringify(entries) });
    if (isPreview.value) {
      params.append("preview", "true");
    }
    return $fetch<EntryCollection<T>>(
      `/api/contentfulEntries?${params.toString()}`,
      {
        parseResponse: parse,
      }
    );
  };
});
