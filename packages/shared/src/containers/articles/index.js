import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, GlobalStyle } from './styles';
import Card from '@geekuendo/shared/components/Card';

const Articles = ({ articles, fetchArticles }) => {
  useEffect(fetchArticles, []);

  return (
    <Container>
      {articles.map((article, index) => (
        <Card key={index} article={article} />
      ))}
      <GlobalStyle />
    </Container>
  );
};

const mapStateToProps = state => ({
  articles: state.article.articles || []
});

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {
      dispatch({ type: 'FETCH_ARTICLES' });
    }
  };
};

Articles.propTypes = {
  articles: PropTypes.array,
  fetchArticles: PropTypes.func
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles);
