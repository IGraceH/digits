import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

const ContactAdmin = ({ info }) => (
  <Card className="h-100">
    <Card.Header>
      <Image style={{ width: '75px' }} src={info.image} />
      <Card.Title>
        {info.firstName} {info.lastName}
      </Card.Title>
      <Card.Subtitle>{info.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {info.description}
      </Card.Text>
      <Card.Text className="blockquote-footer">
        {info.owner}
      </Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  info: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default ContactAdmin;
