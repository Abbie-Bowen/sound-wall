import './fullCardModal.css'
//add route to forward to card title .../consonant-chart/sh

const FullCardModal = ({ handleClose, show, children}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                <button type="button" onTouchEnd={handleClose}>Close</button>
            </section>
        </div>
    );
};

export default FullCardModal;

//modal and CSS from Digital Ocean example: https://www.digitalocean.com/community/tutorials/react-modal-component