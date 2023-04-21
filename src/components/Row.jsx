import Cell from "./Cell"

const Row = ({element}) => {
  return (
      <tr>
          {Object.entries(element).map(([key, value]) => {
              return <Cell key={key} cellData={JSON.stringify(value)} />
          }
          )}
    </tr>
  )
}

export default Row