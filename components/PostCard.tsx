import { Post } from "cms-alganews-sdk";
import { transparentize } from "polished";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { formatPostDate } from "../core/utils/formatPostDate";

interface PostCardProps {
  post: Post.Summary;
}

export const PostCard = ({ post }: PostCardProps) => {
  const { id, slug } = post;

  return (
    <Link href={`/posts/${id}/${slug}`} passHref>
      <Wrapper>
        <Thumbnail bg={post.imageUrls.small} />
        <Info>
          <Editor>
            <EditorImage
              src={post.editor.avatarUrls.small}
              width={64}
              height={64}
            />
          </Editor>
          <PublishDate>{formatPostDate(post.createdAt)}</PublishDate>
          <Title>{post.title}</Title>
        </Info>
      </Wrapper>
    </Link>
  );
};

const Thumbnail = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;

  background-image: url(${(p) => p.bg});
  background-position: center;
  background-size: cover;
  border-top-left-radius: ${(p) => p.theme.borderRadius};
  border-top-right-radius: ${(p) => p.theme.borderRadius};
`;

const Wrapper = styled.a`
  position: relative;
  background-color: ${(p) => p.theme.activeElementBackground};
  color: ${(p) => p.theme.activeElementForeground};
  box-shadow: 0 3px 6px
    ${(p) => transparentize(0.9, p.theme.activeElementForeground)};
  border-radius: ${(p) => p.theme.borderRadius};

  min-height: 256px;

  transition: 0.25s ease;

  * {
    transition: 0.25s ease;
  }

  &:hover,
  &:focus {
    outline: none;
    background-color: ${(p) => p.theme.primaryBackground};
    box-shadow: 0 0 0 4px
      ${(p) => transparentize(0.7, p.theme.primaryBackground)};
    * {
      color: ${(p) => p.theme.primaryForeground};
    }

    ${Thumbnail} {
      height: 100%;
      opacity: 0.1;
    }
  }
`;

const Info = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  left: 0;
  margin-top: -32px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;
const Editor = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.activeElementBackground};
  overflow: hidden;
`;
const EditorImage = styled(Image)``;

const PublishDate = styled.p`
  font-size: 12px;
  color: ${(p) => transparentize(0.5, p.theme.activeElementForeground)};
`;
const Title = styled.h2`
  text-align: center;
  font-size: 14px;
`;
