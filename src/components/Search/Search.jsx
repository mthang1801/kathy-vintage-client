import React, { useEffect } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  connectStateResults,
  Configure,
} from 'react-instantsearch-dom';
import Hit from './Hit';
import { Wrapper } from './styles/Search.styles';
import { useLanguage } from '../../locales';
import { useTheme } from '../../theme';
const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
);
const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME;

const Search = () => {
  const {
    translation: { search },
  } = useLanguage();
  const { theme } = useTheme();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', (e) => {
        const searchResults = document.getElementById('search-results');
        if (
          searchResults?.contains(e.target) ||
          document
            .getElementsByClassName('ais-SearchBox-input')[0]
            ?.contains(e.target)
        ) {
          return document
            .getElementById('search-results')
            ?.classList?.remove('d-none');
        }
        return document
          .getElementById('search-results')
          ?.classList?.add('d-none');
      });
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', (e) => {
          const searchResults = document.getElementById('search-results');
          if (
            (searchResults && searchResults.contains(e.target)) ||
            document
              ?.getElementsByClassName('ais-SearchBox-input')[0]
              ?.contains(e.target)
          ) {
            return document
              .getElementById('search-results')
              ?.classList?.remove('d-none');
          }
          return document
            .getElementById('search-results')
            ?.classList?.add('d-none');
        });
      }
    };
  });

  return (
    <Wrapper theme={theme}>
      <InstantSearch indexName={indexName} searchClient={searchClient}>
        <SearchBox
          translations={{ placeholder: search.placeholder }}
          submit={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 18 18"
            >
              <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.67"
                transform="translate(1 1)"
              >
                <circle cx="7.11" cy="7.11" r="7.11" />
                <path d="M16 16l-3.87-3.87" />
              </g>
            </svg>
          }
        />

        <Configure />
        <div id="search-results">
          <Results className="search-results" searchTranslation={search}>
            <Hits hitComponent={Hit} />
          </Results>
        </div>
      </InstantSearch>
    </Wrapper>
  );
};

const Results = connectStateResults(
  ({ searchState, searchResults, children, searchTranslation }) => {
    if (searchState && searchState.query) {
      return searchResults && searchResults.nbHits ? (
        <div className="search-results">{children}</div>
      ) : (
        <div className="empty-result">
          {searchTranslation.emptyResult(searchState.query)}
        </div>
      );
    }
    return null;
  }
);

export default React.memo(Search);
