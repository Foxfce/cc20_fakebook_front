import DefaultImg from '../assets/default_avatar.png'
import { DropdownIcon } from '../icons'

function Avatar(props) {
  const {imgSrc, menu, ...resProp} = props

  return (
    <div className="avatar items-center cursor-pointer">
      <div {...resProp}>
        <img src={imgSrc? imgSrc: DefaultImg} alt='avatar' />
      </div>
        { menu &&
          <DropdownIcon className='absolute -right-0 -bottom-0 w-3 bg-gray-300 rounded-full' />
        }
    </div>
  )
}
export default Avatar