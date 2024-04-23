import contentful from "contentful";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);

  if (!query.contentType) {
    throw createError({
      statusCode: 400,
      statusMessage: "No content type passed",
    });
  }

  const client = contentful.createClient({
    space: config.contentful.spaceId,
    accessToken: config.contentful.cdaToken,
    environment: config.contentful.env,
  });

  const collection = await client.getEntries({
    content_type: query.contentType,
  });

  return collection;
});
