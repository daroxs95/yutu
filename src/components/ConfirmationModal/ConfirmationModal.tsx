import { StyledButton } from '../Button/Button.styles';
import Dialog from '../Dialog/Dialog';
import {
  StyledModalControls,
  StyledModalDescription,
  StyledModalTitle,
} from '../Dialog/Dialog.styles';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

function ConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: ConfirmationModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <StyledModalTitle>{title}</StyledModalTitle>
      <StyledModalDescription>{message}</StyledModalDescription>
      <StyledModalControls>
        <StyledButton title="Cancel" onClick={onClose}>
          Cancel
        </StyledButton>
        <StyledButton title="Confirm" onClick={onConfirm}>
          Confirm
        </StyledButton>
      </StyledModalControls>
    </Dialog>
  );
}

export default ConfirmationModal;
