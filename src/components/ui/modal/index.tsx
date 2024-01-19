'use client';
import React, { useRef, Fragment, CSSProperties, FC } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

type TModalProps = {
  renderChildren: any;
  className?: string;
  style?: CSSProperties;
  open: boolean;
  onClose: () => void;
};

const Modal: FC<TModalProps> = ({
  renderChildren,
  className = '',
  style,
  open,
  onClose,
}) => {
  /** Required states and refs */
  const modalRef = useRef<HTMLDivElement | null>(null);

  /** Function to open and close modal */
  const handleCloseModal = () => {
    const modal = modalRef.current!;
    modal.setAttribute('closing', 'true');
    modal.addEventListener(
      'animationend',
      () => {
        modal.removeAttribute('closing');
        if (typeof onClose === 'function') {
          onClose();
        }
      },
      { once: true }
    );
  };

  /** Modal children props */
  const viewProps = {
    closeModal: handleCloseModal,
  };

  return (
    <Fragment>
      {(() => {
        if (open) {
          return (
            <div
              className={`common__modal-container ${className}`}
              style={style}
              ref={modalRef}
            >
              {renderChildren(viewProps)}
            </div>
          );
        }
        return null;
      })()}
    </Fragment>
  );
};

Modal.propTypes = {
  renderChildren: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
