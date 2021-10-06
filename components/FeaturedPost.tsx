import { Post } from "cms-alganews-sdk";
import styled from "styled-components";
import { Avatar } from "./Avatar";

interface FeaturedPostProps {
  postSummary: Post.Summary;
}

export const FeaturedPost = ({ postSummary }: FeaturedPostProps) => {
  return (
    <Wrapper>
      <BgImage bg={postSummary.imageUrls.default} />
      <Content>
        <Tags>
          {postSummary.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        <Editor>
          <Avatar src={postSummary.editor.avatarUrls.small} />
          <EditorDescription>
            <EditorName>{postSummary.editor.name}</EditorName>
            <PostDate>há 3 dias</PostDate>
          </EditorDescription>
        </Editor>
        <Title>{postSummary.title}</Title>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.primaryBackground};
  color: ${(p) => p.theme.primaryForeground};
  border-radius: ${(p) => p.theme.borderRadius};

  padding: 32px;
  width: 100%;

  min-height: 256px;
  position: relative;
  display: flex;
  align-items: center;

  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Tags = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  border-radius: ${(p) => p.theme.borderRadius};
  text-transform: lowercase;
  padding: 4px 8px 6px;
  cursor: default;
  font-size: 12px;
`;

const Editor = styled.div`
  display: flex;
  gap: 16px;
`;

const EditorDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const PostDate = styled.p`
  font-size: 12px;
`;

const EditorName = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

const BgImage = styled.div<{ bg: string }>`
  position: absolute;
  inset: 0;
  background-color: blue;
  z-index: 0;
  background-image: url(${(p) => p.bg});
  opacity: 0.1;
`;
