interface IfooterProps {
  footerMenu01: Iitems[];
}

interface Iitems {
  text: string;
  id?: string;
}

const FooterCard: React.FC<IfooterProps> = ({ footerMenu01 }): JSX.Element => {
  return (
    <div className="footer-menu">
      <ul>
        {footerMenu01.map((item, index) => (
          <li key={index} id={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCard;
