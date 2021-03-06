import { Post } from "cms-alganews-sdk";
import Image from "next/image";
import { transparentize } from "polished";
import styled from "styled-components";
import { formatPostDate } from "../core/utils/formatPostDate";

interface PostHeaderProps {
  thumbnail: string;
  editor: Post.Detailed["editor"];
  createdAt: string;
  title: string;
}

export const PostHeader = (props: PostHeaderProps) => {
  const { thumbnail, editor, createdAt, title } = props;
  return (
    <Wrapper>
      <Thumbnail>
        <Image
          src={thumbnail}
          width={848}
          height={256}
          objectFit={"cover"}
          alt={title}
        />
        <Editor>
          <Image
            src={editor.avatarUrls.small}
            width={64}
            height={64}
            objectFit={"cover"}
            alt={editor.name}
          />
        </Editor>
        <PublishDate>{formatPostDate(createdAt)}</PublishDate>
        <Title>{title}</Title>
      </Thumbnail>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 256px;
  gap: 16px;
  width: 100%;
  border-top-left-radius: ${(p) => p.theme.borderRadius};
  border-top-right-radius: ${(p) => p.theme.borderRadius};
  overflow: hidden;
  object-fit: cover;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
const Editor = styled.div`
  position: relative;
  margin-top: -48px;
  border-radius: 32px;
  width: 64px;
  height: 64px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.pageBackground};
  img {
    border-radius: 32px;
  }
`;
const PublishDate = styled.p`
  color: ${(p) => transparentize(0.5, p.theme.pageForeground)};
  font-size: 12px;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;
