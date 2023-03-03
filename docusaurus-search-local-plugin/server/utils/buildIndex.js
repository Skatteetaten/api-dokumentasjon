const lunr = require("lunr");

module.exports.buildIndex = function buildIndex(
  {
    titleDocuments,
    headingDocuments,
    contentDocuments,
  },
  {
    language,
    removeDefaultStopWordFilter,
    removeDefaultStemmer,
  }
) {
  if (language.length > 1 || language.some((item) => item !== "en")) {
    require("lunr-languages/lunr.stemmer.support")(lunr);
  }

  language.filter((lang) => lang !== 'en').forEach((lang) => {
    require(`lunr-languages/lunr.${lang}`)(lunr)
  })
  
  if (language.length > 1) {
    require("lunr-languages/lunr.multi")(lunr);
  }

  return [titleDocuments, headingDocuments, contentDocuments].map((documents) => ({
    documents,
    index: lunr(function () {
      if (language.length > 1) {
        this.use((lunr).multiLanguage(...language));
      } else if (language[0] !== "en") {
        this.use((lunr)[language[0]]);
      }

      if (removeDefaultStopWordFilter) {
        this.pipeline.remove(lunr.stopWordFilter);
      }

      if (removeDefaultStemmer) {
        this.pipeline.remove(lunr.stemmer);
      }

      this.ref("i");
      this.field("t");
      this.metadataWhitelist = ["position"];

      documents.forEach((doc) => {
        this.add({
          ...doc,
          i: doc.i.toString(),
        });
      });
    }),
  }));
}