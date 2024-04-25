import Tag from '../Tag/Tag'

export default function Card(props) {
  const item = props.item

  return (
    <div className="card">
      <h2>{item.name}</h2>

      {item.tag.map(function(tag){
        return <Tag tag={tag} />
      })}
      
      <img src={item.image} />
    </div>
  )
}