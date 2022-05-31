import React, { useState } from "react";
import style from "./SideBar.module.css";
const SideBar = ({ fn }) => {
  const green = "#6CD6D6";
  const white = "#FFFFFF";
  const [active, setActive] = useState(0);
  const [svgColor, setSvgColor] = useState(green);
  return (
    <div className={style.container}>
      <div className={style.wrap}>
        <div className={style.SideBar}>
          <div
            className={style.block}
            onClick={() => {
              setActive(0);
              fn(0);
            }}
          >
            <div className={active == 0 ? style.active : style.pair}>
              <svg
                width="1.58203vw"
                height="1.875vw"
                viewBox="0 0 22 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={active == 0 ? white : green}
                  d="M1.83333 27C1.83333 27 0 27 0 24.75C0 22.5 1.83333 15.75 11 15.75C20.1667 15.75 22 22.5 22 24.75C22 27 20.1667 27 20.1667 27H1.83333ZM11 13.5C12.4587 13.5 13.8576 12.7888 14.8891 11.523C15.9205 10.2571 16.5 8.54021 16.5 6.75C16.5 4.95979 15.9205 3.2429 14.8891 1.97703C13.8576 0.711159 12.4587 0 11 0C9.54131 0 8.14236 0.711159 7.11091 1.97703C6.07946 3.2429 5.5 4.95979 5.5 6.75C5.5 8.54021 6.07946 10.2571 7.11091 11.523C8.14236 12.7888 9.54131 13.5 11 13.5Z"
                />
              </svg>

              <div className={style.choice}>Edit Profile</div>
            </div>
            <div className={active == 0 ? style.index : style.hidden}></div>
          </div>

          <div
            className={style.block}
            onClick={() => {
              setActive(1);
              fn(1);
            }}
          >
            <div className={active == 1 ? style.active : style.pair}>
              <svg
                width="1.58203vw"
                height="1.875vw"
                viewBox="0 0 27 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke={active == 1 ? white : green}
                  strokeWidth="0.117187vw"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.8214 1V5.28571L9.03571 6.35714L6.35714 3.14286L2.78571 7.42857L5.46429 10.6429L4.57143 12.7857H1V19.2143H4.57143L5.46429 21.3571L2.78571 24.5714L6.35714 28.8571L9.03571 25.6429L10.8214 26.7143V31H16.1786V26.7143L17.9643 25.6429L20.6429 28.8571L24.2143 24.5714L21.5357 21.3571L22.4286 19.2143H26V12.7857H22.4286L21.5357 10.6429L24.2143 7.42857L20.6429 3.14286L17.9643 6.35714L16.1786 5.28571V1H10.8214Z"
                />
                <path
                  stroke={active == 1 ? white : green}
                  strokeWidth="0.117187vw"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5001 20.2857C15.4726 20.2857 17.0716 18.3669 17.0716 16C17.0716 13.6331 15.4726 11.7143 13.5001 11.7143C11.5277 11.7143 9.92871 13.6331 9.92871 16C9.92871 18.3669 11.5277 20.2857 13.5001 20.2857Z"
                />
              </svg>
              <div className={style.choice}>Edit My Account</div>
            </div>
            <div className={active === 1 ? style.index : style.hidden}></div>
          </div>

          <div
            className={style.block}
            onClick={() => {
              setActive(2);
              fn(2);
            }}
          >
            <div className={active == 2 ? style.active : style.pair}>
              <svg
                width="1.46484vw"
                height="1.75781vw"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={active == 2 ? white : green}
                  d="M6.25 21.6666C6.25 22.5507 5.92076 23.3985 5.33471 24.0237C4.74866 24.6488 3.9538 25 3.125 25C2.2962 25 1.50134 24.6488 0.915291 24.0237C0.32924 23.3985 0 22.5507 0 21.6666C0 20.7826 0.32924 19.9347 0.915291 19.3096C1.50134 18.6845 2.2962 18.3333 3.125 18.3333C3.9538 18.3333 4.74866 18.6845 5.33471 19.3096C5.92076 19.9347 6.25 20.7826 6.25 21.6666Z"
                />
                <path
                  fill={active == 2 ? white : green}
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.5 13.3333C12.0891 13.3333 11.7188 13.6633 11.7188 14.1017V29.1667C11.7188 29.3877 11.8011 29.5996 11.9476 29.7559C12.0941 29.9122 12.2928 30 12.5 30C12.7072 30 12.9059 29.9122 13.0524 29.7559C13.1989 29.5996 13.2812 29.3877 13.2812 29.1667V14.1017C13.2812 13.6633 12.9109 13.3333 12.5 13.3333ZM11.7188 7.5C11.7188 7.96 12.0891 8.33333 12.5203 8.33333C12.9523 8.33333 13.2812 7.96 13.2812 7.5V0.833333C13.2812 0.61232 13.1989 0.400358 13.0524 0.244078C12.9059 0.0877975 12.7072 0 12.5 0C12.2928 0 12.0941 0.0877975 11.9476 0.244078C11.8011 0.400358 11.7188 0.61232 11.7188 0.833333V7.5ZM21.875 22.5C21.4641 22.5 21.0938 22.83 21.0938 23.2683V29.1667C21.0938 29.3877 21.1761 29.5996 21.3226 29.7559C21.4691 29.9122 21.6678 30 21.875 30C22.0822 30 22.2809 29.9122 22.4274 29.7559C22.5739 29.5996 22.6562 29.3877 22.6562 29.1667V23.2683C22.6562 22.83 22.2859 22.5 21.875 22.5ZM21.0938 16.6667C21.0938 17.1267 21.4641 17.5 21.8953 17.5C22.3273 17.5 22.6562 17.1267 22.6562 16.6667V0.833333C22.6562 0.61232 22.5739 0.400358 22.4274 0.244078C22.2809 0.0877975 22.0822 0 21.875 0C21.6678 0 21.4691 0.0877975 21.3226 0.244078C21.1761 0.400358 21.0938 0.61232 21.0938 0.833333V16.6667ZM3.125 26.6667C2.71406 26.6667 2.34375 26.9967 2.34375 27.435V29.1667C2.34375 29.3877 2.42606 29.5996 2.57257 29.7559C2.71909 29.9122 2.9178 30 3.125 30C3.3322 30 3.53091 29.9122 3.67743 29.7559C3.82394 29.5996 3.90625 29.3877 3.90625 29.1667V27.435C3.90625 26.9967 3.53594 26.6667 3.125 26.6667ZM2.34375 20.8333C2.34375 21.2933 2.71406 21.6667 3.14531 21.6667C3.57734 21.6667 3.90625 21.2933 3.90625 20.8333V0.833333C3.90625 0.61232 3.82394 0.400358 3.67743 0.244078C3.53091 0.0877975 3.3322 0 3.125 0C2.9178 0 2.71909 0.0877975 2.57257 0.244078C2.42606 0.400358 2.34375 0.61232 2.34375 0.833333V20.8333Z"
                />
                <path
                  fill={active == 2 ? white : green}
                  d="M15.625 8.33333C15.625 9.21739 15.2958 10.0652 14.7097 10.6904C14.1237 11.3155 13.3288 11.6667 12.5 11.6667C11.6712 11.6667 10.8763 11.3155 10.2903 10.6904C9.70424 10.0652 9.375 9.21739 9.375 8.33333C9.375 7.44928 9.70424 6.60143 10.2903 5.97631C10.8763 5.35119 11.6712 5 12.5 5C13.3288 5 14.1237 5.35119 14.7097 5.97631C15.2958 6.60143 15.625 7.44928 15.625 8.33333ZM25 17.5C25 18.3841 24.6708 19.2319 24.0847 19.857C23.4987 20.4821 22.7038 20.8333 21.875 20.8333C21.0462 20.8333 20.2513 20.4821 19.6653 19.857C19.0792 19.2319 18.75 18.3841 18.75 17.5C18.75 16.6159 19.0792 15.7681 19.6653 15.143C20.2513 14.5179 21.0462 14.1667 21.875 14.1667C22.7038 14.1667 23.4987 14.5179 24.0847 15.143C24.6708 15.7681 25 16.6159 25 17.5Z"
                />
              </svg>
              <div className={style.choice}>My Preferences</div>
            </div>
            <div className={active == 2 ? style.index : style.hidden}></div>
          </div>

          <div
            className={style.block}
            onClick={() => {
              setActive(3);
              fn(3);
            }}
          >
            <div className={active == 3 ? style.active : style.pair}>
              <svg
                width="1.46484vw"
                height="1.75781vw"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.8526 0.9375H22.7538V1.3575C21.2241 1.76812 21.0041 3.47203 20.9178 4.12312C20.8768 4.43109 20.7936 5.03344 20.6905 5.77125H1.55767C0.800634 5.77125 0.715869 6.62016 0.814697 7.08984L3.05923 18.9806C3.15767 19.4503 3.57212 19.8337 3.97837 19.8337H20.7534C21.1573 19.8337 21.4866 20.228 21.4866 20.7127C21.4866 21.1973 21.1573 21.5916 20.7534 21.5916H2.44321C2.24896 21.5916 2.06267 21.6842 1.92531 21.849C1.78796 22.0138 1.71079 22.2374 1.71079 22.4705C1.71079 22.7036 1.78796 22.9271 1.92531 23.0919C2.06267 23.2568 2.24896 23.3494 2.44321 23.3494H3.39243C2.93411 23.653 2.55204 24.0986 2.28601 24.6397C2.01999 25.1808 1.87976 25.7975 1.87993 26.4258H2.61235C2.61235 27.8813 3.59673 29.0625 4.80962 29.0625C6.02251 29.0625 7.00688 27.8813 7.00688 26.4258H7.73931C7.7394 25.7975 7.59909 25.1807 7.333 24.6396C7.06691 24.0985 6.68478 23.653 6.22641 23.3494H16.5756C16.1173 23.653 15.7351 24.0985 15.469 24.6396C15.203 25.1807 15.0627 25.7975 15.0627 26.4258H15.7952C15.806 27.1166 16.0423 27.7747 16.4533 28.2587C16.8642 28.7426 17.417 29.0137 17.9928 29.0137C18.5686 29.0137 19.1214 28.7426 19.5324 28.2587C19.9433 27.7747 20.1796 27.1166 20.1905 26.4258H20.9229C20.9229 25.7976 20.7827 25.1808 20.5167 24.6398C20.2506 24.0987 19.8686 23.6531 19.4104 23.3494H20.7541C21.3368 23.349 21.8955 23.0711 22.3075 22.5767C22.7195 22.0823 22.9511 21.4118 22.9514 20.7127C22.9514 20.3663 22.8945 20.0234 22.784 19.7035C22.6735 19.3835 22.5116 19.0929 22.3075 18.848C22.1034 18.6032 21.8611 18.409 21.5944 18.2765C21.3278 18.144 21.042 18.0759 20.7534 18.0759H20.4811L21.4178 11.0869C21.6788 9.24094 22.2413 5.25328 22.3733 4.26141C22.4397 3.76031 22.5041 3.40828 22.7538 3.21094V3.57375H23.8526C23.9495 3.57338 24.0424 3.52705 24.1109 3.44486C24.1795 3.36267 24.2182 3.25129 24.2186 3.135V1.37719C24.2184 1.26073 24.1798 1.14911 24.1112 1.06672C24.0426 0.98433 23.9496 0.937871 23.8526 0.9375ZM4.80962 27.7444C4.51829 27.744 4.23897 27.605 4.03297 27.3578C3.82697 27.1106 3.7111 26.7754 3.71079 26.4258H5.90806C5.90775 26.7753 5.79193 27.1104 5.58601 27.3576C5.38009 27.6048 5.10088 27.7439 4.80962 27.7444ZM17.9932 27.7444C17.7018 27.7441 17.4224 27.6051 17.2163 27.3579C17.0102 27.1107 16.8943 26.7755 16.894 26.4258H19.092C19.0915 26.7753 18.9756 27.1103 18.7696 27.3575C18.5637 27.6046 18.2845 27.7438 17.9932 27.7444ZM17.092 7.96594C17.1049 7.8468 17.153 7.73718 17.2276 7.65701C17.3021 7.57683 17.3982 7.53143 17.4983 7.52906H19.8174C20.019 7.52906 20.1592 7.72406 20.1276 7.96359L19.8979 9.73125C19.8674 9.97031 19.6764 10.1658 19.4745 10.1658H17.2624C17.2158 10.1673 17.1695 10.1566 17.1266 10.1346C17.0838 10.1125 17.0455 10.0796 17.0143 10.0381C16.983 9.9966 16.9597 9.94747 16.9458 9.89409C16.9319 9.84071 16.9278 9.78436 16.9338 9.72891L17.092 7.96594ZM16.6979 12.3605C16.711 12.2415 16.7592 12.132 16.8337 12.0519C16.9082 11.9717 17.0041 11.9262 17.1041 11.9236H19.2459C19.4479 11.9236 19.5877 12.1186 19.5573 12.3581L19.3842 13.6866C19.3534 13.9256 19.1627 14.1211 18.9608 14.1211H16.9073C16.8607 14.1224 16.8145 14.1117 16.7717 14.0896C16.729 14.0675 16.6907 14.0346 16.6595 13.9931C16.6283 13.9516 16.6049 13.9025 16.591 13.8492C16.5771 13.7959 16.5729 13.7396 16.5788 13.6842L16.6979 12.3605ZM2.68188 9.73922L2.31079 7.95563C2.26235 7.72031 2.38813 7.52906 2.59009 7.52906H5.34751C5.54985 7.52906 5.73227 7.72547 5.75376 7.96594L5.91157 9.72937C5.91743 9.78476 5.91326 9.84101 5.89934 9.89428C5.88543 9.94755 5.86211 9.9966 5.83096 10.0381C5.79981 10.0795 5.76158 10.1125 5.71886 10.1346C5.67615 10.1567 5.62996 10.1675 5.58345 10.1663H3.13774C2.93618 10.1663 2.73071 9.97359 2.68188 9.73922ZM3.95962 14.1211C3.75806 14.1211 3.55259 13.9289 3.50415 13.6945L3.22446 12.3506C3.17563 12.1153 3.30063 11.9241 3.50259 11.9241H5.74048C5.94243 11.9241 6.12524 12.1205 6.14673 12.3609L6.26548 13.6847C6.2714 13.7401 6.26728 13.7964 6.25339 13.8497C6.2395 13.903 6.21618 13.9521 6.18502 13.9935C6.15386 14.035 6.1156 14.068 6.07285 14.0901C6.0301 14.1121 5.98388 14.1229 5.93735 14.1216H3.95962V14.1211ZM6.29126 18.0764H4.78149C4.57876 18.0764 4.37446 17.8842 4.32563 17.6498L4.04595 16.3059C3.99751 16.0706 4.12251 15.8794 4.32485 15.8794H6.09438C6.29634 15.8794 6.47915 16.0758 6.50141 16.3162L6.61938 17.64C6.62531 17.6954 6.62119 17.7516 6.6073 17.8049C6.59341 17.8582 6.57009 17.9073 6.53892 17.9487C6.50775 17.9902 6.46948 18.023 6.42673 18.0451C6.38398 18.0671 6.33777 18.0778 6.29126 18.0764ZM10.7803 17.6367C10.7799 17.7533 10.7411 17.865 10.6723 17.9474C10.6035 18.0298 10.5103 18.0762 10.4131 18.0764H8.50259C8.40256 18.0739 8.3066 18.0285 8.23212 17.9483C8.15765 17.8681 8.10961 17.7586 8.09673 17.6395L7.97798 16.3158C7.97192 16.2604 7.97594 16.2041 7.98976 16.1507C8.00357 16.0974 8.02685 16.0483 8.058 16.0068C8.08914 15.9652 8.12741 15.9323 8.17017 15.9102C8.21294 15.8882 8.25918 15.8775 8.30571 15.8789H10.4131C10.5104 15.8789 10.6037 15.9252 10.6725 16.0076C10.7413 16.0901 10.7801 16.2019 10.7803 16.3186V17.6367ZM10.7803 13.6819C10.7799 13.7985 10.7411 13.9102 10.6723 13.9926C10.6035 14.0749 10.5103 14.1213 10.4131 14.1216H8.14829C7.94673 14.1216 7.7647 13.9252 7.74204 13.6847L7.62407 12.3609C7.61809 12.3056 7.62215 12.2493 7.63599 12.196C7.64983 12.1427 7.67311 12.0936 7.70424 12.0521C7.73538 12.0106 7.77362 11.9777 7.81635 11.9556C7.85908 11.9335 7.90529 11.9227 7.95181 11.9241H10.4131C10.5104 11.9241 10.6037 11.9704 10.6725 12.0528C10.7413 12.1352 10.7801 12.2471 10.7803 12.3637V13.6819ZM10.7803 9.72656C10.7799 9.84318 10.7411 9.95487 10.6723 10.0373C10.6035 10.1196 10.5103 10.166 10.4131 10.1663H7.79517C7.69507 10.1639 7.59901 10.1185 7.52446 10.0383C7.4499 9.95813 7.40181 9.84851 7.38892 9.72937L7.2311 7.96594C7.22518 7.91054 7.2293 7.85426 7.24319 7.80095C7.25708 7.74764 7.2804 7.69856 7.31156 7.65708C7.34272 7.61559 7.38098 7.58267 7.42373 7.56057C7.46648 7.53848 7.5127 7.52773 7.55923 7.52906H10.4135C10.5108 7.52906 10.6041 7.57536 10.6729 7.65779C10.7417 7.74022 10.7805 7.85205 10.7807 7.96875V9.72656H10.7803ZM14.7487 17.6395C14.7357 17.7586 14.6876 17.8682 14.6131 17.9484C14.5385 18.0285 14.4425 18.0739 14.3424 18.0764H12.6159C12.5187 18.0762 12.4256 18.0298 12.3569 17.9474C12.2881 17.865 12.2494 17.7533 12.2491 17.6367V16.3181C12.2493 16.2015 12.288 16.0897 12.3568 16.0073C12.4255 15.9249 12.5187 15.8786 12.6159 15.8784H14.5393C14.7409 15.8784 14.8893 16.0748 14.8674 16.3153L14.7487 17.6395ZM15.1026 13.6842C15.0896 13.8033 15.0415 13.9129 14.967 13.993C14.8924 14.0732 14.7964 14.1186 14.6963 14.1211H12.6159C12.5187 14.1208 12.4256 14.0745 12.3569 13.9921C12.2881 13.9097 12.2494 13.798 12.2491 13.6814V12.3628C12.2493 12.2462 12.288 12.1344 12.3568 12.052C12.4255 11.9696 12.5187 11.9232 12.6159 11.9231H14.8932C15.0952 11.9231 15.2432 12.1195 15.2209 12.36L15.1026 13.6842ZM15.4565 9.72937C15.4435 9.84847 15.3954 9.95804 15.3209 10.0382C15.2463 10.1184 15.1503 10.1638 15.0502 10.1663H12.6159C12.5187 10.166 12.4256 10.1196 12.3569 10.0372C12.2881 9.95483 12.2494 9.84314 12.2491 9.72656V7.96875C12.2493 7.85213 12.288 7.74037 12.3568 7.65795C12.4255 7.57554 12.5187 7.52919 12.6159 7.52906H15.2866C15.4885 7.52906 15.6366 7.72547 15.6151 7.96594L15.4565 9.72937ZM18.2815 18.0764V18.0731L18.2784 18.0764H16.5534C16.542 18.0764 16.5323 18.0698 16.5209 18.068C16.519 18.052 16.519 18.0361 16.5166 18.0192L16.4995 18.0623C16.5042 18.0639 16.5091 18.0651 16.5139 18.0661C16.3338 18.0413 16.2049 17.8627 16.2256 17.6395L16.3436 16.3158C16.3567 16.1968 16.4049 16.0873 16.4794 16.0072C16.5539 15.9271 16.6498 15.8816 16.7499 15.8789H18.7327C18.9346 15.8789 19.0737 16.0739 19.0432 16.3134L18.8702 17.6419C18.8401 17.8809 18.6495 18.0764 18.4475 18.0764H18.2815Z"
                  fill={active == 3 ? white : green}
                />
              </svg>
              <div className={style.choice}>Cart</div>
            </div>
            <div className={active == 3 ? style.index : style.hidden}></div>
          </div>
          <div
            className={style.block}
            onClick={() => {
              setActive(5);
              fn(5);
            }}
          >
            <div className={active == 5 ? style.active : style.pair}>
              <svg
                width="1.75781vw"
                height="1.875vw"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={active == 5 ? white : green}
                  d="M19 21H13C12.2044 21 11.4413 21.3161 10.8787 21.8787C10.3161 22.4413 10 23.2044 10 24V26H12V24C12 23.7348 12.1054 23.4804 12.2929 23.2929C12.4804 23.1054 12.7348 23 13 23H19C19.2652 23 19.5196 23.1054 19.7071 23.2929C19.8946 23.4804 20 23.7348 20 24V26H22V24C22 23.2044 21.6839 22.4413 21.1213 21.8787C20.5587 21.3161 19.7956 21 19 21ZM16 20C16.7911 20 17.5645 19.7654 18.2223 19.3259C18.8801 18.8864 19.3928 18.2616 19.6955 17.5307C19.9983 16.7998 20.0775 15.9956 19.9231 15.2196C19.7688 14.4437 19.3878 13.731 18.8284 13.1716C18.269 12.6122 17.5563 12.2312 16.7804 12.0769C16.0044 11.9225 15.2002 12.0017 14.4693 12.3045C13.7384 12.6072 13.1136 13.1199 12.6741 13.7777C12.2346 14.4355 12 15.2089 12 16C12 17.0609 12.4214 18.0783 13.1716 18.8284C13.9217 19.5786 14.9391 20 16 20ZM16 14C16.3956 14 16.7822 14.1173 17.1111 14.3371C17.44 14.5568 17.6964 14.8692 17.8478 15.2346C17.9991 15.6001 18.0387 16.0022 17.9616 16.3902C17.8844 16.7781 17.6939 17.1345 17.4142 17.4142C17.1345 17.6939 16.7781 17.8844 16.3902 17.9616C16.0022 18.0387 15.6001 17.9991 15.2346 17.8478C14.8692 17.6964 14.5568 17.44 14.3371 17.1111C14.1173 16.7822 14 16.3956 14 16C14 15.4696 14.2107 14.9609 14.5858 14.5858C14.9609 14.2107 15.4696 14 16 14Z"
                />
                <path
                  fill={active == 5 ? white : green}
                  d="M25 5H22V4C22 3.46957 21.7893 2.96086 21.4142 2.58579C21.0391 2.21071 20.5304 2 20 2H12C11.4696 2 10.9609 2.21071 10.5858 2.58579C10.2107 2.96086 10 3.46957 10 4V5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V28C5 28.5304 5.21071 29.0391 5.58579 29.4142C5.96086 29.7893 6.46957 30 7 30H25C25.5304 30 26.0391 29.7893 26.4142 29.4142C26.7893 29.0391 27 28.5304 27 28V7C27 6.46957 26.7893 5.96086 26.4142 5.58579C26.0391 5.21071 25.5304 5 25 5ZM12 4H20V8H12V4ZM25 28H7V7H10V10H22V7H25V28Z"
                />
              </svg>
              <div className={style.choice}>Orders</div>
            </div>
            <div className={active == 5 ? style.index : style.hidden}></div>
          </div>
          <div
            className={style.block}
            onClick={() => {
              setActive(4);
              fn(4);
            }}
          >
            <div className={active == 4 ? style.active : style.pair}>
              <svg
                width="1.46484vw"
                height="1.75781vw"
                viewBox="0 0 25 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_367_111)">
                  <path
                    d="M1.22156 3.45323V30.6345H15.4838C24.0966 30.6345 28.7841 25.9934 28.7841 17.0108C28.7841 7.78499 23.7019 3.45323 15.4838 3.45323H1.22156ZM15.4838 2.04657C28.1147 2.04657 30 11.4189 30 17.0108C30 26.7054 24.8438 32.0466 15.4838 32.0466H0V2.04657H15.4838ZM3.135 19.0046H7.69969V28.417H3.135V19.0046ZM8.25281 14.268C8.25281 14.6994 8.17941 15.1267 8.0368 15.5253C7.89418 15.9239 7.68515 16.2861 7.42164 16.5912C7.15812 16.8962 6.84528 17.1382 6.50098 17.3034C6.15668 17.4685 5.78767 17.5534 5.415 17.5534C5.04233 17.5534 4.67332 17.4685 4.32902 17.3034C3.98472 17.1382 3.67188 16.8962 3.40836 16.5912C3.14485 16.2861 2.93582 15.9239 2.7932 15.5253C2.65059 15.1267 2.57719 14.6994 2.57719 14.268C2.57719 9.88738 8.25187 9.88738 8.25187 14.268H8.25281ZM9.99469 12.7354V15.806H10.8094C11.3719 15.806 11.8941 15.6193 11.8941 14.2441C11.8941 12.9113 11.3128 12.7343 10.8094 12.7343L9.99469 12.7354ZM23.5603 11.2159H24.8775V15.806H26.8266C26.2894 7.47349 20.6306 5.67609 15.4838 5.67609H10.0003V11.2159H10.8103C12.2906 11.2159 13.2131 12.3794 13.2131 14.2452C13.2131 16.1783 12.3159 17.3266 10.8103 17.3266H10.0003V28.4236H15.4838C23.8472 28.4236 26.7572 23.9246 26.8603 17.3266H23.565V11.2105L23.5603 11.2159ZM19.8975 14.624H20.85L20.4103 12.895H20.3325L19.8975 14.624ZM17.8416 17.3309L19.4391 11.2148H21.3094L22.9003 17.3309H21.5344L21.2306 16.1446H19.5122L19.215 17.3309H17.8416ZM17.2125 15.806V17.3255H13.9603V11.2159H17.1103V12.7354H15.2738V13.4485H17.0062V14.9681H15.2738V15.806H17.2125Z"
                    fill={active == 4 ? white : green}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_367_111">
                    <rect
                      width="1.46484vw"
                      height="1.75781vw"
                      fill={active == 4 ? green : white}
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className={style.choice}>Deals</div>
            </div>
            <div className={active == 4 ? style.index : style.hidden}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
