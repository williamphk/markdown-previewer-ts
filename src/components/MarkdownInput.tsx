import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
  resize: vertical;
`;

interface MarkdownInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea value={value} onChange={onChange} />
    </InputContainer>
  );
};

export default MarkdownInput;
