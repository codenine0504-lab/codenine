export function MarkdownRenderer({ content }: { content: string }) {
  const renderLine = (line: string, lineIndex: number) => {
    if (line.startsWith('## ')) {
      return <h2 key={lineIndex} className="text-2xl font-bold text-foreground mt-8 mb-4">{line.substring(3)}</h2>;
    }
    if (line.startsWith('# ')) {
      return <h1 key={lineIndex} className="text-4xl font-bold text-primary mb-6">{line.substring(2)}</h1>;
    }
    if (line.startsWith('* ')) {
      return (
        <li key={lineIndex} className="flex items-start">
          <span className="text-accent mr-3 mt-1">•</span>
          <span>{line.substring(2)}</span>
        </li>
      );
    }
    return <p key={lineIndex}>{line}</p>;
  };

  const blocks = content.split('\n\n');

  return (
    <div className="space-y-6 text-foreground/90 leading-relaxed">
      {blocks.map((block, blockIndex) => {
        const lines = block.split('\n');
        if (lines.every(line => line.startsWith('* '))) {
          return (
            <ul key={blockIndex} className="space-y-2 list-inside">
              {lines.map(renderLine)}
            </ul>
          );
        }
        return (
          <div key={blockIndex}>
            {lines.map(renderLine)}
          </div>
        );
      })}
    </div>
  );
}
