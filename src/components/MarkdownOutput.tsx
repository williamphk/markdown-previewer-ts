import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const OutputContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  background-color: #fafafa;
  overflow: auto;
`;

interface MarkdownOutputProps {
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </OutputContainer>
  );
};

export default MarkdownOutput;
