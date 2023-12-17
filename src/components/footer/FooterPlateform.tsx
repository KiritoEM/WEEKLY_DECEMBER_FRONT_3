interface IsocialIcon {
  icons: Iicon[];
}

interface Iicon {
  icon: string;
  id?:string;
}

const FooterPlateform: React.FC<IsocialIcon> = ({ icons }): JSX.Element => {
  return (
    <div className="section-plateform">
      <div className="plateform">
        <p>Listen to episodes on your fav platform:</p>

        <div className="icons">
          {icons.map((item, index) => (
            <div className="icon" key={index}>
              <img src={item.icon} alt="" id={item.id}/>
            </div>
          ))}
        </div>
      </div>
      <div className="app mt-4">
         <p>App available on:</p>
         <div className="icons">
              <img src="/images/platform-2.png" alt="" />
         </div>
      </div>
    </div>
  );
};

export default FooterPlateform;
