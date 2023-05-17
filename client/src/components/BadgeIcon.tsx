interface BadgeIcon {
  icon: string;
  badge: number;
  onClick?: () => void;
}

function BadgeIcon({ icon, badge, onClick }: BadgeIcon) {
  return (
    <div className="relative cursor-pointer" onClick={onClick}>
      {badge ? (
        <span className="bg-primaryColor absolute -top-3 -right-3 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white border-spacing-4">
          {badge}
        </span>
      ) : null}
      <img src={icon} alt="" className="max-w-fit h-6 w-6" />
    </div>
  );
}

export default BadgeIcon;
