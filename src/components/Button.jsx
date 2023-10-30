const Button = ({cssClass, label}) => {
    return (
        <button className={cssClass}>{label}</button>
    );
};

export default Button;