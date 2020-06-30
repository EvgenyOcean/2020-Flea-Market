import React from 'react';

function IFrame(props) {
  return (
    <iframe style={{maxWidth: props.width, width: '100%', minHeight: '200px'}} src={props.src}  className="map" title={props.title} frameBorder="0" tabIndex="0"></iframe>
  );
}

export default IFrame;