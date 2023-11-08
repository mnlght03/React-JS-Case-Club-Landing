import React from 'react';
import { openInNewTab } from '../../utils';

export default function NewTabLink({ url, children, ...props }) {
  return (
    <a
      href={url}
      onClick={(e) => {
        e.preventDefault();
        openInNewTab(url);
      }}
        {...props}
    >
      {children}
    </a>
  );
}
