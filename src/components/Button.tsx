const Button = ({ text }: { text: string }) => {
  return (
    <div className="canpara">
      <a type="submit" href="#">
        <div>
          <p className="para">{text}</p>
        </div>
      </a>
    </div>
  );
};
export default Button;
