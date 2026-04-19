import './Screen1.css'

function Screen1() {
  return (
    <div className="screen1">
      <div className="floating-hearts" aria-hidden="true">
        <span className="heart h1">♥</span>
        <span className="heart h2">♥</span>
        <span className="heart h3">♥</span>
        <span className="heart h4">♥</span>
        <span className="heart h5">♥</span>
        <span className="heart h6">♥</span>
      </div>

      <div className="text-block">
        <div className="handwritten line-1">hey there..!</div>
        <div className="handwritten line-2">Guess what</div>
      </div>

      <div className="couple-wrap">
        <img
          src="/wedding-couple.png"
          alt="The Happy Couple"
          className="couple-img"
          draggable="false"
        />
      </div>
    </div>
  )
}

export default Screen1
