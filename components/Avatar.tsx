import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

interface AvatarProps {
  src: string;
  fallbackImage?: string;
}

export const Avatar = ({
  src,
  fallbackImage = "https://www.interstatedevelopment.com/wp-content/uploads/2019/04/generic-avatar-1-300x273.jpg",
}: AvatarProps) => {
  const [img, setImg] = useState(src);

  return (
    <Wrapper>
      <StyledAvatar
        src={img}
        width={40}
        height={40}
        onError={(e) => setImg(fallbackImage)}
      />
    </Wrapper>
  );
};

const StyledAvatar = styled(Image)`
  object-fit: cover;
`;

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  box-shadow: 0 0 0 4px ${(p) => p.theme.primaryForeground};
  overflow: hidden;
`;
