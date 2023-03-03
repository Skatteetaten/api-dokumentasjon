import lunr from "lunr";
import {
  SearchDocument,
  SearchDocumentType,
  WrappedIndex,
} from "../../../shared/interfaces";
import { searchIndexUrl } from "../../utils/proxiedGenerated";

interface SerializedIndex {
  documents: SearchDocument[];
  index: {
    invertedIndex: [string][];
  };
}

export async function fetchIndexes(baseUrl: string): Promise<{
  wrappedIndexes: WrappedIndex[];
}> {
  if (process.env.NODE_ENV === "production") {
    const json = (await (
      await fetch(`${baseUrl}${searchIndexUrl}`)
    ).json()) as SerializedIndex[];

    const wrappedIndexes: WrappedIndex[] = json.map(
      ({ documents, index }, type) => ({
        type: type as SearchDocumentType,
        documents,
        index: lunr.Index.load(index),
      })
    );

    return {
      wrappedIndexes
    };
  }

  // The index does not exist in development, therefore load a dummy index here.
  return {
    wrappedIndexes: []
  };
}