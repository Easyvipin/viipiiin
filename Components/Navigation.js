import Image from "next/image";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-item">
          <Image
            src="https://img.icons8.com/ios/250/000000/attach.png"
            width={30}
            height={30}
          />
        </li>
        <li className="nav-item header-name">Viipiin.</li>
        <li className="nav-item">
          <Image
            src="https://img.icons8.com/ios/250/000000/phone.png"
            width={30}
            height={30}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
