import Image from "next/image";

const Navigation = () => {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-item">
          <a href="https://github.com/Easyvipin" target="_blank">
            <Image
              src="https://img.icons8.com/ios/250/000000/source-code.png"
              width={30}
              height={30}
            />
          </a>
        </li>
        <li className="nav-item header-name">Vipin.</li>
        <li className="nav-item">
          <a href="https://www.linkedin.com/in/easyvipin/" target="_blank">
            <Image
              src="https://img.icons8.com/ios/250/000000/linkedin.png"
              width={30}
              height={30}
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
