const SocialItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li className="opacity-60 hover:opacity-100 transition-all">{children}</li>;
};

export default SocialItem;
