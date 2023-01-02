export default function UrlListItem(props) {
  const { shorturl, longurl } = props;
  return (
    <li>
      {shorturl} - {longurl}
    </li>
  );
}
