interface ExternalLinkProps {
  to: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer noopener">
      {children}
    </a>
  );
};

export default ExternalLink;
