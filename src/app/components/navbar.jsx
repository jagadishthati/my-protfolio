
const navbar = () => {
  return (
  <>
  <div className="nav  flex justify-end items-center p-4 gap-4  text-white text-xl font-semibold font-serif">
        <div className="list hover:border-b-4 border-indigo-500"> HOME </div>
        <a target="_blank" href="https://hashnode.com/@jagadishthati">
        <div className="list  hover:border-b-4 border-indigo-500 "> BLOG</div>
        </a>
          <div className="list  hover:border-b-4 border-indigo-500 "> PROJECTS </div>
        
    </div>
  </>
  )
}

export default navbar