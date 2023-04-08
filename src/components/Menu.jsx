export default function Menu() {
  return (
    <div className='absolute min-w-max top-16  bg-orange-300 p-3 pr-20 rounded'>
      <ul className='flex flex-col h-full text-zinc-950'>
        <li className='p-3'>
          <a>Home</a>
        </li>

        <li className='p-3'>
          <a>Works</a>
        </li>

        <li className='p-3'>
          <a>Posts</a>
        </li>
      </ul>
    </div>
  );
}
