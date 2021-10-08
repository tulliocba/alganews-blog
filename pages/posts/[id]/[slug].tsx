import { Post, PostService, ResourceNotFoundError } from "cms-alganews-sdk";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Markdown } from "../../../components/Markdown";
import { PostHeader } from "../../../components/PostHeader";

const PostPage = ({ post, host }: PostPageProps) => {
  //   const router = useRouter();
  //   const {query} = router;
  return (
    <>
      <Head>
        <meta property="og:title" content={post?.title} />
        <meta property="og:site_name" content="AlgaNews" />
        <meta property="og:url" content="alganews.com.br" />
        <meta property="og:description" content={post?.body.slice(0, 54)} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={post?.imageUrls.medium} />
        <title>{post?.title} - AlgaNews</title>
        <link
          rel="canonical"
          href={`http://${host}/posts/${post?.id}/${post?.slug}`}
        />
      </Head>
      {post && (
        <>
          <PostHeader
            thumbnail={post?.imageUrls.large}
            createdAt={post?.createdAt}
            editor={post?.editor}
            title={post?.title}
          />
        </>
      )}

      <Markdown markdown={post?.body || ""} />
    </>
  );
};

interface Params extends ParsedUrlQuery {
  id: string;
  slug: string;
}

interface PostPageProps extends NextPageProps {
  post?: Post.Detailed;
  host?: string;
}

export const getServerSideProps: GetServerSideProps<PostPageProps, Params> =
  async ({ params, req }) => {
    try {
      if (!params || isNaN(Number(params.id))) return { notFound: true };

      const { id } = params;

      const post = await PostService.getExistingPost(Number(id));

      return {
        props: {
          post,
          host: req.headers.host,
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
