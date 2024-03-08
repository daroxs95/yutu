import { ReactNode, useEffect, useRef } from 'react';

import { StyledBackdrop, StyledDialog } from './Dialog.styles';

interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Dialog({ open, onClose, children }: DialogProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (!modalRef?.current) return;
    if (open) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [open]);

  return (
    <>
      {open && <StyledBackdrop />}
      <StyledDialog ref={modalRef} onCancel={onClose}>
        {children}
      </StyledDialog>
    </>
  );
}

export default Dialog;
