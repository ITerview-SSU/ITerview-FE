import { ModalLayout, Background, ModalButton, ModalCloseButton } from "./styles";
import { useRef } from 'react';
import styled from 'styled-components';

const Modal = ({ closeModal, children }) => {

    const outside = useRef();

    return (
        <Background
          ref={outside}
          onClick={ (e) => { if(e.target == outside.current) closeModal(false) } }
        >
            <ModalLayout>
                {/* <ModalCloseButton onClick={() => closeModal(false)} /> */}
                {children}
                {/* <ModalButton onClick={() => closeModal(true)}>{buttonText}</ModalButton> */}
            </ModalLayout>
        </Background>
    );
};

export default Modal;