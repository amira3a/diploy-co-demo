import style from "./style.module.css"
import Lottie from "lottie-react"
import heroAnimation from "../../assets/lottie/AnimationHero.json"
import checkmark from "../../assets/Images/check-mark.svg"

export default function Hero(props) {

  // const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    props.setShowVideo(true);
  };

  const handleCloseVideo = () => {
    props.setShowVideo(false);
  };


  return (
    <div>
      {/* <div
        className={`${style.appContainer} ${
          showVideo ? style.backgroundDim : ""
        }`}
      > */}
        <div id={style.hero}>
          <div id={style.heroBins}>
            <div className={style.heroBin}>
              <h1>Create and sell custom products</h1>
              <div className={style.binifitsDiv}>
                <div className={style.binifits}>
                  <img src={checkmark} alt="checkmark" />
                  <p>100% Free to use</p>
                </div>
                <div className={style.binifits}>
                  <img src={checkmark} alt="checkmark" />
                  <p>900+ High-Quality Products</p>
                </div>
                <div className={style.binifits}>
                  <img src={checkmark} alt="checkmark" />
                  <p>Largest global print network</p>
                </div>
              </div>

              <div className={style.buttonsDiv}>
                <button className="bg-green-600 text-center px-4 h-9 ">
                  Start for free
                </button>
                <button
                  className={`${style.showVideoBtn} "border-solid border-2 text-center px-4 h-9"`}
                  onClick={handleShowVideo}
                >
                  How it works?
                </button>
              </div>

              {props.showVideo && (
                <div className={style.videoContainer}>
                  <button className={style.closeBtn} onClick={handleCloseVideo}>
                    X
                  </button>

                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/rVJ9prsurCI?si=rPJJPLP5uPrvG7Sr"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>

            <div className={style.categoryLink}>
              <Lottie loop={true} animationData={heroAnimation} />
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
