import { AriaButtonProps, useButton } from 'react-aria';
import { useRef } from 'react';

export default function Button(props: AriaButtonProps<'button'>) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref} className="btn btn-primary">
      {children}
    </button>
  );
}
