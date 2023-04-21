import Row from "./Row"
const Table = ({items}) => {
  return (
      <table>
          <tbody>
              {items.map(element => (
                  <Row key={element.id} element={element} />
              ))}
          </tbody>
    </table>
  )
}

export default Table