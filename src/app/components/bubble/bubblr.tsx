const BubbleText = ({ text, children }: { text: string; children: React.ReactNode }) => {
    const content = text || (typeof children === 'string' ? children : '');
    return (
      <h2 className="text-start font-normal text-gray-400 text-3xl">
        {content.split("").map((child, idx) => (
          <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}
      </h2>
    );
};

export default BubbleText;