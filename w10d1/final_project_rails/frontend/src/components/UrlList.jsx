import UrlListItem from "./UrlListItem";

export default function UrlList(props) {
  const { urls } = props;

  const parsedUrlListItems =
    Array.isArray(urls) && urls.map((url) => <UrlListItem key={url.id} {...url} />);

  return <ul>{parsedUrlListItems}</ul>;
}
