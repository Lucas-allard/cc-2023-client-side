const Button = ({cssClass, label, formAction}) => {
    return (
        <button className={cssClass} onClick={formAction}>{label}</button>
    );
};

export default Button;