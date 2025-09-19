


const ChatMessage = ({name,message})=>{
  return (
    <div className="flex items-center m-2">
      <img
        className="h-8 mx-2"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  )
}
export default ChatMessage;