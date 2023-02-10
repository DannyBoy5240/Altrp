import * as React from "react";

function BeeIcon(props) {
  return (
    <svg viewBox="0 0 512 512" width="1em" height="1em" {...props}>
      <path d="M434.871 242.39c-37.932-27.628-91.206-30.938-158.422-9.9a79.965 79.965 0 00-9.047-19.566c31.529-13.879 55.3-34.446 71.025-61.546 22.514-38.8 23.41-82.957 20.2-113.165a23.995 23.995 0 00-43.716-10.857L213.29 177.109a79.972 79.972 0 00-57.2 12.038 38.682 38.682 0 00-15.547-17.047c-11.551-6.672-25.76-6.775-40.008-.292A69.831 69.831 0 0080 186.386c-14.165-6.153-27.52-6.153-38.1.138C24.472 196.892 16 222.234 16 264a8 8 0 0016 0c0-43.779 9.832-58.818 18.081-63.725 6.058-3.6 13.294-2.77 19.39-.789a90.753 90.753 0 00-2.5 4.04c-8.306 14.386-12.1 30.34-10.688 44.923 1.51 15.58 8.7 27.834 20.256 34.5a38.208 38.208 0 0019.3 5.079 50.1 50.1 0 0020.71-4.787 63.556 63.556 0 006.989-3.74 79.334 79.334 0 0010.654 21.899l-28.976 46.36a8 8 0 00-.8 6.77l8 24a8 8 0 1015.178-5.06l-6.808-20.425 24.337-38.939a80.636 80.636 0 0024.884 16l-17.157 34.315a8 8 0 000 7.156l32 64a8 8 0 1014.31-7.156L168.944 368l16.656-33.316a79.808 79.808 0 0038.4-2.367V352a8 8 0 004.422 7.155l45.615 22.808 54.808 109.615a8 8 0 1014.31-7.156l-56-112a8 8 0 00-3.577-3.577L240 347.056v-21.819a80.37 80.37 0 0014.2-10.458C285.938 348.256 370.02 426.7 460.374 426.7c4.863 0 9.754-.228 14.647-.7a23.864 23.864 0 0021.548-23.529c.445-34.301-4.676-118.549-61.698-160.081zM328.148 36.34a7.586 7.586 0 016.511-3.521 8.784 8.784 0 012.089.251 7.728 7.728 0 015.966 6.833c2.961 27.837 2.22 68.38-18.126 103.444-21.58 37.19-60.8 60.775-116.719 70.247zM80.831 211.526a68 68 0 0111.39-14.742c4.5 3.241 5.583 13.133-.1 22.979A26.554 26.554 0 0180.765 230.7c-1.724.784-4.778 1.816-7.589.992a66.379 66.379 0 017.655-20.166zm29.1 57.155c-9.415 4.282-18.429 4.43-25.384.416s-11.05-11.832-12.154-21.3a24.818 24.818 0 003 .182 29.076 29.076 0 0012-2.717 42.247 42.247 0 0018.59-17.5c8.472-14.674 7.891-31.017-.572-40.539.582-.3 1.166-.58 1.755-.848a34.161 34.161 0 0114.051-3.323 22.42 22.42 0 0111.331 2.907c15.022 8.674 16.723 35.037 3.713 57.569-6.661 11.521-16.008 20.454-26.334 25.153zM240 305.907V296a8 8 0 00-16 0v19.313a63.285 63.285 0 01-30.863 4.3l6.018-12.038a8 8 0 00-14.31-7.156l-7.672 15.344a64.525 64.525 0 01-23.373-15.542l4.988-7.981a8 8 0 00-13.568-8.48l-1.582 2.53a63.231 63.231 0 01-6.39-17.773 84.445 84.445 0 0012.869-16.991c8.305-14.385 12.1-30.339 10.687-44.922-.035-.362-.088-.712-.129-1.069A63.875 63.875 0 01200 192c1.043 0 2.084.042 3.123.092l-18.6 27.416a8 8 0 007.5 12.443q33.245-3.693 60.124-13.045a63.92 63.92 0 01-12.146 87zm24.854-3.151A79.542 79.542 0 00280 256c0-2.595-.138-5.177-.388-7.742a293.452 293.452 0 0150.882-11.718l-53.551 78.543a455.063 455.063 0 01-12.089-12.327zm23.833 23.505l62.287-91.356q25.566-.675 46.281 6.116l-76.532 112.254c-12.038-9.233-22.843-18.544-32.036-27.014zm52.387 41.649q-3.789-2.54-7.461-5.137l78.735-115.486a98.4 98.4 0 0113.1 8.036 102.561 102.561 0 0119.188 18.6L369.043 384.8q-13.798-7.4-27.969-16.89zm139.5 34.352a7.886 7.886 0 01-7.091 7.805 144.777 144.777 0 01-35.229-1.027l38.626-57.929a282.814 282.814 0 013.69 51.151zm-8.5-72.78l-50.772 76.145a216.467 216.467 0 01-37.808-13.61l70.956-104.082a164.389 164.389 0 0117.616 41.547z" />
    </svg>
  );
}

const MemoBeeIcon = React.memo(BeeIcon);
export default MemoBeeIcon;