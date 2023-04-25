const contentful = require("contentful");
import { isArray, isObject, isString, uniqueId } from "lodash";

export const getIdAndFields = ({
  sys: {
    id = null,
    contentType: { sys: { id: contentTypeId = null } = {} } = {},
  } = {},
  fields = {},
}) => {
  return {
    id: contentTypeId === "contentSpace" ? uniqueId() : id,
    contentTypeId,
    ...fields,
  };
};

export const getImageFields = (image) => {
  if (!image) return null;

  const {
    file: {
      url = null,
      details: {
        size = null,
        image: { width = null, height = null } = {},
      } = {},
      fileName = null,
      contentType = null,
    } = {},
    ...data
  } = image;

  return {
    url,
    size,
    width,
    height,
    fileName,
    contentType,
    ...data,
  };
};

export const getContentData = (content) => {
  if (!content) return null;

  // Ignore strings
  if (isString(content)) return content;

  const contentData = getIdAndFields(content);

  // If we're working with a contentful image object parse it.
  if (contentData.file) {
    return getImageFields(contentData);
  }

  // If we're dealing with any other object recursively resolve all it's values.
  return Object.keys(contentData).reduce((acc, cur) => {
    const curContentData = contentData[cur];

    if (isArray(curContentData)) {
      return {
        ...acc,
        [cur]: curContentData.map(getContentData),
      };
    }

    if (isObject(curContentData)) {
      return {
        ...acc,
        [cur]: getContentData(curContentData),
      };
    }

    return {
      ...acc,
      [cur]: curContentData,
    };
  }, {});
};

export const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  space: process.env.CONTENTFUL_SPACE,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
});
