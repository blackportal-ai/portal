import * as React from 'react';

const Link = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, children, ...props }, ref) => {
  if (!!href && href.toString().startsWith('http')) {
    props = {
      ...props,
      target: '_blank',
      rel: 'noopener noreferrer',
    };
  }

  return (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  );
});
Link.displayName = 'Link';

export { Link };
