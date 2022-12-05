// {
//   id: 1,
//   subject: "components",
//   content: "Components are the building blocks of react",
// }

export default function StatementListItem(props) {
  const { subject, content } = props;
  return (
    <li className="StatementListItem">
      <p>{content}</p>
      <p>Filed in: {subject}</p>
    </li>
  );
}
