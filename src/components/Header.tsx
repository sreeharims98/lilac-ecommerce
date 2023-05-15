import IconText from "./IconText";
import phone from "../assets/icons/phone.svg";
import email from "../assets/icons/email.svg";
import location from "../assets/icons/location-white.svg";
import Menu from "./inputs/Menu";

function Header() {
  return (
    <div className="bg-primaryColor w-full h-[53px] flex items-center justify-between">
      <div className="flex items-center justify-between w-full px-20">
        <div className="flex items-center gap-8">
          <IconText icon={phone} text={"+221 33 66 22"} />
          <IconText icon={email} text={"support@elextra.io"} />
        </div>
        <div className="flex items-center  gap-8">
          <IconText icon={location} text={"Locations"} />
          <Menu text="$ Dollar (US)" />
          <Menu text="EN" />
        </div>
      </div>
    </div>
  );
}

export default Header;
