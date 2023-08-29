import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const CustomTooltip = ({ children, tooltipText, placement = 'bottom' }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {tooltipText}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement={placement}
      overlay={renderTooltip}
    >
      {children}
    </OverlayTrigger>
  );
};

export default CustomTooltip;