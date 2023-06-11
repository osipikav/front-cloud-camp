import './ProgressLine.scss';

const ProgressLine = () => {
  return (
    <div className="progress">
      <div className="progress-line">
        <div className="progress-point"></div>
        <div className="progress-point"></div>
        <div className="progress-point"></div>
        <div className="progress-point-current">
          <div className="center-mark"></div>
        </div>
      </div>

      <div className="caption-line">
        <span className="point-caption">1</span>
        <span className="point-caption">2</span>
        <span className="point-caption">3</span>
      </div>
    </div>
  );
};

export default ProgressLine;
