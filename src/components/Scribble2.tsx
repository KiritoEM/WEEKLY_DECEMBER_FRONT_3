interface IscribbleProps {
  top: string;
}

const Scribble2: React.FC<IscribbleProps> = ({top}): JSX.Element => {
  return (
    <div id="scribble2" style={{ position: "relative", top: `${top}` }}>
      <div id="scribble2__container">
        <img src="/images/Scribble-2.png" alt="" />
      </div>
    </div>
  );
};

export default Scribble2;
