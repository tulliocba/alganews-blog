import { differenceInDays, format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatPostDate = (postCreationDate: string) => {
  const postDate = new Date(postCreationDate);
  const dayDiff = differenceInDays(new Date(), postDate);

  return dayDiff > 3
    ? format(postDate, "dd/MM/yyyy")
    : `há ${formatDistanceToNow(postDate, { locale: ptBR })}`;
};
