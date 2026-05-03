import { Circles } from 'react-loader-spinner';

const LoadingSpinner = ({ 
  size = 40, 
  color = '#667eea', 
  fullPage = false,
  text = 'Đang tải...'
}) => {
  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
        <div className="flex flex-col items-center gap-4">
          <Circles
            height={size}
            width={size}
            color={color}
            ariaLabel="loading"
            wrapperClass="block"
          />
          {text && (
            <p className="text-gray-600 text-sm animate-pulse">{text}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Circles
        height={size}
        width={size}
        color={color}
        ariaLabel="loading"
        wrapperClass="block"
      />
    </div>
  );
};

export default LoadingSpinner;
