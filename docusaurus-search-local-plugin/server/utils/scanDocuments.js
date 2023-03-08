const fs = require("fs");
const util = require("util");

const parse = require("./parse").parse;
const uuidv4 = require("uuid").v4;

const readFileAsync = util.promisify(fs.readFile);

const getHeadingAndContentDocuments = (sections, pageTitle, url, titleId) => {
  const initT = { headingDocuments: [], contentDocuments: [] };

  return sections.reduce((prev, { content, title, hash }) => {
    const headingDocuments =
      title !== pageTitle
        ? [
            ...prev.headingDocuments,
            {
              i: uuidv4(),
              t: title,
              u: url,
              h: hash,
              p: titleId,
            },
          ]
        : prev.contentDocuments;

    const contentDocuments = content
      ? [
          ...prev.contentDocuments,
          {
            i: uuidv4(),
            t: content,
            s: title || pageTitle,
            u: url,
            h: hash,
            p: titleId,
          },
        ]
      : prev.contentDocuments;

    return { headingDocuments, contentDocuments };
  }, initT);
};

module.exports.scanDocuments = async function scanDocuments(
  DocInfoWithFilePathList
) {
  const initalValue = {
    titleDocuments: [],
    headingDocuments: [],
    contentDocuments: [],
  };
  return DocInfoWithFilePathList.reduce(
    async (promise, { filePath, url, type }) => {
      const html = await readFileAsync(filePath, { encoding: "utf8" });
      const { pageTitle, sections, breadcrumb } = parse(html, type);
      const titleId = uuidv4();

      const prev = await promise;

      const titleDoc = {
        i: titleId,
        t: pageTitle,
        u: url,
        b: breadcrumb,
      };

      const t = getHeadingAndContentDocuments(
        sections,
        pageTitle,
        url,
        titleId
      );

      return {
        titleDocuments: [...prev.titleDocuments, titleDoc],
        headingDocuments: [...prev.headingDocuments, ...t.headingDocuments],
        contentDocuments: [...prev.contentDocuments, ...t.contentDocuments],
      };
    },
    Promise.resolve(initalValue)
  );
};
