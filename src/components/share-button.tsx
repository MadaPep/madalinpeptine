
import linkedinLogo from '/linkedin.png'

const ShareButton = () => {
  return (
    <>
    <div className="sticky bottom-0 w-full flex justify-end p-4">
      <div className="w-11 h-11 rounded-full glass backdrop-blur-xs z-1 supports-backdrop-blur:bg-emerald-950 ">
        <div>
          <img src={linkedinLogo} width={24} alt="linkedin logo" />

        </div>
      </div>

    </div>
    </>
  );
}

export default ShareButton;