import { Post, PostService, ResourceNotFoundError } from "cms-alganews-sdk";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

const PostPage = ({ post }: PostPageProps) => {
  //   const router = useRouter();
  //   const {query} = router;
  return <div>{post?.title}</div>;
};

interface Params extends ParsedUrlQuery {
  pid: string[];
}

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params }) => {
    try {
      const [id, slug] = params?.pid || [];

      if (isNaN(Number(id))) return { notFound: true };

      const post = await PostService.getExistingPost(Number(id));

      return {
        props: {
          post,
        },
      };
    } catch (error) {
      let message, statusCode;

      if (error instanceof ResourceNotFoundError) {
        message = error.message;
        statusCode = error.data?.status;
      }

      return {
        props: {
          error: {
            message: message || "Error",
            statusCode: statusCode || 500,
          },
        },
      };
    }
  };

export default PostPage;
