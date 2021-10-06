import { Post } from "cms-alganews-sdk";
import styled from "styled-components";
import { Avatar } from "./Avatar";
import Link from "next/link";
import { transparentize } from "polished";

interface FeaturedPostProps {
  postSummary: Post.Summary;
}

export const FeaturedPost = ({ postSummary }: FeaturedPostProps) => {
  const { id, slug } = postSummary;

  return (
    <Link href={`/posts/${id}/${slug}`} passHref>
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
    </Link>
  );
};

const Wrapper = styled.a`
  background-color: ${(p) => p.theme.primaryBackground};
  color: ${(p) => p.theme.primaryForeground};
  border-radius: ${(p) => p.theme.borderRadius};

  padding: 32px;
  width: 100%;
  text-decoration: none;

  min-height: 256px;
  position: relative;
  display: flex;
  align-items: center;

  overflow: hidden;

  transition: box-shadow 0.25s ease;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px
      ${(p) => transparentize(0.7, p.theme.primaryBackground)};
  }
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
  display: none;
  gap: 8px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
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
