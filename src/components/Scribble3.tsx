interface IscribbleProps {
  top: string;
}

const Scribble3: React.FC<IscribbleProps> = ({ top }): JSX.Element => {
  return (
    <div id="scribble2" style={{ position: "relative", top: `${top}` }}>
      <div id="scribble2__container">
        <img src="/images/Welcoming/Scribble.png" alt="" />
      </div>
    </div>
  );
};

export default Scribble3;
