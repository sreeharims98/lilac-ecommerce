import logo from "../assets/logo.png";
import youtube from "../assets/social/youtube.svg";
import facebook from "../assets/social/facebook.svg";
import linkedin from "../assets/social/linkedin.svg";
import instagram from "../assets/social/instagram.svg";
import twitter from "../assets/social/twitter.svg";
import appstore from "../assets/social/appstore.svg";
import playstore from "../assets/social/playstore.svg";
import microphone from "../assets/icons/microphone.svg";

interface IconProps {
  icon: string;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <div className="rounded-xl bg-bgColor p-4">
      <img src={icon} alt="" />
    </div>
  );
};

function Footer() {
  return (
    <div className="bg-white p-20 grid grid-cols-12">
      <div className="flex flex-col gap-4 col-span-3">
        <img src={logo} alt="" className="w-40" />
        <span className="font-normal text-lg text-secondaryColor">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </span>
        <div className="flex items-center gap-4">
          <Icon icon={youtube} />
          <Icon icon={linkedin} />
          <Icon icon={twitter} />
          <Icon icon={facebook} />
          <Icon icon={instagram} />
        </div>
      </div>
      <div className="flex flex-col gap-4 col-span-2">
        <span className="text-black font-bold text-xl">QUICK LINKS</span>
        <span className="text-secondaryColor font-normal text-lg">
          Products
        </span>
        <span className="text-secondaryColor font-normal text-lg">
          Classifieds
        </span>
        <span className="text-secondaryColor font-normal text-lg">
          Contact us
        </span>
        <span className="text-secondaryColor font-normal text-lg">Login</span>
        <span className="text-secondaryColor font-normal text-lg">Sign Up</span>
      </div>

      <div className="flex flex-col gap-4 col-span-2">
        <span className="text-black font-bold text-xl">CUSTOMER AREA</span>

        <span className="text-secondaryColor font-normal text-lg">
          My Account
        </span>
        <span className="text-secondaryColor font-normal text-lg">Orders</span>
        <span className="text-secondaryColor font-normal text-lg">
          Tracking
        </span>
        <span className="text-secondaryColor font-normal text-lg">List</span>
        <span className="text-secondaryColor font-normal text-lg">Terms</span>
        <span className="text-secondaryColor font-normal text-lg">
          Privacy Policy
        </span>
        <span className="text-secondaryColor font-normal text-lg">Terms</span>
        <span className="text-secondaryColor font-normal text-lg">
          Return policy
        </span>
        <span className="text-secondaryColor font-normal text-lg">My Cart</span>
      </div>

      <div className="flex flex-col gap-4 col-span-2">
        <span className="text-black font-bold text-xl">VENDOR AREA</span>

        <span className="text-secondaryColor font-normal text-lg">
          Partner with us
        </span>
        <span className="text-secondaryColor font-normal text-lg">
          Training
        </span>
        <span className="text-secondaryColor font-normal text-lg">
          Procedures
        </span>
        <span className="text-secondaryColor font-normal text-lg">Terms</span>
        <span className="text-secondaryColor font-normal text-lg">
          Privacy Policy
        </span>
      </div>

      <div className="flex flex-col gap-4 col-span-3">
        <span className="text-black font-bold text-xl">CONTACT</span>

        <span className="text-secondaryColor font-normal text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </span>

        <div className="flex items-center gap-4">
          <img src={microphone} alt="" />
          <div className="flex flex-col gap-2">
            <span className="font-normal text-sm text-black">
              Have any question?
            </span>
            <span className="font-normal text-lg text-primaryColor">
              + 123 456 789
            </span>
          </div>
          <button className="text-primaryColor border border-primaryColor text-lg font-extrabold px-8 py-4 rounded-xl">
            CHAT
          </button>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#232323] px-6 py-4 rounded-xl flex gap-4">
            <img src={appstore} alt="" />
            <div className="flex flex-col">
              <span className="font-normal text-xs text-white">
                Download on the
              </span>
              <span className="font-black text-xl text-white">App Store</span>
            </div>
          </div>
          <div className="bg-[#232323] px-6 py-4 rounded-xl flex gap-4">
            <img src={playstore} alt="" />
            <div className="flex flex-col">
              <span className="font-normal text-xs text-white">GET IT ON</span>
              <span className="font-black text-xl text-white">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
