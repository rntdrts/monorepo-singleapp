import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContainer, Title, CardImage } from './styles';

const Article = ({ article }) => {
  return (
    <Card>
      <CardContainer>
        <CardImage
          source={{ uri: article.image }}
          src={article.image}
          alt={article.title}
        />
        <Title>{article.title}</Title>
      </CardContainer>
    </Card>
  );
};

Article.propTypes = {
  article: PropTypes.object
};

export default Article;
