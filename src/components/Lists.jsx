import LineItem from './LineItem';
const Lists = ({ items }) => {
  return (
    <ul>
      {items.map((element) => (
        <LineItem key={element.id} element={element} />
      ))}
    </ul>
  );
};

export default Lists;
