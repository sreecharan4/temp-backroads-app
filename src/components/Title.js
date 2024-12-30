const Title = ({ title, sub }) => {
  return (
    <div className="section-title">
      <h2>
        {title}&nbsp;
        <span>{sub}</span>
      </h2>
    </div>
  );
};

export default Title;
